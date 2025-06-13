<!-- components/landing/ChatBot.vue - Chatbot Espetacular com Memória Persistente -->
<template>
  <div class="chatbot-container">
    <!-- Notificação de Disponibilidade -->
    <transition name="notification">
      <div
        v-if="showNotification && !isOpen"
        class="notification-bubble"
        @click="toggleChat"
      >
        <div class="notification-content">
          <div class="notification-avatar">
            <div class="pulse-ring"></div>
            <svg class="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
              <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"/>
            </svg>
          </div>
          <div class="notification-text">
            <p class="font-semibold text-gray-800 text-xs">Assistente IA Online</p>
            <p class="text-gray-600 text-xs">Tire suas dúvidas agora!</p>
          </div>
          <button @click.stop="dismissNotification" class="notification-close">
            <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>
            </svg>
          </button>
        </div>
      </div>
    </transition>

    <!-- Botão Flutuante Melhorado -->
    <transition name="float-button">
      <button
        v-if="!isOpen"
        @click="toggleChat"
        class="chat-float-button"
        :class="{ 'has-unread': unreadCount > 0 }"
        aria-label="Abrir chat do assistente AutoShield"
      >
        <!-- Badge de mensagens não lidas -->
        <transition name="badge">
          <div v-if="unreadCount > 0" class="unread-badge">
            {{ unreadCount > 9 ? '9+' : unreadCount }}
          </div>
        </transition>

        <!-- Ícone principal -->
        <div class="button-icon">
          <svg class="chat-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </div>

        <!-- Efeito pulse -->
        <div class="pulse-effect"></div>
      </button>
    </transition>

    <!-- Janela do Chat Responsiva -->
    <transition name="chat-window" appear>
      <div
        v-if="isOpen"
        class="chat-window"
        :class="{ 'mobile-fullscreen': isMobile }"
      >
        <!-- Header Melhorado -->
        <div class="chat-header">
          <div class="header-left">
            <div class="status-indicator">
              <div class="status-dot"></div>
              <div class="status-pulse"></div>
            </div>
            <div class="header-info">
              <h3 class="assistant-name">Assistente AutoShield</h3>
              <p class="assistant-status">
                <span v-if="isTyping" class="typing-indicator">Digitando</span>
                <span v-else>Online • Resposta em segundos</span>
              </p>
            </div>
          </div>

          <div class="header-actions">
            <button @click="minimizeChat" class="header-button" v-if="!isMobile">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"/>
              </svg>
            </button>
            <button @click="toggleChat" class="header-button">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <!-- Área de Mensagens -->
        <div class="messages-container" ref="messagesContainer">
          <div class="messages-wrapper">
            <!-- Mensagem de Boas-vindas -->
            <div class="welcome-message" v-if="showWelcome">
              <div class="welcome-avatar">
                <svg class="w-8 h-8 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
              </div>
              <div class="welcome-content">
                <h4 class="welcome-title">Olá! 👋</h4>
                <p class="welcome-text">
                  Sou seu assistente de proteção veicular. Posso ajudar com:
                </p>
                <div class="quick-topics">
                  <button
                    v-for="topic in quickTopics"
                    :key="topic"
                    @click="sendQuickMessage(topic)"
                    class="topic-button"
                  >
                    {{ topic }}
                  </button>
                </div>
              </div>
            </div>

            <!-- Mensagens do Chat -->
            <div
              v-for="(message, index) in displayMessages"
              :key="index"
              class="message-wrapper"
              :class="message.role"
            >
              <transition name="message" appear>
                <div class="message-bubble" :class="message.role">
                  <div v-if="message.role === 'assistant'" class="message-avatar">
                    <svg class="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                    </svg>
                  </div>

                  <div class="message-content">
                    <p class="message-text">{{ message.content }}</p>
                    <div class="message-time">
                      {{ formatTime(message.timestamp) }}
                    </div>
                  </div>
                </div>
              </transition>
            </div>

            <!-- Indicador de Digitação -->
            <transition name="typing">
              <div v-if="isTyping" class="typing-wrapper">
                <div class="typing-bubble">
                  <div class="typing-avatar">
                    <svg class="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                    </svg>
                  </div>
                  <div class="typing-content">
                    <div class="typing-dots">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
              </div>
            </transition>
          </div>
        </div>

        <!-- Área de Input -->
        <div class="input-container">
          <form @submit.prevent="sendMessage" class="input-form">
            <div class="input-wrapper">
              <input
                ref="messageInput"
                v-model="newMessage"
                type="text"
                :placeholder="inputPlaceholder || 'Digite sua mensagem...'"
                class="message-input"
                :disabled="isTyping"
                :maxlength="500"
                @keydown.enter.prevent="sendMessage"
                @focus="onInputFocus"
                @blur="onInputBlur"
              />

              <div class="input-actions">
                <button
                  type="button"
                  class="action-button emoji-button"
                  @click="toggleEmojiPicker"
                  v-if="!isMobile"
                >
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z" clip-rule="evenodd"/>
                  </svg>
                </button>

                <button
                  type="submit"
                  :disabled="!newMessage.trim() || isTyping"
                  class="send-button"
                  :class="{ 'active': newMessage.trim() }"
                >
                  <transition name="send-icon" mode="out-in">
                    <svg v-if="!isTyping" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    <div v-else class="loading-spinner">
                      <div class="spinner"></div>
                    </div>
                  </transition>
                </button>
              </div>
            </div>

            <!-- Contador de caracteres -->
            <div class="character-count" v-if="newMessage.length > 400">
              {{ newMessage.length }}/500
            </div>
          </form>
        </div>

        <!-- Powered by -->
        <div class="powered-by">
          <span class="powered-text">Powered by</span>
          <span class="brand-name">AutoShield IA</span>
        </div>
      </div>
    </transition>

    <!-- Overlay para mobile -->
    <transition name="overlay">
      <div
        v-if="isOpen && isMobile"
        class="chat-overlay"
        @click="toggleChat"
      ></div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, nextTick, watch } from 'vue'

// Estados reativos
const isOpen = ref(false)
const newMessage = ref('')
const isTyping = ref(false)
const messagesContainer = ref<HTMLElement>()
const messageInput = ref<HTMLInputElement>()
const showNotification = ref(false)
const unreadCount = ref(0)
const isInputFocused = ref(false)

// Memória persistente - sessionId para identificar sessões únicas
const sessionId = ref<string>('')

// Responsividade
const windowWidth = ref(0)
const isMobile = computed(() => windowWidth.value < 768)

// Mensagens - inicializado vazio para carregar do localStorage
const messages = ref<Array<{
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}>>([])

// Computed para mostrar mensagens ou welcome
const displayMessages = computed(() => {
  return messages.value.filter(msg => msg.content !== 'INITIAL_MESSAGE')
})

const showWelcome = computed(() => {
  return displayMessages.value.length === 0
})

const quickTopics = [
  'Quanto custa?',
  'Como funciona?',
  'Coberturas disponíveis',
  'Fazer cotação'
]

// Placeholders dinâmicos
const placeholders = [
  'Digite sua dúvida sobre proteção veicular...',
  'Pergunte sobre nossos planos...',
  'Como posso ajudar você hoje?',
  'Tire suas dúvidas sobre cobertura...'
]

const inputPlaceholder = computed(() => {
  if (isTyping.value) return 'Aguarde a resposta...'
  return placeholders[Math.floor(Math.random() * placeholders.length)]
})

// Funções de memória persistente
const initializeSession = () => {
  // Recupera ou cria sessionId
  const savedSessionId = localStorage.getItem('chatSessionId')
  if (savedSessionId) {
    sessionId.value = savedSessionId

    // Recupera histórico da sessão
    const savedHistory = localStorage.getItem(`chatHistory-${savedSessionId}`)
    if (savedHistory) {
      try {
        const parsedHistory = JSON.parse(savedHistory)
        messages.value = parsedHistory.map((msg: any) => ({
          ...msg,
          timestamp: new Date(msg.timestamp)
        }))
      } catch (error) {
        console.error('Erro ao carregar histórico do chat:', error)
        initializeDefaultMessage()
      }
    } else {
      initializeDefaultMessage()
    }
  } else {
    // Nova sessão
    sessionId.value = Date.now().toString()
    localStorage.setItem('chatSessionId', sessionId.value)
    initializeDefaultMessage()
  }
}

const initializeDefaultMessage = () => {
  messages.value = [{
    role: 'assistant',
    content: 'Olá! Sou o assistente da AutoShield. Como posso ajudá-lo com proteção veicular?',
    timestamp: new Date()
  }]
  saveToLocalStorage()
}

const saveToLocalStorage = () => {
  if (sessionId.value) {
    localStorage.setItem(
      `chatHistory-${sessionId.value}`,
      JSON.stringify(messages.value)
    )
  }
}

// Funções principais
const toggleChat = () => {
  isOpen.value = !isOpen.value
  unreadCount.value = 0

  if (isOpen.value) {
    nextTick(() => {
      scrollToBottom()
      if (messageInput.value && !isMobile.value) {
        messageInput.value.focus()
      }
    })
  }
}

const minimizeChat = () => {
  toggleChat()
}

const dismissNotification = () => {
  showNotification.value = false
}

const sendMessage = async () => {
  if (!newMessage.value.trim() || isTyping.value) return

  const userMessage = newMessage.value.trim()
  const timestamp = new Date()

  // Adiciona mensagem do usuário
  messages.value.push({
    role: 'user',
    content: userMessage,
    timestamp
  })

  newMessage.value = ''
  isTyping.value = true

  // Salva estado imediatamente
  saveToLocalStorage()

  nextTick(() => {
    scrollToBottom()
  })

  try {
    const response = await $fetch('/api/chat', {
      method: 'POST',
      body: {
        message: userMessage,
        sessionId: sessionId.value,
        context: messages.value.slice(-10)
      }
    })

    await new Promise(resolve => setTimeout(resolve, 1000)) // Simular tempo de resposta

    // Adiciona resposta do assistente
    messages.value.push({
      role: 'assistant',
      content: response.reply,
      timestamp: new Date()
    })

    // Salva estado atualizado
    saveToLocalStorage()

    if (!isOpen.value) {
      unreadCount.value++
    }
  } catch (error) {
    console.error('Erro no chat:', error)
    messages.value.push({
      role: 'assistant',
      content: 'Desculpe, estou com dificuldades no momento. Tente novamente ou entre em contato pelo WhatsApp (74) 98125-6120.',
      timestamp: new Date()
    })
    saveToLocalStorage()
  } finally {
    isTyping.value = false
    nextTick(() => {
      scrollToBottom()
    })
  }
}

const sendQuickMessage = (topic: string) => {
  newMessage.value = topic
  sendMessage()
}

const scrollToBottom = () => {
  if (messagesContainer.value) {
    messagesContainer.value.scrollTo({
      top: messagesContainer.value.scrollHeight,
      behavior: 'smooth'
    })
  }
}

const formatTime = (timestamp: Date) => {
  return timestamp.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit'
  })
}

const onInputFocus = () => {
  isInputFocused.value = true
}

const onInputBlur = () => {
  isInputFocused.value = false
}

const toggleEmojiPicker = () => {
  // Implementar picker de emoji futuramente
}

// Gerenciamento de responsividade
const updateWindowSize = () => {
  windowWidth.value = window.innerWidth
}

// Lifecycle hooks
onMounted(() => {
  // Inicializar sessão e histórico
  initializeSession()

  updateWindowSize()
  window.addEventListener('resize', updateWindowSize)

  // Mostrar notificação após 5 segundos apenas se não houver histórico
  setTimeout(() => {
    if (!isOpen.value && displayMessages.value.length === 0) {
      showNotification.value = true
    }
  }, 5000)

  // Auto-dismiss notificação
  setTimeout(() => {
    showNotification.value = false
  }, 15000)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateWindowSize)
})

// Watch para scroll automático
watch(messages, () => {
  nextTick(() => {
    scrollToBottom()
  })
}, { deep: true })

// Watch para salvar automaticamente mudanças
watch(messages, () => {
  saveToLocalStorage()
}, { deep: true })
</script>

<style scoped>
/* Todos os estilos do paste 6 mantidos exatamente iguais */
/* Container principal */
.chatbot-container {
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  z-index: 9999;
  font-family: system-ui, -apple-system, sans-serif;
}

/* Notificação de disponibilidade */
.notification-bubble {
  position: absolute;
  bottom: 5rem;
  right: 0;
  background: white;
  border-radius: 1rem;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
  border: 1px solid #e5e7eb;
  padding: 0.75rem;
  max-width: 280px;
  cursor: pointer;
  transform-origin: bottom right;
}

.notification-content {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.notification-avatar {
  position: relative;
  width: 2.5rem;
  height: 2.5rem;
  background: linear-gradient(135deg, #10b981, #059669);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.pulse-ring {
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  border: 2px solid #10b981;
  border-radius: 50%;
  animation: pulse-ring 2s infinite;
  opacity: 0.3;
}

.notification-text {
  flex: 1;
  min-width: 0;
}

.notification-close {
  color: #6b7280;
  padding: 0.25rem;
  border-radius: 0.25rem;
  transition: all 0.2s;
}

.notification-close:hover {
  background: #f3f4f6;
  color: #374151;
}

/* Botão flutuante principal */
.chat-float-button {
  position: relative;
  width: 3.5rem;
  height: 3.5rem;
  background: linear-gradient(135deg, #10b981, #059669);
  border-radius: 50%;
  border: none;
  cursor: pointer;
  box-shadow: 0 8px 32px rgba(16, 185, 129, 0.3);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}

.chat-float-button:hover {
  transform: scale(1.1);
  box-shadow: 0 12px 40px rgba(16, 185, 129, 0.4);
}

.chat-float-button.has-unread {
  animation: gentle-bounce 2s infinite;
}

.button-icon {
  position: relative;
  z-index: 2;
  color: white;
  transition: transform 0.3s;
}

.chat-icon {
  width: 1.5rem;
  height: 1.5rem;
}

.chat-float-button:hover .button-icon {
  transform: rotate(10deg);
}

.pulse-effect {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: scale(0);
  opacity: 0;
}

.chat-float-button:active .pulse-effect {
  animation: pulse-click 0.6s ease-out;
}

.unread-badge {
  position: absolute;
  top: -0.25rem;
  right: -0.25rem;
  background: #ef4444;
  color: white;
  font-size: 0.625rem;
  font-weight: 700;
  padding: 0.125rem 0.375rem;
  border-radius: 0.75rem;
  min-width: 1.25rem;
  height: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(239, 68, 68, 0.5);
  z-index: 3;
}

/* Janela do chat */
.chat-window {
  position: absolute;
  bottom: 5rem;
  right: 0;
  width: 24rem;
  height: 32rem;
  background: white;
  border-radius: 1rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  border: 1px solid #e5e7eb;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transform-origin: bottom right;
}

/* Mobile fullscreen */
@media (max-width: 768px) {
  .chatbot-container {
    bottom: 0;
    right: 0;
    left: 0;
    top: 0;
  }

  .mobile-fullscreen {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100vh;
    border-radius: 0;
    box-shadow: none;
    border: none;
    z-index: 9999;
  }
}

.chat-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9998;
}

/* Header do chat */
.chat-header {
  background: linear-gradient(135deg, #10b981, #059669);
  color: white;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 1rem 1rem 0 0;
}

@media (max-width: 768px) {
  .chat-header {
    border-radius: 0;
    padding: 1rem;
  }
}

.header-left {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex: 1;
  min-width: 0;
}

.status-indicator {
  position: relative;
  width: 2.5rem;
  height: 2.5rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.status-dot {
  width: 0.5rem;
  height: 0.5rem;
  background: #22c55e;
  border-radius: 50%;
  position: relative;
  z-index: 2;
}

.status-pulse {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 0.5rem;
  height: 0.5rem;
  background: #22c55e;
  border-radius: 50%;
  animation: pulse-status 2s infinite;
}

.header-info {
  flex: 1;
  min-width: 0;
}

.assistant-name {
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
  color: white;
}

.assistant-status {
  font-size: 0.75rem;
  margin: 0;
  color: rgba(255, 255, 255, 0.8);
  margin-top: 0.125rem;
}

.header-actions {
  display: flex;
  gap: 0.5rem;
}

.header-button {
  width: 2rem;
  height: 2rem;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  border-radius: 0.5rem;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}

.header-button:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: scale(1.05);
}

/* Área de mensagens */
.messages-container {
  flex: 1;
  overflow-y: auto;
  background: #fafafa;
  position: relative;
}

.messages-wrapper {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-height: 100%;
}

/* Mensagem de boas-vindas */
.welcome-message {
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
}

.welcome-avatar {
  width: 2.5rem;
  height: 2.5rem;
  background: linear-gradient(135deg, #10b981, #059669);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: white;
}

.welcome-content {
  background: white;
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
  flex: 1;
}

.welcome-title {
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
  color: #1f2937;
}

.welcome-text {
  font-size: 0.875rem;
  color: #6b7280;
  margin: 0 0 0.75rem 0;
}

.quick-topics {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.topic-button {
  background: #f3f4f6;
  border: 1px solid #d1d5db;
  border-radius: 1rem;
  padding: 0.375rem 0.75rem;
  font-size: 0.75rem;
  color: #374151;
  cursor: pointer;
  transition: all 0.2s;
}

.topic-button:hover {
  background: #10b981;
  color: white;
  border-color: #10b981;
  transform: translateY(-1px);
}

/* Mensagens */
.message-wrapper {
  display: flex;
  gap: 0.5rem;
  align-items: flex-end;
}

.message-wrapper.user {
  flex-direction: row-reverse;
}

.message-bubble {
  max-width: 80%;
  display: flex;
  gap: 0.5rem;
  align-items: flex-end;
}

.message-bubble.user {
  flex-direction: row-reverse;
}

.message-avatar {
  width: 1.75rem;
  height: 1.75rem;
  background: linear-gradient(135deg, #10b981, #059669);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: white;
}

.message-content {
  background: white;
  border-radius: 1rem;
  padding: 0.75rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
  position: relative;
}

.message-bubble.user .message-content {
  background: linear-gradient(135deg, #10b981, #059669);
  color: white;
  border-color: #10b981;
}

.message-text {
  font-size: 0.875rem;
  line-height: 1.4;
  margin: 0;
  word-wrap: break-word;
}

.message-time {
  font-size: 0.625rem;
  opacity: 0.7;
  margin-top: 0.25rem;
  text-align: right;
}

.message-bubble.user .message-time {
  color: rgba(255, 255, 255, 0.8);
}

/* Indicador de digitação */
.typing-wrapper {
  display: flex;
  gap: 0.5rem;
  align-items: flex-end;
}

.typing-bubble {
  display: flex;
  gap: 0.5rem;
  align-items: flex-end;
}

.typing-avatar {
  width: 1.75rem;
  height: 1.75rem;
  background: linear-gradient(135deg, #10b981, #059669);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: white;
}

.typing-content {
  background: white;
  border-radius: 1rem;
  padding: 0.75rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
}

.typing-dots {
  display: flex;
  gap: 0.25rem;
  align-items: center;
}

.typing-dots span {
  width: 0.375rem;
  height: 0.375rem;
  background: #10b981;
  border-radius: 50%;
  animation: typing-dot 1.4s infinite;
}

.typing-dots span:nth-child(2) {
  animation-delay: 0.2s;
}

.typing-dots span:nth-child(3) {
  animation-delay: 0.4s;
}

/* Área de input */
.input-container {
  background: white;
  border-top: 1px solid #e5e7eb;
  padding: 1rem;
}

.input-form {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.input-wrapper {
  display: flex;
  gap: 0.5rem;
  align-items: flex-end;
  background: #f9fafb;
  border: 1px solid #d1d5db;
  border-radius: 1.5rem;
  padding: 0.5rem;
  transition: all 0.2s;
}

.input-wrapper:focus-within {
  border-color: #10b981;
  box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
}

.message-input {
  flex: 1;
  border: none;
  background: transparent;
  outline: none;
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  resize: none;
  min-height: 1.25rem;
  max-height: 6rem;
}

.message-input::placeholder {
  color: #9ca3af;
}

.input-actions {
  display: flex;
  gap: 0.25rem;
  align-items: flex-end;
}

.action-button {
  width: 2rem;
  height: 2rem;
  border: none;
  background: transparent;
  color: #6b7280;
  border-radius: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}

.action-button:hover {
  background: #e5e7eb;
  color: #374151;
}

.send-button {
  width: 2rem;
  height: 2rem;
  background: #e5e7eb;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  color: #6b7280;
}

.send-button.active {
  background: linear-gradient(135deg, #10b981, #059669);
  color: white;
  transform: scale(1.05);
}

.send-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.loading-spinner {
  display: flex;
  align-items: center;
  justify-content: center;
}

.spinner {
  width: 1rem;
  height: 1rem;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top: 2px solid white;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

.character-count {
  font-size: 0.625rem;
  color: #9ca3af;
  text-align: right;
  margin-top: 0.25rem;
}

/* Powered by */
.powered-by {
  background: #f9fafb;
  border-top: 1px solid #e5e7eb;
  padding: 0.5rem 1rem;
  text-align: center;
  font-size: 0.625rem;
  color: #6b7280;
}

.brand-name {
  font-weight: 600;
  color: #10b981;
}

/* Animações */
@keyframes pulse-ring {
  0% {
    transform: scale(0.8);
    opacity: 1;
  }
  100% {
    transform: scale(1.2);
    opacity: 0;
  }
}

@keyframes pulse-click {
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(1.5);
    opacity: 0;
  }
}

@keyframes gentle-bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
}

@keyframes pulse-status {
  0% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, -50%) scale(2);
    opacity: 0;
  }
}

@keyframes typing-dot {
  0%, 60%, 100% {
    transform: translateY(0);
    opacity: 0.4;
  }
  30% {
    transform: translateY(-8px);
    opacity: 1;
  }
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

/* Transições */
.notification-enter-active,
.notification-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.notification-enter-from {
  opacity: 0;
  transform: scale(0.8) translateY(20px);
}

.notification-leave-to {
  opacity: 0;
  transform: scale(0.9) translateY(-10px);
}

.float-button-enter-active,
.float-button-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.float-button-enter-from {
  opacity: 0;
  transform: scale(0) rotate(180deg);
}

.float-button-leave-to {
  opacity: 0;
  transform: scale(0.8) rotate(-90deg);
}

.chat-window-enter-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.chat-window-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.chat-window-enter-from {
  opacity: 0;
  transform: scale(0.8) translateY(20px);
}

.chat-window-leave-to {
  opacity: 0;
  transform: scale(0.9) translateY(10px);
}

.message-enter-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.message-enter-from {
  opacity: 0;
  transform: translateY(20px) scale(0.9);
}

.typing-enter-active,
.typing-leave-active {
  transition: all 0.2s ease;
}

.typing-enter-from,
.typing-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

.badge-enter-active,
.badge-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.badge-enter-from {
  opacity: 0;
  transform: scale(0) rotate(180deg);
}

.badge-leave-to {
  opacity: 0;
  transform: scale(1.2) rotate(-180deg);
}

.send-icon-enter-active,
.send-icon-leave-active {
  transition: all 0.2s ease;
}

.send-icon-enter-from,
.send-icon-leave-to {
  opacity: 0;
  transform: scale(0.5) rotate(90deg);
}

.overlay-enter-active,
.overlay-leave-active {
  transition: opacity 0.3s ease;
}

.overlay-enter-from,
.overlay-leave-to {
  opacity: 0;
}

/* Scroll personalizado */
.messages-container::-webkit-scrollbar {
  width: 4px;
}

.messages-container::-webkit-scrollbar-track {
  background: transparent;
}

.messages-container::-webkit-scrollbar-thumb {
  background: rgba(16, 185, 129, 0.3);
  border-radius: 2px;
}

.messages-container::-webkit-scrollbar-thumb:hover {
  background: rgba(16, 185, 129, 0.5);
}

/* Acessibilidade */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
</style>
