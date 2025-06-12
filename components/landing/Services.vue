<!-- components/landing/Services.vue - Seção de Serviços -->
<template>
  <section class="bg-gray-50 py-16 lg:py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          Por que Escolher a AutoShield?
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Nossa proteção veicular vai além do básico. Oferecemos tecnologia, conveniência e tranquilidade.
        </p>
      </div>

      <!-- Serviços Principais -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <div
          v-for="(service, index) in mainServices"
          :key="index"
          class="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
        >
          <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
            <component :is="service.icon" class="w-6 h-6 text-primary-500" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-4">{{ service.title }}</h3>
          <p class="text-gray-600 leading-relaxed">{{ service.description }}</p>
        </div>
      </div>

      <!-- Tecnologia e Inovação -->
      <div class="bg-white rounded-2xl p-8 lg:p-12 mb-16">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
              Tecnologia que Protege
            </h3>
            <ul class="space-y-4">
              <ServiceItem title="Assistente Virtual com IA">
                Atendimento 24h automatizado que resolve suas dúvidas instantaneamente
              </ServiceItem>
              <ServiceItem title="Rastreamento GPS Avançado">
                Monitoramento em tempo real com alertas inteligentes no seu smartphone
              </ServiceItem>
              <ServiceItem title="App Exclusivo">
                Gerencie sua proteção, solicite assistência e acompanhe sinistros
              </ServiceItem>
              <ServiceItem title="Análise Preditiva">
                IA identifica padrões de risco e sugere medidas preventivas
              </ServiceItem>
            </ul>
          </div>
          <div class="relative">
            <img
              src="/img/technology-autoshield.webp"
              alt="Tecnologia AutoShield"
              class="w-full h-auto rounded-xl shadow-lg"
              width="500"
              height="400"
            />
          </div>
        </div>
      </div>

      <!-- Diferenciação -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- AutoShield vs Concorrência -->
        <div class="bg-white rounded-xl p-8 shadow-sm">
          <h3 class="text-xl font-semibold text-gray-900 mb-6 text-center">
            AutoShield vs Concorrência
          </h3>
          <div class="space-y-4">
            <div class="flex items-center justify-between py-2 border-b border-gray-100">
              <span class="text-gray-600">Atendimento com IA 24h</span>
              <div class="flex space-x-4">
                <CheckCircleIcon class="w-5 h-5 text-primary-500" />
                <span class="w-5 h-5 flex items-center justify-center">
                  <span class="w-2 h-2 bg-gray-300 rounded-full"></span>
                </span>
              </div>
            </div>
            <div class="flex items-center justify-between py-2 border-b border-gray-100">
              <span class="text-gray-600">Rastreamento GPS Gratuito</span>
              <div class="flex space-x-4">
                <CheckCircleIcon class="w-5 h-5 text-primary-500" />
                <span class="w-5 h-5 flex items-center justify-center">
                  <span class="w-2 h-2 bg-red-400 rounded-full"></span>
                </span>
              </div>
            </div>
            <div class="flex items-center justify-between py-2 border-b border-gray-100">
              <span class="text-gray-600">App Mobile Completo</span>
              <div class="flex space-x-4">
                <CheckCircleIcon class="w-5 h-5 text-primary-500" />
                <span class="w-5 h-5 flex items-center justify-center">
                  <span class="w-2 h-2 bg-gray-300 rounded-full"></span>
                </span>
              </div>
            </div>
            <div class="flex items-center justify-between py-2">
              <span class="text-gray-600">Preço Justo</span>
              <div class="flex space-x-4">
                <CheckCircleIcon class="w-5 h-5 text-primary-500" />
                <span class="w-5 h-5 flex items-center justify-center">
                  <span class="w-2 h-2 bg-red-400 rounded-full"></span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Estatísticas -->
        <div class="bg-primary-500 rounded-xl p-8 text-white">
          <h3 class="text-xl font-semibold mb-6 text-center">
            Nossos Números
          </h3>
          <div class="grid grid-cols-2 gap-4">
            <div class="text-center">
              <div class="text-3xl font-bold mb-2">50k+</div>
              <div class="text-primary-100 text-sm">Veículos Protegidos</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold mb-2">4.8★</div>
              <div class="text-primary-100 text-sm">Avaliação Média</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold mb-2">98%</div>
              <div class="text-primary-100 text-sm">Satisfação</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold mb-2">24h</div>
              <div class="text-primary-100 text-sm">Atendimento</div>
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
    title: 'Proteção Completa',
    description: 'Cobertura total contra roubo, furto, colisão, incêndio e mais. Sua tranquilidade garantida 24 horas por dia.'
  },
  {
    icon: MapPinIcon,
    title: 'Rastreamento GPS',
    description: 'Localização em tempo real do seu veículo com alertas inteligentes e botão de pânico via aplicativo.'
  },
  {
    icon: PhoneIcon,
    title: 'Assistência 24h',
    description: 'Guincho, chaveiro, pane seca e mecânico disponíveis a qualquer hora, em qualquer lugar do Brasil.'
  },
  {
    icon: CpuChipIcon,
    title: 'Inteligência Artificial',
    description: 'Chatbot especializado que resolve suas dúvidas e agiliza processos usando tecnologia avançada.'
  },
  {
    icon: DevicePhoneMobileIcon,
    title: 'App Exclusivo',
    description: 'Gerencie sua proteção, solicite serviços e acompanhe sinistros direto do seu smartphone.'
  },
  {
    icon: ClockIcon,
    title: 'Atendimento Rápido',
    description: 'Resposta imediata em emergências e processos ágeis para aprovação de sinistros.'
  }
]
</script>
