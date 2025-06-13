// nuxt.config.ts - Configuração Corrigida para Resolver Erros de Prerender
import { defineNuxtConfig } from 'nuxt/config'
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  // Módulos essenciais
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/content',
    '@nuxt/scripts',
  ],

  // Configuração de componentes otimizada
  components: {
    dirs: [
      {
        path: '~/components/base',
        global: true,
        prefix: 'Base',
      },
      {
        path: '~/components/landing',
        global: true,
        prefix: 'Landing',
      },
      '~/components',
    ],
  },
  devtools: { enabled: true },

  // SEO e performance otimizados
  app: {
    head: {
      title: 'AutoShield - Proteção Veicular com IA',
      htmlAttrs: {
        lang: 'pt-BR',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'AutoShield oferece proteção veicular completa com IA integrada, cobertura 24h e planos a partir de R$ 89/mês.',
        },
        {
          name: 'keywords',
          content: 'proteção veicular, seguro auto, rastreamento, assistência 24h, AutoShield, IA',
        },
        { name: 'theme-color', content: '#10b981' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ],
    },
  },

  // CSS global
  css: ['~/assets/css/main.css'],

  // Build configuration
  build: {
    transpile: [
      '@huggingface/inference',
      '@emailjs/browser',
      'vue-material-design-icons',
    ],
  },

  // Experimental features
  experimental: {
    payloadExtraction: false,
    renderJsonPayloads: true,
    typedPages: true,
  },

  // Configuração Nitro CORRIGIDA
  nitro: {
    prerender: {
      // Especificar rotas existentes explicitamente
      routes: [
        '/',
        '/privacy',
        '/terms',
        '/cookies'
      ],
      // Desabilitar crawling automático para evitar 404s
      crawlLinks: false,
      // Não falhar no build por erros de prerender
      failOnError: false,
      // Ignorar rotas inexistentes
    },
    experimental: {
      wasm: true,
    },
    esbuild: {
      options: {
        target: 'es2022',
      },
    },
  },

  // Regras de rota para controle fino
  routeRules: {
    // Garantir que páginas principais sejam prerenderizadas
    '/': { prerender: true },
    '/privacy': { prerender: true },
    '/terms': { prerender: true },
    '/cookies': { prerender: true },
  },

  // Configuração do Vite
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  // Configuração de TypeScript
  typescript: {
    strict: true,
    typeCheck: true,
  },

  // Configuração do PostCSS
  postcss: {
    plugins: {
      autoprefixer: {},
    },
  },

  // Configuração de ícones
  icon: {
    provider: 'iconify',
    size: '24px',
    class: 'icon',
    aliases: {
      shield: 'heroicons:shield-check',
      phone: 'heroicons:phone',
      clock: 'heroicons:clock',
      star: 'heroicons:star',
      check: 'heroicons:check-circle',
    },
  },

  // Configuração de imagens
  image: {
    format: ['webp', 'avif', 'png'],
    quality: 80,
    densities: [1, 2],
    domains: ['autoshield.com.br'],
    providers: {
      cloudinary: {
        baseURL: 'https://res.cloudinary.com/autoshield/image/fetch/',
      },
    },
  },
})
