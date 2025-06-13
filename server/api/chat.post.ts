// server/api/chat.post.ts - Versão COMPLETA com Funcionalidades de Marketing
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

// Interface expandida para dados do usuário
interface UserData {
  nome?: string
  veiculo?: string
  ano?: string
  valor?: number
  tipo?: 'novo' | 'fidelidade' | 'indicacao'
  telefone?: string
  email?: string
  cidade?: string
  preocupacoes?: string[]
  confirmedData?: boolean
}

// Estados da conversa para fluxo de marketing
enum ConversationState {
  INITIAL = 'initial',
  COLLECTING_DATA = 'collecting_data',
  CONFIRMING_DATA = 'confirming_data',
  GENERATING_OFFER = 'generating_offer',
  FINALIZING = 'finalizing'
}

interface ConversationContext {
  state: ConversationState
  userData: UserData
  lastSentiment: string
  offerGenerated: boolean
}

// === CONFIGURAÇÕES ===
const CONFIG = {
  MAX_RETRIES: 3,
  TIMEOUT_MS: 8000,
  RETRY_DELAY_MS: 1500,
  MAX_SESSIONS: 100,
  SESSION_TTL_MS: 30 * 60 * 1000,
  BACKOFF_MULTIPLIER: 2
} as const

const STABLE_MODELS = [
  'google/gemma-2-2b-it',
  'meta-llama/Meta-Llama-3-8B-Instruct',
  'mistralai/Mistral-7B-Instruct-v0.2',
  'tiiuae/falcon-7b',
  'meta-llama/Llama-2-7B-chat-hf'
] as const

type ValidModel = typeof STABLE_MODELS[number]

// === FUNCIONALIDADES DE MARKETING ===

// 1. Geração de Ofertas Personalizadas
function generateDynamicOffer(userData: UserData): string {
  const discounts = {
    novo: '15% OFF na primeira parcela',
    fidelidade: 'Seguro grátis no 13º mês',
    indicacao: 'R$100 de crédito por indicação'
  }

  const baseOffer = discounts[userData.tipo || 'novo']
  const additionalBenefit = userData.valor && userData.valor > 100000
    ? 'Carro reserva premium'
    : 'GPS Grátis'

  return `🔥 OFERTA EXCLUSIVA: ${baseOffer} + ${additionalBenefit}`
}

// 2. Análise de Sentimentos
async function analyzeSentiment(text: string): Promise<string> {
  try {
    const response = await hf.textClassification({
      model: 'cardiffnlp/twitter-xlm-roberta-base-sentiment',
      inputs: text
    })
    return response[0]?.label || 'NEUTRAL'
  } catch (error) {
    console.error('Erro na análise de sentimentos:', error)
    return 'NEUTRAL'
  }
}

// 3. Validação de Dados Completos
function hasAllUserData(userData: UserData): boolean {
  return !!(userData.nome && userData.veiculo && userData.ano && userData.valor && userData.telefone)
}

// 4. Atualização de Dados do Usuário
function updateUserData(currentData: UserData, message: string): UserData {
  const updatedData = { ...currentData }

  // Extração de dados da mensagem
  if (message.toLowerCase().includes('meu nome é') || message.toLowerCase().includes('me chamo')) {
    const nomeMatch = message.match(/(?:meu nome é|me chamo)\s+([a-záàâãéèêíïóôõöúçñ\s]+)/i)
    if (nomeMatch && nomeMatch[1]) updatedData.nome = nomeMatch[1].trim()
  }

  if (message.toLowerCase().includes('meu carro é') || message.toLowerCase().includes('tenho um')) {
    const veiculoMatch = message.match(/(?:meu carro é|tenho um)\s+([a-záàâãéèêíïóôõöúçñ\s\d]+)/i)
    if (veiculoMatch && veiculoMatch[1]) updatedData.veiculo = veiculoMatch[1].trim()
  }

  // Extração de telefone
  const telefoneMatch = message.match(/(\(?[1-9]{2}\)?\s?9?\d{4}-?\d{4})/g)
  if (telefoneMatch && telefoneMatch[0]) updatedData.telefone = telefoneMatch[0]

  // Extração de ano
  const anoMatch = message.match(/(20\d{2}|\d{4})/g)
  if (anoMatch && anoMatch[0]) {
    const ano = parseInt(anoMatch[0])
    if (ano >= 1990 && ano <= 2025) updatedData.ano = ano.toString()
  }

  // Extração de valor
  const valorMatch = message.match(/(?:vale|valor|custa|custou|paguei).*?(\d+\.?\d*)/i)
  if (valorMatch && valorMatch[1]) {
    updatedData.valor = parseInt(valorMatch[1].replace(/\./g, ''))
  }

  return updatedData
}

// 5. Mensagem de Confirmação
function generateConfirmationMessage(userData: UserData): string {
  return `Por favor, confirme se as informações abaixo estão corretas:

📝 Seus Dados:
• Nome: ${userData.nome}
• Veículo: ${userData.veiculo} (${userData.ano})
• Valor: R$ ${userData.valor?.toLocaleString()}
• Telefone: ${userData.telefone}
• Cidade: ${userData.cidade || 'Não informada'}

Responda "SIM" para confirmar ou "NÃO" para corrigir.`
}

// 6. Geração de Link do WhatsApp
function generateWhatsAppLink(userData: UserData): string {
  const offer = generateDynamicOffer(userData)
  const whatsappText = `Olá! Sou ${userData.nome}. Gostaria de contratar o plano AutoShield para meu veículo ${userData.veiculo} (${userData.ano}), valor R$ ${userData.valor?.toLocaleString()}. ${offer}`

  return `https://wa.me/5574981256120?text=${encodeURIComponent(whatsappText)}`
}

// === FUNÇÕES AUXILIARES ===
const validateToken = (token: string | undefined): boolean => {
  return token !== undefined && token.startsWith('hf_') && token.length > 20
}

const delay = (ms: number): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, ms))
}

// Fallback inteligente
const getIntelligentFallback = (message: string, errorType?: string): string => {
  const lowerMessage = message.toLowerCase()

  if (lowerMessage.includes('preço') || lowerMessage.includes('custo') || lowerMessage.includes('valor')) {
    return `💰 Planos AutoShield:

• Essencial: R$ 89/mês - Cobertura básica completa
• Completo: R$ 149/mês - Proteção total + benefícios extras  
• Premium: R$ 229/mês - Máxima proteção + serviços VIP

📱 Fale conosco: (74) 98125-6120`
  }

  return `👋 Olá! Sou o assistente da AutoShield.

🚗 Como posso ajudar:
• Informações sobre planos e preços
• Detalhes de cobertura
• Contratação e atendimento
• Dúvidas sobre proteção veicular

📱 Contato direto: (74) 98125-6120`
}

// Modelos estáveis
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

// === IMPLEMENTAÇÃO PRINCIPAL ===
const hf = new HfInference(process.env.HUGGINGFACE_TOKEN)
const conversationMemory = new Map<string, ConversationContext>()

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

    // Limpeza periódica
    cleanupSessions(conversationMemory)

    // Recuperação ou criação de contexto
    let conversationContext: ConversationContext
    if (conversationMemory.has(sessionId)) {
      conversationContext = conversationMemory.get(sessionId)!
    } else {
      conversationContext = {
        state: ConversationState.INITIAL,
        userData: {},
        lastSentiment: 'NEUTRAL',
        offerGenerated: false
      }
    }

    // Análise de sentimentos em cada mensagem
    const sentiment = await analyzeSentiment(message)
    conversationContext.lastSentiment = sentiment

    // Atualizar dados do usuário
    conversationContext.userData = updateUserData(conversationContext.userData, message)

    // Validação do token
    const token = process.env.HUGGINGFACE_TOKEN
    if (!validateToken(token)) {
      const fallbackReply = getIntelligentFallback(message)

      const newContext: ChatMessage[] = [
        ...context.slice(-15),
        { role: 'user' as const, content: message },
        { role: 'assistant' as const, content: fallbackReply }
      ]

      return {
        reply: fallbackReply,
        timestamp: new Date().toISOString(),
        context: newContext,
        debug: 'Usando fallback - Token inválido'
      }
    }

    // Prompt do sistema para vendas
    const systemPrompt = `Você é o Vendedor Sênior da AutoShield com 15 anos de experiência em proteção veicular.

OBJETIVO PRINCIPAL: Coletar dados do cliente, gerar ofertas personalizadas e direcionar para WhatsApp.

DADOS A COLETAR:
- Nome completo
- Veículo (marca, modelo, ano)
- Valor aproximado do veículo
- Telefone/WhatsApp
- Cidade
- Tipo de cliente (novo, fidelidade, indicação)

TÉCNICAS DE VENDAS:
1. Fazer perguntas diretas e objetivas
2. Personalizar ofertas baseadas no perfil
3. Criar urgência com ofertas limitadas
4. Tratar objeções com empatia
5. Sempre direcionar para confirmação no WhatsApp

OFERTAS DISPONÍVEIS:
- Novos clientes: 15% OFF primeira parcela + GPS grátis
- Fidelidade: Seguro grátis no 13º mês + carro reserva
- Indicação: R$100 crédito + benefícios extras

FLUXO DE VENDAS:
1. Saudar e identificar necessidade
2. Coletar dados essenciais
3. Confirmar informações
4. Apresentar oferta personalizada
5. Gerar link WhatsApp para finalização

Sempre mantenha tom profissional, consultivo e focado em resultados.`

    let reply = ''

    // === LÓGICA DE ESTADOS DA CONVERSA ===
    switch (conversationContext.state) {
      case ConversationState.INITIAL:
        reply = `👋 Olá! Sou o consultor especializado da AutoShield.

Para criar a melhor proposta para você, preciso de algumas informações:

📝 Vamos começar:
• Qual seu nome?
• Que veículo você tem (marca/modelo/ano)?
• Qual o valor aproximado?
• Seu WhatsApp para contato?

Me conte sobre seu veículo e eu criarei uma oferta exclusiva!`

        conversationContext.state = ConversationState.COLLECTING_DATA
        break

      case ConversationState.COLLECTING_DATA:
        if (hasAllUserData(conversationContext.userData)) {
          conversationContext.state = ConversationState.CONFIRMING_DATA
          reply = generateConfirmationMessage(conversationContext.userData)
        } else {
          // Preparar mensagens para IA
          const messages: ChatMessage[] = [
            { role: 'system' as const, content: systemPrompt },
            ...context.slice(-15),
            { role: 'user' as const, content: `[COLETANDO DADOS] ${message}` }
          ]

          // Tentar com modelos IA
          for (let attempt = 1; attempt <= CONFIG.MAX_RETRIES; attempt++) {
            try {
              reply = await tryWithStableModels(messages)
              if (reply && reply.length > 10) break
            } catch (error) {
              if (attempt === CONFIG.MAX_RETRIES) {
                reply = getIntelligentFallback(message)
              } else {
                await delay(CONFIG.RETRY_DELAY_MS * Math.pow(CONFIG.BACKOFF_MULTIPLIER, attempt - 1))
              }
            }
          }

          if (!reply) reply = getIntelligentFallback(message)
        }
        break

      case ConversationState.CONFIRMING_DATA:
        if (message.toLowerCase().includes('sim') || message.includes('SIM')) {
          conversationContext.state = ConversationState.GENERATING_OFFER
          const offer = generateDynamicOffer(conversationContext.userData)
          const whatsappLink = generateWhatsAppLink(conversationContext.userData)

          reply = `🎉 Perfeito! Aqui está sua oferta personalizada:

${offer}

📱 Finalize agora pelo WhatsApp:
${whatsappLink}

Nossa equipe especializada está pronta para atender você!`

          conversationContext.offerGenerated = true
        } else if (message.toLowerCase().includes('não') || message.includes('NÃO')) {
          conversationContext.state = ConversationState.COLLECTING_DATA
          reply = `Sem problemas! Vamos corrigir as informações.

Qual dado você gostaria de alterar?
• Nome
• Veículo 
• Telefone
• Outro

Me diga o que precisa ser corrigido.`
        } else {
          reply = `Por favor, responda com "SIM" para confirmar ou "NÃO" para corrigir os dados.`
        }
        break

      case ConversationState.GENERATING_OFFER:
        reply = `Sua oferta já foi gerada! 

${generateDynamicOffer(conversationContext.userData)}

📱 Link WhatsApp:
${generateWhatsAppLink(conversationContext.userData)}

Precisa de mais alguma informação?`
        break
    }

    // Tratamento de sentimentos negativos
    if (sentiment === 'NEGATIVE') {
      reply += '\n\n😔 Percebi que você pode estar preocupado. Que tal um desconto especial de 20% para resolver suas dúvidas? Nossa equipe está aqui para ajudar!'
    }

    // Atualizar contexto
    const newContext: ChatMessage[] = [
      ...context.slice(-15),
      { role: 'user' as const, content: message },
      { role: 'assistant' as const, content: reply }
    ]

    // Salvar contexto da conversa
    conversationMemory.set(sessionId, conversationContext)

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
      reply: `🚨 Sistema Temporariamente Indisponível

📞 Contato Imediato:
WhatsApp: (74) 98125-6120

Nossa equipe está disponível para ajudar!`,
      context: [],
      error: true,
      timestamp: new Date().toISOString()
    }
  }
})
