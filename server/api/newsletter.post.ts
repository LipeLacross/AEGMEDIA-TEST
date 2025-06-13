// server/api/newsletter.post.ts
interface NewsletterRequest {
  email: string;
  name?: string;
  source?: string;
}

interface NewsletterResponse {
  success: boolean;
  message: string;
}

interface BrevoContact {
  email: string;
  listIds: number[];
  attributes: Record<string, string>;
  updateEnabled: boolean;
}

export default defineEventHandler(async (event): Promise<NewsletterResponse> => {
  try {
    const body = await readBody<NewsletterRequest>(event);
    const { email, name, source = 'Landing Page AutoShield' } = body;

    // Validação básica do email
    if (!email?.trim() || !validateEmail(email)) {
      return {
        success: false,
        message: 'Email inválido ou não preenchido'
      };
    }

    // Configuração Brevo
    const brevoApiKey = process.env.BREVO_API_KEY;  // Prefixo NUXT_ENV_
    const listId = parseInt(process.env.BREVO_LIST_ID || '1', 10);

    // Validação de ambiente
    if (!brevoApiKey || isNaN(listId)) {
      throw createError({
        statusCode: 500,
        statusMessage: 'Erro interno: configuração Brevo ausente'
      });
    }

    // Dados para Brevo
    const contact: BrevoContact = {
      email: email.toLowerCase().trim(),
      listIds: [listId],
      attributes: {
        ORIGEM: source,
        DATA_CADASTRO: new Date().toISOString().split('T')[0] || '',
        ...(name && { NOME: name.trim() })
      },
      updateEnabled: true
    };

    // Headers com autenticação
    const headers = {
      'Content-Type': 'application/json',
      'api-key': brevoApiKey // Usar camelCase conforme especificação Brevo
    };

    // Requisição com timeout
    const response = await $fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers,
      body: contact,
      timeout: 10000  // 10 segundos
    });

    return {
      success: true,
      message: 'Cadastro realizado com sucesso!'
    };

  } catch (error: unknown) {
    console.error('Erro Brevo:', error);

    // Tratamento de erros específicos
    if (error instanceof Error && error.message.includes('ECONNREFUSED')) {
      throw createError({
        statusCode: 500,
        statusMessage: 'Serviço indisponível. Tente novamente mais tarde.'
      });
    }

    throw createError({
      statusCode: 500,
      statusMessage: 'Erro técnico. Por favor, tente novamente em alguns minutos.'
    });
  }
});

function validateEmail(email: string): boolean {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
