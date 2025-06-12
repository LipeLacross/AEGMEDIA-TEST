// nuxt.config.ts - Configuração otimizada para AutoShield
export default defineNuxtConfig({

  // Desenvolvimento
  devtools: { enabled: true },

  // Runtime configuration otimizada
  runtimeConfig: {
    // Variáveis privadas (servidor)
    huggingfaceToken: process.env.HUGGINGFACE_TOKEN,
    brevoApiKey: process.env.BREVO_API_KEY,
    brevoListId: process.env.BREVO_LIST_ID || '1',
    emailjsServiceId: process.env.EMAILJS_SERVICE_ID,
    emailjsTemplateId: process.env.EMAILJS_TEMPLATE_ID,
    emailjsPublicKey: process.env.EMAILJS_PUBLIC_KEY,

    // Variáveis públicas
    public: {
      appName: 'AutoShield',
      apiBase: '/api',
      siteUrl: process.env.SITE_URL || 'https://autoshield.com.br',
      environment: process.env.NODE_ENV || 'development'
    }
  },

  // Módulos essenciais atualizados
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxt/scripts'
  ],

  // Configuração do ESLint integrado
  eslint: {
    config: {
      stylistic: true
    }
  },

  // Configuração de ícones otimizada
  icon: {
    provider: 'iconify',
    size: '24px',
    class: 'icon',
    aliases: {
      'shield': 'heroicons:shield-check',
      'phone': 'heroicons:phone',
      'clock': 'heroicons:clock',
      'star': 'heroicons:star',
      'check': 'heroicons:check-circle'
    }
  },

  // Configuração de imagens otimizada
  image: {
    format: ['webp', 'avif'],
    quality: 80,
    densities: [1, 2],
    domains: ['autoshield.com.br'],
    providers: {
      cloudinary: {
        baseURL: 'https://res.cloudinary.com/autoshield/image/fetch/'
      }
    }
  },

  // CSS global
  css: [
    '~/assets/css/main.css'
  ],

  // Configuração de componentes otimizada
  components: {
    dirs: [
      {
        path: '~/components/base',
        global: true,
        prefix: 'Base'
      },
      {
        path: '~/components/landing',
        global: true,
        prefix: 'Landing'
      },
      '~/components'
    ]
  },

  // Build configuration otimizada
  build: {
    transpile: [
      '@huggingface/inference',
      '@emailjs/browser',
      'vue-material-design-icons'
    ]
  },

  // Configuração de TypeScript aprimorada
  typescript: {
    strict: true,
    typeCheck: true
  },

  // SEO e performance otimizados
  app: {
    head: {
      title: 'AutoShield - Proteção Veicular com IA',
      htmlAttrs: {
        lang: 'pt-BR'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'AutoShield oferece proteção veicular completa com IA integrada, cobertura 24h e planos a partir de R$ 89/mês.'
        },
        {
          name: 'keywords',
          content: 'proteção veicular, seguro auto, rastreamento, assistência 24h, AutoShield, IA'
        },
        { name: 'theme-color', content: '#10b981' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
      ]
    }
  },

  // Nitro configuration otimizada
  nitro: {
    prerender: {
      routes: ['/'],
      crawlLinks: true
    },
    experimental: {
      wasm: true
    },
    esbuild: {
      options: {
        target: 'es2022'
      }
    }
  },

  // Experimental features para melhor performance
  experimental: {
    payloadExtraction: false,
    renderJsonPayloads: true,
    typedPages: true
  }
})
