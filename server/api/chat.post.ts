// server/api/chat.post.ts - API de chat com Hugging Face corrigida
import { HfInference } from '@huggingface/inference'

interface ChatMessage {
  role: 'user' | 'assistant'
  content: string
}

interface ChatRequest {
  message: string
  context?: ChatMessage[]
}

interface ChatResponse {
  reply: string
  timestamp: string
  error?: boolean
}

const hf = new HfInference(process.env.HUGGINGFACE_TOKEN)

export default defineEventHandler(async (event): Promise<ChatResponse> => {
  try {
    const body = await readBody<ChatRequest>(event)
    const { message, context = [] } = body

    if (!message?.trim()) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Mensagem é obrigatória'
      })
    }

    // Prompt personalizado para proteção veicular
    const systemPrompt = `Você é um assistente especializado em proteção veicular da empresa AutoShield.
    Responda sempre de forma profissional, prestativa e focada em proteção veicular.

    Informações da AutoShield:
    - Empresa líder em proteção veicular no Brasil
    - Cobertura 24h para roubo, furto, colisão, incêndio
    - Assistência mecânica e guincho gratuito
    - Rastreamento GPS incluso gratuitamente
    - Planos a partir de R$ 89/mês
    - Atendimento via WhatsApp: (11) 9999-9999

    Responda de forma clara, objetiva e sempre em português brasileiro.
    Seja útil e direcionado, oferecendo soluções práticas.`

    const conversationHistory = context
      .slice(-10) // Limitar histórico para performance
      .map((msg: ChatMessage) =>
        `${msg.role === 'user' ? 'Cliente' : 'AutoShield'}: ${msg.content}`
      ).join('\n')

    const fullPrompt = `${systemPrompt}\n\nHistórico:\n${conversationHistory}\n\nCliente: ${message}\nAutoShield:`

    const response = await hf.textGeneration({
      model: 'mistralai/Mistral-7B-Instruct-v0.2',
      inputs: fullPrompt,
      parameters: {
        max_new_tokens: 250,
        temperature: 0.7,
        top_p: 0.9,
        do_sample: true,
        stop: ['Cliente:', 'AutoShield:', '\n\n'],
        repetition_penalty: 1.1
      }
    })

    // Processa a resposta
    let reply = response.generated_text
      .replace(fullPrompt, '')
      .trim()

    // Fallback se a resposta estiver vazia ou muito curta
    if (!reply || reply.length < 10) {
      reply = "Olá! Sou o assistente da AutoShield. Como posso ajudá-lo com informações sobre proteção veicular? Posso esclarecer dúvidas sobre planos, coberturas ou processos."
    }

    // Limpar resposta de caracteres indesejados
    reply = reply
      .replace(/^\s*-\s*/, '') // Remove traços no início
      .replace(/\s+/g, ' ') // Normaliza espaços
      .trim()

    return {
      reply,
      timestamp: new Date().toISOString()
    }

  } catch (error) {
    console.error('Erro na API do chat:', error)

    return {
      reply: "Desculpe, estou com dificuldades técnicas no momento. Por favor, tente novamente em alguns instantes ou entre em contato pelo WhatsApp (11) 9999-9999 para atendimento imediato.",
      error: true,
      timestamp: new Date().toISOString()
    }
  }
})
