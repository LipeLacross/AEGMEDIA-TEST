// server/api/newsletter.post.ts - API de newsletter com Brevo corrigida
interface NewsletterRequest {
  email: string
  name?: string
  source?: string
}

interface NewsletterResponse {
  success: boolean
  message: string
}

interface BrevoContact {
  email: string
  listIds: number[]
  attributes: Record<string, string>
  updateEnabled: boolean
}

export default defineEventHandler(async (event): Promise<NewsletterResponse> => {
  try {
    const body = await readBody<NewsletterRequest>(event)
    const { email, name, source = 'Landing Page AutoShield' } = body

    // Validação de email
    if (!email?.trim()) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Email é obrigatório'
      })
    }

    // Validação de formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Formato de email inválido'
      })
    }

    // Configuração Brevo
    const brevoApiKey = process.env.BREVO_API_KEY
    const listIdEnv = process.env.BREVO_LIST_ID || '1'

    if (!brevoApiKey) {
      throw createError({
        statusCode: 500,
        statusMessage: 'Configuração do serviço de newsletter não encontrada'
      })
    }

    const listId = parseInt(listIdEnv, 10)
    if (isNaN(listId)) {
      throw createError({
        statusCode: 500,
        statusMessage: 'ID da lista inválido'
      })
    }

    // Preparar dados para Brevo
    const contactData: BrevoContact = {
      email: email.toLowerCase().trim(),
      listIds: [listId],
      attributes: {
        ORIGEM: source,
        DATA_CADASTRO: new Date().toISOString().split('T')[0],
        ...(name && { NOME: name.trim() })
      },
      updateEnabled: true
    }

    // Fazer requisição para Brevo com headers tipados
    const headers: Record<string, string> = {
      'accept': 'application/json',
      'content-type': 'application/json'
    }

    if (brevoApiKey) {
      headers['api-key'] = brevoApiKey
    }

    const _response = await $fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers,
      body: contactData
    })

    return {
      success: true,
      message: 'E-mail cadastrado com sucesso! Você receberá nossas atualizações em breve.'
    }

  } catch (error: unknown) {
    console.error('Erro ao cadastrar no Brevo:', error)

    // Type guard para erro
    const isBrevoError = (err: unknown): err is { status: number; data?: { message?: string } } => {
      return typeof err === 'object' && err !== null && 'status' in err
    }

    // Se o contato já existe, considerar como sucesso
    if (isBrevoError(error) && error.status === 400 &&
        error.data?.message?.includes('already exists')) {
      return {
        success: true,
        message: 'E-mail já cadastrado! Você já receberá nossas atualizações.'
      }
    }

    // Log detalhado do erro para debugging
    if (isBrevoError(error)) {
      console.error('Erro Brevo - Status:', error.status, 'Data:', error.data)
    }

    throw createError({
      statusCode: 500,
      statusMessage: 'Erro ao cadastrar newsletter. Tente novamente mais tarde.'
    })
  }
})
