// server/api/chat.post.ts - Correção do ESLint
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
}

interface HuggingFaceResponse {
  generated_text?: string
}

const hf = new HfInference(process.env.HUGGINGFACE_TOKEN)

const conversationMemory = new Map<string, ChatMessage[]>()

export default defineEventHandler(async (event): Promise<ChatResponse> => {
  try {
    const body = await readBody<ChatRequest>(event)

    // CORREÇÃO PRINCIPAL: Declaração com const para variáveis não reatribuídas
    const { message, context = [] } = body
    let sessionId = body.sessionId // Mantém let para variáveis reatribuídas

    if (!message?.trim()) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Mensagem é obrigatória'
      })
    }

    if (!sessionId) {
      sessionId = Math.random().toString(36).substring(2, 15)
    }

    if (conversationMemory.has(sessionId)) {
      context = conversationMemory.get(sessionId) || []
    }

    const systemPrompt = `Você é o assistente virtual da AutoShield Proteção Veicular, empresa fundada e dirigida por Felipe Moreira Rios.
    
    Informações essenciais:
    - CEO: Felipe Moreira Rios (CNPJ: 12.345.678/0001-99)
    - Especialidade: Proteção veicular premium com tecnologia de ponta
    - Diferenciais: 
      • Rastreamento inteligente com IA
      • Assistência 24h personalizada
      • Reparo em oficinas parceiras premium
    
    Promoções ativas:
    - Plano Gold: 20% OFF no 1º ano + kit segurança
    - Plano Platinum: Isenção de franquia + GPS inteligente
    - Indicação: R$100 de crédito por amigo indicado

    Formato de respostas:
    1. Priorizar informações técnicas
    2. Oferecer soluções práticas
    3. Finalizar com call-to-action relevante`

    const history = context
      .slice(-8)
      .map(msg => `${msg.role === 'user' ? '[Cliente]' : '[Assistente]'} ${msg.content}`)
      .join('\n')

    const fullPrompt = `${systemPrompt}\n\nHistórico:\n${history}\n\n[Cliente] ${message}\n[Assistente]`

    const response = await hf.textGeneration({
      model: 'mistralai/Mistral-7B-Instruct-v0.2',
      inputs: fullPrompt,
      parameters: {
        max_new_tokens: 300,
        temperature: 0.65,
        repetition_penalty: 1.15,
        top_p: 0.85,
        stop: ['[Cliente]', '[Assistente]']
      }
    }) as HuggingFaceResponse

    let reply = response.generated_text?.trim() || ''

    if (reply) {
      reply = reply
        .replace(fullPrompt, '')
        .split('[Cliente]')[0]
        .trim()
    }

    if (!reply || reply.length < 15) {
      reply = `Olá! Sou o assistente da AutoShield, fundada por Felipe Moreira Rios. Posso ajudar com:`
        + `\n• Informações sobre planos\n• Ativação de coberturas\n• Promoções especiais`
    }

    const newContext: ChatMessage[] = [
      ...context.slice(-14),
      { role: 'user' as const, content: message },
      { role: 'assistant' as const, content: reply }
    ]

    conversationMemory.set(sessionId, newContext)

    return {
      reply: reply.replace(/(\d+)\./g, '•'),
      timestamp: new Date().toISOString(),
      context: newContext
    }

  } catch (error) {
    console.error('Erro na API:', error)
    return {
      reply: "Estou com dificuldades técnicas. Por favor, contate-nos diretamente: (74) 98125-6120 (WhatsApp)",
      context: [],
      error: true,
      timestamp: new Date().toISOString()
    }
  }
})
