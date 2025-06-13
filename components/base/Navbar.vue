<!-- components/base/Navbar.vue -->
<template>
  <nav class="fixed top-0 w-full z-50 transition-all duration-300" :class="navbarClasses">
    <!-- Background com blur e gradiente -->
    <div class="absolute inset-0 bg-gradient-to-r from-white/95 via-white/90 to-white/95 backdrop-blur-xl border-b border-white/20"></div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 lg:h-20">

        <!-- Logo -->
        <NuxtLink to="/" class="flex-shrink-0 group relative z-10">
          <div class="relative transform transition-all duration-300 group-hover:scale-110">
            <NuxtImg
              src="/img/autoshield.png"
              width="50"
              alt="AutoShield Logo"
              class="h-12 lg:h-18 w-auto relative z-10"
            />
          </div>
        </NuxtLink>

        <!-- Navegação Desktop -->
        <div class="hidden lg:flex items-center gap-2">
          <a
            v-for="link in mainLinks"
            :key="link.name"
            href="javascript:void(0)"
            class="relative px-4 py-2 text-gray-700 font-medium transition-all duration-300 rounded-lg group hover:text-primary-600"
            @click.prevent="scrollToSection(link.id)"
          >
            <!-- Background hover effect -->
            <div class="absolute inset-0 bg-gradient-to-r from-primary-50 to-emerald-50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-lg"></div>

            <!-- Text -->
            <span class="relative z-10">{{ link.name }}</span>

            <!-- Underline animation -->
            <div class="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-emerald-500 group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
          </a>
        </div>

        <!-- Menu Mobile Button -->
        <div class="lg:hidden">
          <button
            @click="toggleMobileMenu"
            class="relative p-2 text-gray-600 hover:text-primary-600 transition-colors duration-300"
            aria-label="Menu"
          >
            <!-- Animated hamburger -->
            <div class="w-6 h-6 flex flex-col justify-center items-center">
              <span
                class="w-5 h-0.5 bg-current transform transition-all duration-300"
                :class="{ 'rotate-45 translate-y-1.5': mobileMenuOpen }"
              ></span>
              <span
                class="w-5 h-0.5 bg-current mt-1 transition-all duration-300"
                :class="{ 'opacity-0': mobileMenuOpen }"
              ></span>
              <span
                class="w-5 h-0.5 bg-current mt-1 transform transition-all duration-300"
                :class="{ '-rotate-45 -translate-y-1.5': mobileMenuOpen }"
              ></span>
            </div>
          </button>
        </div>

        <!-- CTA Button Desktop -->
        <div class="hidden lg:flex items-center gap-3">
          <a
            href="https://wa.me/5574981256120"
            target="_blank"
            rel="noopener noreferrer"
            class="group relative overflow-hidden px-6 py-3 bg-gradient-to-r from-primary-500 via-primary-600 to-emerald-600 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-primary-500/25 transform hover:scale-105"
          >
            <!-- Background animation -->
            <div class="absolute inset-0 bg-gradient-to-r from-emerald-600 via-primary-600 to-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <!-- WhatsApp icon e texto -->
            <div class="relative z-10 flex items-center gap-2">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
              </svg>
              <span>Falar com Especialista</span>
            </div>
          </a>
        </div>
      </div>
    </div>

    <!-- Menu Mobile -->
    <div
      ref="mobileMenu"
      class="lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-gray-200 transition-all duration-300 overflow-hidden"
      :class="{ 'max-h-96 opacity-100': mobileMenuOpen, 'max-h-0 opacity-0': !mobileMenuOpen }"
    >
      <div class="px-4 py-6 space-y-4">
        <a
          v-for="link in mainLinks"
          :key="link.name"
          href="javascript:void(0)"
          class="block px-4 py-3 text-gray-700 font-medium rounded-lg hover:bg-primary-50 hover:text-primary-600 transition-all duration-300"
          @click="scrollToSection(link.id), toggleMobileMenu()"
        >
          {{ link.name }}
        </a>

        <!-- CTA Mobile -->
        <a
          href="https://wa.me/5574981256120"
          target="_blank"
          rel="noopener noreferrer"
          class="block w-full text-center px-6 py-3 bg-gradient-to-r from-primary-500 to-emerald-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
        >
          Falar com Especialista
        </a>
      </div>
    </div>

    <!-- Progress bar -->
    <div class="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary-500 to-emerald-500 transition-all duration-300" :style="{ width: scrollProgress + '%' }"></div>
  </nav>
</template>

<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'

const mobileMenuOpen = ref(false)
const mobileMenu = ref<HTMLElement>()
const scrollProgress = ref(0)
const scrollY = ref(0)

const mainLinks = [
  { name: 'Planos', id: 'planos' },
  { name: 'Serviços', id: 'coberturas' },
  { name: 'Sobre Nós', id: 'sobre-nos' },
  { name: 'FAQ', id: 'faq' }
]

// Classes dinâmicas do navbar baseadas no scroll
const navbarClasses = computed(() => ({
  'shadow-lg shadow-black/5': scrollY.value > 20,
  'py-2': scrollY.value > 50
}))

// Função para scroll suave
const scrollToSection = (id: string) => {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

// Monitorar scroll para efeitos
const updateScrollPosition = () => {
  scrollY.value = window.scrollY

  // Calcular progresso da página
  const windowHeight = window.innerHeight
  const documentHeight = document.documentElement.scrollHeight
  const scrollTop = window.scrollY
  const trackLength = documentHeight - windowHeight
  scrollProgress.value = Math.min((scrollTop / trackLength) * 100, 100)
}

// Event listeners
onMounted(() => {
  window.addEventListener('scroll', updateScrollPosition, { passive: true })
  updateScrollPosition()
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateScrollPosition)
})

// Fechar menu mobile ao clicar fora
onClickOutside(mobileMenu, () => {
  mobileMenuOpen.value = false
})
</script>
