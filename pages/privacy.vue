<!-- pages/privacidade.vue - Versão Final com Ícones Corrigidos -->
<template>
  <section class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-28">
    <!-- Cabeçalho com Animação -->
    <div class="text-center mb-16 animate-fade-in">
      <div class="inline-flex items-center gap-3 mb-6">
        <div class="bg-primary-500 p-3 rounded-xl shadow-lg transform hover:scale-105 transition-transform">
          <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
          </svg>
        </div>
        <h1 class="text-3xl lg:text-5xl font-black text-gray-900">Política de Privacidade</h1>
      </div>
      <p class="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
        Proteção de dados pessoais conforme LGPD e melhores práticas internacionais
      </p>
    </div>

    <!-- Conteúdo Principal com Cards -->
    <div class="prose prose-lg max-w-none bg-white rounded-2xl p-8 lg:p-12 shadow-2xl">
      <div class="space-y-8">
        <!-- Dados Coletados (Seção 1) -->
        <div class="space-y-4">
          <h2 class="text-2xl font-bold text-primary-600">1. Dados Coletados</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Card Pessoais -->
            <div class="bg-green-50 p-6 rounded-xl border border-green-100">
              <div class="flex items-center gap-3 mb-4">
                <div class="bg-green-500 p-3 rounded-lg">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                  </svg>
                </div>
                <h3 class="font-semibold text-green-800">Informações Pessoais</h3>
              </div>
              <ul class="list-disc list-inside mt-2 text-green-700">
                <li>Nome completo e documento</li>
                <li>Dados de contato (e-mail e telefone)</li>
                <li>Informações do veículo (placa, modelo, ano)</li>
              </ul>
            </div>

            <!-- Card Técnicos -->
            <div class="bg-purple-50 p-6 rounded-xl border border-purple-100">
              <div class="flex items-center gap-3 mb-4">
                <div class="bg-purple-500 p-3 rounded-lg">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/>
                  </svg>
                </div>
                <h3 class="font-semibold text-purple-800">Dados Técnicos</h3>
              </div>
              <ul class="list-disc list-inside mt-2 text-purple-700">
                <li>Localização GPS em tempo real</li>
                <li>Histórico de navegação</li>
                <li>Dispositivos utilizados</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Finalidades (Seção 2) -->
        <div class="space-y-4">
          <h2 class="text-2xl font-bold text-primary-600">2. Finalidades</h2>
          <div class="bg-blue-50 p-6 rounded-xl border border-blue-100">
            <div class="flex items-center gap-3 mb-4">
              <div class="bg-blue-500 p-3 rounded-lg">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/>
                </svg>
              </div>
              <h3 class="font-semibold text-blue-800">Uso dos Dados</h3>
            </div>
            <ul class="list-decimal list-inside space-y-2 text-blue-700">
              <li>Prestação dos serviços contratados</li>
              <li>Melhoria contínua da plataforma</li>
              <li>Comunicação comercial relevante</li>
              <li>Cumprimento de obrigações legais</li>
            </ul>
          </div>
        </div>

        <!-- Seus Direitos (Seção 3) -->
        <div class="space-y-4">
          <h2 class="text-2xl font-bold text-primary-600">3. Seus Direitos</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Card Acesso -->
            <div class="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <div class="flex items-center gap-3 mb-4">
                <div class="bg-primary-100 p-3 rounded-lg">
                  <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                  </svg>
                </div>
                <h3 class="font-semibold text-gray-800">Acesso e Correção</h3>
              </div>
              <p class="text-sm text-gray-600 mt-2">Solicite acesso ou correção via área do cliente ou e-mail</p>
            </div>

            <!-- Card Exclusão -->
            <div class="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <div class="flex items-center gap-3 mb-4">
                <div class="bg-red-100 p-3 rounded-lg">
                  <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-8a1 1 0 00-1 1v3M4 7h16"/>
                  </svg>
                </div>
                <h3 class="font-semibold text-gray-800">Exclusão de Dados</h3>
              </div>
              <p class="text-sm text-gray-600 mt-2">Sujeito a condições contratuais e políticas internas</p>
            </div>

            <!-- Card Portabilidade -->
            <div class="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <div class="flex items-center gap-3 mb-4">
                <div class="bg-emerald-100 p-3 rounded-lg">
                  <svg class="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"/>
                  </svg>
                </div>
                <h3 class="font-semibold text-gray-800">Portabilidade</h3>
              </div>
              <p class="text-sm text-gray-600 mt-2">Solicite seus dados em formato estruturado para portabilidade</p>
            </div>

            <!-- Card Consentimento -->
            <div class="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <div class="flex items-center gap-3 mb-4">
                <div class="bg-yellow-100 p-3 rounded-lg">
                  <svg class="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                  </svg>
                </div>
                <h3 class="font-semibold text-gray-800">Revogação do Consentimento</h3>
              </div>
              <p class="text-sm text-gray-600 mt-2">Revogue consentimento para processamento de dados pessoais</p>
            </div>
          </div>
        </div>

        <!-- Segurança (Seção 4) -->
        <div class="space-y-4">
          <h2 class="text-2xl font-bold text-primary-600">4. Segurança e Proteção</h2>
          <div class="bg-gray-50 p-6 rounded-xl border border-gray-100">
            <div class="flex items-center gap-3 mb-4">
              <div class="bg-gray-600 p-3 rounded-lg">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
              </div>
              <h3 class="font-semibold text-gray-800">Medidas de Segurança</h3>
            </div>
            <p class="text-gray-700 leading-relaxed">
              Implementamos medidas técnicas e organizacionais adequadas para proteger seus dados contra acesso não autorizado, alteração, divulgação ou destruição. Utilizamos criptografia, controles de acesso e monitoramento contínuo para garantir a segurança de suas informações.
            </p>
          </div>
        </div>

        <!-- DPO (Seção 5) -->
        <div class="mt-8 bg-gray-50 p-6 rounded-xl">
          <div class="flex items-start gap-4">
            <svg class="w-6 h-6 text-primary-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            <div>
              <p class="text-sm text-gray-600">
                <strong>Encarregado de Proteção de Dados (DPO)</strong><br>
                Para exercer seus direitos ou esclarecer dúvidas sobre privacidade:<br>
                <a href="mailto:dpo@autoshield.com.br" class="text-primary-500 hover:underline font-semibold">dpo@autoshield.com.br</a>
              </p>
              <div class="mt-3 text-xs text-gray-500">
                Última atualização: 12/06/2025<br>
                Contato para reclamações: <a href="mailto:ouvidoria@autoshield.com.br" class="text-primary-500 hover:underline">ouvidoria@autoshield.com.br</a><br>
                <a href="/termos" class="text-primary-500 hover:underline">Termos de Uso</a> • <a href="/cookies" class="text-primary-500 hover:underline">Política de Cookies</a>
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
</style>
