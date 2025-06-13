<!-- components/landing/Testimonials.vue - Versão Corrigida com Ícones Funcionais -->
<template>
  <section class="relative bg-gradient-to-br from-white via-primary-50 to-blue-50 py-8 lg:py-12 overflow-hidden">
    <!-- Fundo animado sutil -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-r from-primary-200 to-emerald-200 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-float"></div>
      <div class="absolute -bottom-20 -left-20 w-32 h-32 bg-gradient-to-r from-blue-200 to-primary-200 rounded-full mix-blend-multiply filter blur-2xl opacity-15 animate-float animation-delay-3000"></div>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-r from-emerald-200 to-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse-slow"></div>
    </div>

    <div class="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header compacto -->
      <div class="text-center mb-8">
        <div class="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-primary-500 to-emerald-500 text-white rounded-full text-xs font-bold shadow-lg mb-3 animate-bounce-slow">
          <svg class="w-3 h-3 mr-2 animate-spin-slow" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
          </svg>
          Depoimentos Reais
        </div>
        <h2 class="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-2 leading-tight animate-fade-in-up">
          O que Nossos Clientes Dizem
        </h2>
        <p class="text-base lg:text-lg text-gray-700 max-w-xl mx-auto leading-relaxed animate-fade-in-up animation-delay-300">
          Mais de <span class="font-black text-primary-600">50.000 motoristas</span> confiam na AutoShield.
        </p>
      </div>

      <!-- Depoimentos Grid compacto -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mb-8">
        <div
          v-for="(testimonial, index) in testimonials"
          :key="index"
          class="group relative bg-white rounded-2xl p-4 lg:p-5 shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 animate-fade-in-up border border-gray-100"
          :style="{ 'animation-delay': `${index * 120}ms` }"
        >
          <!-- Glow effect -->
          <div class="absolute -inset-1 bg-gradient-to-r from-primary-500 via-blue-500 to-emerald-500 rounded-2xl opacity-0 group-hover:opacity-10 blur-lg transition-opacity duration-500"></div>

          <!-- Estrelas -->
          <div class="flex items-center mb-2">
            <div class="flex space-x-0.5">
              <svg
                v-for="i in 5"
                :key="i"
                class="w-4 h-4 text-yellow-400 fill-current transform transition-transform group-hover:scale-110"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            </div>
            <span class="ml-2 text-xs text-gray-600 font-bold">{{ testimonial.rating }}</span>
          </div>

          <!-- Depoimento -->
          <blockquote class="text-gray-700 text-sm leading-relaxed font-medium italic mb-4 group-hover:text-gray-900 transition-colors duration-300">
            "{{ testimonial.content }}"
          </blockquote>

          <!-- Autor -->
          <div class="flex items-center">
            <div class="relative">
              <div class="w-8 h-8 bg-gradient-to-br from-primary-100 to-emerald-100 rounded-full flex items-center justify-center shadow group-hover:scale-110 transition-transform duration-300">
                <span class="text-primary-600 font-black text-base">{{ testimonial.author.charAt(0) }}</span>
              </div>
              <div class="absolute inset-0 rounded-full border border-primary-400 opacity-0 group-hover:opacity-100 animate-ping"></div>
            </div>
            <div class="ml-3">
              <div class="font-bold text-gray-900 text-sm group-hover:text-primary-600 transition-colors duration-300">{{ testimonial.author }}</div>
              <div class="text-xs text-gray-600 font-medium">{{ testimonial.location }}</div>
            </div>
          </div>

          <!-- Badge Verificado CORRIGIDO -->
          <div class="mt-2 flex items-center text-xs text-primary-600 bg-primary-50 rounded-full px-2 py-1 group-hover:bg-primary-100 transition-colors duration-300">
            <svg class="w-3 h-3 mr-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
            <span class="font-semibold">Cliente Verificado</span>
          </div>
        </div>
      </div>

      <!-- Estatísticas de Satisfação compactas -->
      <div class="bg-gradient-to-r from-primary-500 via-blue-500 to-emerald-500 rounded-2xl p-1 shadow-xl mb-8 animate-fade-in-up animation-delay-500">
        <div class="bg-white rounded-2xl p-4 lg:p-6">
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div
              v-for="(stat, index) in stats"
              :key="index"
              class="text-center group cursor-pointer transform hover:scale-105 transition-all duration-300"
            >
              <div class="bg-gradient-to-br from-primary-50 to-emerald-50 rounded-xl p-4 group-hover:shadow transition-shadow duration-300">
                <div class="text-2xl lg:text-3xl font-black bg-gradient-to-r from-primary-600 to-emerald-600 bg-clip-text text-transparent mb-1 group-hover:scale-110 transition-transform duration-300">
                  {{ stat.value }}
                </div>
                <div class="text-gray-900 font-bold text-sm lg:text-base mb-1">{{ stat.label }}</div>
                <div class="text-xs text-gray-600 font-medium">{{ stat.subtitle }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Cases de Sucesso compactos -->
      <div class="animate-fade-in-up animation-delay-700">
        <h3 class="text-xl lg:text-2xl font-black text-gray-900 text-center mb-6">
          <span class="bg-gradient-to-r from-primary-600 to-emerald-600 bg-clip-text text-transparent">
            Cases de Sucesso
          </span>
        </h3>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <!-- Case 1 -->
          <div class="group relative bg-gradient-to-br from-primary-500 via-primary-600 to-emerald-600 rounded-2xl p-5 text-white shadow-lg hover:shadow-primary-500/25 transform hover:scale-105 transition-all duration-500 overflow-hidden">
            <div class="relative z-10 flex items-start space-x-4">
              <div class="flex-shrink-0 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 class="font-bold text-base mb-2 group-hover:text-white/90 transition-colors duration-300">
                  Recuperação em Tempo Record
                </h4>
                <p class="text-primary-100 mb-2 text-sm leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                  Carro roubado recuperado em menos de 2 horas graças ao nosso sistema de rastreamento avançado com IA.
                </p>
                <div class="flex items-center space-x-2">
                  <div class="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                    <span class="text-xs font-bold">JS</span>
                  </div>
                  <div>
                    <div class="font-bold text-sm">João Silva</div>
                    <div class="text-xs text-primary-200">São Paulo, SP</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Case 2 -->
          <div class="group relative bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600 rounded-2xl p-5 text-white shadow-lg hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-500 overflow-hidden">
            <div class="relative z-10 flex items-start space-x-4">
              <div class="flex-shrink-0 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 class="font-bold text-base mb-2 group-hover:text-white/90 transition-colors duration-300">
                  Assistência Imediata
                </h4>
                <p class="text-blue-100 mb-2 text-sm leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                  Pane na estrada resolvida em 30 minutos. Atendimento rápido e profissional mesmo de madrugada.
                </p>
                <div class="flex items-center space-x-2">
                  <div class="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                    <span class="text-xs font-bold">MS</span>
                  </div>
                  <div>
                    <div class="font-bold text-sm">Maria Santos</div>
                    <div class="text-xs text-blue-200">Rio de Janeiro, RJ</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const testimonials = [
  {
    content: "Melhor investimento que fiz para meu carro. O app é incrível e o atendimento nota 10. Recomendo!",
    author: "Carlos Mendes",
    location: "São Paulo, SP",
    rating: "5.0"
  },
  {
    content: "Meu carro foi roubado e recuperado no mesmo dia. O rastreamento funcionou perfeitamente. Muito satisfeita!",
    author: "Ana Paula",
    location: "Belo Horizonte, MG",
    rating: "5.0"
  },
  {
    content: "Preço justo e serviço de qualidade. Já indiquei para toda minha família. AutoShield é confiança total.",
    author: "Roberto Lima",
    location: "Brasília, DF",
    rating: "5.0"
  },
  {
    content: "O chatbot resolve tudo rapidinho. Não preciso ficar esperando atendente. Tecnologia que funciona de verdade!",
    author: "Fernanda Costa",
    location: "Curitiba, PR",
    rating: "5.0"
  },
  {
    content: "Assistência 24h salvou minha vida. Pneu furou de madrugada e em 20 minutos estava resolvido. Perfeito!",
    author: "Pedro Oliveira",
    location: "Salvador, BA",
    rating: "5.0"
  },
  {
    content: "Migrei de um seguro tradicional e não me arrependo. Economia + qualidade. Só tenho elogios!",
    author: "Juliana Ferreira",
    location: "Fortaleza, CE",
    rating: "5.0"
  }
]

const stats = [
  {
    value: "4.8/5",
    label: "Avaliação Média",
    subtitle: "Google Reviews"
  },
  {
    value: "98%",
    label: "Satisfação",
    subtitle: "Pesquisa Interna"
  },
  {
    value: "2.3k+",
    label: "Avaliações",
    subtitle: "Últimos 12 meses"
  },
  {
    value: "95%",
    label: "Recomendação",
    subtitle: "NPS Score"
  }
]
</script>

<style scoped>
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
    transform: translateY(0px) scale(1);
  }
  50% {
    transform: translateY(-12px) scale(1.04);
  }
}
@keyframes pulse-slow {
  0%, 100% {
    opacity: 0.1;
  }
  50% {
    opacity: 0.3;
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
.animate-pulse-slow {
  animation: pulse-slow 4s ease-in-out infinite;
}
.animate-spin-slow {
  animation: spin-slow 7s linear infinite;
}
.bg-clip-text {
  -webkit-background-clip: text;
  background-clip: text;
}
@media (max-width: 1024px) {
  .rounded-2xl {
    border-radius: 1rem;
  }
}
</style>
