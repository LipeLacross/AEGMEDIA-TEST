<!-- components/landing/ContactForm.vue - Formulário com EmailJS -->
<template>
  <section class="bg-white py-16 lg:py-24">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          Solicite sua Cotação Personalizada
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Preencha o formulário e receba uma proposta personalizada de proteção veicular em até 24 horas
        </p>
      </div>

      <div class="bg-gray-50 rounded-2xl p-8 lg:p-12">
        <form @submit.prevent="submitForm" class="space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Nome Completo -->
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700 mb-2">
                Nome Completo *
              </label>
              <input
                id="name"
                v-model="form.name"
                type="text"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                placeholder="Seu nome completo"
              />
            </div>

            <!-- Email -->
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                E-mail *
              </label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                placeholder="seu@email.com"
              />
            </div>

            <!-- Telefone -->
            <div>
              <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">
                Telefone/WhatsApp *
              </label>
              <input
                id="phone"
                v-model="form.phone"
                type="tel"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                placeholder="(11) 99999-9999"
              />
            </div>

            <!-- Cidade -->
            <div>
              <label for="city" class="block text-sm font-medium text-gray-700 mb-2">
                Cidade *
              </label>
              <input
                id="city"
                v-model="form.city"
                type="text"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                placeholder="São Paulo, SP"
              />
            </div>

            <!-- Marca do Veículo -->
            <div>
              <label for="brand" class="block text-sm font-medium text-gray-700 mb-2">
                Marca do Veículo *
              </label>
              <select
                id="brand"
                v-model="form.brand"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
              >
                <option value="">Selecione a marca</option>
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

            <!-- Modelo -->
            <div>
              <label for="model" class="block text-sm font-medium text-gray-700 mb-2">
                Modelo *
              </label>
              <input
                id="model"
                v-model="form.model"
                type="text"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                placeholder="Ex: Corolla, Civic, Gol"
              />
            </div>

            <!-- Ano -->
            <div>
              <label for="year" class="block text-sm font-medium text-gray-700 mb-2">
                Ano *
              </label>
              <select
                id="year"
                v-model="form.year"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
              >
                <option value="">Selecione o ano</option>
                <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
              </select>
            </div>

            <!-- Valor do Veículo -->
            <div>
              <label for="value" class="block text-sm font-medium text-gray-700 mb-2">
                Valor Aproximado *
              </label>
              <select
                id="value"
                v-model="form.value"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
              >
                <option value="">Selecione a faixa</option>
                <option value="Até R$ 30.000">Até R$ 30.000</option>
                <option value="R$ 30.001 - R$ 50.000">R$ 30.001 - R$ 50.000</option>
                <option value="R$ 50.001 - R$ 100.000">R$ 50.001 - R$ 100.000</option>
                <option value="R$ 100.001 - R$ 200.000">R$ 100.001 - R$ 200.000</option>
                <option value="Acima de R$ 200.000">Acima de R$ 200.000</option>
              </select>
            </div>
          </div>

          <!-- Mensagem -->
          <div>
            <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
              Mensagem Adicional
            </label>
            <textarea
              id="message"
              v-model="form.message"
              rows="4"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
              placeholder="Conte-nos mais sobre suas necessidades..."
            ></textarea>
          </div>

          <!-- Termos -->
          <div class="flex items-start space-x-3">
            <input
              id="terms"
              v-model="form.acceptTerms"
              type="checkbox"
              required
              class="mt-1 h-4 w-4 text-primary-500 focus:ring-primary-500 border-gray-300 rounded"
            />
            <label for="terms" class="text-sm text-gray-600">
              Aceito os <a href="#" class="text-primary-500 hover:underline">termos de uso</a> e
              <a href="#" class="text-primary-500 hover:underline">política de privacidade</a>.
              Autorizo o contato para ofertas de proteção veicular. *
            </label>
          </div>

          <!-- Botão de Envio -->
          <div class="text-center">
            <button
              type="submit"
              :disabled="isSubmitting"
              class="bg-primary-500 hover:bg-primary-600 disabled:bg-gray-400 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center space-x-2"
            >
              <span v-if="isSubmitting">Enviando...</span>
              <span v-else>Solicitar Cotação Gratuita</span>
              <svg v-if="!isSubmitting" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </form>

        <!-- Mensagem de Sucesso -->
        <div
          v-if="showSuccess"
          class="mt-6 bg-green-50 border border-green-200 rounded-lg p-4 text-center"
        >
          <div class="flex justify-center items-center space-x-2 text-green-800">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span class="font-semibold">Cotação enviada com sucesso!</span>
          </div>
          <p class="text-green-700 mt-2">
            Recebemos sua solicitação. Nossa equipe entrará em contato em até 24 horas.
          </p>
        </div>
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

const submitForm = async () => {
  isSubmitting.value = true

  try {
    // Configurar EmailJS (substitua pelos seus IDs)
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
      'YOUR_SERVICE_ID', // Substitua pelo seu Service ID
      'YOUR_TEMPLATE_ID', // Substitua pelo seu Template ID
      templateParams,
      'YOUR_PUBLIC_KEY' // Substitua pela sua Public Key
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

    // Esconder mensagem de sucesso após 5 segundos
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
