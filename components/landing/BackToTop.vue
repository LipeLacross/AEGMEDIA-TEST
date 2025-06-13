<!-- components/base/BackToTop.vue - Versão Responsiva Lado Esquerdo -->
<template>
  <transition name="slide-up">
    <button
      v-if="showButton"
      @click="scrollToTop"
      :class="buttonClasses"
      aria-label="Voltar ao topo"
    >
      <!-- Ícone de seta para cima -->
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  </transition>
</template>

<script setup lang="ts">
interface Props {
  position?: 'left' | 'right'
  threshold?: number
}

const props = withDefaults(defineProps<Props>(), {
  position: 'left',
  threshold: 200
})

const showButton = ref(false)

// Classes dinâmicas baseadas na posição com responsividade
const buttonClasses = computed(() => {
  const baseClasses = 'fixed z-50 bg-primary-600 hover:bg-primary-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl'

  const positionClasses = {
    left: 'bottom-6 left-4 sm:left-6 lg:left-8', // Lado esquerdo responsivo
    right: 'bottom-6 right-4 sm:right-6 lg:right-8' // Lado direito responsivo
  }

  return `${baseClasses} ${positionClasses[props.position]}`
})

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

const handleScroll = () => {
  showButton.value = window.scrollY > props.threshold
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll() // Verificação inicial
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.slide-up-enter-active, .slide-up-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-up-enter-from, .slide-up-leave-to {
  opacity: 0;
  transform: translateY(20px) scale(0.9);
}

/* Responsividade adicional para mobile */
@media (max-width: 640px) {
  .fixed {
    bottom: 1rem !important;
    left: 1rem !important;
  }
}

/* Ajuste para tablets */
@media (min-width: 641px) and (max-width: 1024px) {
  .fixed {
    bottom: 1.5rem !important;
    left: 1.5rem !important;
  }
}
</style>
