// server/api/chat.post.ts - Versão Final Corrigida
import { HfInference } from '@huggingface/inference'

interface ChatMessage {
  role: 'user' | 'assistant'
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

interface HuggingFaceResponse {
  generated_text?: string
}

// Validação do token
const validateToken = (token: string | undefined): boolean => {
  return token !== undefined && token.startsWith('hf_') && token.length > 20
}

// Fallback responses inteligentes
const getIntelligentFallback = (message: string): string => {
  const lowerMessage = message.toLowerCase()

  if (lowerMessage.includes('preço') || lowerMessage.includes('custo') || lowerMessage.includes('valor')) {
    return `Nossos planos da AutoShield começam em R$ 89/mês e incluem:
• Cobertura completa contra roubo e furto
• Rastreamento GPS com IA gratuito
• Assistência 24h em todo Brasil
• Guincho ilimitado

Para uma cotação personalizada, fale conosco no WhatsApp: (74) 98125-6120`
  }

  if (lowerMessage.includes('cobertura') || lowerMessage.includes('proteção')) {
    return `A AutoShield oferece proteção completa:
• Roubo e furto total
• Colisão e incêndio
• Fenômenos naturais
• Assistência 24h completa
• Rastreamento GPS inteligente

Fundada por Felipe Moreira Rios, somos referência em proteção veicular premium.`
  }

  if (lowerMessage.includes('contato') || lowerMessage.includes('falar') || lowerMessage.includes('atendimento')) {
    return `Entre em contato conosco:
📱 WhatsApp: (74) 98125-6120
📧 Email: contato@autoshield.com.br
🕒 Atendimento 24h disponível

Nossa equipe está pronta para ajudar com qualquer dúvida!`
  }

  return `Olá! Sou o assistente da AutoShield, empresa fundada por Felipe Moreira Rios.

Como posso ajudá-lo hoje?
• Informações sobre planos e preços
• Detalhes de cobertura
• Contratação e atendimento
• Dúvidas sobre proteção veicular

Para atendimento imediato: (74) 98125-6120`
}

const hf = new HfInference(process.env.HUGGINGFACE_TOKEN)
const conversationMemory = new Map<string, ChatMessage[]>()

export default defineEventHandler(async (event): Promise<ChatResponse> => {
  const startTime = Date.now()

  try {
    const body = await readBody<ChatRequest>(event)
    const { message } = body
    let context = body.context || []
    let sessionId = body.sessionId

    // Validação de entrada
    if (!message?.trim()) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Mensagem é obrigatória'
      })
    }

    // Geração de sessionId
    if (!sessionId) {
      sessionId = Math.random().toString(36).substring(2, 15)
    }

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
        ...context.slice(-14),
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

    // Preparação do prompt
    const systemPrompt = `Você é o assistente virtual da AutoShield Proteção Veicular, empresa fundada por Felipe Moreira Rios.
    
    Informações essenciais:
    - CEO: Felipe Moreira Rios (CNPJ: 12.345.678/0001-99)
    - Especialidade: Proteção veicular premium com tecnologia de ponta
    - Planos a partir de R$ 89/mês
    - Cobertura 24h completa
    - WhatsApp: (74) 98125-6120

    Responda de forma clara, objetiva e sempre em português brasileiro.`

    const history = context
      .slice(-6) // Reduzir contexto para evitar limite de tokens
      .map(msg => `${msg.role === 'user' ? '[Cliente]' : '[Assistente]'} ${msg.content}`)
      .join('\n')

    const fullPrompt = `${systemPrompt}\n\nHistórico:\n${history}\n\n[Cliente] ${message}\n[Assistente]`

    // Requisição com timeout e retry
    let reply = ''
    const maxRetries = 2

    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        console.log(`Tentativa ${attempt} para Hugging Face...`)

        const response = await Promise.race([
          hf.textGeneration({
            model: 'mistralai/Mistral-7B-Instruct-v0.2',
            inputs: fullPrompt,
            parameters: {
              max_new_tokens: 200,
              temperature: 0.7,
              repetition_penalty: 1.1,
              top_p: 0.9,
              stop: ['[Cliente]', '[Assistente]']
            }
          }) as Promise<HuggingFaceResponse>,

          // Timeout de 10 segundos
          new Promise<never>((_, reject) =>
            setTimeout(() => reject(new Error('Timeout')), 10000)
          )
        ])

        // server/api/chat.post.ts - Correção do erro TS2532
        if (response && response.generated_text) {
          reply = response.generated_text
            .replace(fullPrompt, '')
            .split('[Cliente]')[0]
            .trim()

          if (reply.length >= 10) {
            console.log(`Sucesso na tentativa ${attempt}`)
            break
          }
        }


      } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : 'Erro desconhecido'
        console.error(`Erro na tentativa ${attempt}:`, errorMessage)

        if (attempt === maxRetries) {
          // Se todas as tentativas falharam, usar fallback inteligente
          reply = getIntelligentFallback(message)
          console.log('Usando fallback inteligente após todas as tentativas falharem')
        }
      }
    }

    // Fallback final se resposta muito curta
    if (!reply || reply.length < 10) {
      reply = getIntelligentFallback(message)
    }

    // Atualização do contexto
    const newContext: ChatMessage[] = [
      ...context.slice(-14),
      { role: 'user' as const, content: message },
      { role: 'assistant' as const, content: reply }
    ]

    conversationMemory.set(sessionId, newContext)

    const processingTime = Date.now() - startTime
    console.log(`Processamento concluído em ${processingTime}ms`)

    return {
      reply: reply.replace(/(\d+)\./g, '•'),
      timestamp: new Date().toISOString(),
      context: newContext
    }

  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Erro desconhecido'
    console.error('Erro crítico na API:', errorMessage)

    // Fallback de emergência
    const emergencyReply = `Olá! Momentaneamente estou com dificuldades técnicas, mas posso ajudá-lo:

📞 **Atendimento Direto:**
WhatsApp: (74) 98125-6120

💡 **Informações Rápidas:**
• Planos a partir de R$ 89/mês
• Cobertura completa 24h
• GPS gratuito incluso
• Empresa fundada por Felipe Moreira Rios

Nossa equipe está disponível para atendimento personalizado!`

    return {
      reply: emergencyReply,
      context: [],
      error: true,
      timestamp: new Date().toISOString(),
      debug: `Erro: ${errorMessage}`
    }
  }
})
