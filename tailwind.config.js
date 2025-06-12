module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './nuxt.config.{js,ts}',
    './composables/**/*.{js,ts}',
    './utils/**/*.{js,ts}'
  ],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      mono: ['JetBrains Mono', 'monospace']
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563eb',
          light: '#3b82f6',
          dark: '#1d4ed8'
        },
        dark: '#0f172a',
        secondary: {
          DEFAULT: '#e11d48',
          light: '#f43f5e'
        }
      },
      spacing: {
        18: '4.5rem',
        128: '32rem'
      },
      container: {
        center: true,
        padding: '1.5rem',
        screens: {
          '2xl': '1440px'
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class'
    }),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/container-queries'),
    require('@tailwindcss/typography')
  ],
  darkMode: 'class',
  corePlugins: {
    // Desativa o container padrão do Tailwind para usar sua configuração personalizada
    container: false
  }
}
