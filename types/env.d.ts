// types/env.d.ts
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      HUGGINGFACE_TOKEN: string
      BREVO_API_KEY: string
      BREVO_LIST_ID: string
      EMAILJS_SERVICE_ID: string
      EMAILJS_TEMPLATE_ID: string
      EMAILJS_PUBLIC_KEY: string
      SITE_URL: string
      NODE_ENV: 'development' | 'production'
    }
  }
}

export {}
