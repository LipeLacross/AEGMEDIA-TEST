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
  ]
})
</script>
