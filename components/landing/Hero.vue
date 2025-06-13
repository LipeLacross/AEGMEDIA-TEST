<!-- components/landing/Hero.vue - Versão com Botões Igualados e Posicionamento Ajustado -->
<template>
  <section class="relative min-h-screen bg-gradient-to-br from-primary-50 via-white to-blue-50 overflow-hidden">
    <!-- Particles de fundo animados -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div class="absolute top-40 left-40 w-80 h-80 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
    </div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-32">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        <!-- Conteúdo Principal -->
        <div class="text-center lg:text-left space-y-6 lg:space-y-8">

          <!-- Badge Premium - Posição Ajustada -->
          <div class="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 bg-gradient-to-r from-primary-500 to-emerald-500 text-white rounded-full text-xs sm:text-sm font-semibold shadow-lg mt-2">
            <svg class="w-3 h-3 sm:w-4 sm:h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
            #1 em Proteção Veicular com IA
          </div>

          <!-- Título Principal com Tamanho Reduzido -->
          <div class="space-y-2 lg:space-y-4">
            <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
              <span class="block opacity-0 animate-fade-in-up">Proteção Veicular</span>
              <span class="block bg-gradient-to-r from-primary-600 to-emerald-600 bg-clip-text text-transparent opacity-0 animate-fade-in-up animation-delay-300">Inteligente</span>
              <span class="block opacity-0 animate-fade-in-up animation-delay-600">e Completa</span>
            </h1>
          </div>

          <!-- Subtítulo -->
          <p class="text-lg sm:text-xl lg:text-xl text-gray-700 leading-relaxed opacity-0 animate-fade-in-up animation-delay-900 max-w-2xl mx-auto lg:mx-0">
            Revolucione a proteção do seu veículo com nossa <span class="font-bold text-primary-600">IA avançada</span>,
            cobertura 24h e tecnologia de ponta por um preço que cabe no seu bolso.
          </p>

          <!-- Benefícios com Animações -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4 opacity-0 animate-fade-in-up animation-delay-1200">
            <div class="group flex items-center space-x-3 p-2 lg:p-3 rounded-xl hover:bg-white/60 transition-all duration-300">
              <div class="flex-shrink-0 w-7 h-7 lg:w-8 lg:h-8 bg-gradient-to-r from-primary-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <svg class="w-4 h-4 lg:w-5 lg:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </div>
              <span class="text-sm lg:text-base text-gray-800 font-semibold">GPS Gratuito + IA</span>
            </div>

            <div class="group flex items-center space-x-3 p-2 lg:p-3 rounded-xl hover:bg-white/60 transition-all duration-300">
              <div class="flex-shrink-0 w-7 h-7 lg:w-8 lg:h-8 bg-gradient-to-r from-primary-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <svg class="w-4 h-4 lg:w-5 lg:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </div>
              <span class="text-sm lg:text-base text-gray-800 font-semibold">Assistência 24h Inteligente</span>
            </div>

            <div class="group flex items-center space-x-3 p-2 lg:p-3 rounded-xl hover:bg-white/60 transition-all duration-300">
              <div class="flex-shrink-0 w-7 h-7 lg:w-8 lg:h-8 bg-gradient-to-r from-primary-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <svg class="w-4 h-4 lg:w-5 lg:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </div>
              <span class="text-sm lg:text-base text-gray-800 font-semibold">Cobertura Total</span>
            </div>

            <div class="group flex items-center space-x-3 p-2 lg:p-3 rounded-xl hover:bg-white/60 transition-all duration-300">
              <div class="flex-shrink-0 w-7 h-7 lg:w-8 lg:h-8 bg-gradient-to-r from-primary-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <svg class="w-4 h-4 lg:w-5 lg:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </div>
              <span class="text-sm lg:text-base text-gray-800 font-semibold">A partir de <span class="text-primary-600 font-bold">R$ 89/mês</span></span>
            </div>
          </div>

          <!-- CTAs com Tamanhos Igualados -->
          <div class="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start opacity-0 animate-fade-in-up animation-delay-1500">

            <!-- Botão Principal -->
            <button
              @click="scrollToContact"
              class="group relative overflow-hidden bg-gradient-to-r from-primary-500 via-primary-600 to-emerald-600 text-white px-5 sm:px-6 py-3 sm:py-3.5 rounded-lg font-bold text-base lg:text-lg shadow-xl hover:shadow-primary-500/25 transform hover:scale-105 transition-all duration-300"
            >
              <!-- Background animado -->
              <div class="absolute inset-0 bg-gradient-to-r from-emerald-600 via-primary-600 to-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <!-- Shimmer effect -->
              <div class="absolute inset-0 -skew-x-12 translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700"></div>

              <!-- Conteúdo do botão -->
              <div class="relative z-10 flex items-center justify-center space-x-2">
                <svg class="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span class="group-hover:translate-x-1 transition-transform duration-300">Fazer Cotação Gratuita</span>
                <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>

              <!-- Pulse ring -->
              <div class="absolute inset-0 rounded-lg border-2 border-primary-400 opacity-0 group-hover:opacity-100 animate-ping"></div>
            </button>

            <!-- Botão WhatsApp - TAMANHO IGUALADO -->
            <a
              href="https://wa.me/5574981256120"
              target="_blank"
              rel="noopener noreferrer"
              class="group relative overflow-hidden border-2 border-green-500 bg-white hover:bg-green-500 text-green-600 hover:text-white px-5 sm:px-6 py-3 sm:py-3.5 rounded-lg font-bold text-base lg:text-lg transition-all duration-300 hover:shadow-xl hover:shadow-green-500/25 transform hover:scale-105"
            >
              <!-- Conteúdo do botão -->
              <div class="relative z-10 flex items-center justify-center space-x-2">
                <svg class="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
                </svg>
                <span class="group-hover:translate-x-1 transition-transform duration-300 hidden sm:inline">Falar no WhatsApp</span>
                <span class="group-hover:translate-x-1 transition-transform duration-300 sm:hidden">WhatsApp</span>
              </div>
            </a>
          </div>

          <!-- Prova Social Premium -->
          <div class="mt-8 lg:mt-12 opacity-0 animate-fade-in-up animation-delay-1800">
            <p class="text-xs sm:text-sm text-gray-500 mb-3 lg:mb-4 text-center lg:text-left">Confiado por mais de 50.000 motoristas</p>

            <div class="flex items-center justify-center lg:justify-start space-x-4 lg:space-x-8">
              <div class="group text-center transform hover:scale-105 transition-transform duration-300">
                <div class="text-2xl lg:text-3xl font-black bg-gradient-to-r from-primary-600 to-emerald-600 bg-clip-text text-transparent">50k+</div>
                <div class="text-xs lg:text-sm text-gray-600 font-medium">Veículos Protegidos</div>
              </div>

              <div class="group text-center transform hover:scale-105 transition-transform duration-300">
                <div class="flex items-center justify-center mb-1">
                  <span class="text-2xl lg:text-3xl font-black bg-gradient-to-r from-primary-600 to-emerald-600 bg-clip-text text-transparent">4.8</span>
                  <svg class="w-5 h-5 lg:w-6 lg:h-6 text-yellow-500 ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                </div>
                <div class="text-xs lg:text-sm text-gray-600 font-medium">Avaliação Google</div>
              </div>

              <div class="group text-center transform hover:scale-105 transition-transform duration-300">
                <div class="text-2xl lg:text-3xl font-black bg-gradient-to-r from-primary-600 to-emerald-600 bg-clip-text text-transparent">98%</div>
                <div class="text-xs lg:text-sm text-gray-600 font-medium">Satisfação</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Imagem com Overlays Ampliados - POSIÇÃO AJUSTADA -->
        <div class="relative lg:ml-8 mt-4 lg:-mt-40 animate-fade-in-up animation-delay-2100">
          <!-- Card principal da imagem -->
          <div class="relative group">
            <!-- Glow effect de fundo -->
            <div class="absolute -inset-4 bg-gradient-to-r from-primary-500 to-emerald-500 rounded-2xl lg:rounded-3xl opacity-20 group-hover:opacity-30 blur-2xl transition-opacity duration-500"></div>

            <!-- Container da imagem -->
            <div class="relative bg-white rounded-2xl lg:rounded-3xl p-2 lg:p-3 shadow-2xl transform group-hover:scale-105 transition-all duration-500">
              <img
                src="/img/hero-autoshield.webp"
                alt="Proteção Veicular AutoShield com IA"
                class="w-full h-auto rounded-xl lg:rounded-2xl"
                width="600"
                height="400"
                loading="eager"
              />

              <!-- Overlay "IA Online 24h" - AMPLIADO -->
              <div class="absolute top-4 left-4 lg:top-6 lg:left-6 bg-white/95 backdrop-blur-md rounded-lg lg:rounded-xl p-4 lg:p-6 shadow-xl transform hover:scale-105 transition-all duration-300">
                <div class="flex items-center space-x-3">
                  <div class="w-3 h-3 lg:w-4 lg:h-4 bg-green-500 rounded-full animate-pulse shadow-lg"></div>
                  <span class="text-base lg:text-lg font-bold text-gray-800 whitespace-nowrap">IA Online 24h</span>
                </div>
              </div>

              <!-- Overlay "R$ 89 por mês" - AMPLIADO -->
              <div class="absolute bottom-4 right-4 lg:bottom-6 lg:right-6 bg-gradient-to-r from-primary-500 via-primary-600 to-emerald-500 text-white rounded-lg lg:rounded-xl p-4 lg:p-6 shadow-xl transform hover:scale-105 transition-all duration-300">
                <div class="text-center">
                  <div class="text-xl lg:text-2xl font-black leading-tight">R$ 89</div>
                  <div class="text-sm lg:text-base opacity-95 font-medium">por mês</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Elementos decorativos flutuantes -->
          <div class="absolute -top-4 -right-4 lg:-top-8 lg:-right-8 w-24 h-24 lg:w-32 lg:h-32 bg-gradient-to-br from-primary-200 to-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
          <div class="absolute -bottom-4 -left-4 lg:-bottom-8 lg:-left-8 w-16 h-16 lg:w-24 lg:h-24 bg-gradient-to-br from-blue-200 to-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float animation-delay-2000"></div>
        </div>
      </div>
    </div>

    <!-- Indicador de scroll -->
    <div class="absolute bottom-4 lg:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <svg class="w-5 h-5 lg:w-6 lg:h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </div>
  </section>
</template>

<script setup lang="ts">
// Função para scroll suave até o formulário de contato
const scrollToContact = () => {
  const contactSection = document.getElementById('contato')
  if (contactSection) {
    contactSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
}

// Animações e efeitos visuais
onMounted(() => {
  // Adicionar classes de animação após o mount
  const animatedElements = document.querySelectorAll('.animate-fade-in-up')
  animatedElements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add('opacity-100')
      el.classList.remove('opacity-0')
    }, index * 300)
  })
})
</script>

<style scoped>
/* Animações customizadas */
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

@keyframes blob {
  0%, 100% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
}

.animate-blob {
  animation: blob 7s infinite;
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animation-delay-300 {
  animation-delay: 0.3s;
}

.animation-delay-600 {
  animation-delay: 0.6s;
}

.animation-delay-900 {
  animation-delay: 0.9s;
}

.animation-delay-1200 {
  animation-delay: 1.2s;
}

.animation-delay-1500 {
  animation-delay: 1.5s;
}

.animation-delay-1800 {
  animation-delay: 1.8s;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}

/* Gradiente de texto */
.bg-clip-text {
  -webkit-background-clip: text;
  background-clip: text;
}

/* Hover effects */
.group:hover .group-hover\:scale-110 {
  transform: scale(1.1);
}

.group:hover .group-hover\:translate-x-1 {
  transform: translateX(0.25rem);
}

.group:hover .group-hover\:rotate-12 {
  transform: rotate(12deg);
}

/* Responsividade adicional */
@media (max-width: 640px) {
  .min-h-screen {
    min-height: 100vh;
  }
}

@media (max-width: 480px) {
  .px-4 {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
</style>
