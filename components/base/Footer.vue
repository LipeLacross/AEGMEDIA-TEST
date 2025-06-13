<!-- components/base/Footer.vue - Versão Final Corrigida -->
<template>
  <footer class="relative bg-gradient-to-br from-white via-primary-50 to-blue-50 py-10 lg:py-14 overflow-hidden">
    <!-- Fundo animado sutil -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <div class="absolute -top-10 -left-10 w-24 h-24 bg-gradient-to-r from-primary-200 to-emerald-200 rounded-full blur-2xl opacity-20 animate-float"></div>
      <div class="absolute -bottom-10 -right-10 w-20 h-20 bg-gradient-to-r from-blue-200 to-primary-200 rounded-full blur-2xl opacity-10 animate-float animation-delay-2000"></div>
    </div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">

        <!-- Logo e Descrição Centralizada -->
        <div class="text-center md:text-left">
  <!-- Container do Logo Ampliado -->
    <div class="mb-2 flex justify-center">
    <div class="bg-white rounded-sm p-4 shadow-lg hover:shadow-md transition-shadow duration-300">
      <NuxtLink to="/" class="block">
        <img
          src="/img/autoshield.png"
          width="160"
          height="160"
          alt="AutoShield Logo"
          class="h-22 w-auto mx-auto"
          loading="lazy"
        />
      </NuxtLink>
    </div>
  </div>

  <!-- Texto Descritivo -->
  <p class="text-gray-600 mb-6 text-base leading-relaxed max-w-xl mx-auto">
    Proteção veicular inteligente com IA, rastreamento GPS avançado e assistência 24h em todo Brasil.<br>
    Tecnologia de ponta para sua tranquilidade.
  </p>
          <!-- Redes Sociais -->
          <div class="flex justify-center md:justify-start space-x-4">
            <a href="#" aria-label="Instagram" class="group bg-white rounded-full p-3 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110">
              <svg class="w-5 h-5 text-gray-400 group-hover:text-primary-500 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="#" aria-label="Facebook" class="group bg-white rounded-full p-3 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110">
              <svg class="w-5 h-5 text-gray-400 group-hover:text-primary-500 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Fale Conosco Expandido -->
        <div>
          <h3 class="font-bold text-gray-800 mb-4 text-lg">Fale Conosco</h3>
          <div class="space-y-3">
            <!-- WhatsApp Principal -->
            <a
              href="https://wa.me/5574981256120"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-3 p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors duration-300 group"
            >
              <div class="bg-green-500 rounded-full p-2 group-hover:scale-110 transition-transform">
                <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
                </svg>
              </div>
              <div>
                <div class="font-bold text-green-700 text-sm">WhatsApp Atendimento</div>
                <div class="text-green-600 font-semibold">(74) 98125-6120</div>
              </div>
            </a>

            <!-- Telefone -->
            <div class="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <div class="bg-blue-500 rounded-full p-2">
                <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </div>
              <div>
                <div class="font-bold text-gray-700 text-sm">Telefone Comercial</div>
                <div class="text-gray-600 font-semibold">(74) 98125-6120</div>
              </div>
            </div>

            <!-- Email -->
            <div class="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <div class="bg-purple-500 rounded-full p-2">
                <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <div>
                <div class="font-bold text-gray-700 text-sm">E-mail Comercial</div>
                <div class="text-gray-600 font-semibold">contato@autoshield.com.br</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Newsletter e Políticas -->
        <div>
          <h3 class="font-bold text-gray-800 mb-4 text-lg">Newsletter & Políticas</h3>
          <p class="text-gray-600 mb-3 text-sm">
            Receba dicas exclusivas e ofertas especiais para seu veículo.
          </p>
          <form @submit.prevent="subscribeNewsletter" class="flex gap-2 items-center mb-6">
            <input
              v-model="newsletterEmail"
              type="email"
              placeholder="Seu e-mail"
              class="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm transition-colors"
              required
              autocomplete="email"
            />
            <button
              type="submit"
              :disabled="isLoading"
              class="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors"
            >
              <span v-if="isLoading">Enviando...</span>
              <span v-else>Cadastrar</span>
            </button>
          </form>

          <transition name="fade-in">
            <div
              v-if="newsletterSuccess"
              class="mb-4 text-green-700 bg-green-50 border border-green-200 rounded-lg px-3 py-2 text-xs text-center animate-fade-in-up"
            >
              Inscrição realizada! Confira sua caixa de entrada.
            </div>
          </transition>

          <transition name="fade-in">
            <div
              v-if="newsletterError"
              class="mb-4 text-red-700 bg-red-50 border border-red-200 rounded-lg px-3 py-2 text-xs text-center animate-fade-in-up"
            >
              {{ newsletterError }}
            </div>
          </transition>

          <!-- Links das Políticas com Nomes em Inglês -->
          <nav class="space-y-2">
            <NuxtLink to="/terms" class="flex items-center gap-2 text-gray-600 hover:text-primary-600 font-semibold transition-colors text-sm group">
              <svg class="w-4 h-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Termos de Uso
            </NuxtLink>

            <NuxtLink to="/privacy" class="flex items-center gap-2 text-gray-600 hover:text-primary-600 font-semibold transition-colors text-sm group">
              <svg class="w-4 h-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Política de Privacidade
            </NuxtLink>

            <NuxtLink to="/cookies" class="flex items-center gap-2 text-gray-600 hover:text-primary-600 font-semibold transition-colors text-sm group">
              <svg class="w-4 h-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" stroke-width="2" />
                <circle cx="8.5" cy="10.5" r="1.5" />
                <circle cx="15.5" cy="13.5" r="1.5" />
                <circle cx="12" cy="16" r="1" />
              </svg>
              Política de Cookies
            </NuxtLink>
          </nav>
        </div>
      </div>

      <!-- Copyright -->
      <div class="border-t border-gray-200 mt-10 pt-6 text-center text-gray-600 text-sm">
        <p>&copy; {{ year }} AutoShield. Todos os direitos reservados. Proteção Veicular Inteligente.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const newsletterEmail = ref('')
const newsletterSuccess = ref(false)
const newsletterError = ref('')
const isLoading = ref(false)
const year = new Date().getFullYear()

const subscribeNewsletter = async () => {
  newsletterSuccess.value = false
  newsletterError.value = ''
  isLoading.value = true

  try {
    const res = await $fetch('/api/newsletter', {
      method: 'POST',
      body: {
        email: newsletterEmail.value,
        source: 'Footer Landing Page'
      }
    })

    if (res && res.success) {
      newsletterSuccess.value = true
      newsletterEmail.value = ''
    } else {
      newsletterError.value = res?.message || 'Erro ao cadastrar. Tente novamente.'
    }
  } catch (err: any) {
    newsletterError.value = err?.data?.statusMessage || 'Erro ao cadastrar. Tente novamente.'
  } finally {
    isLoading.value = false
    setTimeout(() => {
      newsletterSuccess.value = false
      newsletterError.value = ''
    }, 5000)
  }
}
</script>

<style scoped>
@keyframes fade-in-up {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}
.animate-fade-in-up {
  animation: fade-in-up 0.6s cubic-bezier(0.4, 0, 0.2, 1) both;
}
.animate-float {
  animation: float 5s ease-in-out infinite;
}
.animation-delay-2000 {
  animation-delay: 2s;
}
.fade-in-enter-active, .fade-in-leave-active {
  transition: opacity 0.3s;
}
.fade-in-enter-from, .fade-in-leave-to {
  opacity: 0;
}
</style>
