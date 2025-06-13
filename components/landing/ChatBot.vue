<!-- components/landing/ChatBot.vue - Versão Simplificada com Memória de Sessão -->
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
      <!-- Header -->
      <div class="chat-header">
        <div>
          <h3 class="chat-title">Assistente AutoShield</h3>
          <p class="chat-status">{{ isTyping ? 'Digitando...' : 'Online' }}</p>
        </div>
        <button @click="toggleChat" class="close-button">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Mensagens -->
      <div class="messages-container" ref="messagesContainer">
        <div v-for="(message, index) in messages" :key="index" :class="['message', message.role]">
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
        />
        <button type="submit" :disabled="!newMessage.trim() || isTyping" class="send-button">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick, watch } from 'vue'

// Estados básicos
const isOpen = ref(false)
const newMessage = ref('')
const isTyping = ref(false)
const unreadCount = ref(0)
const messagesContainer = ref<HTMLElement>()

// ID de sessão para persistência
const sessionId = ref('')

// Mensagens
const messages = ref<Array<{
  role: 'user' | 'assistant',
  content: string,
  timestamp: Date
}>>([])

// Inicialização
onMounted(() => {
  // Recuperar ou criar ID de sessão
  sessionId.value = localStorage.getItem('chatSessionId') || Date.now().toString()
  localStorage.setItem('chatSessionId', sessionId.value)

  // Carregar histórico de mensagens
  const savedMessages = localStorage.getItem(`chat-${sessionId.value}`)
  if (savedMessages) {
    try {
      messages.value = JSON.parse(savedMessages).map((msg: any) => ({
        ...msg,
        timestamp: new Date(msg.timestamp)
      }))
    } catch (error) {
      console.error('Erro ao carregar mensagens:', error)
      initDefaultMessage()
    }
  } else {
    initDefaultMessage()
  }
})

// Mensagem inicial padrão
const initDefaultMessage = () => {
  messages.value = [{
    role: 'assistant',
    content: 'Olá! Sou o assistente da AutoShield. Como posso ajudá-lo?',
    timestamp: new Date()
  }]
  saveMessages()
}

// Salvar mensagens no localStorage
const saveMessages = () => {
  localStorage.setItem(`chat-${sessionId.value}`, JSON.stringify(messages.value))
}

// Enviar mensagem
const sendMessage = async () => {
  if (!newMessage.value.trim() || isTyping.value) return

  // Adicionar mensagem do usuário
  messages.value.push({
    role: 'user',
    content: newMessage.value,
    timestamp: new Date()
  })

  const userMessage = newMessage.value
  newMessage.value = ''
  isTyping.value = true
  saveMessages()

  // Rolar para o final
  await nextTick()
  scrollToBottom()

  try {
    // Chamar API
    const response = await $fetch('/api/chat', {
      method: 'POST',
      body: {
        message: userMessage,
        sessionId: sessionId.value,
        context: messages.value.slice(-10)
      }
    })

    // Adicionar resposta do assistente
    messages.value.push({
      role: 'assistant',
      content: response.reply,
      timestamp: new Date()
    })

    // Incrementar contador de não lidas se chat fechado
    if (!isOpen.value) {
      unreadCount.value++
    }
  } catch (error) {
    // Mensagem de erro
    messages.value.push({
      role: 'assistant',
      content: 'Desculpe, estou com dificuldades técnicas. Por favor, tente novamente mais tarde.',
      timestamp: new Date()
    })
  } finally {
    isTyping.value = false
    saveMessages()
    await nextTick()
    scrollToBottom()
  }
}

// Alternar visibilidade do chat
const toggleChat = () => {
  isOpen.value = !isOpen.value
  if (isOpen.value) {
    unreadCount.value = 0
    nextTick(() => {
      scrollToBottom()
    })
  }
}

// Formatar hora da mensagem
const formatTime = (timestamp: Date) => {
  return timestamp.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit'
  })
}

// Rolar para o final da conversa
const scrollToBottom = () => {
  if (messagesContainer.value) {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
  }
}

// Observar mudanças nas mensagens para salvar
watch(messages, () => {
  saveMessages()
}, { deep: true })
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

.close-button {
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
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

.message {
  max-width: 80%;
  padding: 10px 12px;
  border-radius: 12px;
  font-size: 14px;
  position: relative;
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
