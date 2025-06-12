// nuxt.config.js
import svgLoader from 'vite-svg-loader'

export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
    compatibilityDate: '2025-06-12'
  },

  runtimeConfig: {
    // Variáveis privadas (apenas no servidor)
    huggingfaceToken: process.env.HUGGINGFACE_TOKEN,

    // Variáveis públicas (cliente e servidor)
    public: {
      appName: 'AutoShield',
      apiBase: process.env.API_BASE_URL || '/api'
    }
  },

  vite: {
    plugins: [
      svgLoader({
        svgoConfig: {
          multipass: true,
          plugins: [
            'preset-default',
            { name: 'removeDimensions', active: true },
            { name: 'sortAttrs', params: { xmlnsOrder: 'alphabetical' } }
          ]
        }
      })
    ]
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxtjs/turnstile',
    'nuxt-svgo-loader',
    '@nuxt/eslint',
    '@nuxt/icon'
  ],

  icon: {
    iconify: {
      icons: [
        '@iconify-json/uil',
        '@iconify-json/material-design-icons',
        '@iconify-json/heroicons'
      ]
    }
  },

  app: {
    head: {
      title: 'AutoShield - Proteção Veicular Completa',
      htmlAttrs: {
        lang: 'pt-BR',
        dir: 'ltr'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'AutoShield - Proteção veicular completa com cobertura 24h, assistência e rastreamento. Planos a partir de R$ 89/mês.'
        },
        {
          name: 'keywords',
          content: 'proteção veicular, seguro auto, rastreamento, assistência 24h, AutoShield'
        },
        {
          property: 'og:title',
          content: 'AutoShield - Proteção Veicular Completa'
        },
        {
          property: 'og:description',
          content: 'Proteção veicular com IA, cobertura completa e assistência 24h'
        },
        {
          property: 'og:image',
          content: '/img/og-autoshield.jpg'
        },
        {
          property: 'og:type',
          content: 'website'
        },
        {
          name: 'theme-color',
          content: '#10b981'
        }
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: '/favicon.svg'
        },
        {
          rel: 'apple-touch-icon',
          href: '/apple-touch-icon.png'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap',
          crossorigin: 'anonymous'
        }
      ],
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js',
          defer: true,
          body: true
        }
      ]
    }
  },

  css: [
    '~/assets/css/main.css',
    'aos/dist/aos.css'
  ],

  components: {
    dirs: [
      '~/components',
      '~/components/base',
      '~/components/landing'
    ],
    global: true
  },

  postcss: {
    plugins: {
      '@tailwindcss/nesting': {},
      '@tailwindcss/postcss': {},
      autoprefixer: {},
      ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
    }
  },

  build: {
    transpile: ['vue-chart-3', 'chart.js', '@huggingface/inference']
  },

  // Configurações de SEO
  nitro: {
    prerender: {
      routes: ['/']
    }
  }
})
