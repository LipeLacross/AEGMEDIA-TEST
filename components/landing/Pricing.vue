<!-- components/landing/Pricing.vue - Seção de Planos -->
<template>
  <section class="bg-white py-16 lg:py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          Planos de Proteção Veicular
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Escolha o plano ideal para seu perfil. Todos incluem rastreamento GPS e assistência 24h.
        </p>
      </div>

      <!-- Toggle Anual/Mensal -->
      <div class="flex justify-center mb-8">
        <div class="bg-gray-100 p-1 rounded-lg">
          <button
            @click="billingType = 'monthly'"
            :class="[
              'px-6 py-2 text-sm font-medium rounded-md transition-colors',
              billingType === 'monthly'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            ]"
          >
            Mensal
          </button>
          <button
            @click="billingType = 'annual'"
            :class="[
              'px-6 py-2 text-sm font-medium rounded-md transition-colors',
              billingType === 'annual'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            ]"
          >
            Anual
            <span class="ml-1 text-xs text-primary-500 font-semibold">-20%</span>
          </button>
        </div>
      </div>

      <!-- Planos -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="(plan, index) in plans"
          :key="index"
          :class="[
            'relative bg-white rounded-2xl shadow-lg border-2 p-8',
            plan.popular
              ? 'border-primary-500 transform scale-105'
              : 'border-gray-200'
          ]"
        >
          <!-- Badge Popular -->
          <div
            v-if="plan.popular"
            class="absolute -top-4 left-1/2 transform -translate-x-1/2"
          >
            <span class="bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
              Mais Popular
            </span>
          </div>

          <!-- Header -->
          <div class="text-center mb-8">
            <h3 class="text-2xl font-bold text-gray-900 mb-2">{{ plan.name }}</h3>
            <p class="text-gray-600 mb-4">{{ plan.description }}</p>

            <div class="mb-2">
              <span class="text-4xl font-bold text-gray-900">
                R$ {{ billingType === 'monthly' ? plan.monthlyPrice : plan.annualPrice }}
              </span>
              <span class="text-gray-600">/mês</span>
            </div>

            <div v-if="billingType === 'annual'" class="text-sm text-primary-500 font-medium">
              Economize R$ {{ (plan.monthlyPrice * 12 - plan.annualPrice * 12).toFixed(0) }}/ano
            </div>
          </div>

          <!-- Features -->
          <ul class="space-y-4 mb-8">
            <li
              v-for="feature in plan.features"
              :key="feature"
              class="flex items-start space-x-3"
            >
              <CheckCircleIcon class="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
              <span class="text-gray-700">{{ feature }}</span>
            </li>
          </ul>

          <!-- CTA -->
          <button
            :class="[
              'w-full py-4 px-6 rounded-lg font-semibold text-lg transition-colors',
              plan.popular
                ? 'bg-primary-500 hover:bg-primary-600 text-white'
                : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
            ]"
          >
            {{ plan.cta }}
          </button>

          <!-- Cobertura Máxima -->
          <div class="mt-4 text-center text-sm text-gray-500">
            Cobertura até <span class="font-semibold">{{ plan.maxCoverage }}</span>
          </div>
        </div>
      </div>

      <!-- Informações Adicionais -->
      <div class="mt-12 bg-gray-50 rounded-2xl p-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg class="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 class="font-semibold text-gray-900 mb-2">Sem Carência de Guincho</h3>
            <p class="text-gray-600 text-sm">Assistência imediata após aprovação da adesão</p>
          </div>

          <div>
            <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg class="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
            <h3 class="font-semibold text-gray-900 mb-2">Sem Taxas Ocultas</h3>
            <p class="text-gray-600 text-sm">Preço transparente, sem surpresas na cobrança</p>
          </div>

          <div>
            <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg class="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 12h.01M12 12h.01M12 12h.01" />
              </svg>
            </div>
            <h3 class="font-semibold text-gray-900 mb-2">Cancelamento Livre</h3>
            <p class="text-gray-600 text-sm">Cancele quando quiser, sem multas ou taxas</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const billingType = ref('monthly')

const plans = [
  {
    name: 'Essencial',
    description: 'Ideal para veículos até R$ 50.000',
    monthlyPrice: 89,
    annualPrice: 71,
    maxCoverage: 'R$ 50.000',
    popular: false,
    cta: 'Contratar Plano',
    features: [
      'Cobertura para roubo e furto',
      'Rastreamento GPS gratuito',
      'Assistência 24h',
      'Guincho até 200km',
      'Chaveiro emergencial',
      'Cobertura de vidros',
      'App exclusivo'
    ]
  },
  {
    name: 'Completo',
    description: 'Ideal para veículos até R$ 100.000',
    monthlyPrice: 149,
    annualPrice: 119,
    maxCoverage: 'R$ 100.000',
    popular: true,
    cta: 'Contratar Plano',
    features: [
      'Tudo do plano Essencial',
      'Cobertura para colisão',
      'Cobertura contra incêndio',
      'Cobertura de terceiros até R$ 50k',
      'Carro reserva por 15 dias',
      'Assistência mecânica',
      'Desconto em combustível'
    ]
  },
  {
    name: 'Premium',
    description: 'Ideal para veículos até R$ 200.000',
    monthlyPrice: 229,
    annualPrice: 183,
    maxCoverage: 'R$ 200.000',
    popular: false,
    cta: 'Contratar Plano',
    features: [
      'Tudo do plano Completo',
      'Cobertura para fenômenos naturais',
      'Cobertura de terceiros até R$ 100k',
      'Carro reserva por 30 dias',
      'Assistência residencial',
      'Proteção de acessórios',
      'Consultoria jurídica gratuita'
    ]
  }
]
</script>
