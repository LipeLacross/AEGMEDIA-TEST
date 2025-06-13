<!-- components/landing/Services.vue - Versão Compacta e Otimizada -->
<template>
  <section class="relative bg-gradient-to-br from-gray-50 via-white to-blue-50 py-12 lg:py-16 overflow-hidden">
    <!-- Background animado otimizado -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute -top-20 -right-20 w-60 h-60 bg-gradient-to-r from-primary-300 to-emerald-300 rounded-full mix-blend-multiply filter blur-2xl opacity-25 animate-float"></div>
      <div class="absolute -bottom-20 -left-20 w-50 h-50 bg-gradient-to-r from-blue-300 to-primary-300 rounded-full mix-blend-multiply filter blur-2xl opacity-25 animate-float animation-delay-2000"></div>
    </div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header Compacto -->
      <div class="text-center mb-12">
        <div class="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-500 to-emerald-500 text-white rounded-full text-sm font-bold shadow-lg mb-4 animate-bounce-slow">
          <svg class="w-4 h-4 mr-2 animate-spin-slow" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
          </svg>
          Tecnologia de Ponta em Proteção Veicular
        </div>

        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4 leading-tight">
          <span class="block animate-fade-in-up">Por que Escolher a</span>
          <span class="block bg-gradient-to-r from-primary-600 via-blue-600 to-emerald-600 bg-clip-text text-transparent animate-fade-in-up animation-delay-300">
            AutoShield?
          </span>
        </h2>

        <p class="text-lg lg:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-600">
          Nossa proteção veicular vai <span class="font-bold text-primary-600">muito além do básico</span>.
          Oferecemos tecnologia revolucionária, conveniência total e tranquilidade absoluta.
        </p>
      </div>

      <!-- Serviços Principais Compactos -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
        <div
          v-for="(service, index) in mainServices"
          :key="index"
          class="group relative bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 animate-fade-in-up"
          :style="{ 'animation-delay': `${index * 150}ms` }"
        >
          <!-- Glow effect -->
          <div class="absolute -inset-1 bg-gradient-to-r from-primary-500 via-blue-500 to-emerald-500 rounded-2xl opacity-0 group-hover:opacity-15 blur-lg transition-opacity duration-500"></div>

          <!-- Ícone compacto -->
          <div class="relative w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-primary-100 to-emerald-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md">
            <component :is="service.icon" class="w-6 h-6 lg:w-8 lg:h-8 text-primary-600 group-hover:scale-110 transition-transform duration-300" />

            <!-- Pulse ring -->
            <div class="absolute inset-0 rounded-xl border-2 border-primary-400 opacity-0 group-hover:opacity-100 animate-ping"></div>
          </div>

          <h3 class="text-xl lg:text-2xl font-black text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
            {{ service.title }}
          </h3>

          <p class="text-gray-700 leading-relaxed text-base group-hover:text-gray-900 transition-colors duration-300">
            {{ service.description }}
          </p>

          <!-- Badge de destaque -->
          <div class="absolute top-3 right-3 w-2 h-2 bg-gradient-to-r from-primary-500 to-emerald-500 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </div>

      <!-- Tecnologia e Inovação Compacta -->
      <div class="bg-gradient-to-r from-primary-500 via-blue-500 to-emerald-500 rounded-2xl p-1 shadow-xl mb-12 animate-fade-in-up animation-delay-800">
        <div class="bg-white rounded-2xl p-6 lg:p-10">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <div class="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-primary-100 to-emerald-100 text-primary-700 rounded-full text-sm font-bold mb-4">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Inovação Tecnológica
              </div>

              <h3 class="text-2xl lg:text-3xl font-black text-gray-900 mb-6 leading-tight">
                <span class="block">Tecnologia que</span>
                <span class="block bg-gradient-to-r from-primary-600 to-emerald-600 bg-clip-text text-transparent">
                  Protege de Verdade
                </span>
              </h3>

              <div class="space-y-4">
                <div
                  v-for="(tech, index) in techFeatures"
                  :key="index"
                  class="group flex items-start space-x-3 p-3 rounded-lg hover:bg-primary-50 transition-all duration-300 cursor-pointer"
                >
                  <div class="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-primary-500 to-emerald-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 class="text-lg font-bold text-gray-900 mb-1 group-hover:text-primary-600 transition-colors duration-300">
                      {{ tech.title }}
                    </h4>
                    <p class="text-gray-700 leading-relaxed text-sm group-hover:text-gray-900 transition-colors duration-300">
                      {{ tech.description }}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="relative">
              <!-- Background decorativo -->
              <div class="absolute -inset-3 bg-gradient-to-r from-primary-500 to-emerald-500 rounded-2xl opacity-15 blur-xl"></div>

              <!-- Container da imagem -->
              <div class="relative bg-white rounded-xl p-3 shadow-xl transform hover:scale-105 transition-all duration-500">
                <img
                  src="/img/technology-autoshield.webp"
                  alt="Tecnologia AutoShield com IA"
                  class="w-full h-auto rounded-lg"
                  width="500"
                  height="400"
                />

                <!-- Overlay tecnológico AMPLIADO -->
                <div class="absolute top-4 left-4 lg:top-6 lg:left-6 bg-white/95 backdrop-blur-md rounded-xl p-4 lg:p-6 shadow-xl animate-pulse">
                  <div class="flex items-center space-x-3">
                    <div class="w-4 h-4 lg:w-5 lg:h-5 bg-green-500 rounded-full animate-ping shadow-lg"></div>
                    <span class="text-lg lg:text-xl font-black text-gray-800">IA Ativa</span>
                  </div>
                </div>

                <!-- Badge de inovação AMPLIADO -->
                <div class="absolute bottom-4 right-4 lg:bottom-6 lg:right-6 bg-gradient-to-r from-blue-500 to-primary-500 text-white rounded-xl p-4 lg:p-6 shadow-xl">
                  <div class="text-center">
                    <div class="text-xl lg:text-2xl font-black">99.9%</div>
                    <div class="text-sm lg:text-base opacity-95 font-medium">Uptime</div>
                  </div>
                </div>
              </div>

              <!-- Elementos decorativos flutuantes -->
              <div class="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-primary-200 to-emerald-200 rounded-full mix-blend-multiply filter blur-lg opacity-60 animate-float"></div>
              <div class="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-br from-blue-200 to-primary-200 rounded-full mix-blend-multiply filter blur-lg opacity-60 animate-float animation-delay-3000"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Diferenciação Simplificada -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- AutoShield vs Concorrência - SEM BOTÃO -->
        <div class="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-500 animate-fade-in-up animation-delay-1000">
          <h3 class="text-xl lg:text-2xl font-black text-gray-900 mb-6 text-center">
            <span class="bg-gradient-to-r from-primary-600 to-emerald-600 bg-clip-text text-transparent">
              AutoShield vs Concorrência
            </span>
          </h3>

          <div class="space-y-4">
            <div
              v-for="(comparison, index) in comparisons"
              :key="index"
              class="group flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-all duration-300"
            >
              <span class="text-gray-800 font-medium text-base group-hover:text-gray-900 transition-colors duration-300">
                {{ comparison.feature }}
              </span>
              <div class="flex items-center space-x-4">
                <!-- AutoShield -->
                <div class="flex items-center space-x-2">
                  <svg class="w-5 h-5 text-primary-500 animate-bounce-subtle" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span class="text-xs font-bold text-primary-600 bg-primary-100 px-2 py-1 rounded-full">AutoShield</span>
                </div>

                <!-- Concorrência -->
                <div class="flex items-center space-x-2">
                  <div class="w-5 h-5 flex items-center justify-center">
                    <div :class="comparison.competitor ? 'w-2 h-2 bg-yellow-400' : 'w-2 h-2 bg-red-400'" class="rounded-full"></div>
                  </div>
                  <span class="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-full">Outros</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Estatísticas Compactas -->
        <div class="relative bg-gradient-to-br from-primary-500 via-blue-500 to-emerald-500 rounded-2xl p-6 lg:p-8 text-white shadow-xl overflow-hidden animate-fade-in-up animation-delay-1200">
          <!-- Background pattern -->
          <div class="absolute inset-0 opacity-10">
            <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent"></div>
          </div>

          <div class="relative z-10">
            <div class="text-center mb-6">
              <h3 class="text-xl lg:text-2xl font-black mb-2">
                Nossos Números Impressionantes
              </h3>
              <p class="text-blue-100 text-sm">Resultados que falam por si só</p>
            </div>

            <div class="grid grid-cols-2 gap-4">
              <div
                v-for="(stat, index) in stats"
                :key="index"
                class="text-center group cursor-pointer transform hover:scale-110 transition-transform duration-300"
              >
                <div class="bg-white/20 backdrop-blur-sm rounded-xl p-4 group-hover:bg-white/30 transition-colors duration-300">
                  <div class="text-3xl lg:text-4xl font-black mb-2 group-hover:scale-110 transition-transform duration-300">
                    {{ stat.number }}
                  </div>
                  <div class="text-blue-100 text-xs lg:text-sm font-medium">
                    {{ stat.label }}
                  </div>
                </div>
              </div>
            </div>

            <!-- Badge de confiança -->
            <div class="mt-6 text-center">
              <div class="inline-flex items-center px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full">
                <svg class="w-3 h-3 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                <span class="text-xs font-medium">Líder de Mercado</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  ShieldCheckIcon,
  DevicePhoneMobileIcon,
  ClockIcon,
  CpuChipIcon,
  MapPinIcon,
  PhoneIcon,
  CheckCircleIcon
} from '@heroicons/vue/24/outline'

const mainServices = [
  {
    icon: ShieldCheckIcon,
    title: 'Proteção Absoluta',
    description: 'Cobertura total contra roubo, furto, colisão, incêndio e fenômenos naturais. Sua tranquilidade garantida 24 horas por dia.'
  },
  {
    icon: MapPinIcon,
    title: 'Rastreamento Inteligente',
    description: 'Localização em tempo real com IA preditiva, alertas comportamentais e botão de pânico integrado.'
  },
  {
    icon: PhoneIcon,
    title: 'Assistência Total 24h',
    description: 'Guincho ilimitado, chaveiro, pane seca, mecânico e assistência médica disponíveis em qualquer lugar.'
  },
  {
    icon: CpuChipIcon,
    title: 'IA Revolucionária',
    description: 'Chatbot com aprendizado contínuo que resolve 95% das dúvidas instantaneamente e aprende com cada interação.'
  },
  {
    icon: DevicePhoneMobileIcon,
    title: 'Super App Exclusivo',
    description: 'Plataforma completa para gerenciar proteção, solicitar serviços, acompanhar sinistros e receber alertas.'
  },
  {
    icon: ClockIcon,
    title: 'Velocidade Incomparável',
    description: 'Resposta em menos de 2 minutos em emergências e aprovação de sinistros em tempo record com IA.'
  }
]

const techFeatures = [
  {
    title: 'Assistente Virtual com IA Generativa',
    description: 'Atendimento 24h com inteligência que entende contexto e resolve problemas automaticamente'
  },
  {
    title: 'Rastreamento GPS com Machine Learning',
    description: 'Sistema que aprende seus padrões de uso e detecta anomalias em tempo real'
  },
  {
    title: 'App Omnichannel Inteligente',
    description: 'Experiência unificada que sincroniza todos os canais e antecipa suas necessidades'
  },
  {
    title: 'Análise Preditiva Avançada',
    description: 'IA identifica riscos futuros e sugere medidas preventivas personalizadas'
  }
]

const comparisons = [
  { feature: 'Atendimento com IA 24h', competitor: false },
  { feature: 'Rastreamento GPS Gratuito', competitor: false },
  { feature: 'App Mobile Completo', competitor: false },
  { feature: 'Preço Transparente', competitor: false },
  { feature: 'Análise Preditiva', competitor: false },
  { feature: 'Suporte Multilíngue', competitor: true }
]

const stats = [
  { number: '50k+', label: 'Veículos Protegidos' },
  { number: '4.8★', label: 'Avaliação Google' },
  { number: '98%', label: 'Satisfação Cliente' },
  { number: '24h', label: 'Atendimento Ativo' }
]
</script>

<style scoped>
/* Animações customizadas compactas */
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  33% {
    transform: translateY(-15px) rotate(1deg);
  }
  66% {
    transform: translateY(8px) rotate(-1deg);
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

@keyframes bounce-subtle {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-2px);
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
  animation: fade-in-up 0.7s ease-out forwards;
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-bounce-slow {
  animation: bounce-slow 2.5s ease-in-out infinite;
}

.animate-bounce-subtle {
  animation: bounce-subtle 2s ease-in-out infinite;
}

.animate-spin-slow {
  animation: spin-slow 6s linear infinite;
}

.animation-delay-300 {
  animation-delay: 0.3s;
}

.animation-delay-600 {
  animation-delay: 0.6s;
}

.animation-delay-800 {
  animation-delay: 0.8s;
}

.animation-delay-1000 {
  animation-delay: 1s;
}

.animation-delay-1200 {
  animation-delay: 1.2s;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-3000 {
  animation-delay: 3s;
}

.bg-clip-text {
  -webkit-background-clip: text;
  background-clip: text;
}

/* Efeitos visuais compactos */
.group:hover .group-hover\:scale-110 {
  transform: scale(1.1);
}

.group:hover .group-hover\:scale-105 {
  transform: scale(1.05);
}

/* Responsividade otimizada */
@media (max-width: 768px) {
  .text-5xl {
    font-size: 2.5rem;
    line-height: 1.2;
  }

  .text-4xl {
    font-size: 2rem;
    line-height: 1.3;
  }
}

@media (max-width: 640px) {
  .rounded-2xl {
    border-radius: 1rem;
  }

  .p-10 {
    padding: 1.5rem;
  }

  .p-8 {
    padding: 1.25rem;
  }
}

/* Smooth scroll */
html {
  scroll-behavior: smooth;
}
</style>
