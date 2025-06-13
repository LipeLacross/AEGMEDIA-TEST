## 🌐 [Portuguese Version of README](README.md)

# AutoShield - AI-Integrated Landing Page

Modern landing page project for a vehicle protection company with integrated artificial intelligence. The solution uses Nuxt.js with TypeScript, Tailwind CSS, and Hugging Face to create an automated customer service experience, personalized quotes generation, and real-time sentiment analysis.

## 🔨 Project Features

- **AI-Powered Intelligent Chatbot**: 24/7 virtual assistant specialized in vehicle protection using Hugging Face Mistral-7B-Instruct-v0.2
- **Newsletter System**: Brevo integration for automated lead capture and management
- **Responsive Forms**: Personalized quotes and contact forms optimized for conversion
- **Modern Interface**: Responsive design with smooth animations and visual effects using Tailwind CSS
- **SEO Optimized**: Meta tags, semantic structuring, and performance optimized for search engines
- **Sentiment Analysis**: Real-time feedback system to improve customer service
- **Conversational Memory**: Chatbot with persistent conversation history using localStorage
- **GPS Tracking**: Real-time vehicle monitoring integration
- **24/7 Assistance**: Continuous support system with specialized team

### Visual Project Example

The project presents a complete and optimized landing page with:
- Hero section with main call-to-action and fluid animations
- Plans and pricing section with interactive comparison
- Detailed services and coverage area
- Customer testimonials with rating system
- Interactive FAQ with expand/collapse functionality
- Integrated quote form with validation
- Floating chatbot with responsive AI and persistent memory
- Footer with newsletter and important links

## ✔️ Techniques and Technologies Used

### Frontend and Framework
- **Nuxt.js**: Vue.js framework with SSR, automatic optimizations, and hybrid rendering
- **TypeScript**: Static typing for enhanced security, maintainability, and error detection
- **Tailwind CSS**: Utility-first CSS framework for responsive design and agile development
- **Vue**: Reactive JavaScript framework with Composition API and optimized performance

### Artificial Intelligence
- **Hugging Face**: AI platform for natural language processing models
- **Mistral-7B-Instruct-v0.2**: Conversational AI model specialized in Brazilian Portuguese
- **Context System**: Conversational memory for more natural and personalized interactions

### Integration and APIs
- **Brevo**: Email marketing platform for automated newsletter and lead management
- **EmailJS**: Email sending service for direct contact forms
- **@nuxt/ui**: Integrated and optimized component system

### Development and Quality
- **ESLint**: Code linting and standardization for quality maintenance
- **PostCSS**: Advanced CSS processing with autoprefixer
- **@tailwindcss/forms**: Optimized and consistent form styling

## 📁 Project Structure

```
autoshield-landing/
├── app.vue                     # Global application entry point
├── nuxt.config.ts             # Main Nuxt.js configuration
├── tailwind.config.js         # Tailwind CSS configuration
├── tsconfig.json              # TypeScript configuration
├── package.json               # Project dependencies and scripts
├── .github/
│   ├── workflows/
│   │   └── ci.yml            # Automated CI/CD pipeline
│   └── dependabot.yml        # Automatic updates configuration
├── pages/
│   ├── index.vue             # Main landing page
│   ├── privacy.vue           # LGPD privacy policy
│   ├── cookies.vue           # Cookie policy
│   └── terms.vue             # Terms of use and conditions
├── components/
│   ├── base/
│   │   ├── Navbar.vue        # Responsive main navigation
│   │   └── Footer.vue        # Footer with links and newsletter
│   └── landing/
│       ├── Hero.vue          # Main presentation section
│       ├── Pricing.vue       # Interactive plans and pricing
│       ├── Services.vue      # Services and features
│       ├── AboutUs.vue       # Company information
│       ├── Testimonials.vue  # Customer testimonials
│       ├── FAQ.vue           # Frequently asked questions
│       ├── ContactForm.vue   # Quote form
│       ├── ChatBot.vue       # AI-integrated chatbot
│       └── BackToTop.vue     # Back to top button
├── server/
│   └── api/
│       ├── chat.post.ts      # Hugging Face chatbot API
│       └── newsletter.post.ts # Brevo newsletter API
├── types/
│   ├── index.ts              # Global type definitions
│   └── vue-material-design-icons.d.ts # Icon types
├── plugins/
│   ├── mdi.ts                # Material Design Icons plugin
│   └── smooth-scroll.ts      # Smooth scroll plugin
├── public/
│   ├── img/                  # Optimized images and assets
│   ├── favicon.ico           # Site icon
│   └── robots.txt            # SEO configuration for crawlers
└── assets/
    └── css/
        └── main.css          # Global styles and customizations
```

## 🛠️ Setup and Run the Project

To start the project locally, follow these steps:

### 1. **Ensure Node.js is Installed**
[Node.js](https://nodejs.org/) version 20 or higher is required to run the project. You can check if you have it installed with:

```bash
node -v
npm -v
```

If not installed, download and install the recommended LTS version.

### 2. **Clone the Repository**
Copy the repository URL and execute the command below in the terminal:

```bash
git clone 
cd autoshield-landing
```

### 3. **Install Dependencies**
Run the command to install all project dependencies:

```bash
npm install
```

### 4. **Configure Environment Variables**
Create a `.env` file in the project root with the following variables:

```env
# Hugging Face Configuration
HUGGINGFACE_TOKEN=your_huggingface_token

# Brevo Configuration (Newsletter)
BREVO_API_KEY=your_brevo_api_key
BREVO_LIST_ID=1

# EmailJS Configuration (optional)
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

## 🌐 Deployment

### Recommended Deployment Options

#### Vercel (Recommended for Nuxt.js)
```bash
npm install -g vercel
vercel --prod
```

#### Netlify
```bash
npm run build
# Upload .output/public folder to Netlify
```

#### Manual Deployment
```bash
npm run build
# The .output/ folder contains optimized files for deployment
```

### Production Settings
- Configure environment variables in the chosen platform's dashboard
- Ensure external APIs (Hugging Face, Brevo) are properly configured
- Enable HTTPS and configure custom domain as needed
- Set up CDN for asset and image optimization

### Automated CI/CD
The project includes GitHub Actions configuration for:
- Automated testing on multiple Node.js versions
- Automatic production deployment
- Code quality verification
- Dependency updates via Dependabot
