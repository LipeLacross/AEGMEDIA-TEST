## 🌐 [English Version of README](README_EN.md)

# AutoShield – Landing Page with Integrated AI

Modern landing page for a vehicle protection company, developed with Nuxt.js, Vue 3, TypeScript, and Tailwind CSS. Integrates generative AI for customer service, automated newsletter, and a conversion-optimized interface.

## Project Features

- **Intelligent AI Chatbot**: 24/7 virtual assistant specialized in vehicle protection, using Hugging Face models.
- **Newsletter System**: Integration with Brevo for automated lead capture and management.
- **Responsive Forms**: Personalized quote, contact forms, and data capture optimized for conversion.
- **Modern Interface**: Responsive design with animations, visual effects, and interactive plan grids.
- **SEO Optimized**: Meta tags, semantic structure, and performance optimized for search engines.
- **Sentiment Analysis**: Real-time feedback and review system.
- **Conversational Memory**: Chatbot with persistent conversation history and automated qualification flows.
- **GPS Tracking**: Real-time vehicle monitoring integration.
- **24/7 Assistance**: Continuous support system with a specialized team.
- **Plan Comparison**: Interactive pricing and plan comparison section, highlighting the most popular plan and annual savings.
- **Testimonials and Success Cases**: Customer testimonials, satisfaction statistics, and examples of fast service.
- **Interactive FAQ**: Frequently asked questions with expand/collapse.
- **Floating Chatbot**: Responsive AI chatbot with persistent memory.
- **Newsletter and Important Links**: Footer with newsletter and links to policies and terms.

### Visual Project Example	

- https://youtu.be/gik2RjL4u84

## Techniques and Technologies Used

- **Nuxt.js**: Vue.js framework with SSR, automatic optimizations, and hybrid rendering.
- **TypeScript**: Static typing for greater security, maintainability, and error detection.
- **Tailwind CSS**: Utility CSS framework for responsive design and agile development.
- **Vue 3**: Reactive JavaScript framework with Composition API and optimized performance.
- **Hugging Face**: AI platform for natural language processing models.
- **Brevo**: Email marketing platform for automated newsletter and lead management.
- **EmailJS**: Email sending service for direct contact forms.
- **@nuxt/ui**: Integrated and optimized component system.
- **@nuxt/icon**: Modern icon management.
- **ESLint**: Linting and code standardization for quality maintenance.
- **PostCSS**: Advanced CSS processing with autoprefixer.
- **@tailwindcss/forms**: Optimized and consistent form styling.
- **@nuxt/image**: Image optimization and support for multiple formats.

## Project Structure

```
autoshield-landing/
├── app.vue
├── assets/
│   └── css/
├── components/
│   ├── base/
│   │   ├── Footer.vue
│   │   └── Navbar.vue
│   └── landing/
│       ├── BackToTop.vue
│       ├── ChatBot.vue
│       ├── ContactForm.vue
│       ├── FAQ.vue
│       ├── Hero.vue
│       ├── Pricing.vue
│       ├── Services.vue
│       └── Testimonials.vue
├── eslint.config.mjs
├── mixins/
│   └── aos.ts
├── nuxt.config.ts
├── package-lock.json
├── package.json
├── pages/
│   ├── cookies.vue
│   ├── index.vue
│   ├── privacy.vue
│   └── terms.vue
├── plugins/
│   ├── mdi.ts
│   └── smooth-scroll.ts
├── public/
│   ├── apple-touch-icon.png
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   ├── favicon.ico
│   └── img/
│       ├── autoshield.png
│       ├── backup/
│       ├── hero-autoshield.webp
│       └── technology-autoshield.webp
├── server/
│   ├── api/
│   │   ├── chat.post.ts
│   │   └── newsletter.post.ts
│   └── tsconfig.json
├── tailwind.config.js
├── tsconfig.json
└── types/
    ├── index.ts
    └── vue-material-design-icons.d.ts
```

## How to Run

Install the dependencies:

```
npm install
```

Run the development server:

```
npm run dev
```

Build for production:

```
npm run build
```

## Environment Configuration

Add the necessary environment variables for Hugging Face and Brevo integration:

```
HUGGINGFACE_TOKEN=your_token_here
BREVO_API_KEY=your_token_here
BREVO_LIST_ID=list_id
```

## Contributors

- **Lipelacross** (Creator)
