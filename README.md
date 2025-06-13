`## 🌐 [English Version of README](README_EN.md)

# AutoShield – Landing Page com IA Integrada

Landing page moderna para empresa de proteção veicular, desenvolvida com Nuxt.js, Vue 3, TypeScript e Tailwind CSS. Integra IA generativa para atendimento ao cliente, newsletter automatizada e interface otimizada para conversão.

## Funcionalidades do Projeto

- **Chatbot Inteligente com IA**: Assistente virtual 24h especializado em proteção veicular, usando modelos Hugging Face.
- **Sistema de Newsletter**: Integração com Brevo para captura e gestão automatizada de leads.
- **Formulários Responsivos**: Cotação personalizada, formulários de contato e captura de dados otimizados para conversão.
- **Interface Moderna**: Design responsivo com animações, efeitos visuais e grid de planos interativos.
- **SEO Otimizado**: Meta tags, estruturação semântica e performance otimizada para motores de busca.
- **Análise de Sentimentos**: Sistema de feedback e avaliação em tempo real.
- **Memória Conversacional**: Chatbot com histórico persistente de conversas e fluxos de qualificação automatizados.
- **Rastreamento GPS**: Integração de monitoramento veicular em tempo real.
- **Assistência 24h**: Sistema de atendimento contínuo com equipe especializada.
- **Comparação de Planos**: Seção de planos e preços com comparação interativa, destaque para o plano mais popular e economia anual.
- **Depoimentos e Cases de Sucesso**: Área de depoimentos de clientes, estatísticas de satisfação e exemplos de atendimento rápido.
- **FAQ Interativo**: Perguntas frequentes com expandir/colapsar.
- **Chatbot Flutuante**: Chatbot com IA responsiva e memória persistente.
- **Newsletter e Links Importantes**: Footer com newsletter e links para políticas e termos.

### Exemplo Visual do Projeto	

- https://youtu.be/gik2RjL4u84

## Técnicas e Tecnologias Utilizadas

- **Nuxt.js**: Framework Vue.js com SSR, otimizações automáticas e renderização híbrida.
- **TypeScript**: Tipagem estática para maior segurança, manutenibilidade e detecção de erros.
- **Tailwind CSS**: Framework CSS utilitário para design responsivo e desenvolvimento ágil.
- **Vue 3**: Framework JavaScript reativo com Composition API e performance otimizada.
- **Hugging Face**: Plataforma de IA para modelos de processamento de linguagem natural.
- **Brevo**: Plataforma de email marketing para gestão automatizada de newsletter e leads.
- **EmailJS**: Serviço de envio de emails para formulários de contato direto.
- **@nuxt/ui**: Sistema de componentes integrado e otimizado.
- **@nuxt/icon**: Gerenciamento de ícones modernos.
- **ESLint**: Linting e padronização de código para manutenção de qualidade.
- **PostCSS**: Processamento avançado de CSS com autoprefixer.
- **@tailwindcss/forms**: Estilização otimizada e consistente para formulários.
- **@nuxt/image**: Otimização de imagens e suporte a múltiplos formatos.

## Estrutura do Projeto

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

## Como Executar

Instale as dependências:

```
npm install
```

Execute o servidor de desenvolvimento:

```
npm run dev
```

Construa para produção:

```
npm run build
```

## Configuração de Ambiente

Adicione as variáveis de ambiente necessárias para integração com Hugging Face e Brevo:

```
HUGGINGFACE_TOKEN=seu_token_aqui
BREVO_API_KEY=seu_token_aqui
BREVO_LIST_ID=id_da_lista
```

## Contribuidores

- **Lipelacross** (Criador)
