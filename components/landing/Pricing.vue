<!-- components/landing/Pricing.vue - Versão Corrigida e Compacta -->
<template>
  <section id="planos" class="relative bg-gradient-to-br from-gray-50 via-white to-primary-50 py-12 lg:py-16 overflow-hidden">
    <!-- Background decorativo otimizado -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute -top-20 -right-20 w-40 h-40 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      <div class="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
    </div>

    <div class="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header compacto -->
      <div class="text-center mb-10">
        <div class="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-primary-500 to-emerald-500 text-white rounded-full text-sm font-semibold shadow-lg mb-4 animate-bounce-slow">
          <svg class="w-3 h-3 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
          </svg>
          Planos Populares
        </div>

        <h2 class="text-3xl lg:text-5xl font-black text-gray-900 mb-4 leading-tight">
          <span class="block">Proteção Veicular</span>
          <span class="block bg-gradient-to-r from-primary-600 via-blue-600 to-emerald-600 bg-clip-text text-transparent">
            Inteligente
          </span>
        </h2>

        <p class="text-base lg:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
          Todos incluem <span class="font-bold text-primary-600">GPS com IA gratuito</span> e
          <span class="font-bold text-emerald-600">assistência 24h</span>.
        </p>
      </div>

      <!-- Toggle Corrigido e Compacto -->
      <div class="flex justify-center mb-8">
        <div class="relative bg-white p-1.5 rounded-xl shadow-lg border border-gray-200">
          <div class="flex relative">
            <!-- Background slider corrigido -->
            <div
              class="absolute top-1.5 bottom-1.5 bg-gradient-to-r from-primary-500 to-emerald-500 rounded-lg transition-all duration-300 shadow-md"
              :style="{
                left: billingType === 'monthly' ? '6px' : '50%',
                right: billingType === 'monthly' ? '50%' : '6px'
              }"
            ></div>

            <button
              @click="billingType = 'monthly'"
              :class="[
                'relative z-10 px-6 py-2.5 text-sm font-bold rounded-lg transition-all duration-300',
                billingType === 'monthly' ? 'text-white' : 'text-gray-700 hover:text-gray-900'
              ]"
            >
              Mensal
            </button>

            <button
              @click="billingType = 'annual'"
              :class="[
                'relative z-10 px-6 py-2.5 text-sm font-bold rounded-lg transition-all duration-300',
                billingType === 'annual' ? 'text-white' : 'text-gray-700 hover:text-gray-900'
              ]"
            >
              Anual
              <span class="ml-1.5 px-2 py-0.5 bg-red-500 text-white text-xs font-bold rounded-full animate-pulse">
                -20%
              </span>
            </button>
          </div>
        </div>
      </div>

      <!-- Grid de Planos Compacto -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
        <div
          v-for="(plan, index) in plans"
          :key="index"
          :class="[
            'relative group transition-all duration-500 hover:-translate-y-2',
            plan.popular ? 'md:scale-105 z-10' : 'hover:scale-102'
          ]"
        >
          <!-- Glow effect otimizado -->
          <div
            :class="[
              'absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg',
              plan.popular
                ? 'bg-gradient-to-r from-primary-500 via-blue-500 to-emerald-500 opacity-25'
                : 'bg-gradient-to-r from-gray-300 to-gray-400'
            ]"
          ></div>

          <div
            :class="[
              'relative bg-white rounded-2xl shadow-xl border-2 p-6 lg:p-8 h-full flex flex-col',
              plan.popular
                ? 'border-primary-500 bg-gradient-to-br from-white via-primary-50 to-white'
                : 'border-gray-200 hover:border-primary-300'
            ]"
          >
            <!-- Badge Popular Compacto -->
            <div
              v-if="plan.popular"
              class="absolute -top-4 left-1/2 transform -translate-x-1/2"
            >
              <span class="bg-gradient-to-r from-primary-500 to-emerald-500 text-white px-4 py-2 rounded-full text-xs font-black shadow-xl animate-pulse">
                🔥 POPULAR
              </span>
            </div>

            <!-- Header Compacto -->
            <div class="text-center mb-6 flex-shrink-0">
              <div class="mb-3">
                <div
                  :class="[
                    'w-12 h-12 mx-auto rounded-xl flex items-center justify-center mb-3 transform transition-transform group-hover:scale-110',
                    plan.popular ? 'bg-gradient-to-br from-primary-500 to-emerald-500' : 'bg-gradient-to-br from-gray-500 to-gray-600'
                  ]"
                >
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>

              <h3 class="text-2xl font-black text-gray-900 mb-2">{{ plan.name }}</h3>
              <p class="text-gray-600 mb-4 text-sm leading-relaxed">{{ plan.description }}</p>

              <!-- Preço Compacto -->
              <div class="mb-3">
                <div class="flex items-baseline justify-center mb-1">
                  <span class="text-4xl font-black bg-gradient-to-r from-primary-600 to-emerald-600 bg-clip-text text-transparent">
                    R$ {{ billingType === 'monthly' ? plan.monthlyPrice : plan.annualPrice }}
                  </span>
                  <span class="text-lg text-gray-600 ml-1">/mês</span>
                </div>

                <div v-if="billingType === 'annual'" class="inline-flex items-center px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-bold">
                  💰 Economize R$ {{ (plan.monthlyPrice * 12 - plan.annualPrice * 12).toFixed(0) }}/ano
                </div>
              </div>
            </div>

            <!-- Features Compactas -->
            <div class="flex-grow mb-6">
              <ul class="space-y-2">
                <li
                  v-for="feature in plan.features.slice(0, 5)"
                  :key="feature"
                  class="flex items-start space-x-2 group/feature"
                >
                  <div class="flex-shrink-0 w-4 h-4 bg-gradient-to-r from-primary-500 to-emerald-500 rounded-full flex items-center justify-center mt-1 group-hover/feature:scale-110 transition-transform">
                    <svg class="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <span class="text-gray-700 font-medium text-sm leading-relaxed group-hover/feature:text-gray-900 transition-colors">{{ feature }}</span>
                </li>
                <li v-if="plan.features.length > 5" class="text-xs text-gray-500 italic ml-6">
                  + {{ plan.features.length - 5 }} benefícios adicionais
                </li>
              </ul>
            </div>

            <!-- CTA Compacto -->
            <div class="flex-shrink-0">
              <a
                :href="`https://wa.me/5574981256120?text=Olá! Tenho interesse no plano ${plan.name} de R$ ${billingType === 'monthly' ? plan.monthlyPrice : plan.annualPrice}/mês. Gostaria de mais informações.`"
                target="_blank"
                rel="noopener noreferrer"
                :class="[
                  'group/cta relative overflow-hidden w-full py-3 px-4 rounded-xl font-bold text-sm transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2',
                  plan.popular
                    ? 'bg-gradient-to-r from-primary-500 via-primary-600 to-emerald-600 text-white hover:shadow-xl hover:shadow-primary-500/50'
                    : 'bg-gradient-to-r from-gray-700 to-gray-800 text-white hover:shadow-xl hover:shadow-gray-500/50'
                ]"
              >
                <!-- Background animado -->
                <div class="absolute inset-0 bg-gradient-to-r from-emerald-600 via-primary-600 to-primary-500 opacity-0 group-hover/cta:opacity-100 transition-opacity duration-300"></div>

                <!-- Shimmer effect -->
                <div class="absolute inset-0 -skew-x-12 translate-x-full group-hover/cta:translate-x-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700"></div>

                <!-- Conteúdo -->
                <div class="relative z-10 flex items-center space-x-2">
                  <svg class="w-4 h-4 group-hover/cta:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
                  </svg>
                  <span class="group-hover/cta:translate-x-1 transition-transform">{{ plan.cta }}</span>
                </div>
              </a>

              <!-- Cobertura -->
              <div class="mt-3 text-center">
                <span class="text-xs text-gray-500">
                  Cobertura até <span class="font-bold text-gray-700">{{ plan.maxCoverage }}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Garantias Compactas -->
      <div class="bg-gradient-to-r from-primary-500 via-blue-500 to-emerald-500 rounded-2xl p-1 shadow-xl">
        <div class="bg-white rounded-2xl p-6 lg:p-8">
          <h3 class="text-2xl lg:text-3xl font-black text-center text-gray-900 mb-8">
            <span class="bg-gradient-to-r from-primary-600 to-emerald-600 bg-clip-text text-transparent">
              Garantias Exclusivas
            </span>
          </h3>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="text-center group cursor-pointer">
              <div class="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 class="text-lg font-black text-gray-900 mb-2">Sem Carência de Guincho</h4>
              <p class="text-gray-600 text-sm leading-relaxed">Assistência imediata após aprovação</p>
            </div>

            <div class="text-center group cursor-pointer">
              <div class="w-16 h-16 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <svg class="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h4 class="text-lg font-black text-gray-900 mb-2">Sem Taxas Ocultas</h4>
              <p class="text-gray-600 text-sm leading-relaxed">Preço transparente, sem surpresas</p>
            </div>

            <div class="text-center group cursor-pointer">
              <div class="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 12h.01M12 12h.01M12 12h.01" />
                </svg>
              </div>
              <h4 class="text-lg font-black text-gray-900 mb-2">Cancelamento Livre</h4>
              <p class="text-gray-600 text-sm leading-relaxed">Cancele quando quiser, sem multas</p>
            </div>
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
    description: 'Perfeito para veículos até R$ 50.000 com proteção completa',
    monthlyPrice: 89,
    annualPrice: 71,
    maxCoverage: 'R$ 50.000',
    popular: false,
    cta: 'Contratar Agora',
    features: [
      'Cobertura para roubo e furto',
      'Rastreamento GPS com IA gratuito',
      'Assistência 24h em todo Brasil',
      'Guincho ilimitado até 200km',
      'Chaveiro emergencial',
      'Cobertura total de vidros',
      'App exclusivo com monitoramento'
    ]
  },
  {
    name: 'Completo',
    description: 'Ideal para veículos até R$ 100.000 com máxima proteção',
    monthlyPrice: 149,
    annualPrice: 119,
    maxCoverage: 'R$ 100.000',
    popular: true,
    cta: 'Contratar Agora',
    features: [
      'Tudo do plano Essencial',
      'Cobertura para colisão total',
      'Cobertura contra incêndio',
      'Cobertura de terceiros até R$ 50k',
      'Carro reserva por 15 dias',
      'Assistência mecânica completa',
      'Desconto especial em combustível'
    ]
  },
  {
    name: 'Premium',
    description: 'Exclusivo para veículos até R$ 200.000 com serviços VIP',
    monthlyPrice: 229,
    annualPrice: 183,
    maxCoverage: 'R$ 200.000',
    popular: false,
    cta: 'Contratar Agora',
    features: [
      'Tudo do plano Completo',
      'Cobertura para fenômenos naturais',
      'Cobertura de terceiros até R$ 100k',
      'Carro reserva premium por 30 dias',
      'Assistência residencial incluída',
      'Proteção total de acessórios',
      'Consultoria jurídica gratuita 24h'
    ]
  }
]

const showPlanDetails = (plan: any) => {
  // Função para mostrar detalhes do plano
  alert(`Detalhes do plano ${plan.name} em breve!`)
}
</script>

<style scoped>
/* Animações customizadas */
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-15px);
  }
}

@keyframes bounce-slow {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
}

.animate-float {
  animation: float 5s ease-in-out infinite;
}

.animate-bounce-slow {
  animation: bounce-slow 2.5s ease-in-out infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.bg-clip-text {
  -webkit-background-clip: text;
  background-clip: text;
}

.hover\:scale-102:hover {
  transform: scale(1.02);
}

/* Responsividade aprimorada */
@media (max-width: 768px) {
  .md\:scale-105 {
    transform: scale(1) !important;
  }
}

/* Smooth scroll */
html {
  scroll-behavior: smooth;
}
</style>
