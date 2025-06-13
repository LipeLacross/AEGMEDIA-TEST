<!-- components/landing/FAQ.vue - FAQ Compacto, Responsivo e Espetacular -->
<template>
  <section class="relative bg-gradient-to-br from-white via-primary-50 to-blue-50 py-8 lg:py-12 overflow-hidden">
    <!-- Fundo animado sutil -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <div class="absolute -top-16 -right-16 w-32 h-32 bg-gradient-to-r from-primary-200 to-emerald-200 rounded-full blur-2xl opacity-20 animate-float"></div>
      <div class="absolute -bottom-16 -left-16 w-24 h-24 bg-gradient-to-r from-blue-200 to-primary-200 rounded-full blur-2xl opacity-15 animate-float animation-delay-2000"></div>
    </div>
    <div class="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-8">
        <div class="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-primary-500 to-emerald-500 text-white rounded-full text-xs font-bold shadow-lg mb-3 animate-bounce-slow">
          <svg class="w-3 h-3 mr-2 animate-spin-slow" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
          </svg>
          Perguntas Frequentes
        </div>
        <h2 class="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-2 leading-tight animate-fade-in-up">
          Dúvidas sobre Proteção Veicular
        </h2>
        <p class="text-base lg:text-lg text-gray-700 max-w-xl mx-auto leading-relaxed animate-fade-in-up animation-delay-300">
          Tire suas dúvidas e conheça as vantagens da AutoShield.
        </p>
      </div>
      <!-- FAQ Accordion compacto -->
      <div class="space-y-2">
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden animate-fade-in-up"
          :style="{ 'animation-delay': `${index * 80}ms` }"
        >
          <button
            class="w-full px-4 py-3 text-left flex justify-between items-center hover:bg-primary-50 focus:outline-none focus:bg-primary-50 transition-colors"
            @click="toggleFaq(index)"
          >
            <span class="font-medium text-gray-900 text-sm">{{ faq.question }}</span>
            <ChevronDownIcon
              :class="[
                'w-4 h-4 text-gray-500 transition-transform duration-200',
                { 'rotate-180': faq.isOpen },
              ]"
            />
          </button>
          <transition name="slide-faq">
            <div
              v-show="faq.isOpen"
              class="px-4 pb-3 text-gray-600 text-sm leading-relaxed"
            >
              {{ faq.answer }}
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ChevronDownIcon from 'vue-material-design-icons/ChevronDown.vue'

const faqs = ref([
  {
    question: 'O que é proteção veicular e como funciona?',
    answer: 'Proteção veicular é uma forma de proteção mútua entre associados que se unem para cobrir prejuízos com veículos. Funciona através de rateio mensal entre os participantes, oferecendo cobertura para roubo, furto, colisão, incêndio e assistência 24h.',
    isOpen: false,
  },
  {
    question: 'Qual a diferença entre proteção veicular e seguro tradicional?',
    answer: 'A proteção veicular é baseada em mutualismo e rateio, enquanto o seguro é um contrato com seguradora. A proteção veicular geralmente tem menor custo e maior flexibilidade, mas não é regulamentada pela SUSEP como os seguros tradicionais.',
    isOpen: false,
  },
  {
    question: 'Quais coberturas estão incluídas nos planos?',
    answer: 'Nossos planos incluem cobertura para roubo, furto, colisão, incêndio, assistência 24h, guincho, chaveiro, rastreamento GPS, cobertura de terceiros e assistência mecânica. Algumas coberturas variam conforme o plano escolhido.',
    isOpen: false,
  },
  {
    question: 'Como funciona o processo de sinistro?',
    answer: 'Em caso de sinistro, você deve comunicar imediatamente através do nosso aplicativo ou central 24h. Nossa equipe fará a análise e, aprovado o sinistro, o ressarcimento será feito conforme as condições do plano contratado.',
    isOpen: false,
  },
  {
    question: 'Existe carência para utilizar a proteção?',
    answer: 'Sim, existe carência de 30 dias para sinistros de roubo/furto e 90 dias para colisão. Para assistência 24h e guincho, a cobertura é imediata após a aprovação da adesão.',
    isOpen: false,
  },
  {
    question: 'Posso cancelar a qualquer momento?',
    answer: 'Sim, você pode cancelar sua adesão a qualquer momento sem multa ou taxas. O cancelamento é processado em até 30 dias após a solicitação formal.',
    isOpen: false,
  }
])

const toggleFaq = (index: number) => {
  const item = faqs.value[index]
  if (item) {
    item.isOpen = !item.isOpen
  }
}
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
.slide-faq-enter-active, .slide-faq-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.slide-faq-enter-from, .slide-faq-leave-to {
  opacity: 0;
  transform: translateY(-10px) scale(0.98);
}
.bg-clip-text {
  -webkit-background-clip: text;
  background-clip: text;
}
@media (max-width: 1024px) {
  .rounded-xl {
    border-radius: 0.75rem;
  }
}
</style>
