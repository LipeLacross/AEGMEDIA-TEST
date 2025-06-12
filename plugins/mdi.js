// plugins/mdi.js
import { defineNuxtPlugin } from '#app'

// Importe cada ícone individualmente
import ChevronDownIcon from 'vue-material-design-icons/ChevronDown.vue'
import ChevronUpIcon from 'vue-material-design-icons/ChevronUp.vue'
import ChevronRightIcon from 'vue-material-design-icons/ChevronRight.vue'
import PlusThickIcon from 'vue-material-design-icons/PlusThick.vue'
import MinusThickIcon from 'vue-material-design-icons/MinusThick.vue'
import ArrowUpIcon from 'vue-material-design-icons/ArrowUp.vue'
import ArrowRightIcon from 'vue-material-design-icons/ArrowRight.vue'
import CheckCircleIcon from 'vue-material-design-icons/CheckCircle.vue'
import SegmentIcon from 'vue-material-design-icons/Menu.vue' // Menu.vue é o ícone "hamburger" (Segment)
import CloseIcon from 'vue-material-design-icons/Close.vue'
import MenuIcon from 'vue-material-design-icons/Menu.vue'
import XIcon from 'vue-material-design-icons/Close.vue' // XIcon normalmente é o mesmo que CloseIcon

export default defineNuxtPlugin((nuxtApp) => {
  // Registro de componentes globais
  nuxtApp.vueApp.component('ChevronDownIcon', ChevronDownIcon)
  nuxtApp.vueApp.component('ChevronUpIcon', ChevronUpIcon)
  nuxtApp.vueApp.component('ChevronRightIcon', ChevronRightIcon)
  nuxtApp.vueApp.component('PlusThickIcon', PlusThickIcon)
  nuxtApp.vueApp.component('MinusThickIcon', MinusThickIcon)
  nuxtApp.vueApp.component('ArrowUpIcon', ArrowUpIcon)
  nuxtApp.vueApp.component('ArrowRightIcon', ArrowRightIcon)
  nuxtApp.vueApp.component('CheckCircleIcon', CheckCircleIcon)
  nuxtApp.vueApp.component('SegmentIcon', SegmentIcon)
  nuxtApp.vueApp.component('CloseIcon', CloseIcon)
  nuxtApp.vueApp.component('MenuIcon', MenuIcon)
  // Se quiser usar XIcon separado, basta registrar novamente com outro nome
  // nuxtApp.vueApp.component('XIcon', XIcon)
})
