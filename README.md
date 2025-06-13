Segue a atualização do README com base nos arquivos de estrutura e conteúdo do projeto, mantendo a organização e detalhando as novidades identificadas nos arquivos fornecidos:

---

## 🌐 [English Version of README](README_EN.md)

# AutoShield – Landing Page com IA Integrada

Projeto de landing page moderna para empresa de proteção veicular com inteligência artificial integrada. Utiliza Nuxt.js com TypeScript, Tailwind CSS e Hugging Face para criar uma experiência de atendimento automatizado, geração de cotações personalizadas e análise de sentimentos em tempo real.

---

## 🔨 Funcionalidades do Projeto

- **Chatbot Inteligente com IA**: Assistente virtual 24h especializado em proteção veicular, usando Hugging Face Mistral-7B-Instruct-v0.2 e outros modelos estáveis[1].
- **Sistema de Newsletter**: Integração com Brevo para captura e gestão automatizada de leads[1].
- **Formulários Responsivos**: Cotação personalizada, formulários de contato e captura de dados otimizados para conversão.
- **Interface Moderna**: Design responsivo com animações suaves, efeitos visuais e grid de planos interativos utilizando Tailwind CSS[2].
- **SEO Otimizado**: Meta tags, estruturação semântica e performance otimizada para motores de busca.
- **Análise de Sentimentos**: Sistema de feedback e depoimentos com avaliação em tempo real.
- **Memória Conversacional**: Chatbot com histórico persistente de conversas e fluxos de qualificação automatizados[1].
- **Rastreamento GPS**: Integração de monitoramento veicular em tempo real.
- **Assistência 24h**: Sistema de atendimento contínuo com equipe especializada.
- **Comparação de Planos**: Seção de planos e preços com comparação interativa, destaque para o plano mais popular e economia anual[2].
- **Depoimentos e Cases de Sucesso**: Área de depoimentos de clientes, estatísticas de satisfação e exemplos de atendimento rápido[2].
- **FAQ Interativo**: Perguntas frequentes com expandir/colapsar.
- **Chatbot Flutuante**: Chatbot com IA responsiva e memória persistente.
- **Newsletter e Links Importantes**: Footer com newsletter e links para políticas e termos.

---

## ✔️ Técnicas e Tecnologias Utilizadas

### **Frontend e Framework**
- **Nuxt.js**: Framework Vue.js com SSR, otimizações automáticas e renderização híbrida.
- **TypeScript**: Tipagem estática para maior segurança, manutenibilidade e detecção de erros.
- **Tailwind CSS**: Framework CSS utilitário para design responsivo e desenvolvimento ágil.
- **Vue 3**: Framework JavaScript reativo com Composition API e performance otimizada.

### **Inteligência Artificial**
- **Hugging Face**: Plataforma de IA para modelos de processamento de linguagem natural.
- **Mistral-7B-Instruct-v0.2, Llama-3-8B-Instruct, Gemma-2-2b-it**: Modelos de IA conversacional especializados em português brasileiro[1].
- **Sistema de Contexto**: Memória conversacional para interações mais naturais e personalizadas[1].

### **Integração e APIs**
- **Brevo**: Plataforma de email marketing para gestão automatizada de newsletter e leads[1].
- **EmailJS**: Serviço de envio de emails para formulários de contato direto.
- **@nuxt/ui**: Sistema de componentes integrado e otimizado.
- **@nuxt/icon**: Gerenciamento de ícones modernos.

### **Desenvolvimento e Qualidade**
- **ESLint**: Linting e padronização de código para manutenção de qualidade.
- **PostCSS**: Processamento avançado de CSS com autoprefixer.
- **@tailwindcss/forms**: Estilização otimizada e consistente para formulários.
- **@nuxt/image**: Otimização de imagens e suporte a múltiplos formatos[2].

---

## 📁 Estrutura do Projeto

```
autoshield-landing/
├── app.vue                     # Ponto de entrada global da aplicação
├── nuxt.config.ts              # Configuração principal do Nuxt.js
├── tailwind.config.js          # Configuração do Tailwind CSS
├── tsconfig.json               # Configuração TypeScript
├── package.json                # Dependências e scripts do projeto
├── .github/
│   ├── workflows/
│   │   └── ci.yml              # Pipeline de CI/CD automatizado
│   └── dependabot.yml          # Configuração de atualizações automáticas
├── pages/
│   ├── index.vue               # Página principal da landing page
│   ├── privacy.vue             # Política de privacidade LGPD
│   ├── cookies.vue             # Política de cookies
│   └── terms.vue               # Termos de uso e condições
├── components/
│   ├── base/
│   │   ├── Navbar.vue          # Navegação principal responsiva
│   │   └── Footer.vue          # Rodapé com links e newsletter
│   └── landing/
│       ├── Hero.vue            # Seção principal de apresentação
│       ├── Pricing.vue         # Planos e preços interativos
│       ├── Services.vue        # Serviços e funcionalidades
│       ├── AboutUs.vue         # Informações sobre a empresa
│       ├── Testimonials.vue    # Depoimentos de clientes
│       ├── FAQ.vue             # Perguntas frequentes
│       ├── ContactForm.vue     # Formulário de cotação
│       ├── ChatBot.vue         # Chatbot com IA integrada
│       └── BackToTop.vue       # Botão voltar ao topo
├── server/
│   └── api/
│       ├── chat.post.ts        # API do chatbot com Hugging Face
│       └── newsletter.post.ts  # API de newsletter com Brevo
├── types/
│   ├── index.ts                # Definições de tipos globais
│   └── vue-material-design-icons.d.ts # Tipos para ícones
├── plugins/
│   ├── mdi.ts                  # Plugin de ícones Material Design
│   └── smooth-scroll.ts        # Plugin de scroll suave
├── public/
│   ├── img/                    # Imagens e assets otimizados
│   │   ├── autoshield.png
│   │   ├── hero-autoshield.webp
│   │   ├── technology-autoshield.webp
│   │   └── backup/
│   ├── favicon.ico             # Ícone do site
│   ├── apple-touch-icon.png
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   └── robots.txt              # Configuração SEO para crawlers
└── assets/
    └── css/
        └── main.css            # Estilos globais e customizações
```

---

## 🛠️ Como Executar o Projeto

### 1. **Instale o Node.js**
Certifique-se de ter o Node.js versão 20 ou superior instalado:

```bash
node -v
npm -v
```

Se não estiver instalado, baixe a versão LTS recomendada.

### 2. **Clone o Repositório**
```bash
git clone https://github.com/seu-usuario/autoshield-landing.git
cd autoshield-landing
```

### 3. **Instale as Dependências**
```bash
npm install
```

### 4. **Configure as Variáveis de Ambiente**
Crie um arquivo `.env` na raiz do projeto:

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
```bash
npm run dev
```

Acesse o projeto em `http://localhost:3000`

### 6. **Scripts Disponíveis**
```bash
npm run dev          # Servidor de desenvolvimento com hot reload
npm run build        # Build otimizada para produção
npm run preview      # Preview da build de produção
npm run lint         # Verificação de código com ESLint
npm run typecheck    # Verificação de tipos TypeScript
```

---

## 🌐 Deploy

### **Opções de Deploy Recomendadas**

- **Vercel (Recomendado para Nuxt.js)**
  ```bash
  npm install -g vercel
  vercel --prod
  ```

- **Netlify**
  ```bash
  npm run build
  # Upload da pasta .output/public para Netlify
  ```

- **Deploy Manual**
  ```bash
  npm run build
  # A pasta .output/ contém os arquivos otimizados para deploy
  ```

### **Configurações de Produção**
- Configure as variáveis de ambiente no painel da plataforma escolhida.
- Certifique-se de que as APIs externas (Hugging Face, Brevo, EmailJS) estão configuradas corretamente.
- Ative HTTPS e configure domínio personalizado conforme necessário.
- Configure CDN para otimização de assets e imagens.

### **CI/CD Automatizado**
O projeto inclui configuração GitHub Actions para:
- Testes automatizados em múltiplas versões Node.js
- Deploy automático em produção
- Verificação de qualidade de código
- Atualizações de dependências via Dependabot

---

## 🚀 Destaques Atualizados

- **Planos e Preços Interativos:** Seção de planos com destaque visual, comparação de benefícios e economia anual[2].
- **Depoimentos e Estatísticas:** Área de depoimentos reais e estatísticas de satisfação dos clientes[2].
- **Políticas e Termos:** Páginas detalhadas de política de privacidade, cookies e termos de uso[2].
- **Integração de Ícones e Animação:** Plugin de ícones Material Design e scroll suave otimizado[2].
- **API de Chatbot Inteligente:** Fluxo de conversação avançado com extração de dados, confirmação e geração de proposta automática[1].
- **Gestão de Newsletter:** Captura de leads via Brevo com validação e tratamento de erros[1].

