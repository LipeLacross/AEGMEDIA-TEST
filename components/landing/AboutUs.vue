<!-- components/landing/AboutUs.vue - Versão Espetacular e Garantida -->
<template>
  <section id="sobre-nos" class="relative bg-gradient-to-br from-white via-primary-50 to-blue-50 py-10 lg:py-16 overflow-hidden">
    <!-- Background animado sutil e responsivo -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <div class="absolute -top-32 -left-32 w-64 h-64 bg-gradient-to-br from-primary-200 to-emerald-200 rounded-full opacity-20 blur-3xl animate-float"></div>
      <div class="absolute -bottom-32 -right-32 w-56 h-56 bg-gradient-to-br from-blue-200 to-primary-200 rounded-full opacity-15 blur-2xl animate-float animation-delay-2000"></div>
    </div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center max-w-3xl mx-auto mb-10">
        <div class="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-500 to-emerald-500 text-white rounded-full text-sm font-bold shadow-lg mb-4 animate-bounce-slow">
          <svg class="w-4 h-4 mr-2 animate-spin-slow" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
          </svg>
          Sobre a AutoShield
        </div>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4 leading-tight animate-fade-in-up">
          Liderança em Proteção Veicular Inteligente
        </h2>
        <p class="text-lg lg:text-xl text-gray-700">
          A AutoShield é referência nacional em soluções inovadoras para proteger seu veículo. Unimos tecnologia de ponta, atendimento humano 24h e inteligência artificial para garantir segurança, praticidade e tranquilidade em todo o Brasil.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
        <!-- Lado Esquerdo: Conteúdo -->
        <div>
          <div class="mb-8">
            <h3 class="text-2xl lg:text-3xl font-bold text-primary-600 mb-3">Nossa Missão</h3>
            <p class="text-gray-700 leading-relaxed text-base lg:text-lg">
              Democratizar o acesso à proteção veicular, oferecendo planos acessíveis, inovadores e personalizados. Utilizamos inteligência artificial e atendimento humano para entregar experiências seguras, ágeis e transparentes, superando as expectativas dos nossos associados.
            </p>
          </div>

          <div class="mb-8">
            <h3 class="text-2xl lg:text-3xl font-bold text-primary-600 mb-3">Nossos Valores</h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div class="flex items-start space-x-3">
                <CheckCircleIcon class="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1" />
                <span class="text-gray-700 font-medium">Segurança e satisfação em primeiro lugar</span>
              </div>
              <div class="flex items-start space-x-3">
                <CheckCircleIcon class="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1" />
                <span class="text-gray-700 font-medium">Ética e transparência em todos os processos</span>
              </div>
              <div class="flex items-start space-x-3">
                <CheckCircleIcon class="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1" />
                <span class="text-gray-700 font-medium">Inovação contínua e tecnologia de ponta</span>
              </div>
              <div class="flex items-start space-x-3">
                <CheckCircleIcon class="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1" />
                <span class="text-gray-700 font-medium">Atendimento ágil, humano e 24h</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Lado Direito: Imagem com overlay e animação -->
        <div class="relative rounded-3xl overflow-hidden shadow-2xl group min-h-[320px] flex items-center justify-center bg-gradient-to-br from-primary-50 to-blue-50">
          <div class="absolute -inset-3 bg-gradient-to-br from-primary-500 to-emerald-500 rounded-3xl opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500"></div>
            <div class="relative bg-white rounded-xl p-3 shadow-xl transform hover:scale-105 transition-all duration-500">

          <!-- Imagem com fallback -->
          <img
            src="/img/about-autoshield.webp"
            alt="Equipe AutoShield trabalhando"
            class="w-full h-auto object-cover rounded-3xl shadow-lg transition-transform duration-500 group-hover:scale-105"
            @load="imageLoaded = true"
            @error="handleImageError"
            loading="eager"
            draggable="false"
          />
            </div>

          <!-- Overlay badge -->
          <div class="absolute top-6 left-6 bg-white/95 backdrop-blur-md rounded-xl px-6 py-3 shadow-xl flex items-center space-x-3 animate-fade-in-up">
            <svg class="w-6 h-6 text-primary-500 animate-spin-slow" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
            <span class="text-xl lg:text-2xl font-black text-primary-600 tracking-wide drop-shadow">Bandeira AutoShield</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import CheckCircleIcon from 'vue-material-design-icons/CheckCircle.vue'
import { ref } from 'vue'

// Declaração das propriedades reativas
const imageLoaded = ref(false)

// Função para tratar erro de carregamento da imagem
const handleImageError = (event: Event) => {
  const img = event.target as HTMLImageElement
  console.log('Erro ao carregar imagem:', img.src)
  imageLoaded.value = false
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
    transform: translateY(-14px) scale(1.04);
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
  animation: float 7s ease-in-out infinite;
}

.animate-bounce-slow {
  animation: bounce-slow 2.5s ease-in-out infinite;
}

.animate-spin-slow {
  animation: spin-slow 7s linear infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.bg-clip-text {
  -webkit-background-clip: text;
  background-clip: text;
}

@media (max-width: 1024px) {
  .rounded-3xl {
    border-radius: 1.25rem;
  }
  .rounded-xl {
    border-radius: 0.75rem;
  }
}
</style>
