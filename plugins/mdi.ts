// plugins/mdi.ts - Plugin de ícones Material Design corrigido
import { defineNuxtPlugin } from '#app'
import type { Component } from 'vue'

// Imports únicos - removendo duplicatas
import ChevronDownIcon from 'vue-material-design-icons/ChevronDown.vue'
import ChevronUpIcon from 'vue-material-design-icons/ChevronUp.vue'
import ChevronRightIcon from 'vue-material-design-icons/ChevronRight.vue'
import PlusThickIcon from 'vue-material-design-icons/PlusThick.vue'
import MinusThickIcon from 'vue-material-design-icons/MinusThick.vue'
import ArrowUpIcon from 'vue-material-design-icons/ArrowUp.vue'
import ArrowRightIcon from 'vue-material-design-icons/ArrowRight.vue'
import CheckCircleIcon from 'vue-material-design-icons/CheckCircle.vue'
import MenuIcon from 'vue-material-design-icons/Menu.vue'
import CloseIcon from 'vue-material-design-icons/Close.vue'
import HeartIcon from 'vue-material-design-icons/Heart.vue'
import StarIcon from 'vue-material-design-icons/Star.vue'
import ShieldCheckIcon from 'vue-material-design-icons/ShieldCheck.vue'
import PhoneIcon from 'vue-material-design-icons/Phone.vue'
import EmailIcon from 'vue-material-design-icons/Email.vue'

interface IconRegistry {
  [key: string]: Component
}

export default defineNuxtPlugin((nuxtApp) => {
  // Registrar componentes globalmente
  const icons: IconRegistry = {
    ChevronDownIcon,
    ChevronUpIcon,
    ChevronRightIcon,
    PlusThickIcon,
    MinusThickIcon,
    ArrowUpIcon,
    ArrowRightIcon,
    CheckCircleIcon,
    MenuIcon,
    CloseIcon,
    HeartIcon,
    StarIcon,
    ShieldCheckIcon,
    PhoneIcon,
    EmailIcon
  }

  // Registrar todos os ícones de uma vez
  Object.entries(icons).forEach(([name, component]) => {
    nuxtApp.vueApp.component(name, component)
  })
})
