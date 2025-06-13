// server/api/chat.post.ts - Versão Completamente Corrigida
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

// Configurações otimizadas para evitar ECONNRESET
const CONFIG = {
  MAX_RETRIES: 3,
  TIMEOUT_MS: 15000,
  RETRY_DELAY_MS: 1000,
  MAX_SESSIONS: 100,
  SESSION_TTL_MS: 30 * 60 * 1000,
  BACKOFF_MULTIPLIER: 2
}

// Validação do token
const validateToken = (token: string | undefined): boolean => {
  return token !== undefined && token.startsWith('hf_') && token.length > 20
}

// Função para delay com backoff exponencial
const delay = (ms: number): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, ms))
}

// Fallback responses inteligentes com suporte a tipos de erro
const getIntelligentFallback = (message: string, errorType?: string): string => {
  const lowerMessage = message.toLowerCase()

  let baseResponse = ''

  if (lowerMessage.includes('preço') || lowerMessage.includes('custo') || lowerMessage.includes('valor')) {
    baseResponse = `Nossos planos da AutoShield começam em R$ 89/mês e incluem:
• Cobertura completa contra roubo e furto
• Rastreamento GPS com IA gratuito
• Assistência 24h em todo Brasil
• Guincho ilimitado

Para uma cotação personalizada, fale conosco no WhatsApp: (74) 98125-6120`
  } else if (lowerMessage.includes('cobertura') || lowerMessage.includes('proteção')) {
    baseResponse = `A AutoShield oferece proteção completa:
• Roubo e furto total
• Colisão e incêndio
• Fenômenos naturais
• Assistência 24h completa
• Rastreamento GPS inteligente

Fundada por Felipe Moreira Rios, somos referência em proteção veicular premium.`
  } else if (lowerMessage.includes('contato') || lowerMessage.includes('falar') || lowerMessage.includes('atendimento')) {
    baseResponse = `Entre em contato conosco:
📱 WhatsApp: (74) 98125-6120
📧 Email: contato@autoshield.com.br
🕒 Atendimento 24h disponível

Nossa equipe está pronta para ajudar com qualquer dúvida!`
  } else {
    baseResponse = `Olá! Sou o assistente da AutoShield, empresa fundada por Felipe Moreira Rios.

Como posso ajudá-lo hoje?
• Informações sobre planos e preços
• Detalhes de cobertura
• Contratação e atendimento
• Dúvidas sobre proteção veicular

Para atendimento imediato: (74) 98125-6120`
  }

  // Adicionar informação sobre instabilidade se for erro de conexão
  if (errorType === 'ECONNRESET' || errorType === 'API_ERROR') {
    baseResponse += `\n\n⚠️ Momentaneamente com instabilidade na IA. Respondendo com base no conhecimento local.`
  }

  return baseResponse
}

// Fallback de emergência
const getEmergencyFallback = (): string => {
  return `Olá! Momentaneamente estou com dificuldades técnicas, mas posso ajudá-lo:

📞 **Atendimento Direto:**
WhatsApp: (74) 98125-6120

💡 **Informações Rápidas:**
• Planos a partir de R$ 89/mês
• Cobertura completa 24h
• GPS gratuito incluso
• Empresa fundada por Felipe Moreira Rios

Nossa equipe está disponível para atendimento personalizado!`
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

    // Preparar mensagens para chat completion
    const messages: ChatMessage[] = [
      {
        role: 'system' as const,
        content: `Você é o assistente virtual da AutoShield Proteção Veicular, empresa fundada por Felipe Moreira Rios.
        
        Informações essenciais:
        - CEO: Felipe Moreira Rios (CNPJ: 12.345.678/0001-99)
        - Especialidade: Proteção veicular premium com tecnologia de ponta
        - Planos a partir de R$ 89/mês
        - Cobertura 24h completa
        - WhatsApp: (74) 98125-6120

        Responda de forma clara, objetiva e sempre em português brasileiro.`
      },
      ...context.slice(-6), // Últimas 6 mensagens de contexto
      {
        role: 'user' as const,
        content: message
      }
    ]

    let reply = ''

    for (let attempt = 1; attempt <= CONFIG.MAX_RETRIES; attempt++) {
      try {
        console.log(`Tentativa ${attempt}/${CONFIG.MAX_RETRIES} para Hugging Face...`)

        // Usar chatCompletion ao invés de textGeneration
        const response = await Promise.race([
          hf.chatCompletion({
            model: 'mistralai/Mistral-7B-Instruct-v0.2',
            messages: messages as any, // Type assertion temporária
            max_tokens: 200,
            temperature: 0.7,
            top_p: 0.9
          }),
          new Promise<never>((_, reject) =>
            setTimeout(() => reject(new Error('TIMEOUT')), CONFIG.TIMEOUT_MS)
          )
        ])

        // Extrair resposta do formato chat completion
        if (response?.choices?.[0]?.message?.content) {
          reply = response.choices[0].message.content.trim()
          break
        }

      } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : 'Erro desconhecido'
        console.error(`Erro na tentativa ${attempt}:`, errorMessage)

        if (attempt === CONFIG.MAX_RETRIES) {
          reply = getIntelligentFallback(message, 'API_ERROR')
        } else {
          const waitTime = CONFIG.RETRY_DELAY_MS * Math.pow(CONFIG.BACKOFF_MULTIPLIER, attempt - 1)
          await delay(waitTime)
        }
      }
    }

    // Atualizar contexto
    const newContext: ChatMessage[] = [
      ...context.slice(-10),
      { role: 'user' as const, content: message },
      { role: 'assistant' as const, content: reply }
    ]

    conversationMemory.set(sessionId, newContext)

    const processingTime = Date.now() - startTime
    console.log(`Processamento concluído em ${processingTime}ms`)

    return {
      reply: reply || getIntelligentFallback(message),
      timestamp: new Date().toISOString(),
      context: newContext
    }

  } catch (error: unknown) {
    console.error('Erro crítico na API:', error)
    return {
      reply: getEmergencyFallback(),
      context: [],
      error: true,
      timestamp: new Date().toISOString()
    }
  }
})
