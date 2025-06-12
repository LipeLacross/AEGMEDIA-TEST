<!-- components/landing/FAQ.vue - Perguntas Frequentes -->
<template>
  <section class="bg-gray-50 py-16 lg:py-24">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          Perguntas Frequentes
        </h2>
        <p class="text-lg text-gray-600">
          Tire suas dúvidas sobre proteção veicular
        </p>
      </div>

      <div class="space-y-4">
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
        >
          <button
            @click="toggleFaq(index)"
            class="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
          >
            <span class="font-medium text-gray-900">{{ faq.question }}</span>
            <ChevronDownIcon
              :class="[
                'w-5 h-5 text-gray-500 transition-transform duration-200',
                { 'rotate-180': faq.isOpen }
              ]"
            />
          </button>
          <div
            v-show="faq.isOpen"
            class="px-6 pb-4 text-gray-600 leading-relaxed"
          >
            {{ faq.answer }}
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="text-center mt-12">
        <p class="text-gray-600 mb-4">Não encontrou sua resposta?</p>
        <button class="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
          Falar com Especialista
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const faqs = ref([
  {
    question: "O que é proteção veicular e como funciona?",
    answer: "Proteção veicular é uma forma de proteção mútua entre associados que se unem para cobrir prejuízos com veículos. Funciona através de rateio mensal entre os participantes, oferecendo cobertura para roubo, furto, colisão, incêndio e assistência 24h.",
    isOpen: false
  },
  {
    question: "Qual a diferença entre proteção veicular e seguro tradicional?",
    answer: "A proteção veicular é baseada em mutualismo e rateio, enquanto o seguro é um contrato com seguradora. A proteção veicular geralmente tem menor custo e maior flexibilidade, mas não é regulamentada pela SUSEP como os seguros tradicionais.",
    isOpen: false
  },
  {
    question: "Quais coberturas estão incluídas nos planos?",
    answer: "Nossos planos incluem cobertura para roubo, furto, colisão, incêndio, assistência 24h, guincho, chaveiro, rastreamento GPS, cobertura de terceiros e assistência mecânica. Algumas coberturas variam conforme o plano escolhido.",
    isOpen: false
  },
  {
    question: "Como funciona o processo de sinistro?",
    answer: "Em caso de sinistro, você deve comunicar imediatamente através do nosso aplicativo ou central 24h. Nossa equipe fará a análise e, aprovado o sinistro, o ressarcimento será feito conforme as condições do plano contratado.",
    isOpen: false
  },
  {
    question: "Existe carência para utilizar a proteção?",
    answer: "Sim, existe carência de 30 dias para sinistros de roubo/furto e 90 dias para colisão. Para assistência 24h e guincho, a cobertura é imediata após a aprovação da adesão.",
    isOpen: false
  },
  {
    question: "Posso cancelar a qualquer momento?",
    answer: "Sim, você pode cancelar sua adesão a qualquer momento sem multa ou taxas. O cancelamento é processado em até 30 dias após a solicitação formal.",
    isOpen: false
  },
  {
    question: "Quais veículos podem ser protegidos?",
    answer: "Aceitamos carros de passeio, motos, caminhões leves e veículos comerciais com até 15 anos de idade. Veículos modificados ou de uso especial passam por análise individual.",
    isOpen: false
  },
  {
    question: "Como é feito o rastreamento do veículo?",
    answer: "Instalamos um rastreador GPS gratuito em seu veículo, que permite monitoramento 24h através de nosso aplicativo. O sistema inclui botão de pânico e alertas de movimento não autorizado.",
    isOpen: false
  }
])

const toggleFaq = (index: number) => {
  faqs.value[index].isOpen = !faqs.value[index].isOpen
}
</script>
