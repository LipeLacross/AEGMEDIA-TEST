<!-- layouts/default.vue -->
<template>
  <div class="min-h-screen bg-white">
    <!-- Navbar -->
    <BaseNavbar />

    <!-- Main Content -->
    <main>
      <slot />
    </main>

    <!-- Footer -->
    <BaseFooter />

    <!-- Botões flutuantes fixos -->
    <div class="fixed bottom-6 right-6 z-50 flex flex-col space-y-4">
      <LandingBackToTop/>
      <LandingChatBot />
    </div>
  </div>
</template>

<script setup lang="ts">
// Layout padrão para AutoShield
defineOptions({
  name: 'DefaultLayout'
})

// Meta tags globais
useHead({
  htmlAttrs: {
    lang: 'pt-BR'
  },
  meta: [
    {
      name: 'theme-color',
      content: '#10b981'
    }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  ]
})
</script>
