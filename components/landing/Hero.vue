<!-- components/landing/Hero.vue - Seção Hero Principal -->
<template>
  <section class="relative bg-gradient-to-br from-primary-50 to-blue-50 overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Conteúdo -->
        <div class="text-center lg:text-left">
          <h1 class="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Proteção Veicular
            <span class="text-primary-500 block">Inteligente</span>
            e Completa
          </h1>

          <p class="text-xl text-gray-600 mb-8 leading-relaxed">
            Proteja seu veículo com nossa solução inovadora que combina tecnologia avançada,
            assistência 24h e cobertura completa por um preço justo.
          </p>

          <!-- Benefícios Principais -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div class="flex items-center space-x-3">
              <div class="flex-shrink-0 w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center">
                <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </div>
              <span class="text-gray-700 font-medium">Rastreamento GPS Gratuito</span>
            </div>

            <div class="flex items-center space-x-3">
              <div class="flex-shrink-0 w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center">
                <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </div>
              <span class="text-gray-700 font-medium">Assistência 24h</span>
            </div>

            <div class="flex items-center space-x-3">
              <div class="flex-shrink-0 w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center">
                <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </div>
              <span class="text-gray-700 font-medium">Cobertura Completa</span>
            </div>

            <div class="flex items-center space-x-3">
              <div class="flex-shrink-0 w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center">
                <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </div>
              <span class="text-gray-700 font-medium">A partir de R$ 89/mês</span>
            </div>
          </div>

          <!-- CTAs -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button class="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center space-x-2">
              <span>Fazer Cotação Gratuita</span>
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>

            <button class="border-2 border-gray-300 hover:border-primary-500 text-gray-700 hover:text-primary-500 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center space-x-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M19 10a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Falar no WhatsApp</span>
            </button>
          </div>

          <!-- Prova Social -->
          <div class="mt-8 flex items-center justify-center lg:justify-start space-x-6">
            <div class="text-center">
              <div class="text-2xl font-bold text-primary-500">50k+</div>
              <div class="text-sm text-gray-600">Veículos Protegidos</div>
            </div>
            <div class="text-center">
              <div class="text-2xl font-bold text-primary-500">4.8</div>
              <div class="text-sm text-gray-600">Avaliação Google</div>
            </div>
            <div class="text-center">
              <div class="text-2xl font-bold text-primary-500">98%</div>
              <div class="text-sm text-gray-600">Satisfação</div>
            </div>
          </div>
        </div>

        <!-- Imagem -->
        <div class="relative">
          <div class="relative z-10">
            <img
              src="/img/hero-autoshield.webp"
              alt="Proteção Veicular AutoShield"
              class="w-full h-auto rounded-2xl shadow-2xl"
              width="600"
              height="400"
            />
          </div>

          <!-- Elementos Decorativos -->
          <div class="absolute -top-4 -right-4 w-72 h-72 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
          <div class="absolute -bottom-4 -left-4 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
        </div>
      </div>
    </div>

    <!-- Elementos de Fundo -->
    <div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      <div class="absolute -top-24 -right-24 w-96 h-96 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-50"></div>
      <div class="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-50"></div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Componente sem lógica específica por enquanto
</script>
