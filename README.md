## 🌐 [English Version of README](README_EN.md)

# AutoShield - Landing Page com IA Integrada

Projeto de landing page moderna para empresa de proteção veicular com inteligência artificial integrada. A solução utiliza Nuxt.js com TypeScript, Tailwind CSS e Hugging Face para criar uma experiência de atendimento automatizado, geração de cotações personalizadas e análise de sentimentos em tempo real.

## 🔨 Funcionalidades do Projeto

- **Chatbot Inteligente com IA**: Assistente virtual 24h especializado em proteção veicular usando Hugging Face Mistral-7B-Instruct-v0.2
- **Sistema de Newsletter**: Integração com Brevo para captura e gestão automatizada de leads
- **Formulários Responsivos**: Cotação personalizada e formulários de contato otimizados para conversão
- **Interface Moderna**: Design responsivo com animações suaves e efeitos visuais utilizando Tailwind CSS
- **SEO Otimizado**: Meta tags, estruturação semântica e performance otimizada para motores de busca
- **Análise de Sentimentos**: Sistema de feedback em tempo real para melhorar o atendimento
- **Memória Conversacional**: Chatbot com histórico persistente de conversas usando localStorage
- **Rastreamento GPS**: Integração de monitoramento veicular em tempo real
- **Assistência 24h**: Sistema de atendimento contínuo com equipe especializada

### Exemplo Visual do Projeto

O projeto apresenta uma landing page completa e otimizada com:
- Hero section com call-to-action principal e animações fluidas
- Seção de planos e preços com comparação interativa
- Área de serviços e coberturas detalhadas
- Depoimentos de clientes com sistema de avaliação
- FAQ interativo com expandir/colapsar
- Formulário de cotação integrado com validação
- Chatbot flutuante com IA responsiva e memória persistente
- Footer com newsletter e links importantes

## ✔️ Técnicas e Tecnologias Utilizadas

### Frontend e Framework
- **Nuxt.js**: Framework Vue.js com SSR, otimizações automáticas e renderização híbrida
- **TypeScript**: Tipagem estática para maior segurança, manutenibilidade e detecção de erros
- **Tailwind CSS**: Framework CSS utilitário para design responsivo e desenvolvimento ágil
- **Vue**: Framework JavaScript reativo com Composition API e performance otimizada

### Inteligência Artificial
- **Hugging Face**: Plataforma de IA para modelos de processamento de linguagem natural
- **Mistral-7B-Instruct-v0.2**: Modelo de IA conversacional especializado em português brasileiro
- **Sistema de Contexto**: Memória conversacional para interações mais naturais e personalizadas

### Integração e APIs
- **Brevo**: Plataforma de email marketing para gestão automatizada de newsletter e leads
- **EmailJS**: Serviço de envio de emails para formulários de contato direto
- **@nuxt/ui**: Sistema de componentes integrado e otimizado

### Desenvolvimento e Qualidade
- **ESLint**: Linting e padronização de código para manutenção de qualidade
- **PostCSS**: Processamento avançado de CSS com autoprefixer
- **@tailwindcss/forms**: Estilização otimizada e consistente para formulários

## 📁 Estrutura do Projeto

```
autoshield-landing/
├── app.vue                     # Ponto de entrada global da aplicação
├── nuxt.config.ts             # Configuração principal do Nuxt.js
├── tailwind.config.js         # Configuração do Tailwind CSS
├── tsconfig.json              # Configuração TypeScript
├── package.json               # Dependências e scripts do projeto
├── .github/
│   ├── workflows/
│   │   └── ci.yml            # Pipeline de CI/CD automatizado
│   └── dependabot.yml        # Configuração de atualizações automáticas
├── pages/
│   ├── index.vue             # Página principal da landing page
│   ├── privacy.vue           # Política de privacidade LGPD
│   ├── cookies.vue           # Política de cookies
│   └── terms.vue             # Termos de uso e condições
├── components/
│   ├── base/
│   │   ├── Navbar.vue        # Navegação principal responsiva
│   │   └── Footer.vue        # Rodapé com links e newsletter
│   └── landing/
│       ├── Hero.vue          # Seção principal de apresentação
│       ├── Pricing.vue       # Planos e preços interativos
│       ├── Services.vue      # Serviços e funcionalidades
│       ├── AboutUs.vue       # Informações sobre a empresa
│       ├── Testimonials.vue  # Depoimentos de clientes
│       ├── FAQ.vue           # Perguntas frequentes
│       ├── ContactForm.vue   # Formulário de cotação
│       ├── ChatBot.vue       # Chatbot com IA integrada
│       └── BackToTop.vue     # Botão voltar ao topo
├── server/
│   └── api/
│       ├── chat.post.ts      # API do chatbot com Hugging Face
│       └── newsletter.post.ts # API de newsletter com Brevo
├── types/
│   ├── index.ts              # Definições de tipos globais
│   └── vue-material-design-icons.d.ts # Tipos para ícones
├── plugins/
│   ├── mdi.ts                # Plugin de ícones Material Design
│   └── smooth-scroll.ts      # Plugin de scroll suave
├── public/
│   ├── img/                  # Imagens e assets otimizados
│   ├── favicon.ico           # Ícone do site
│   └── robots.txt            # Configuração SEO para crawlers
└── assets/
    └── css/
        └── main.css          # Estilos globais e customizações
```

## 🛠️ Abrir e rodar o projeto

Para iniciar o projeto localmente, siga os passos abaixo:

### 1. **Certifique-se de que o Node.js está instalado**
O [Node.js](https://nodejs.org/) versão 20 ou superior é necessário para rodar o projeto. Você pode verificar se já o tem instalado com:

```bash
node -v
npm -v
```

Se não estiver instalado, baixe e instale a versão LTS recomendada.

### 2. **Clone o Repositório**
Copie a URL do repositório e execute o comando abaixo no terminal:

```bash
git clone 
cd autoshield-landing
```

### 3. **Instale as Dependências**
Execute o comando para instalar todas as dependências do projeto:

```bash
npm install
```

### 4. **Configure as Variáveis de Ambiente**
Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
# Configuração Hugging Face
HUGGINGFACE_TOKEN=seu_token_hugging_face

# Configuração Brevo (Newsletter)
BREVO_API_KEY=sua_api_key_brevo
BREVO_LIST_ID=1

# Configuração EmailJS (opcional)
EMAILJS_SERVICE_ID=seu_service_id
EMAILJS_TEMPLATE_ID=seu_template_id
EMAILJS_PUBLIC_KEY=sua_public_key
```

### 5. **Execute o Projeto**
Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
```

O projeto estará disponível em `http://localhost:3000`

### 6. **Scripts Disponíveis**

```bash
npm run dev          # Servidor de desenvolvimento com hot reload
npm run build        # Build otimizada para produção
npm run preview      # Preview da build de produção
npm run lint         # Verificação de código com ESLint
npm run typecheck    # Verificação de tipos TypeScript
```

## 🌐 Deploy

### Opções de Deploy Recomendadas

#### Vercel (Recomendado para Nuxt.js)
```bash
npm install -g vercel
vercel --prod
```

#### Netlify
```bash
npm run build
# Upload da pasta .output/public para Netlify
```

#### Deploy Manual
```bash
npm run build
# A pasta .output/ contém os arquivos otimizados para deploy
```

### Configurações de Produção
- Configure as variáveis de ambiente no painel da plataforma escolhida
- Certifique-se de que as APIs externas (Hugging Face, Brevo) estão configuradas corretamente
- Ative HTTPS e configure domínio personalizado conforme necessário
- Configure CDN para otimização de assets e imagens

### CI/CD Automatizado
O projeto inclui configuração GitHub Actions para:
- Testes automatizados em múltiplas versões Node.js
- Deploy automático em produção
- Verificação de qualidade de código
- Atualizações de dependências via Dependabot


