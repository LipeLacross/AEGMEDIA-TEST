<!-- components/base/Navbar.vue -->
<template>
  <nav class="sticky top-0 bg-white/95 backdrop-blur-md z-50 shadow-sm">
    <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 lg:h-20">
        <!-- Logo -->
        <NuxtLink to="/" class="flex-shrink-0 hover:opacity-80 transition-opacity">
          <NuxtImg
            src="/img/logo/autoshield.svg"
            width="140"
            height="48"
            alt="AutoShield Logo"
            class="h-12 w-40"
          />
        </NuxtLink>

        <!-- Navegação Desktop -->
        <div class="hidden lg:flex items-center gap-8">
          <NavLink
            v-for="link in mainLinks"
            :key="link.name"
            v-bind="link"
            class="text-gray-600 hover:text-emerald-600 transition-colors"
          />
        </div>

        <!-- CTA -->
        <div class="flex items-center gap-3">
          <BaseButton class="btn-primary">
            Falar com Especialista
          </BaseButton>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const mainLinks = [
  { name: 'Planos', url: '#' },
  { name: 'Coberturas', url: '#' },
  { name: 'Sinistros', url: '#' },
  { name: 'Sobre Nós', url: '#' }
]
</script>
