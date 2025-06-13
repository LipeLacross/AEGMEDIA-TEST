Certainly! Here is the updated README content translated to English, reflecting the project’s current structure, features, and technologies as detailed in your files[1][2]:

---

## 🌐 [Versão em Português do README](README.md)

# AutoShield – AI-Powered Vehicle Protection Landing Page

Modern landing page project for a vehicle protection company with integrated artificial intelligence. Uses Nuxt.js with TypeScript, Tailwind CSS, and Hugging Face to deliver automated customer service, personalized quotes, and real-time sentiment analysis.

---

## 🔨 Project Features

- **Intelligent AI Chatbot:** 24/7 virtual assistant specialized in vehicle protection, powered by Hugging Face Mistral-7B-Instruct-v0.2 and other stable models.
- **Newsletter System:** Brevo integration for automated lead capture and management.
- **Responsive Forms:** Personalized quote and contact forms optimized for conversion.
- **Modern Interface:** Responsive design with smooth animations and visual effects using Tailwind CSS.
- **SEO Optimized:** Meta tags, semantic structure, and performance optimized for search engines.
- **Sentiment Analysis:** Real-time feedback system to improve customer service.
- **Conversational Memory:** Persistent chat history with localStorage.
- **GPS Tracking:** Real-time vehicle monitoring integration.
- **24/7 Assistance:** Continuous service with a specialized team.
- **Interactive Plan Comparison:** Interactive pricing section, highlighting the most popular plan and annual savings.
- **Testimonials & Success Cases:** Customer reviews, satisfaction statistics, and quick service examples.
- **Interactive FAQ:** Expand/collapse frequently asked questions.
- **Floating AI Chatbot:** Responsive chatbot with persistent memory.
- **Newsletter & Important Links:** Footer with newsletter and links to policies and terms.

---
###Project Visual Example

---
## ✔️ Techniques and Technologies Used

### **Frontend and Framework**
- **Nuxt.js:** Vue.js framework with SSR, automatic optimizations, and hybrid rendering.
- **TypeScript:** Static typing for increased security, maintainability, and error detection.
- **Tailwind CSS:** Utility-first CSS framework for responsive design and fast development.
- **Vue 3:** Reactive JavaScript framework with Composition API and optimized performance.

### **Artificial Intelligence**
- **Hugging Face:** AI platform for natural language processing models.
- **Mistral-7B-Instruct-v0.2, Llama-3-8B-Instruct, Gemma-2-2b-it:** Conversational AI models specialized in Brazilian Portuguese.
- **Context System:** Conversational memory for more natural and personalized interactions.

### **Integration and APIs**
- **Brevo:** Email marketing platform for automated newsletter and lead management.
- **EmailJS:** Direct email sending service for contact forms.
- **@nuxt/ui:** Integrated and optimized component system.
- **@nuxt/icon:** Modern icon management.

### **Development and Quality**
- **ESLint:** Linting and code standardization for quality maintenance.
- **PostCSS:** Advanced CSS processing with autoprefixer.
- **@tailwindcss/forms:** Optimized and consistent form styling.
- **@nuxt/image:** Image optimization and multi-format support.

---

## 📁 Project Structure

```
autoshield-landing/
├── app.vue                     # Global application entry point
├── nuxt.config.ts              # Main Nuxt.js configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
├── package.json                # Project dependencies and scripts
├── .github/
│   ├── workflows/
│   │   └── ci.yml             # Automated CI/CD pipeline
│   └── dependabot.yml         # Automatic dependency updates configuration
├── pages/
│   ├── index.vue              # Main landing page
│   ├── privacy.vue            # LGPD privacy policy
│   ├── cookies.vue            # Cookie policy
│   └── terms.vue              # Terms of use and conditions
├── components/
│   ├── base/
│   │   ├── Navbar.vue         # Responsive main navigation
│   │   └── Footer.vue         # Footer with links and newsletter
│   └── landing/
│       ├── Hero.vue           # Main presentation section
│       ├── Pricing.vue        # Interactive plans and pricing
│       ├── Services.vue       # Services and features
│       ├── AboutUs.vue        # Company information
│       ├── Testimonials.vue   # Customer testimonials
│       ├── FAQ.vue            # Frequently asked questions
│       ├── ContactForm.vue    # Quote form
│       ├── ChatBot.vue        # AI-integrated chatbot
│       └── BackToTop.vue      # Back to top button
├── server/
│   └── api/
│       ├── chat.post.ts       # Chatbot API with Hugging Face
│       └── newsletter.post.ts # Newsletter API with Brevo
├── types/
│   ├── index.ts               # Global type definitions
│   └── vue-material-design-icons.d.ts # Icon types
├── plugins/
│   ├── mdi.ts                 # Material Design icons plugin
│   └── smooth-scroll.ts       # Smooth scroll plugin
├── public/
│   ├── img/                   # Optimized images and assets
│   ├── favicon.ico            # Site icon
│   ├── apple-touch-icon.png
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   └── robots.txt             # SEO configuration for crawlers
└── assets/
    └── css/
        └── main.css           # Global and custom styles
```

---

## 🛠️ How to Run the Project

### 1. **Ensure Node.js is Installed**
Node.js version 20 or higher is required. Check if it's installed with:

```bash
node -v
npm -v
```

If not installed, download and install the recommended LTS version.

### 2. **Clone the Repository**
Copy the repository URL and run the following command in your terminal:

```bash
git clone https://github.com/your-username/autoshield-landing.git
cd autoshield-landing
```

### 3. **Install Dependencies**
Run the command to install all project dependencies:

```bash
npm install
```

### 4. **Configure Environment Variables**
Create a `.env` file at the project root with the following variables:

```env
# Hugging Face configuration
HUGGINGFACE_TOKEN=your_hugging_face_token

# Brevo (Newsletter) configuration
BREVO_API_KEY=your_brevo_api_key
BREVO_LIST_ID=1

# EmailJS configuration (optional)
EMAILJS_SERVICE_ID=your_service_id
EMAILJS_TEMPLATE_ID=your_template_id
EMAILJS_PUBLIC_KEY=your_public_key
```

### 5. **Run the Project**
To start the development server:

```bash
npm run dev
```

The project will be available at `http://localhost:3000`

### 6. **Available Scripts**

```bash
npm run dev          # Development server with hot reload
npm run build        # Optimized production build
npm run preview      # Preview production build
npm run lint         # Code verification with ESLint
npm run typecheck    # TypeScript type checking
```

---

## 🌐 Deployment

### **Recommended Deployment Options**

#### **Vercel (Recommended for Nuxt.js)**
```bash
npm install -g vercel
vercel --prod
```

#### **Netlify**
```bash
npm run build
# Upload the .output/public folder to Netlify
```

#### **Manual Deployment**
```bash
npm run build
# The .output/ folder contains optimized files for deployment
```

### **Production Settings**
- Configure environment variables in the chosen platform’s dashboard.
- Ensure external APIs (Hugging Face, Brevo, EmailJS) are set up correctly.
- Enable HTTPS and configure a custom domain as needed.
- Configure CDN for asset and image optimization.

### **Automated CI/CD**
The project includes GitHub Actions configuration for:
- Automated tests on multiple Node.js versions
- Automatic production deployment
- Code quality checks
- Dependency updates via Dependabot

---

## 🚀 Updated Highlights

- **Interactive Plans & Pricing:** Plan section with visual highlights, benefit comparison, and annual savings.
- **Testimonials & Statistics:** Real customer reviews and satisfaction statistics.
- **Policies & Terms:** Detailed privacy, cookie, and terms of use pages.
- **Icon & Animation Integration:** Material Design icon plugin and optimized smooth scrolling.
- **Intelligent Chatbot API:** Advanced conversation flow with data extraction, confirmation, and automatic offer generation.
- **Newsletter Management:** Lead capture via Brevo with validation and error handling.