import svgLoader from 'vite-svg-loader'

export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
    compatibilityDate: '2025-06-12'
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
    '@nuxt/icon'
  ],
  icon: {
    iconify: {
      icons: [
        '@iconify-json/uil',
        '@iconify-json/material-design-icons'
      ]
    }
  },
  app: {
    head: {
      title: 'NEFA - Crypto Platform',
      htmlAttrs: {
        lang: 'pt-BR',
        dir: 'ltr'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Plataforma líder em negociação de criptomoedas'
        },
        {
          property: 'og:image',
          content: '/og-image.jpg'
        }
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: '/favicon.svg'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@100..900&display=swap',
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
      '~/components/base'
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
  // Correção: build deve estar dentro do objeto principal
  build: {
    transpile: ['vue-chart-3', 'chart.js']
  }
})
