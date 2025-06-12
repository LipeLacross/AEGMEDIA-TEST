<!-- components/base/Footer.vue -->
<template>
  <footer class="max-w-screen-xl px-8 mx-auto bg-gray-50">
    <div class="w-full border-t border-gray-200">
      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-0">
        <!-- Seção Logo -->
        <div class="p-6 lg:p-12 border-b md:border-b-0 md:border-r border-gray-200">
          <NuxtLink to="/" class="block mb-6">
            <NuxtImg
              src="/img/logo/autoshield.svg"
              width="120"
              height="40"
              alt="AutoShield Logo"
              class="h-10"
            />
          </NuxtLink>
          <p class="text-sm text-gray-600 mt-4">
            Proteção veicular completa e personalizada com tecnologia de ponta
          </p>
          <!-- Redes Sociais -->
          <div class="flex space-x-4 mt-4">
            <a href="#" class="text-gray-400 hover:text-primary-500 transition-colors">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
            <a href="#" class="text-gray-400 hover:text-primary-500 transition-colors">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
              </svg>
            </a>
            <a href="#" class="text-gray-400 hover:text-primary-500 transition-colors">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.163-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.748-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Links Rápidos -->
        <div class="p-6 lg:p-12 border-b md:border-b-0 lg:border-r border-gray-200">
          <h3 class="text-sm font-semibold text-gray-800 mb-4">Nossos Serviços</h3>
          <ul class="space-y-3">
            <li><a href="#" class="text-gray-600 hover:text-primary-500 transition-colors">Planos Empresariais</a></li>
            <li><a href="#" class="text-gray-600 hover:text-primary-500 transition-colors">Cobertura Completa</a></li>
            <li><a href="#" class="text-gray-600 hover:text-primary-500 transition-colors">Assistência 24h</a></li>
            <li><a href="#" class="text-gray-600 hover:text-primary-500 transition-colors">Rastreador Veicular</a></li>
          </ul>
        </div>

        <!-- Suporte -->
        <div class="p-6 lg:p-12 border-b md:border-b-0 border-gray-200">
          <h3 class="text-sm font-semibold text-gray-800 mb-4">Suporte</h3>
          <ul class="space-y-3">
            <li><a href="#" class="text-gray-600 hover:text-primary-500 transition-colors">Central de Atendimento</a></li>
            <li><a href="#" class="text-gray-600 hover:text-primary-500 transition-colors">Regulamento de Proteção</a></li>
            <li><a href="#" class="text-gray-600 hover:text-primary-500 transition-colors">Solicitar Sinistro</a></li>
            <li><a href="#" class="text-gray-600 hover:text-primary-500 transition-colors">Política de Privacidade</a></li>
          </ul>
        </div>

        <!-- Newsletter com Brevo -->
        <div class="p-6 lg:p-12 space-y-6">
          <div class="space-y-2">
            <h3 class="text-sm font-semibold text-gray-800">Atualizações AutoShield</h3>
            <p class="text-sm text-gray-600">Receba alertas, dicas e ofertas especiais</p>
          </div>

          <form @submit.prevent="subscribeNewsletter" class="space-y-3">
            <input
              v-model="email"
              type="email"
              placeholder="Seu melhor e-mail"
              class="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
              required
              :disabled="isSubscribing"
            />
            <button
              type="submit"
              :disabled="isSubscribing || !email"
              class="w-full bg-primary-500 hover:bg-primary-600 disabled:bg-gray-400 text-white px-4 py-3 rounded-lg font-medium transition-colors flex items-center justify-center"
            >
              <span v-if="isSubscribing">Cadastrando...</span>
              <span v-else>Quero Receber</span>
              <ArrowRightIcon v-if="!isSubscribing" class="w-4 h-4 ml-2" />
            </button>
          </form>

          <!-- Mensagem de Sucesso -->
          <div
            v-if="subscriptionSuccess"
            class="text-sm text-green-600 bg-green-50 p-3 rounded-lg"
          >
            ✅ E-mail cadastrado com sucesso!
          </div>

          <!-- Mensagem de Erro -->
          <div
            v-if="subscriptionError"
            class="text-sm text-red-600 bg-red-50 p-3 rounded-lg"
          >
            ❌ Erro ao cadastrar. Tente novamente.
          </div>
        </div>
      </div>
    </div>

    <!-- Copyright -->
    <div class="py-6 text-center text-sm text-gray-600 bg-white border-t border-gray-200">
      <div class="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
        <div>
          &copy; {{ new Date().getFullYear() }} AutoShield. Todos os direitos reservados.
        </div>
        <div class="flex space-x-4">
          <a href="#" class="hover:text-primary-500 transition-colors">Termos de Uso</a>
          <a href="#" class="hover:text-primary-500 transition-colors">Privacidade</a>
          <a href="#" class="hover:text-primary-500 transition-colors">Cookies</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const email = ref('')
const isSubscribing = ref(false)
const subscriptionSuccess = ref(false)
const subscriptionError = ref(false)

const subscribeNewsletter = async () => {
  if (!email.value) return

  isSubscribing.value = true
  subscriptionSuccess.value = false
  subscriptionError.value = false

  try {
    // Integração com Brevo (SendinBlue)
    const response = await $fetch('/api/newsletter', {
      method: 'POST',
      body: {
        email: email.value
      }
    })

    if (response.success) {
      subscriptionSuccess.value = true
      email.value = ''

      // Esconder mensagem após 5 segundos
      setTimeout(() => {
        subscriptionSuccess.value = false
      }, 5000)
    } else {
      subscriptionError.value = true
    }
  } catch (error) {
    console.error('Erro ao cadastrar newsletter:', error)
    subscriptionError.value = true
  } finally {
    isSubscribing.value = false

    // Esconder mensagem de erro após 5 segundos
    if (subscriptionError.value) {
      setTimeout(() => {
        subscriptionError.value = false
      }, 5000)
    }
  }
}
</script>
