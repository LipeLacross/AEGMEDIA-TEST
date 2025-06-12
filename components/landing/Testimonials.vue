<!-- components/landing/Testimonials.vue - Depoimentos -->
<template>
  <section class="bg-white py-16 lg:py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          O que Nossos Clientes Dizem
        </h2>
        <p class="text-lg text-gray-600">
          Mais de 50.000 motoristas confiam na AutoShield
        </p>
      </div>

      <!-- Depoimentos Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <div
          v-for="(testimonial, index) in testimonials"
          :key="index"
          class="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow"
        >
          <!-- Estrelas -->
          <div class="flex items-center mb-4">
            <div class="flex space-x-1">
              <StarIcon
                v-for="i in 5"
                :key="i"
                class="w-5 h-5 text-yellow-400 fill-current"
              />
            </div>
            <span class="ml-2 text-sm text-gray-600">{{ testimonial.rating }}</span>
          </div>

          <!-- Depoimento -->
          <blockquote class="text-gray-700 mb-6 italic">
            "{{ testimonial.content }}"
          </blockquote>

          <!-- Autor -->
          <div class="flex items-center">
            <div class="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
              <span class="text-primary-500 font-semibold">{{ testimonial.author.charAt(0) }}</span>
            </div>
            <div class="ml-3">
              <div class="font-semibold text-gray-900">{{ testimonial.author }}</div>
              <div class="text-sm text-gray-600">{{ testimonial.location }}</div>
            </div>
          </div>

          <!-- Verificado -->
          <div class="mt-4 flex items-center text-sm text-primary-500">
            <CheckCircleIcon class="w-4 h-4 mr-1" />
            <span>Cliente Verificado</span>
          </div>
        </div>
      </div>

      <!-- Estatísticas de Satisfação -->
      <div class="bg-primary-50 rounded-2xl p-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <div class="text-3xl font-bold text-primary-500 mb-2">4.8/5</div>
            <div class="text-gray-600">Avaliação Média</div>
            <div class="text-sm text-gray-500 mt-1">Google Reviews</div>
          </div>
          <div>
            <div class="text-3xl font-bold text-primary-500 mb-2">98%</div>
            <div class="text-gray-600">Satisfação</div>
            <div class="text-sm text-gray-500 mt-1">Pesquisa Interna</div>
          </div>
          <div>
            <div class="text-3xl font-bold text-primary-500 mb-2">2.3k+</div>
            <div class="text-gray-600">Avaliações</div>
            <div class="text-sm text-gray-500 mt-1">Últimos 12 meses</div>
          </div>
          <div>
            <div class="text-3xl font-bold text-primary-500 mb-2">95%</div>
            <div class="text-gray-600">Recomendação</div>
            <div class="text-sm text-gray-500 mt-1">NPS Score</div>
          </div>
        </div>
      </div>

      <!-- Cases de Sucesso -->
      <div class="mt-16">
        <h3 class="text-2xl font-bold text-gray-900 text-center mb-8">
          Cases de Sucesso
        </h3>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div class="bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl p-8 text-white">
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <ShieldCheckIcon class="w-6 h-6" />
              </div>
              <div>
                <h4 class="font-semibold text-lg mb-2">Recuperação em Tempo Record</h4>
                <p class="text-primary-100 mb-4">
                  Carro roubado recuperado em menos de 2 horas graças ao nosso sistema de rastreamento avançado.
                </p>
                <div class="text-sm">
                  <strong>João Silva</strong> - São Paulo, SP
                </div>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-8 text-white">
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <ClockIcon class="w-6 h-6" />
              </div>
              <div>
                <h4 class="font-semibold text-lg mb-2">Assistência Imediata</h4>
                <p class="text-blue-100 mb-4">
                  Pane na estrada resolvida em 30 minutos. Atendimento rápido e profissional mesmo de madrugada.
                </p>
                <div class="text-sm">
                  <strong>Maria Santos</strong> - Rio de Janeiro, RJ
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
import { StarIcon, CheckCircleIcon, ShieldCheckIcon, ClockIcon } from '@heroicons/vue/24/solid'

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
</script>
