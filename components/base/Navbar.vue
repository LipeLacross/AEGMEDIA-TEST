<template>
  <nav class="sticky top-0 bg-white/95 backdrop-blur-md z-50 shadow-sm">
    <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 lg:h-20">
        <!-- Logo -->
        <NuxtLink to="/" class="flex-shrink-0 hover:opacity-80 transition-opacity">
          <NuxtImg
            src="/img/logo/nefa.svg"
            width="112"
            height="48"
            alt="NEFA Logo"
            class="h-12 w-28 lg:h-14 lg:w-32"
            loading="eager"
          />
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex items-center gap-8">
          <NavLink
            v-for="link in mainLinks"
            :key="link.name"
            v-bind="link"
            class="text-gray-600 hover:text-blue-600 transition-colors"
          />

          <!-- Products Dropdown -->
          <div ref="dropdownRef" class="relative">
            <button
              @click="toggleDropdown"
              class="flex items-center gap-1 text-gray-600 hover:text-blue-600 transition-colors"
              aria-haspopup="true"
              :aria-expanded="isDropdownOpen"
            >
              <span>Produtos</span>
              <Icon
                name="material-symbols:keyboard-arrow-down-rounded"
                class="w-5 h-5 transition-transform duration-200"
                :class="{ 'rotate-180': isDropdownOpen }"
              />
            </button>

            <Transition name="slide">
              <div
                v-if="isDropdownOpen"
                class="absolute top-full left-0 w-48 mt-2 bg-white rounded-lg shadow-xl ring-1 ring-gray-900/5"
              >
                <NuxtLink
                  v-for="product in products"
                  :key="product.name"
                  :to="product.url"
                  class="block px-4 py-2.5 text-sm text-gray-7 hover:bg-gray-50/50 transition-colors"
                  @click="isDropdownOpen = false"
                >
                  {{ product.name }}
                </NuxtLink>
              </div>
            </Transition>
          </div>
        </div>

        <!-- Auth Buttons -->
        <div class="flex items-center gap-3">
          <BaseButton
            variant="outline"
            class="max-lg:hidden px-6 py-2.5 border-blue-600 text-blue-600 hover:bg-blue-50"
          >
            Entrar
          </BaseButton>
          <BaseButton class="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-500 hover:shadow-lg">
            Cadastre-se
          </BaseButton>
        </div>

        <!-- Mobile Menu Toggle -->
        <button
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          class="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
          aria-label="Menu mobile"
        >
          <Icon
            :name="isMobileMenuOpen ? 'material-symbols:close-rounded' : 'material-symbols:menu-rounded'"
            class="w-6 h-6"
          />
        </button>
      </div>

      <!-- Mobile Menu -->
      <Transition name="slide">
        <div v-if="isMobileMenuOpen" class="lg:hidden py-4 space-y-2">
          <NavLink
            v-for="link in mainLinks"
            :key="link.name"
            v-bind="link"
            class="block px-4 py-2.5 rounded-lg hover:bg-gray-50"
            @click="isMobileMenuOpen = false"
          />
        </div>
      </Transition>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'

const isDropdownOpen = ref(false)
const isMobileMenuOpen = ref(false)
const dropdownRef = ref<HTMLElement | null>(null)

const mainLinks = [
  { name: 'Criptomoedas', url: '#' },
  { name: 'Exchanges', url: '#' },
  { name: 'Watchlist', url: '#' },
  { name: 'NFT', url: '#' },
  { name: 'Portfólio', url: '#' }
]

const products = [
  { name: 'Exchange', url: '#' },
  { name: 'Carteira', url: '#' },
  { name: 'Explorador', url: '#' },
  { name: 'Gráficos', url: '#' }
]

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value
}

onClickOutside(dropdownRef, () => {
  isDropdownOpen.value = false
})
</script>
