<!-- components/landing/ContactForm.vue - Compacto, Responsivo e Espetacular -->
<template>
  <section class="relative bg-gradient-to-br from-white via-primary-50 to-blue-50 py-10 lg:py-14 overflow-hidden">
    <!-- Fundo animado sutil -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <div class="absolute -top-16 -right-16 w-32 h-32 bg-gradient-to-r from-primary-200 to-emerald-200 rounded-full blur-2xl opacity-20 animate-float"></div>
      <div class="absolute -bottom-16 -left-16 w-24 h-24 bg-gradient-to-r from-blue-200 to-primary-200 rounded-full blur-2xl opacity-15 animate-float animation-delay-2000"></div>
    </div>
    <div class="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-8">
        <div class="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-primary-500 to-emerald-500 text-white rounded-full text-xs font-bold shadow-lg mb-3 animate-bounce-slow">
          <svg class="w-3 h-3 mr-2 animate-spin-slow" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
          </svg>
          Cotação Personalizada
        </div>
        <h2 class="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-2 leading-tight animate-fade-in-up">
          Solicite sua Proposta
        </h2>
        <p class="text-base lg:text-lg text-gray-700 max-w-lg mx-auto leading-relaxed animate-fade-in-up animation-delay-300">
          Receba uma proposta exclusiva de proteção veicular em até 24h.
        </p>
      </div>

      <div class="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl animate-fade-in-up animation-delay-500">
        <form @submit.prevent="submitForm" class="space-y-4">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <input
                id="name"
                v-model="form.name"
                type="text"
                required
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm transition-colors"
                placeholder="Nome Completo *"
              />
            </div>
            <div>
              <input
                id="email"
                v-model="form.email"
                type="email"
                required
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm transition-colors"
                placeholder="E-mail *"
              />
            </div>
            <div>
              <input
                id="phone"
                v-model="form.phone"
                type="tel"
                required
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm transition-colors"
                placeholder="Telefone/WhatsApp *"
              />
            </div>
            <div>
              <input
                id="city"
                v-model="form.city"
                type="text"
                required
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm transition-colors"
                placeholder="Cidade *"
              />
            </div>
            <div>
              <select
                id="brand"
                v-model="form.brand"
                required
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm transition-colors"
              >
                <option value="">Marca *</option>
                <option value="Toyota">Toyota</option>
                <option value="Volkswagen">Volkswagen</option>
                <option value="Chevrolet">Chevrolet</option>
                <option value="Ford">Ford</option>
                <option value="Honda">Honda</option>
                <option value="Hyundai">Hyundai</option>
                <option value="Nissan">Nissan</option>
                <option value="Fiat">Fiat</option>
                <option value="Renault">Renault</option>
                <option value="Outra">Outra</option>
              </select>
            </div>
            <div>
              <input
                id="model"
                v-model="form.model"
                type="text"
                required
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm transition-colors"
                placeholder="Modelo *"
              />
            </div>
            <div>
              <select
                id="year"
                v-model="form.year"
                required
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm transition-colors"
              >
                <option value="">Ano *</option>
                <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
              </select>
            </div>
            <div>
              <select
                id="value"
                v-model="form.value"
                required
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm transition-colors"
              >
                <option value="">Valor Aproximado *</option>
                <option value="Até R$ 30.000">Até R$ 30.000</option>
                <option value="R$ 30.001 - R$ 50.000">R$ 30.001 - R$ 50.000</option>
                <option value="R$ 50.001 - R$ 100.000">R$ 50.001 - R$ 100.000</option>
                <option value="R$ 100.001 - R$ 200.000">R$ 100.001 - R$ 200.000</option>
                <option value="Acima de R$ 200.000">Acima de R$ 200.000</option>
              </select>
            </div>
          </div>

          <div>
            <textarea
              id="message"
              v-model="form.message"
              rows="2"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm transition-colors"
              placeholder="Mensagem adicional (opcional)"
            ></textarea>
          </div>

          <div class="flex items-start space-x-2">
            <input
              id="terms"
              v-model="form.acceptTerms"
              type="checkbox"
              required
              class="mt-1 h-4 w-4 text-primary-500 focus:ring-primary-500 border-gray-300 rounded"
            />
            <label for="terms" class="text-xs text-gray-600">
              Aceito os <a href="/terms" class="text-primary-500 hover:underline">termos de uso</a> e
              <a href="/privacy" class="text-primary-500 hover:underline">política de privacidade</a>.
            </label>
          </div>

          <div class="text-center">
            <button
              type="submit"
              :disabled="isSubmitting"
              class="bg-primary-500 hover:bg-primary-600 disabled:bg-gray-400 text-white px-6 py-3 rounded-lg font-semibold text-sm transition-colors inline-flex items-center space-x-2"
            >
              <span v-if="isSubmitting">Enviando...</span>
              <span v-else>Solicitar Cotação</span>
              <svg v-if="!isSubmitting" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </form>

        <!-- Mensagem de Sucesso -->
        <transition name="fade-in">
          <div
            v-if="showSuccess"
            class="mt-4 bg-green-50 border border-green-200 rounded-lg p-3 text-center animate-fade-in-up"
          >
            <div class="flex justify-center items-center space-x-2 text-green-800">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span class="font-semibold text-sm">Cotação enviada com sucesso!</span>
            </div>
            <p class="text-green-700 mt-1 text-xs">
              Recebemos sua solicitação. Nossa equipe entrará em contato em até 24 horas.
            </p>
          </div>
        </transition>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import emailjs from '@emailjs/browser'

const isSubmitting = ref(false)
const showSuccess = ref(false)

const form = ref({
  name: '',
  email: '',
  phone: '',
  city: '',
  brand: '',
  model: '',
  year: '',
  value: '',
  message: '',
  acceptTerms: false
})

// Gerar anos (últimos 30 anos)
const currentYear = new Date().getFullYear()
const years = Array.from({ length: 30 }, (_, i) => currentYear - i)

// Envio do formulário com EmailJS
const submitForm = async () => {
  isSubmitting.value = true

  try {
    const templateParams = {
      to_name: 'Equipe AutoShield',
      from_name: form.value.name,
      from_email: form.value.email,
      phone: form.value.phone,
      city: form.value.city,
      vehicle: `${form.value.brand} ${form.value.model} ${form.value.year}`,
      value: form.value.value,
      message: form.value.message || 'Nenhuma mensagem adicional',
      reply_to: form.value.email
    }

    await emailjs.send(
      'service_60si7y9',     // Substitua pelo seu Service ID
      'template_2q2d36q',    // Substitua pelo seu Template ID
      templateParams,
      'Ai_tl6w2eT1iWXjcO'      // Substitua pela sua Public Key
    )

    showSuccess.value = true

    // Resetar formulário
    form.value = {
      name: '',
      email: '',
      phone: '',
      city: '',
      brand: '',
      model: '',
      year: '',
      value: '',
      message: '',
      acceptTerms: false
    }

    setTimeout(() => {
      showSuccess.value = false
    }, 5000)

  } catch (error) {
    console.error('Erro ao enviar formulário:', error)
    alert('Erro ao enviar cotação. Tente novamente ou entre em contato pelo WhatsApp.')
  } finally {
    isSubmitting.value = false
  }
}

// Inicializar EmailJS no mounted
onMounted(() => {
  emailjs.init('YOUR_PUBLIC_KEY') // Substitua pela sua Public Key
})
</script>

<style scoped>
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes float {
  0%, 100% {
    transform: translateY(0px) scale(1);
  }
  50% {
    transform: translateY(-10px) scale(1.04);
  }
}
@keyframes bounce-slow {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-7px);
  }
}
@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.animate-fade-in-up {
  animation: fade-in-up 0.7s cubic-bezier(0.4, 0, 0.2, 1) both;
}
.animate-float {
  animation: float 6s ease-in-out infinite;
}
.animate-bounce-slow {
  animation: bounce-slow 2.2s ease-in-out infinite;
}
.animate-spin-slow {
  animation: spin-slow 7s linear infinite;
}
.fade-in-enter-active, .fade-in-leave-active {
  transition: opacity 0.3s;
}
.fade-in-enter-from, .fade-in-leave-to {
  opacity: 0;
}
@media (max-width: 640px) {
  .rounded-2xl {
    border-radius: 1rem;
  }
  .p-8 {
    padding: 1.25rem;
  }
}
</style>
