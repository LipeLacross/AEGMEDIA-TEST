<!-- pages/index.vue -->
<template>
  <div>
    <LandingHero id="hero" />
    <LandingPricing id="planos" />
    <LandingServices id="coberturas" />
    <LandingAboutUs id="sobre-nos" />
    <LandingTestimonials id="depoimentos" />
    <LandingFAQ id="faq" />
    <LandingContactForm id="contato" />
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
    },
    {
      name: 'keywords',
      content: 'proteção veicular, seguro auto, rastreamento, assistência 24h, AutoShield, IA'
    },
    {
      property: 'og:title',
      content: 'AutoShield - Proteção Veicular Completa'
    },
    {
      property: 'og:description',
      content: 'Proteção veicular inteligente com IA integrada. Cobertura 24h, assistência completa e planos personalizados.'
    },
    {
      property: 'og:type',
      content: 'website'
    }
  ]
})
</script>
