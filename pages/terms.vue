<!-- pages/termos.vue - Versão Final com Ícones Corrigidos -->
<template>
  <section class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-28">
    <!-- Cabeçalho com Efeito de Animação -->
    <div class="text-center mb-16 animate-fade-in">
      <div class="inline-flex items-center gap-3 mb-6">
        <div class="bg-primary-500 p-3 rounded-xl shadow-lg transform hover:scale-105 transition-transform">
          <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
          </svg>
        </div>
        <h1 class="text-3xl lg:text-4xl font-black text-gray-900">Termos de Uso</h1>
      </div>
      <p class="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
        Condições gerais para uso dos serviços de proteção veicular com IA e rastreamento GPS
      </p>
    </div>

    <!-- Seção Principal com Cards -->
    <div class="prose prose-lg max-w-none bg-white rounded-2xl p-8 lg:p-12 shadow-xl">
      <div class="space-y-8">
        <!-- Aceitação dos Termos -->
        <div class="space-y-4">
          <h2 class="text-2xl font-bold text-primary-600">1. Aceitação dos Termos</h2>
          <div class="bg-blue-50 p-6 rounded-xl border border-blue-100">
            <p class="text-gray-700 leading-relaxed">
              Ao utilizar nosso site, aplicativo ou serviços, você concorda integralmente com estes Termos de Uso. Recomendamos leitura atenta antes de qualquer utilização. A AutoShield se reserva o direito de atualizar estes termos a qualquer momento, com comunicação prévia de 30 dias para alterações significativas.
            </p>
          </div>
        </div>

        <!-- Seção 2 - Serviços Oferecidos -->
        <div class="space-y-4">
          <h2 class="text-2xl font-bold text-primary-600">2. Serviços Oferecidos</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Proteção Veicular -->
            <div class="bg-green-50 p-6 rounded-xl border border-green-100">
              <div class="flex items-center gap-3 mb-4">
                <div class="bg-green-500 p-3 rounded-lg">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                  </svg>
                </div>
                <h3 class="font-semibold text-green-800">Proteção Veicular</h3>
              </div>
              <ul class="list-disc list-inside mt-2 text-green-700">
                <li>Rateio mútuo com cobertura completa</li>
                <li>Rastreamento GPS integrado</li>
                <li>Assistência 24h com equipe especializada</li>
              </ul>
            </div>

            <!-- Tecnologia -->
            <div class="bg-purple-50 p-6 rounded-xl border border-purple-100">
              <div class="flex items-center gap-3 mb-4">
                <div class="bg-purple-500 p-3 rounded-lg">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                  </svg>
                </div>
                <h3 class="font-semibold text-purple-800">Tecnologia</h3>
              </div>
              <ul class="list-disc list-inside mt-2 text-purple-700">
                <li>IA para análise de riscos</li>
                <li>Monitoramento em tempo real</li>
                <li>App exclusivo para clientes</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Seção 3 - Responsabilidades -->
        <div class="space-y-4">
          <h2 class="text-2xl font-bold text-primary-600">3. Responsabilidades</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Do Usuário -->
            <div class="bg-white p-6 rounded-xl shadow-md">
              <div class="flex items-center gap-3 mb-4">
                <div class="bg-blue-100 p-3 rounded-lg">
                  <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                  </svg>
                </div>
                <h3 class="font-semibold text-blue-800">Do Usuário</h3>
              </div>
              <ul class="list-disc list-inside mt-2 text-blue-700">
                <li>Informações verídicas no cadastro</li>
                <li>Comunicação imediata de sinistros</li>
                <li>Uso ético dos serviços</li>
              </ul>
            </div>

            <!-- Da AutoShield -->
            <div class="bg-white p-6 rounded-xl shadow-md">
              <div class="flex items-center gap-3 mb-4">
                <div class="bg-blue-100 p-3 rounded-lg">
                  <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h3 class="font-semibold text-blue-800">Da AutoShield</h3>
              </div>
              <ul class="list-disc list-inside mt-2 text-blue-700">
                <li>Proteção conforme plano contratado</li>
                <li>Assistência 24h com equipe qualificada</li>
                <li>Manutenção de dados conforme LGPD</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Alterações -->
        <div class="space-y-4">
          <h2 class="text-2xl font-bold text-primary-600">4. Alterações</h2>
          <div class="bg-gray-50 p-6 rounded-xl">
            <p class="text-gray-700 leading-relaxed">
              Reservamos o direito de modificar estes termos a qualquer momento. Alterações significativas serão comunicadas por e-mail com 30 dias de antecedência. A continuação do uso dos serviços após a publicação de novos termos implica aceitação automática.
            </p>
          </div>
        </div>

        <!-- Disputas -->
        <div class="space-y-4">
          <h2 class="text-2xl font-bold text-primary-600">5. Disputas e Lei Aplicável</h2>
          <div class="bg-white p-6 rounded-xl shadow-md">
            <p class="text-gray-700 leading-relaxed">
              Qualquer disputa será resolvida através de mediação obrigatória, conforme Regulamento Geral de Mediação da AutoShield. A lei aplicável será a do Brasil, com jurisdição exclusiva dos tribunais de São Paulo/SP.
            </p>
          </div>
        </div>

        <!-- Contato -->
        <div class="mt-8 bg-gray-50 p-6 rounded-xl">
          <div class="flex items-start gap-4">
            <svg class="w-6 h-6 text-primary-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            <div>
              <p class="text-sm text-gray-600">
                Dúvidas? Entre em contato através de:
                <a href="mailto:juridico@autoshield.com.br" class="text-primary-500 hover:underline">juridico@autoshield.com.br</a><br>
                <a href="https://wa.me/5574981256120" class="text-primary-500 hover:underline">WhatsApp (74) 98125-6120</a>
              </p>
              <div class="mt-2 text-xs text-gray-500">
                Última atualização: 12/06/2025<br>
                Política de Privacidade: <a href="/privacidade" class="text-primary-500 hover:underline">Clique aqui</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.6s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Responsividade adicional */
@media (max-width: 640px) {
  h1 { font-size: 1.75rem; }
  h2 { font-size: 1.25rem; }
  .grid-cols-2 { grid-template-columns: 1fr; }
}
</style>