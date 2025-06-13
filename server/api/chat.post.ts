// server/api/chat.post.ts - Versão OTIMIZADA com Fluxo Simplificado
import { HfInference } from '@huggingface/inference'

// === INTERFACES E TIPOS ===
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

// Interface para dados do usuário
interface UserData {
  nome?: string
  veiculo?: string
  ano?: string
  valor?: number
  telefone?: string
  cidade?: string
  confirmedData?: boolean
}

// Estados simplificados da conversa
enum ConversationState {
  INITIAL = 'initial',
  COLLECTING_DATA = 'collecting_data',
  CONFIRMING_DATA = 'confirming_data',
  ANSWERING_QUESTIONS = 'answering_questions',
  GENERATING_OFFER = 'generating_offer'
}

interface ConversationContext {
  state: ConversationState
  userData: UserData
  questionsAnswered: Set<string>
  offerGenerated: boolean
}
function answerSpecificQuestion(message: string): string {
  const lowerMessage = message.toLowerCase()

  // Perguntas sobre número/telefone
  if (lowerMessage.includes('numero') || lowerMessage.includes('número') ||
      lowerMessage.includes('telefone') || lowerMessage.includes('contato')) {
    return `📞 **Nossos Contatos AutoShield:**

• **WhatsApp**: (74) 98125-6120
• **Telefone**: (74) 98125-6120  
• **Email**: contato@autoshield.com.br

🕐 **Atendimento**: 24 horas por dia, 7 dias por semana

Prefere falar pelo WhatsApp? É só clicar: https://wa.me/5574981256120`
  }

  // Perguntas sobre criação/fundação
  if (lowerMessage.includes('criou') || lowerMessage.includes('fundou') ||
      lowerMessage.includes('quem criou')) {
    return `🏢 **Sobre a AutoShield:**

A AutoShield é uma empresa brasileira fundada em 2023, especializada em proteção veicular com tecnologia de ponta.

✨ **Nosso diferencial**: Somos pioneiros na integração de IA com rastreamento veicular no Brasil.

🎯 **Missão**: Oferecer proteção veicular inteligente e acessível para todos os brasileiros.

Quer saber mais sobre nossos serviços?`
  }

  return ''
}
function generateFallbackResponse(message: string): string {
  return `🤔 Não encontrei informações específicas sobre "${message}".

📞 **Para dúvidas não listadas, fale conosco:**
• WhatsApp: (74) 98125-6120
• Email: contato@autoshield.com.br

💡 **Posso ajudar com:**
• Planos e preços detalhados
• Coberturas específicas
• Processo de contratação
• Informações sobre a empresa

O que gostaria de saber?`
}

// === CONFIGURAÇÕES OTIMIZADAS ===
const CONFIG = {
  MAX_RETRIES: 2,
  TIMEOUT_MS: 6000,
  RETRY_DELAY_MS: 1000,
  MAX_SESSIONS: 50,
  MAX_CONTEXT_MESSAGES: 15, // Otimizado para 15 mensagens
  SESSION_TTL_MS: 20 * 60 * 1000 // 20 minutos
} as const

const STABLE_MODELS = [
  'google/gemma-2-2b-it',
  'meta-llama/Meta-Llama-3-8B-Instruct',
  'mistralai/Mistral-7B-Instruct-v0.2'
] as const

// === BANCO DE CONHECIMENTO DA EMPRESA ===
const COMPANY_KNOWLEDGE = {
  contato: {
    telefone: "(74) 98125-6120",
    whatsapp: "(74) 98125-6120",
    email: "contato@autoshield.com.br",
    site: "www.autoshield.com.br",
    endereco: "São Paulo, SP - Brasil"
  },

  empresa: {
    nome: "AutoShield",
    fundacao: "2023",
    criador: "Empresa brasileira especializada em proteção veicular",
    missao: "Oferecer proteção veicular inteligente com tecnologia de ponta",
    diferencial: "Primeira empresa a integrar IA no rastreamento veicular no Brasil"
  },

  planos: {
    essencial: {
      preco: "R$ 89/mês",
      descricao: "Cobertura roubo/furto, GPS grátis, assistência 24h, guincho até 200km, cobertura vidros",
      ideal_para: "Veículos até R$ 50.000"
    },
    completo: {
      preco: "R$ 149/mês",
      descricao: "Tudo do Essencial + colisão, incêndio, terceiros R$ 50k, carro reserva 15 dias",
      ideal_para: "Veículos até R$ 100.000"
    },
    premium: {
      preco: "R$ 229/mês",
      descricao: "Tudo do Completo + fenômenos naturais, terceiros R$ 100k, carro reserva premium 30 dias",
      ideal_para: "Veículos até R$ 200.000"
    }
  },

  cobertura: {
    basica: "Roubo, furto, assistência 24h, guincho, chaveiro, vidros",
    completa: "Colisão, incêndio, fenômenos naturais, terceiros",
    diferencial: "Rastreamento GPS com IA gratuito em todos os planos"
  },

  tecnologia: {
    gps_ia: "Sistema de rastreamento com inteligência artificial integrada",
    app: "Aplicativo exclusivo para clientes com monitoramento em tempo real",
    assistencia: "Central 24h com atendimento automatizado por IA"
  }
}

// === FUNÇÕES DE ANÁLISE E RESPOSTA ===

// Detecta se é pergunta sobre a empresa
function isCompanyQuestion(message: string): boolean {
  const questionKeywords = ['como', 'que', 'qual', 'quando', 'onde', 'por que', 'quanto', '?']
  const companyKeywords = ['autoshield', 'empresa', 'plano', 'preço', 'cobertura', 'assistência', 'guincho']

  const hasQuestion = questionKeywords.some(word => message.toLowerCase().includes(word))
  const hasCompanyTopic = companyKeywords.some(word => message.toLowerCase().includes(word))

  return hasQuestion && hasCompanyTopic
}

// Responde perguntas sobre a empresa
function answerCompanyQuestion(message: string): string {
  const lowerMessage = message.toLowerCase()

  if (lowerMessage.includes('preço') || lowerMessage.includes('valor') || lowerMessage.includes('quanto custa')) {
    return `💰 **Nossos Planos AutoShield:**

• **Essencial**: R$ 89/mês - Proteção completa básica
• **Completo**: R$ 149/mês - Proteção total + benefícios
• **Premium**: R$ 229/mês - Máxima proteção VIP

🎁 **Todos incluem GPS com IA GRÁTIS!**

Qual plano te interessa mais?`
  }

  if (lowerMessage.includes('cobertura') || lowerMessage.includes('cobre') || lowerMessage.includes('protege')) {
    return `🛡️ **Nossa Cobertura Completa:**

✅ Roubo e Furto total
✅ Colisão e Incêndio  
✅ Assistência 24h em todo Brasil
✅ Guincho ilimitado
✅ Rastreamento GPS com IA
✅ Cobertura de terceiros
✅ Chaveiro e vidros

Quer saber mais sobre alguma cobertura específica?`
  }

  if (lowerMessage.includes('assistência') || lowerMessage.includes('guincho') || lowerMessage.includes('24h')) {
    return `🚗 **Assistência 24h AutoShield:**

• Guincho ilimitado em todo Brasil
• Chaveiro emergencial
• Pane seca e elétrica
• Mecânico no local
• Assistência médica
• Carro reserva (planos Completo/Premium)

**SEM CARÊNCIA** para assistência! Disponível imediatamente após aprovação.

Precisa de mais alguma informação?`
  }

  if (lowerMessage.includes('diferencial') || lowerMessage.includes('vantagem') || lowerMessage.includes('melhor')) {
    return `🌟 **Nossos Diferenciais Únicos:**

🔥 GPS com IA **GRATUITO** (valor R$ 50/mês)
⚡ Sem carência para guincho e assistência
💰 Preços transparentes, sem taxas ocultas
🚀 Atendimento com IA 24h no app
📱 Cancelamento livre, sem multas
🏆 4.8⭐ de avaliação no Google

Qual diferencial mais te chama atenção?`
  }

  // Resposta genérica para outras perguntas
  return `📋 **Sobre a AutoShield:**

Somos especialistas em proteção veicular com tecnologia de ponta. Oferecemos 3 planos (R$ 89, R$ 149, R$ 229) com cobertura completa e assistência 24h.

**Principais dúvidas:**
• Preços e planos
• Coberturas incluídas  
• Assistência 24h
• Nossos diferenciais

Sobre o que gostaria de saber mais?`
}

// Extração otimizada de dados
function extractUserData(currentData: UserData, message: string): UserData {
  const updatedData = { ...currentData }

  // Nome
  const nomePatterns = [
    /(?:meu nome é|me chamo|sou o|sou a)\s+([a-záàâãéèêíïóôõöúçñ\s]+)/i,
    /^([a-záàâãéèêíïóôõöúçñ]{3,})\s*$/i
  ]

  for (const pattern of nomePatterns) {
    const match = message.match(pattern)
    if (match && match[1] && !updatedData.nome) {
      updatedData.nome = match[1].trim()
      break
    }
  }

  // Veículo
  const veiculoPatterns = [
    /(?:tenho um|meu carro é|dirigir um)\s+([a-záàâãéèêíïóôõöúçñ\s\d]+)/i,
    /(civic|corolla|onix|hb20|gol|uno|palio|fiesta|ka|celta|prisma)/i
  ]

  for (const pattern of veiculoPatterns) {
    const match = message.match(pattern)
    if (match && match[1] && !updatedData.veiculo) {
      updatedData.veiculo = match[1].trim()
      break
    }
  }

  // Telefone
  const telefoneMatch = message.match(/(\(?[1-9]{2}\)?\s?9?\d{4}-?\d{4})/g)
  if (telefoneMatch && !updatedData.telefone) {
    updatedData.telefone = telefoneMatch[0]
  }

  // Ano
  const anoMatch = message.match(/(20\d{2}|19\d{2})/g)
  if (anoMatch && !updatedData.ano) {
    const ano = parseInt(anoMatch[0])
    if (ano >= 1990 && ano <= 2025) {
      updatedData.ano = ano.toString()
    }
  }

  // Valor simplificado
  const valorMatch = message.match(/(\d+\.?\d*)\s*(?:mil|k)/i)
  if (valorMatch && valorMatch[1] && !updatedData.valor) {
    updatedData.valor = parseInt(valorMatch[1]) * 1000
  }


  return updatedData
}

// Verifica se tem dados suficientes (simplificado)
function hasSufficientData(userData: UserData): boolean {
  return !!(userData.nome && userData.veiculo && userData.telefone)
}

// Gera link do WhatsApp otimizado
function generateWhatsAppLink(userData: UserData): string {
  const baseMessage = `Olá! Sou ${userData.nome}. Tenho interesse na proteção AutoShield para meu ${userData.veiculo}${userData.ano ? ` (${userData.ano})` : ''}. Gostaria de uma proposta personalizada.`

  return `https://wa.me/5574981256120?text=${encodeURIComponent(baseMessage)}`
}

// === IMPLEMENTAÇÃO PRINCIPAL OTIMIZADA ===
const hf = new HfInference(process.env.HUGGINGFACE_TOKEN)
const conversationMemory = new Map<string, ConversationContext>()

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

    // Recuperar ou criar contexto
    let conversationContext: ConversationContext
    if (conversationMemory.has(sessionId)) {
      conversationContext = conversationMemory.get(sessionId)!
    } else {
      conversationContext = {
        state: ConversationState.INITIAL,
        userData: {},
        questionsAnswered: new Set(),
        offerGenerated: false
      }
    }

    let reply = ''

    // === FLUXO OTIMIZADO DE CONVERSA ===

    // 1. PRIMEIRA PRIORIDADE: Responder dúvidas sobre a empresa
    if (isCompanyQuestion(message)) {
      conversationContext.state = ConversationState.ANSWERING_QUESTIONS
      reply = answerCompanyQuestion(message)

      // Após responder, sugere avançar se já tiver alguns dados
      if (Object.keys(conversationContext.userData).length > 0) {
        reply += `\n\n💬 Já que você tem interesse, que tal finalizarmos sua proposta rapidinho?`
      }
    }
    // 2. FLUXO DE QUALIFICAÇÃO SIMPLIFICADO
    else {
      switch (conversationContext.state) {
        case ConversationState.INITIAL:
        case ConversationState.ANSWERING_QUESTIONS:
          // Extrair dados da mensagem atual
          conversationContext.userData = extractUserData(conversationContext.userData, message)

          if (hasSufficientData(conversationContext.userData)) {
            // Dados suficientes - pular para confirmação
            conversationContext.state = ConversationState.CONFIRMING_DATA
            reply = `✅ Perfeito! Vou confirmar seus dados:

📝 **Seus Dados:**
• Nome: ${conversationContext.userData.nome}
• Veículo: ${conversationContext.userData.veiculo}${conversationContext.userData.ano ? ` (${conversationContext.userData.ano})` : ''}
• WhatsApp: ${conversationContext.userData.telefone}

Está tudo correto? Digite **SIM** para continuar ou **NÃO** para corrigir.`
          } else {
            // Coletar dados que faltam de forma inteligente
            conversationContext.state = ConversationState.COLLECTING_DATA
            const missingData = []

            if (!conversationContext.userData.nome) missingData.push('seu nome')
            if (!conversationContext.userData.veiculo) missingData.push('seu veículo (marca/modelo)')
            if (!conversationContext.userData.telefone) missingData.push('seu WhatsApp')

            if (missingData.length === 3) {
              reply = `👋 Olá! Sou o consultor AutoShield. Para criar sua proposta personalizada, preciso apenas de:

📋 **Me conte rapidinho:**
• Seu nome
• Que carro você tem
• Seu WhatsApp

Pode mandar tudo numa mensagem só! 😉`
            } else {
              reply = `📋 Quase pronto! Só preciso de mais: **${missingData.join(' e ')}**.

Pode me informar?`
            }
          }
          break

        case ConversationState.COLLECTING_DATA:
          // Continuar coletando dados
          conversationContext.userData = extractUserData(conversationContext.userData, message)

          if (hasSufficientData(conversationContext.userData)) {
            conversationContext.state = ConversationState.CONFIRMING_DATA
            reply = `✅ Ótimo! Confirmando seus dados:

📝 **Seus Dados:**
• Nome: ${conversationContext.userData.nome}
• Veículo: ${conversationContext.userData.veiculo}${conversationContext.userData.ano ? ` (${conversationContext.userData.ano})` : ''}
• WhatsApp: ${conversationContext.userData.telefone}

Está correto? **SIM** ou **NÃO**?`
          } else {
            const missingData = []
            if (!conversationContext.userData.nome) missingData.push('nome')
            if (!conversationContext.userData.veiculo) missingData.push('veículo')
            if (!conversationContext.userData.telefone) missingData.push('WhatsApp')

            reply = `📋 Ainda preciso de: **${missingData.join(', ')}**. Pode completar para mim?`
          }
          break

        case ConversationState.CONFIRMING_DATA:
          if (message.toLowerCase().includes('sim')) {
            conversationContext.state = ConversationState.GENERATING_OFFER
            const whatsappLink = generateWhatsAppLink(conversationContext.userData)

            reply = `🎉 **Proposta AutoShield para ${conversationContext.userData.nome}!**

🔥 **OFERTA ESPECIAL:**
• 15% OFF na primeira parcela
• GPS com IA GRATUITO (valor R$ 50/mês)
• Sem carência para assistência
• Cobertura imediata

💰 **Planos disponíveis:**
• Essencial: R$ 89/mês
• Completo: R$ 149/mês  
• Premium: R$ 229/mês

📱 **Finalize agora pelo WhatsApp:**
${whatsappLink}

Nossa equipe especializada vai atender você em segundos! 🚀`

            conversationContext.offerGenerated = true
          } else if (message.toLowerCase().includes('não')) {
            conversationContext.state = ConversationState.COLLECTING_DATA
            reply = `✏️ Sem problema! O que precisa corrigir?

• **Nome**: ${conversationContext.userData.nome || 'não informado'}
• **Veículo**: ${conversationContext.userData.veiculo || 'não informado'}  
• **WhatsApp**: ${conversationContext.userData.telefone || 'não informado'}

Me diga o que está errado.`
          } else {
            reply = `🤔 Por favor, responda **SIM** para confirmar ou **NÃO** para corrigir os dados.`
          }
          break

        case ConversationState.GENERATING_OFFER:
          reply = `✅ Sua proposta já foi gerada!

📱 **Link direto do WhatsApp:**
${generateWhatsAppLink(conversationContext.userData)}

Tem alguma dúvida sobre nossos planos ou coberturas?`
          break
      }
    }

    // Garantir que sempre há uma resposta
    if (!reply) {
      reply = `👋 Olá! Sou o assistente AutoShield. Como posso ajudar?

🤔 **Posso esclarecer sobre:**
• Planos e preços
• Coberturas e assistência
• Fazer sua cotação

O que gostaria de saber?`
    }

    // Atualizar contexto com limite otimizado
    const newContext: ChatMessage[] = [
      ...context.slice(-(CONFIG.MAX_CONTEXT_MESSAGES - 2)), // Manter espaço para as novas mensagens
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

Nossa equipe está pronta para atender você!`,
      context: [],
      error: true,
      timestamp: new Date().toISOString()
    }
  }
})
