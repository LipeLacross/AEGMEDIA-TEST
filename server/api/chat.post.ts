// server/api/chat.post.ts - Versão Otimizada para Dúvidas de Produtos
import { HfInference } from '@huggingface/inference'

// === INTERFACES E TIPOS ===
interface ChatMessage {
  role: 'user' | 'assistant' | 'system'
  content: string
  timestamp?: string
}

interface ChatRequest {
  message: string
  context?: ChatMessage[]
  sessionId?: string
}

interface ChatResponse {
  reply: string
  timestamp: string
  context: ChatMessage[]
  error?: boolean
  debug?: string
}

interface ProductData {
  interesse?: string
  veiculo?: string
  plano?: string
  duvida?: string
  categoria?: 'cobertura' | 'preco' | 'assistencia' | 'tecnologia' | 'documentacao' | 'geral'
}

// Estados simplificados para dúvidas de produtos
enum ConversationState {
  INICIAL = 'inicial',
  RESPONDENDO_DUVIDA = 'respondendo_duvida',
  OFERECENDO_AJUDA = 'oferecendo_ajuda'
}

interface ConversationContext {
  state: ConversationState
  productData: ProductData
  lastCategory: string
  questionCount: number
}

// === CONFIGURAÇÕES OTIMIZADAS ===
const CONFIG = {
  MAX_RETRIES: 2,
  TIMEOUT_MS: 6000,
  RETRY_DELAY_MS: 1000,
  MAX_SESSIONS: 50,
  MAX_CONTEXT_MESSAGES: 15,
  SESSION_TTL_MS: 20 * 60 * 1000
} as const

const STABLE_MODELS = [
  'google/gemma-2-2b-it',
  'meta-llama/Meta-Llama-3-8B-Instruct',
  'mistralai/Mistral-7B-Instruct-v0.2'
] as const

// === BASE DE CONHECIMENTO DA EMPRESA ===
const PRODUCT_KNOWLEDGE = {
  planos: {
    essencial: {
      preco: "R$ 89/mês",
      cobertura: "Roubo, furto, GPS grátis, assistência 24h, guincho até 200km, cobertura vidros",
      publico: "Veículos até R$ 50.000"
    },
    completo: {
      preco: "R$ 149/mês",
      cobertura: "Tudo do Essencial + colisão, incêndio, terceiros R$ 50k, carro reserva 15 dias",
      publico: "Veículos até R$ 100.000"
    },
    premium: {
      preco: "R$ 229/mês",
      cobertura: "Tudo do Completo + fenômenos naturais, terceiros R$ 100k, carro reserva premium 30 dias",
      publico: "Veículos até R$ 200.000"
    }
  },

  coberturas: {
    basicas: ["Roubo", "Furto", "Assistência 24h", "Guincho", "Chaveiro", "GPS com IA"],
    intermediarias: ["Colisão", "Incêndio", "Cobertura de terceiros", "Carro reserva", "Vidros"],
    avancadas: ["Fenômenos naturais", "Assistência residencial", "Consultoria jurídica"]
  },

  diferenciais: [
    "GPS com IA gratuito (valor R$ 50/mês)",
    "Sem carência para guincho e assistência",
    "Preços transparentes, sem taxas ocultas",
    "Atendimento com IA 24h no app",
    "Cancelamento livre, sem multas",
    "4.8⭐ de avaliação no Google"
  ],

  assistencia: {
    tipos: ["Guincho ilimitado", "Chaveiro emergencial", "Pane seca", "Mecânico no local", "Assistência médica"],
    cobertura: "Todo Brasil, 24 horas por dia",
    carencia: "Sem carência para assistência - disponível imediatamente"
  },

  tecnologia: {
    gps: "Rastreamento GPS com IA preditiva, alertas comportamentais e botão de pânico",
    app: "App exclusivo para iOS e Android com todas as funcionalidades",
    ia: "Chatbot com IA que resolve 95% das dúvidas instantaneamente"
  },

  documentacao: {
    contrato: "Digital, sem burocracia",
    aprovacao: "Análise em até 24h",
    pagamento: "Débito automático, cartão ou PIX",
    cancelamento: "Sem multa, processo em até 30 dias"
  }
}

// === FUNÇÕES DE ANÁLISE E RESPOSTA ===

// Detecta categoria da pergunta
function detectQuestionCategory(message: string): string {
  const lowerMessage = message.toLowerCase()

  if (lowerMessage.includes('preço') || lowerMessage.includes('valor') || lowerMessage.includes('custa') || lowerMessage.includes('quanto')) {
    return 'preco'
  }

  if (lowerMessage.includes('cobertura') || lowerMessage.includes('cobre') || lowerMessage.includes('protege') || lowerMessage.includes('inclui')) {
    return 'cobertura'
  }

  if (lowerMessage.includes('assistência') || lowerMessage.includes('guincho') || lowerMessage.includes('24h') || lowerMessage.includes('atendimento')) {
    return 'assistencia'
  }

  if (lowerMessage.includes('gps') || lowerMessage.includes('app') || lowerMessage.includes('tecnologia') || lowerMessage.includes('rastreamento')) {
    return 'tecnologia'
  }

  if (lowerMessage.includes('contrato') || lowerMessage.includes('documento') || lowerMessage.includes('aprovação') || lowerMessage.includes('cancelar')) {
    return 'documentacao'
  }

  return 'geral'
}

// Responde perguntas sobre produtos de forma inteligente
function answerProductQuestion(message: string, category: string): string {
  const lowerMessage = message.toLowerCase()

  switch (category) {
    case 'preco':
      if (lowerMessage.includes('essencial')) {
        return `💰 **Plano Essencial**: ${PRODUCT_KNOWLEDGE.planos.essencial.preco}
        
📋 **Inclui**: ${PRODUCT_KNOWLEDGE.planos.essencial.cobertura}
📞 **Ideal para**: ${PRODUCT_KNOWLEDGE.planos.essencial.publico}

🎁 **Desconto especial**: 15% OFF na primeira parcela!

Quer saber sobre outros planos ou tem alguma dúvida específica?`
      }

      if (lowerMessage.includes('completo')) {
        return `💰 **Plano Completo**: ${PRODUCT_KNOWLEDGE.planos.completo.preco}
        
📋 **Inclui**: ${PRODUCT_KNOWLEDGE.planos.completo.cobertura}
📞 **Ideal para**: ${PRODUCT_KNOWLEDGE.planos.completo.publico}

⭐ **Mais Popular!** 70% dos clientes escolhem este plano.

Posso esclarecer algum detalhe específico da cobertura?`
      }

      if (lowerMessage.includes('premium')) {
        return `💰 **Plano Premium**: ${PRODUCT_KNOWLEDGE.planos.premium.preco}
        
📋 **Inclui**: ${PRODUCT_KNOWLEDGE.planos.premium.cobertura}
📞 **Ideal para**: ${PRODUCT_KNOWLEDGE.planos.premium.publico}

👑 **Máxima Proteção** com serviços VIP inclusos.

Gostaria de saber mais sobre os benefícios exclusivos?`
      }

      return `💰 **Nossos Planos AutoShield**:

• **Essencial**: ${PRODUCT_KNOWLEDGE.planos.essencial.preco} - Proteção completa básica
• **Completo**: ${PRODUCT_KNOWLEDGE.planos.completo.preco} - Proteção total + benefícios ⭐
• **Premium**: ${PRODUCT_KNOWLEDGE.planos.premium.preco} - Máxima proteção VIP

🎁 **Todos incluem GPS com IA GRÁTIS!**

Sobre qual plano gostaria de saber mais detalhes?`

    case 'cobertura':
      if (lowerMessage.includes('essencial') || lowerMessage.includes('básico')) {
        return `🛡️ **Cobertura Plano Essencial**:

✅ ${PRODUCT_KNOWLEDGE.planos.essencial.cobertura}

🚨 **Sem carência** para assistência!
🎁 **GPS com IA** no valor de R$ 50/mês - **GRÁTIS**

Tem alguma dúvida específica sobre essa cobertura?`
      }

      return `🛡️ **Nossa Cobertura Completa**:

**📋 Coberturas Básicas:**
${PRODUCT_KNOWLEDGE.coberturas.basicas.map(item => `• ${item}`).join('\n')}

**⚡ Coberturas Intermediárias:**
${PRODUCT_KNOWLEDGE.coberturas.intermediarias.map(item => `• ${item}`).join('\n')}

**👑 Coberturas Avançadas:**
${PRODUCT_KNOWLEDGE.coberturas.avancadas.map(item => `• ${item}`).join('\n')}

Sobre qual cobertura específica gostaria de mais detalhes?`

    case 'assistencia':
      return `🚗 **Assistência 24h AutoShield**:

**🔧 Serviços Disponíveis:**
${PRODUCT_KNOWLEDGE.assistencia.tipos.map(item => `• ${item}`).join('\n')}

**📍 Cobertura:** ${PRODUCT_KNOWLEDGE.assistencia.cobertura}
**⚡ Carência:** ${PRODUCT_KNOWLEDGE.assistencia.carencia}

**📱 Como solicitar:**
• App AutoShield (mais rápido)
• WhatsApp: (74) 98125-6120
• Central 24h

Precisa de algum esclarecimento sobre a assistência?`

    case 'tecnologia':
      return `🚀 **Tecnologia AutoShield**:

**📱 GPS com IA:**
${PRODUCT_KNOWLEDGE.tecnologia.gps}

**📲 App Exclusivo:**
${PRODUCT_KNOWLEDGE.tecnologia.app}

**🤖 Assistente IA:**
${PRODUCT_KNOWLEDGE.tecnologia.ia}

**🎁 Diferencial:** GPS que custa R$ 50/mês em outras empresas é **GRATUITO** conosco!

Quer saber mais sobre alguma funcionalidade específica?`

    case 'documentacao':
      return `📋 **Documentação e Processos**:

**✍️ Contrato:** ${PRODUCT_KNOWLEDGE.documentacao.contrato}
**⚡ Aprovação:** ${PRODUCT_KNOWLEDGE.documentacao.aprovacao}
**💳 Pagamento:** ${PRODUCT_KNOWLEDGE.documentacao.pagamento}
**🚪 Cancelamento:** ${PRODUCT_KNOWLEDGE.documentacao.cancelamento}

**📄 Documentos necessários:**
• RG e CPF
• CNH válida
• Comprovante de residência
• Documento do veículo

Tem alguma dúvida sobre o processo?`

    default:
      return `🤔 **Como posso ajudar?**

**🔍 Posso esclarecer sobre:**
• **Preços e planos** (Essencial, Completo, Premium)
• **Coberturas** (O que está incluído em cada plano)
• **Assistência 24h** (Guincho, chaveiro, etc.)
• **Tecnologia** (GPS com IA, App, funcionalidades)
• **Documentação** (Contrato, aprovação, cancelamento)

**💬 Também posso:**
• Comparar planos
• Explicar diferenciais
• Orientar sobre documentos

Sobre o que gostaria de saber mais?`
  }
}

// Detecta ofertas ou interesse comercial
function shouldOfferHelp(message: string, questionCount: number): boolean {
  const lowerMessage = message.toLowerCase()
  const commercialKeywords = ['contratar', 'interessado', 'quero', 'preciso', 'cotação', 'proposta']

  return commercialKeywords.some(keyword => lowerMessage.includes(keyword)) || questionCount >= 3
}

// Gera oferta contextual
function generateContextualOffer(productData: ProductData): string {
  const offers = [
    "🔥 **Oferta Especial**: 15% OFF na primeira parcela",
    "🎁 **GPS com IA** no valor de R$ 50/mês - **GRÁTIS**",
    "⚡ **Sem carência** para assistência",
    "📱 **App exclusivo** com todas as funcionalidades"
  ]

  const selectedOffer = offers[Math.floor(Math.random() * offers.length)]

  return `${selectedOffer}

📱 **Fale com nossa equipe:**
WhatsApp: (74) 98125-6120

Nossa equipe especializada está pronta para criar sua proposta personalizada!`
}

// === IMPLEMENTAÇÃO PRINCIPAL ===
const hf = new HfInference(process.env.HUGGINGFACE_TOKEN)
const conversationMemory = new Map<string, ConversationContext>()

// Função auxiliar para validação de token
const validateToken = (token: string | undefined): boolean => {
  return token !== undefined && token.startsWith('hf_') && token.length > 20
}

// Fallback inteligente para produtos
const getProductFallback = (message: string, category: string): string => {
  return answerProductQuestion(message, category)
}

// Tentativa com modelos estáveis
const tryWithStableModels = async (messages: ChatMessage[]): Promise<string> => {
  for (const model of STABLE_MODELS) {
    try {
      console.log(`🤖 Testando modelo: ${model}`)

      const response = await Promise.race([
        hf.chatCompletion({
          model,
          messages: messages.map(msg => ({
            role: msg.role as 'user' | 'assistant' | 'system',
            content: msg.content
          })),
          max_tokens: 200,
          temperature: 0.7,
          top_p: 0.9
        }),
        new Promise<never>((_, reject) =>
          setTimeout(() => reject(new Error('TIMEOUT')), CONFIG.TIMEOUT_MS)
        )
      ])

      if (response?.choices?.[0]?.message?.content) {
        console.log(`✅ Sucesso com modelo: ${model}`)
        return response.choices[0].message.content.trim()
      }
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Erro desconhecido'
      console.error(`❌ Modelo ${model} falhou:`, errorMessage)
      continue
    }
  }

  return ''
}

// Limpeza de sessões
const cleanupSessions = (conversationMemory: Map<string, ConversationContext>): void => {
  if (conversationMemory.size > CONFIG.MAX_SESSIONS) {
    const keys = Array.from(conversationMemory.keys())
    const keysToDelete = keys.slice(0, Math.floor(CONFIG.MAX_SESSIONS * 0.2))
    keysToDelete.forEach(key => conversationMemory.delete(key))
  }
}

export default defineEventHandler(async (event): Promise<ChatResponse> => {
  try {
    const body = await readBody<ChatRequest>(event)
    const { message } = body
    let context = body.context || []
    let sessionId = body.sessionId || Math.random().toString(36).substring(2, 15)

    // Validação
    if (!message?.trim()) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Mensagem é obrigatória'
      })
    }

    // Limpeza periódica
    cleanupSessions(conversationMemory)

    // Recuperar ou criar contexto
    let conversationContext: ConversationContext
    if (conversationMemory.has(sessionId)) {
      conversationContext = conversationMemory.get(sessionId)!
      conversationContext.questionCount++
    } else {
      conversationContext = {
        state: ConversationState.INICIAL,
        productData: {},
        lastCategory: '',
        questionCount: 1
      }
    }

    // Detectar categoria da pergunta
    const category = detectQuestionCategory(message)
    conversationContext.lastCategory = category
    conversationContext.productData.categoria = category as any

    let reply = ''

    // === LÓGICA PRINCIPAL DE RESPOSTA ===

    // 1. PRIMEIRA PRIORIDADE: Responder dúvidas sobre produtos
    const directAnswer = answerProductQuestion(message, category)

    if (directAnswer && !directAnswer.includes('Como posso ajudar?')) {
      reply = directAnswer
      conversationContext.state = ConversationState.RESPONDENDO_DUVIDA

      // Adicionar oferta contextual se aplicável
      if (shouldOfferHelp(message, conversationContext.questionCount)) {
        reply += `\n\n${generateContextualOffer(conversationContext.productData)}`
        conversationContext.state = ConversationState.OFERECENDO_AJUDA
      }
    } else {
      // 2. Tentar com IA se não encontrou resposta direta
      const token = process.env.HUGGINGFACE_TOKEN

      if (validateToken(token)) {
        const systemPrompt = `Você é o assistente especialista da AutoShield, empresa de proteção veicular.

FOQUE APENAS EM: Responder dúvidas sobre produtos, planos, coberturas, tecnologia e ofertas.

PRODUTOS DISPONÍVEIS:
- Plano Essencial: R$ 89/mês (até R$ 50.000)
- Plano Completo: R$ 149/mês (até R$ 100.000) 
- Plano Premium: R$ 229/mês (até R$ 200.000)

DIFERENCIAIS:
- GPS com IA GRATUITO
- Sem carência para assistência
- Cobertura completa 24h
- App exclusivo

INSTRUÇÕES:
1. Responda APENAS dúvidas sobre produtos AutoShield
2. Seja objetivo e técnico
3. Sempre mencione benefícios
4. Direcione para WhatsApp (74) 98125-6120 quando apropriado
5. Use emojis para destacar informações

Se a pergunta não for sobre produtos AutoShield, redirecione educadamente para assuntos relevantes.`

        const messages: ChatMessage[] = [
          { role: 'system' as const, content: systemPrompt },
          ...context.slice(-CONFIG.MAX_CONTEXT_MESSAGES),
          { role: 'user' as const, content: `[CATEGORIA: ${category}] ${message}` }
        ]

        try {
          reply = await tryWithStableModels(messages)
          if (!reply || reply.length < 10) {
            reply = getProductFallback(message, category)
          }
        } catch (error) {
          reply = getProductFallback(message, category)
        }
      } else {
        reply = getProductFallback(message, category)
      }
    }

    // Garantir que sempre há uma resposta
    if (!reply) {
      reply = `👋 Olá! Sou o assistente AutoShield.

🚗 **Especialista em:**
• Planos de proteção veicular
• Coberturas e benefícios  
• Tecnologia e diferenciais
• Preços e ofertas

📞 **Contato direto:** (74) 98125-6120

Como posso esclarecer suas dúvidas sobre nossos produtos?`
    }

    // Atualizar contexto
    const newContext: ChatMessage[] = [
      ...context.slice(-(CONFIG.MAX_CONTEXT_MESSAGES - 2)),
      { role: 'user' as const, content: message },
      { role: 'assistant' as const, content: reply }
    ]

    // Salvar contexto da conversa
    conversationMemory.set(sessionId, conversationContext)

    return {
      reply: reply,
      timestamp: new Date().toISOString(),
      context: newContext
    }

  } catch (error: unknown) {
    console.error('❌ Erro na API:', error)
    return {
      reply: `🚨 Sistema temporariamente indisponível.

📞 **Contato direto:**
WhatsApp: (74) 98125-6120

Nossa equipe está pronta para esclarecer todas suas dúvidas sobre nossos produtos!`,
      context: [],
      error: true,
      timestamp: new Date().toISOString()
    }
  }
})
