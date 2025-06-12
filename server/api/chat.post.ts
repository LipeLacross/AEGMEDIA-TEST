// server/api/chat.post.ts - Integração com Hugging Face para AutoShield
import { HfInference } from '@huggingface/inference'

const hf = new HfInference(process.env.HUGGINGFACE_TOKEN)

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const { message, context = [] } = body

    // Prompt personalizado para proteção veicular
    const systemPrompt = `Você é um assistente especializado em proteção veicular da empresa AutoShield.
    Responda sempre de forma profissional, prestativa e focada em proteção veicular.

    Informações da AutoShield:
    - Empresa líder em proteção veicular
    - Cobertura 24h para roubo, furto, colisão, incêndio
    - Assistência mecânica e guincho gratuito
    - Rastreamento GPS incluso
    - Planos a partir de R$ 89/mês

    Responda de forma clara e objetiva em português brasileiro.`

    const conversationHistory = context.map((msg: any) =>
      `${msg.role === 'user' ? 'Cliente' : 'AutoShield'}: ${msg.content}`
    ).join('\n')

    const fullPrompt = `${systemPrompt}\n\nHistórico:\n${conversationHistory}\n\nCliente: ${message}\nAutoShield:`

    const response = await hf.textGeneration({
      model: 'mistralai/Mistral-7B-Instruct-v0.2',
      inputs: fullPrompt,
      parameters: {
        max_new_tokens: 200,
        temperature: 0.7,
        top_p: 0.9,
        do_sample: true,
        stop: ['Cliente:', 'AutoShield:', '\n\n']
      }
    })

    // Processa a resposta
    let reply = response.generated_text
      .replace(fullPrompt, '')
      .trim()

    // Fallback se a resposta estiver vazia
    if (!reply || reply.length < 10) {
      reply = "Olá! Sou o assistente da AutoShield. Como posso ajudá-lo com informações sobre proteção veicular?"
    }

    return {
      reply,
      timestamp: new Date().toISOString()
    }

  } catch (error) {
    console.error('Erro na API do chat:', error)

    return {
      reply: "Desculpe, estou com dificuldades técnicas no momento. Por favor, tente novamente ou entre em contato pelo WhatsApp (11) 9999-9999.",
      error: true,
      timestamp: new Date().toISOString()
    }
  }
})
