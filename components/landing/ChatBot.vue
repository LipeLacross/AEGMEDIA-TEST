<!-- components/landing/ChatBot.vue - Chatbot com IA para AutoShield -->
<template>
  <div class="fixed bottom-6 right-6 z-50">
    <!-- Botão Flutuante -->
    <button
      v-if="!isOpen"
      @click="toggleChat"
      class="bg-primary-500 hover:bg-primary-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    </button>

    <!-- Janela do Chat -->
    <div
      v-if="isOpen"
      class="bg-white rounded-lg shadow-2xl border border-gray-200 w-80 h-96 flex flex-col"
    >
      <!-- Header -->
      <div class="bg-primary-500 text-white p-4 rounded-t-lg flex justify-between items-center">
        <div class="flex items-center space-x-2">
          <div class="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          <span class="font-semibold">Assistente AutoShield</span>
        </div>
        <button @click="toggleChat" class="text-white hover:text-gray-200">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Mensagens -->
      <div class="flex-1 overflow-y-auto p-4 space-y-3" ref="messagesContainer">
        <div
          v-for="(message, index) in messages"
          :key="index"
          :class="[
            'max-w-xs p-3 rounded-lg text-sm',
            message.role === 'user'
              ? 'bg-primary-500 text-white ml-auto'
              : 'bg-gray-100 text-gray-800'
          ]"
        >
          {{ message.content }}
        </div>
        <div v-if="isTyping" class="bg-gray-100 text-gray-800 max-w-xs p-3 rounded-lg text-sm">
          <div class="flex space-x-1">
            <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
            <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.1s"></div>
            <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
          </div>
        </div>
      </div>

      <!-- Input -->
      <div class="p-4 border-t border-gray-200">
        <form @submit.prevent="sendMessage" class="flex space-x-2">
          <input
            v-model="newMessage"
            type="text"
            placeholder="Digite sua dúvida sobre proteção veicular..."
            class="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
            :disabled="isTyping"
          />
          <button
            type="submit"
            :disabled="!newMessage.trim() || isTyping"
            class="bg-primary-500 hover:bg-primary-600 disabled:bg-gray-300 text-white px-4 py-2 rounded-lg transition-colors"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const isOpen = ref(false)
const newMessage = ref('')
const isTyping = ref(false)
const messagesContainer = ref<HTMLElement>()

const messages = ref([
  {
    role: 'assistant',
    content: 'Olá! Sou o assistente da AutoShield. Como posso ajudá-lo com proteção veicular?'
  }
])

const toggleChat = () => {
  isOpen.value = !isOpen.value
  if (isOpen.value) {
    nextTick(() => {
      scrollToBottom()
    })
  }
}

const sendMessage = async () => {
  if (!newMessage.value.trim()) return

  const userMessage = newMessage.value
  messages.value.push({
    role: 'user',
    content: userMessage
  })

  newMessage.value = ''
  isTyping.value = true

  nextTick(() => {
    scrollToBottom()
  })

  try {
    const response = await $fetch('/api/chat', {
      method: 'POST',
      body: {
        message: userMessage,
        context: messages.value.slice(-10) // Últimas 10 mensagens para contexto
      }
    })

    messages.value.push({
      role: 'assistant',
      content: response.reply
    })
  } catch (error) {
    messages.value.push({
      role: 'assistant',
      content: 'Desculpe, estou com dificuldades no momento. Tente novamente ou entre em contato pelo WhatsApp (11) 9999-9999.'
    })
  } finally {
    isTyping.value = false
    nextTick(() => {
      scrollToBottom()
    })
  }
}

const scrollToBottom = () => {
  if (messagesContainer.value) {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
  }
}

// Inicializar chat com mensagem de boas-vindas
onMounted(() => {
  setTimeout(() => {
    if (!isOpen.value) {
      // Mostrar notificação de que o assistente está disponível
    }
  }, 5000)
})
</script>
