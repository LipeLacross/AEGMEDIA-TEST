// server/api/chat.post.ts - Versão FINAL com Tipos Corretos
import { HfInference } from '@huggingface/inference'

interface ChatMessage {
  role: 'user' | 'assistant' | 'system'
  content: string
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

// Configurações otimizadas para modelos de 2025
const CONFIG = {
  MAX_RETRIES: 3,
  TIMEOUT_MS: 8000,
  RETRY_DELAY_MS: 1500,
  MAX_SESSIONS: 100,
  SESSION_TTL_MS: 30 * 60 * 1000,
  BACKOFF_MULTIPLIER: 2
} as const

// Modelos prioritários atualizados
const STABLE_MODELS = [
  'google/gemma-2-2b-it',
  'meta-llama/Meta-Llama-3-8B-Instruct', // Versão gratuita para uso comercial
  'mistralai/Mistral-7B-Instruct-v0.2',
  'tiiuae/falcon-7b',
  'meta-llama/Llama-2-7B-chat-hf'
] as const


// Type helper para garantir que temos um modelo válido
type ValidModel = typeof STABLE_MODELS[number]

// Validação do token
const validateToken = (token: string | undefined): boolean => {
  return token !== undefined && token.startsWith('hf_') && token.length > 20
}

// Função para delay com backoff exponencial
const delay = (ms: number): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, ms))
}

// Fallback responses em português otimizado
const getIntelligentFallback = (message: string, errorType?: string): string => {
  const lowerMessage = message.toLowerCase()

  let baseResponse = ''

  if (lowerMessage.includes('preço') || lowerMessage.includes('custo') || lowerMessage.includes('valor')) {
    baseResponse = `💰 **Planos AutoShield:**

• **Essencial**: R$ 89/mês - Cobertura básica completa
• **Completo**: R$ 149/mês - Proteção total + benefícios extras  
• **Premium**: R$ 229/mês - Máxima proteção + serviços VIP

📱 Fale conosco: (74) 98125-6120`
  } else if (lowerMessage.includes('cobertura') || lowerMessage.includes('proteção')) {
    baseResponse = `🛡️ **Proteção AutoShield:**

• Roubo e furto total
• Rastreamento GPS inteligente
• Assistência 24h Brasil
• Guincho ilimitado
• Cobertura de vidros

📞 Contato: (74) 98125-6120`
  } else if (lowerMessage.includes('contato') || lowerMessage.includes('falar') || lowerMessage.includes('atendimento')) {
    baseResponse = `📞 **Fale Conosco:**

• WhatsApp: (74) 98125-6120
• Email: contato@autoshield.com.br
• Atendimento 24h disponível

Nossa equipe especializada está pronta para ajudar!`
  } else {
    baseResponse = `👋 Olá! Sou o assistente da AutoShield.

🚗 **Como posso ajudar:**
• Informações sobre planos e preços
• Detalhes de cobertura
• Contratação e atendimento
• Dúvidas sobre proteção veicular

📱 **Contato direto:** (74) 98125-6120`
  }

  return baseResponse
}

// Fallback de emergência
const getEmergencyFallback = (): string => {
  return `🚨 **Sistema Temporariamente Indisponível**

📞 **Contato Imediato:**
WhatsApp: (74) 98125-6120

💡 **Informações Rápidas:**
• AutoShield: Proteção veicular premium
• Planos: R$ 89, R$ 149 e R$ 229/mês
• Cobertura 24h em todo Brasil
• CEO: Felipe Moreira Rios

Nossa equipe está disponível para ajudar!`
}

// FUNÇÃO CORRIGIDA: Tipos seguros para modelos
const tryWithStableModels = async (messages: ChatMessage[]): Promise<string> => {
  for (const model of STABLE_MODELS) {
    try {
      console.log(`🤖 Testando modelo: ${model}`)

      // CORREÇÃO PRINCIPAL: model agora é garantidamente um tipo literal de string
      const response = await Promise.race([
        hf.chatCompletion({
          model, // Agora é do tipo ValidModel, não pode ser undefined
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

  return '' // Todos os modelos falharam
}

// Função para limpar sessões antigas
const cleanupSessions = (conversationMemory: Map<string, ChatMessage[]>): void => {
  if (conversationMemory.size > CONFIG.MAX_SESSIONS) {
    const keys = Array.from(conversationMemory.keys())
    const keysToDelete = keys.slice(0, Math.floor(CONFIG.MAX_SESSIONS * 0.2))
    keysToDelete.forEach(key => conversationMemory.delete(key))
  }
}

const hf = new HfInference(process.env.HUGGINGFACE_TOKEN)
const conversationMemory = new Map<string, ChatMessage[]>()

export default defineEventHandler(async (event): Promise<ChatResponse> => {
  const startTime = Date.now()

  try {
    const body = await readBody<ChatRequest>(event)
    const { message } = body
    let context = body.context || []
    let sessionId = body.sessionId || Math.random().toString(36).substring(2, 15)

    // Validação de entrada
    if (!message?.trim()) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Mensagem é obrigatória'
      })
    }

    // Limpeza periódica de sessões antigas
    cleanupSessions(conversationMemory)

    // Recuperação de contexto
    if (conversationMemory.has(sessionId)) {
      context = conversationMemory.get(sessionId) || []
    }

    // Validação do token
    const token = process.env.HUGGINGFACE_TOKEN
    if (!validateToken(token)) {
      console.error('Token Hugging Face inválido ou não configurado')
      const fallbackReply = getIntelligentFallback(message)

      const newContext: ChatMessage[] = [
        ...context.slice(-10),
        { role: 'user' as const, content: message },
        { role: 'assistant' as const, content: fallbackReply }
      ]

      conversationMemory.set(sessionId, newContext)

      return {
        reply: fallbackReply,
        timestamp: new Date().toISOString(),
        context: newContext,
        debug: 'Usando fallback - Token inválido'
      }
    }

// Prompt do sistema totalmente reformulado
const systemPrompt = `Você é o Vendedor Sênior da AutoShield com 15 anos de experiência. 

**Dados da Empresa:**
- Planos: Essencial (R$89), Completo (R$149), Premium (R$229)
- Coberturas: Roubo, colisão, incêndio, assistência 24h, GPS inteligente
- Diferenciais: App exclusivo, desconto progressivo, carro reserva

**Técnicas de Vendas:**
1. Identificar necessidade: Perguntar tipo de veículo, uso diário, preocupações
2. Oferecer upsell: Ex: "Para seu SUV 2023, recomendo o Premium com cobertura total"
3. Criar urgência: "Hoje temos 10% de desconto para contratação imediata"
4. Lidar com objeções: 
   - "É caro" → Mostrar economia anual vs seguro tradicional
   - "Preciso pensar" → Oferecer análise gratuita do veículo

**Formato de Respostas:**
[Início] Saudação personalizada
[Meio] Benefícios específicos + comparação de planos
[Fim] CTA claro + link WhatsApp

**Exemplo de Resposta Profissional:**
"Olá [Nome], para seu Corolla 2022 que roda 50km/dia, nosso plano Completo oferece... 
👉 WhatsApp para contratação imediata: (74) 98125-6120"`

    // Preparar mensagens com tipos seguros
    const messages: ChatMessage[] = [
      {
        role: 'system' as const,
        content: systemPrompt
      },
      ...context.slice(-6),
      {
        role: 'user' as const,
        content: `[PT-BR] ${message}`
      }
    ]

    let reply = ''

    // Tentar com todos os modelos estáveis
    for (let attempt = 1; attempt <= CONFIG.MAX_RETRIES; attempt++) {
      try {
        console.log(`🔄 Tentativa ${attempt}/${CONFIG.MAX_RETRIES}`)

        reply = await tryWithStableModels(messages)

        if (reply && reply.length > 10) {
          // Filtrar respostas em inglês
          if (reply.includes('I\'m here to help') ||
              reply.includes('AutoShield company') ||
              reply.toLowerCase().includes('vehicle protection')) {
            console.log('🔍 Resposta em inglês detectada, usando fallback')
            reply = getIntelligentFallback(message, 'LANGUAGE_ERROR')
          }
          break
        }
      } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : 'Erro desconhecido'
        console.error(`❌ Tentativa ${attempt} falhou:`, errorMessage)

        if (attempt === CONFIG.MAX_RETRIES) {
          reply = getIntelligentFallback(message, 'MODEL_ERROR')
        } else {
          const waitTime = CONFIG.RETRY_DELAY_MS * Math.pow(CONFIG.BACKOFF_MULTIPLIER, attempt - 1)
          await delay(waitTime)
        }
      }
    }

    // Fallback final se todas as tentativas falharam
    if (!reply || reply.length < 10) {
      reply = getIntelligentFallback(message, 'ALL_FAILED')
    }

    // Atualizar contexto
    const newContext: ChatMessage[] = [
      ...context.slice(-10),
      { role: 'user' as const, content: message },
      { role: 'assistant' as const, content: reply }
    ]

    conversationMemory.set(sessionId, newContext)

    const processingTime = Date.now() - startTime
    console.log(`✅ Processamento concluído em ${processingTime}ms`)

    return {
      reply: reply,
      timestamp: new Date().toISOString(),
      context: newContext
    }

  } catch (error: unknown) {
    console.error('❌ Erro crítico na API:', error)
    return {
      reply: getEmergencyFallback(),
      context: [],
      error: true,
      timestamp: new Date().toISOString()
    }
  }
})
