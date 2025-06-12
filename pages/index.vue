<!-- pages/index.vue -->
<template>
  <div>
    <!-- Layout da Landing Page AutoShield -->
    <LandingHero />
    <LandingServices />
    <LandingTestimonials />
    <LandingContactForm />
    <LandingChatBot />
    <LandingFAQ />
  </div>
</template>

<script setup lang="ts">
// Meta tags para SEO
useHead({
  title: 'AutoShield - Proteção Veicular Completa',
  meta: [
    {
      name: 'description',
      content: 'Proteção veicular inteligente com IA integrada. Cobertura 24h, assistência completa e planos personalizados.'
    }
  ]
})
</script>
