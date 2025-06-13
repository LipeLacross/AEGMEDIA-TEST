<!-- components/landing/ChatBot.vue - Versão Otimizada com Gerenciamento de Memória -->
<template>
  <div class="chatbot-container">
    <!-- Botão do Chat -->
    <button
      v-if="!isOpen"
      @click="toggleChat"
      class="chat-button"
      aria-label="Abrir chat"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
      <span v-if="unreadCount > 0" class="unread-badge">{{ unreadCount }}</span>
    </button>

    <!-- Janela do Chat -->
    <div v-if="isOpen" class="chat-window">
      <!-- Header com Botão Limpar -->
      <div class="chat-header">
        <div>
          <h3 class="chat-title">Assistente AutoShield</h3>
          <p class="chat-status">{{ isTyping ? 'Digitando...' : 'Online' }}</p>
        </div>
        <div class="header-buttons">
          <!-- Botão Limpar Conversa -->
          <button @click="showClearConfirmation = true" class="clear-button" title="Limpar conversa">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
            </svg>
          </button>
          <!-- Botão Fechar -->
          <button @click="toggleChat" class="close-button">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Modal de Confirmação -->
      <div v-if="showClearConfirmation" class="confirmation-modal">
        <div class="modal-content">
          <h4>Limpar Conversa</h4>
          <p>Tem certeza que deseja limpar todo o histórico? Esta ação não pode ser desfeita.</p>
          <div class="modal-buttons">
            <button @click="showClearConfirmation = false" class="cancel-btn">Cancelar</button>
            <button @click="clearConversation" class="confirm-btn">Confirmar</button>
          </div>
        </div>
      </div>

      <!-- Mensagens -->
      <div class="messages-container" ref="messagesContainer">
        <!-- Indicador de mensagens antigas -->
        <div v-if="hasOlderMessages" class="older-messages-indicator">
          <button @click="loadOlderMessages" class="load-older-btn">
            Carregar mensagens anteriores ({{ olderMessagesCount }})
          </button>
        </div>

        <div v-for="(message, index) in displayMessages" :key="`${sessionId}-${index}`" :class="['message', message.role]">
          {{ message.content }}
          <span class="message-time">{{ formatTime(message.timestamp) }}</span>
        </div>

        <div v-if="isTyping" class="message assistant typing">
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
        </div>
      </div>

      <!-- Input -->
      <form @submit.prevent="sendMessage" class="chat-input-form">
        <input
          v-model="newMessage"
          type="text"
          placeholder="Digite sua mensagem..."
          :disabled="isTyping"
          class="chat-input"
          maxlength="500"
        />
        <button type="submit" :disabled="!newMessage.trim() || isTyping" class="send-button">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
        </button>
      </form>

      <!-- Indicador de uso de memória -->
      <div class="memory-indicator" v-if="memoryUsage > 50">
        <span class="memory-text">Memória: {{ memoryUsage }}%</span>
        <div class="memory-bar">
          <div class="memory-fill" :style="{ width: memoryUsage + '%' }"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick, watch, computed } from 'vue'

// Configurações de memória
const MAX_MESSAGES_DISPLAY = 50 // Máximo de mensagens exibidas
const MAX_MESSAGES_STORAGE = 100 // Máximo de mensagens armazenadas
const MAX_SESSIONS = 5 // Máximo de sessões mantidas
const STORAGE_KEY_PREFIX = 'autoshield-chat'

// Estados básicos
const isOpen = ref(false)
const newMessage = ref('')
const isTyping = ref(false)
const unreadCount = ref(0)
const messagesContainer = ref<HTMLElement>()
const showClearConfirmation = ref(false)

// Estados de memória
const sessionId = ref('')
const allMessages = ref<Array<{
  role: 'user' | 'assistant',
  content: string,
  timestamp: Date
}>>([])

const messageOffset = ref(0)

// Computed properties
const displayMessages = computed(() => {
  return allMessages.value.slice(-MAX_MESSAGES_DISPLAY)
})

const hasOlderMessages = computed(() => {
  return allMessages.value.length > MAX_MESSAGES_DISPLAY
})

const olderMessagesCount = computed(() => {
  return Math.max(0, allMessages.value.length - MAX_MESSAGES_DISPLAY)
})

const memoryUsage = computed(() => {
  try {
    const used = JSON.stringify(allMessages.value).length
    const maxEstimated = 1024 * 1024 // 1MB estimado
    return Math.min(100, Math.round((used / maxEstimated) * 100))
  } catch {
    return 0
  }
})

// Gerenciamento de localStorage otimizado
class ChatStorageManager {
  private static getStorageSize(): number {
    try {
      let total = 0
      for (let key in localStorage) {
        if (key.startsWith(STORAGE_KEY_PREFIX)) {
          total += localStorage[key].length
        }
      }
      return total
    } catch {
      return 0
    }
  }

  private static cleanupOldSessions(): void {
    try {
      const sessions = Object.keys(localStorage)
        .filter(key => key.startsWith(`${STORAGE_KEY_PREFIX}-session-`))
        .map(key => ({
          key,
          timestamp: parseInt(key.split('-').pop() || '0')
        }))
        .sort((a, b) => b.timestamp - a.timestamp)

      // Remove sessões antigas além do limite
      if (sessions.length > MAX_SESSIONS) {
        sessions.slice(MAX_SESSIONS).forEach(session => {
          localStorage.removeItem(session.key)
          localStorage.removeItem(`${STORAGE_KEY_PREFIX}-messages-${session.timestamp}`)
        })
      }
    } catch (error) {
      console.warn('Erro na limpeza de sessões:', error)
    }
  }

  static saveMessages(sessionId: string, messages: any[]): boolean {
    try {
      // Limita mensagens antes de salvar
      const limitedMessages = messages.slice(-MAX_MESSAGES_STORAGE)

      const data = JSON.stringify(limitedMessages)

      // Verifica se há espaço suficiente
      if (this.getStorageSize() + data.length > 4 * 1024 * 1024) { // 4MB limite
        this.cleanupOldSessions()
      }

      localStorage.setItem(`${STORAGE_KEY_PREFIX}-messages-${sessionId}`, data)
      localStorage.setItem(`${STORAGE_KEY_PREFIX}-session-${sessionId}`, Date.now().toString())

      return true
    } catch (error) {
      console.error('Erro ao salvar mensagens:', error)
      // Tenta limpeza e salva novamente
      this.cleanupOldSessions()
      try {
        localStorage.setItem(`${STORAGE_KEY_PREFIX}-messages-${sessionId}`, JSON.stringify(messages.slice(-20)))
        return true
      } catch {
        return false
      }
    }
  }

  static loadMessages(sessionId: string): any[] {
    try {
      const data = localStorage.getItem(`${STORAGE_KEY_PREFIX}-messages-${sessionId}`)
      if (data) {
        return JSON.parse(data).map((msg: any) => ({
          ...msg,
          timestamp: new Date(msg.timestamp)
        }))
      }
    } catch (error) {
      console.error('Erro ao carregar mensagens:', error)
    }
    return []
  }

  static clearSession(sessionId: string): void {
    localStorage.removeItem(`${STORAGE_KEY_PREFIX}-messages-${sessionId}`)
    localStorage.removeItem(`${STORAGE_KEY_PREFIX}-session-${sessionId}`)
  }

  static getSessionId(): string {
    const stored = localStorage.getItem(`${STORAGE_KEY_PREFIX}-current-session`)
    if (stored) return stored

    const newId = Date.now().toString()
    localStorage.setItem(`${STORAGE_KEY_PREFIX}-current-session`, newId)
    return newId
  }

  static createNewSession(): string {
    const newId = Date.now().toString()
    localStorage.setItem(`${STORAGE_KEY_PREFIX}-current-session`, newId)
    return newId
  }
}

// Funções principais
const initializeChat = () => {
  sessionId.value = ChatStorageManager.getSessionId()

  const savedMessages = ChatStorageManager.loadMessages(sessionId.value)
  if (savedMessages.length > 0) {
    allMessages.value = savedMessages
  } else {
    initDefaultMessage()
  }
}

const initDefaultMessage = () => {
  allMessages.value = [{
    role: 'assistant',
    content: 'Olá! Sou o assistente da AutoShield. Como posso ajudá-lo hoje?',
    timestamp: new Date()
  }]
  saveMessages()
}

const saveMessages = () => {
  ChatStorageManager.saveMessages(sessionId.value, allMessages.value)
}

const clearConversation = () => {
  showClearConfirmation.value = false

  // Limpa mensagens atuais
  allMessages.value = []

  // Cria nova sessão
  sessionId.value = ChatStorageManager.createNewSession()

  // Inicializa com mensagem padrão
  initDefaultMessage()

  // Reset estados
  newMessage.value = ''
  isTyping.value = false
  unreadCount.value = 0

  nextTick(() => {
    scrollToBottom()
  })
}

const loadOlderMessages = () => {
  // Esta funcionalidade pode ser expandida para carregar mensagens paginadas
  messageOffset.value += 20
  scrollToBottom()
}

const sendMessage = async () => {
  if (!newMessage.value.trim() || isTyping.value) return

  // Adicionar mensagem do usuário
  allMessages.value.push({
    role: 'user',
    content: newMessage.value.trim(),
    timestamp: new Date()
  })

  const userMessage = newMessage.value.trim()
  newMessage.value = ''
  isTyping.value = true

  // Salva imediatamente
  saveMessages()

  await nextTick()
  scrollToBottom()

  try {
    // Chamar API com contexto limitado
    const response = await $fetch('/api/chat', {
      method: 'POST',
      body: {
        message: userMessage,
        sessionId: sessionId.value,
        context: allMessages.value.slice(-10) // Limita contexto enviado
      }
    })

    // Adicionar resposta do assistente
    allMessages.value.push({
      role: 'assistant',
      content: response.reply || 'Desculpe, não consegui processar sua mensagem.',
      timestamp: new Date()
    })

    if (!isOpen.value) {
      unreadCount.value++
    }
  } catch (error) {
    console.error('Erro na API:', error)
    allMessages.value.push({
      role: 'assistant',
      content: 'Desculpe, estou com dificuldades técnicas. Tente novamente ou entre em contato pelo WhatsApp: (74) 98125-6120',
      timestamp: new Date()
    })
  } finally {
    isTyping.value = false
    saveMessages()
    await nextTick()
    scrollToBottom()
  }
}

const toggleChat = () => {
  isOpen.value = !isOpen.value
  if (isOpen.value) {
    unreadCount.value = 0
    nextTick(() => {
      scrollToBottom()
    })
  }
}

const formatTime = (timestamp: Date) => {
  return timestamp.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit'
  })
}

const scrollToBottom = () => {
  if (messagesContainer.value) {
    setTimeout(() => {
      if (messagesContainer.value) {
        messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
      }
    }, 100)
  }
}

// Lifecycle
onMounted(() => {
  initializeChat()
})
// Watcher otimizado - dispara apenas quando necessário
let saveTimeout: ReturnType<typeof setTimeout> | null = null
watch(allMessages, () => {
  if (saveTimeout) clearTimeout(saveTimeout)
  saveTimeout = setTimeout(() => {
    saveMessages()
  }, 1000) // Debounce de 1 segundo
}, { deep: false }) // Removido deep: true para melhor performance

</script>

<style scoped>
.chatbot-container {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  font-family: system-ui, -apple-system, sans-serif;
}

.chat-button {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, #10b981, #059669);
  color: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  position: relative;
  transition: transform 0.3s;
}

.chat-button:hover {
  transform: scale(1.1);
}

.unread-badge {
  position: absolute;
  top: -5px;
  right: -5px;
  background: #ef4444;
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.chat-window {
  position: absolute;
  bottom: 80px;
  right: 0;
  width: 320px;
  height: 450px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid #e5e7eb;
}

.chat-header {
  background: linear-gradient(135deg, #10b981, #059669);
  color: white;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-buttons {
  display: flex;
  gap: 8px;
  align-items: center;
}

.clear-button {
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  transition: background-color 0.2s;
}

.clear-button:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.close-button {
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
}

.chat-title {
  font-size: 16px;
  font-weight: 600;
  margin: 0;
}

.chat-status {
  font-size: 12px;
  margin: 0;
  opacity: 0.8;
}

.confirmation-modal {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 12px;
  margin: 20px;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

.modal-content h4 {
  margin: 0 0 10px 0;
  color: #1f2937;
}

.modal-content p {
  margin: 0 0 20px 0;
  color: #6b7280;
  font-size: 14px;
}

.modal-buttons {
  display: flex;
  gap: 10px;
  justify-content: center;
}

.cancel-btn, .confirm-btn {
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.2s;
}

.cancel-btn {
  background: #f3f4f6;
  color: #374151;
}

.cancel-btn:hover {
  background: #e5e7eb;
}

.confirm-btn {
  background: #ef4444;
  color: white;
}

.confirm-btn:hover {
  background: #dc2626;
}

.messages-container {
  flex: 1;
  overflow-y: auto;
  padding: 15px;
  background: #f9fafb;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.older-messages-indicator {
  text-align: center;
  margin-bottom: 10px;
}

.load-older-btn {
  background: #f3f4f6;
  border: 1px solid #d1d5db;
  padding: 8px 12px;
  border-radius: 20px;
  font-size: 12px;
  color: #6b7280;
  cursor: pointer;
  transition: all 0.2s;
}

.load-older-btn:hover {
  background: #e5e7eb;
}

.message {
  max-width: 80%;
  padding: 10px 12px;
  border-radius: 12px;
  font-size: 14px;
  position: relative;
  word-wrap: break-word;
}

.message.user {
  background: #10b981;
  color: white;
  align-self: flex-end;
  border-bottom-right-radius: 4px;
}

.message.assistant {
  background: white;
  color: #1f2937;
  align-self: flex-start;
  border-bottom-left-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.message-time {
  font-size: 10px;
  opacity: 0.7;
  position: absolute;
  bottom: -15px;
  right: 5px;
}

.message.user .message-time {
  color: #d1d5db;
}

.message.assistant .message-time {
  color: #9ca3af;
}

.message.typing {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 12px 15px;
}

.dot {
  width: 8px;
  height: 8px;
  background: #10b981;
  border-radius: 50%;
  animation: bounce 1.4s infinite;
}

.dot:nth-child(2) {
  animation-delay: 0.2s;
}

.dot:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes bounce {
  0%, 60%, 100% {
    transform: translateY(0);
  }
  30% {
    transform: translateY(-5px);
  }
}

.chat-input-form {
  display: flex;
  padding: 10px;
  border-top: 1px solid #e5e7eb;
  background: white;
}

.chat-input {
  flex: 1;
  border: 1px solid #d1d5db;
  border-radius: 20px;
  padding: 8px 15px;
  font-size: 14px;
  outline: none;
}

.chat-input:focus {
  border-color: #10b981;
  box-shadow: 0 0 0 2px rgba(16, 185, 129, 0.1);
}

.send-button {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #10b981;
  color: white;
  border: none;
  margin-left: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.send-button:disabled {
  background: #d1d5db;
  cursor: not-allowed;
}

.memory-indicator {
  padding: 8px 15px;
  background: #fef3c7;
  border-top: 1px solid #f59e0b;
  font-size: 12px;
}

.memory-text {
  color: #92400e;
  font-weight: 500;
}

.memory-bar {
  width: 100%;
  height: 4px;
  background: #fde68a;
  border-radius: 2px;
  margin-top: 4px;
  overflow: hidden;
}

.memory-fill {
  height: 100%;
  background: linear-gradient(90deg, #10b981, #f59e0b, #ef4444);
  border-radius: 2px;
  transition: width 0.3s ease;
}

/* Responsividade para mobile */
@media (max-width: 640px) {
  .chat-window {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    border-radius: 0;
  }
}
</style>
