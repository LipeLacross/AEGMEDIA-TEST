// plugins/smooth-scroll.ts - Plugin de scroll suave otimizado
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(async (nuxtApp) => {
  // Carregar dinamicamente apenas no cliente
  if (import.meta.client) {
    try {
      const { default: Vue3SmoothScroll } = await import('vue3-smooth-scroll')

      nuxtApp.vueApp.use(Vue3SmoothScroll, {
        duration: 1000,
        offset: -50,
        updateHistory: false,
        easingFunction: 'easeInOutCubic'
      })
    } catch (error) {
      console.warn('Erro ao carregar Vue3SmoothScroll:', error)
    }
  }
})
