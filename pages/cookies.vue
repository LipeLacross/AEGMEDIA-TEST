<!-- pages/cookies.vue - Versão Redesenhada com Ícones Elegantes -->
<template>
  <section class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-28">
    <!-- Cabeçalho -->
    <div class="text-center mb-12 animate-fade-in">
      <div class="inline-flex items-center gap-3 mb-6">
        <div class="bg-primary-500 p-3 rounded-xl shadow-lg">
          <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" stroke-width="2"/>
            <circle cx="8.5" cy="10.5" r="1.5"/>
            <circle cx="15.5" cy="13.5" r="1.5"/>
            <circle cx="12" cy="16" r="1"/>
          </svg>
        </div>
        <h1 class="text-3xl lg:text-4xl font-black text-gray-900">Política de Cookies</h1>
      </div>
      <p class="text-lg text-gray-600">Gestão de preferências de rastreamento</p>
    </div>

    <!-- Conteúdo -->
    <div class="prose prose-lg max-w-none bg-white rounded-2xl p-8 lg:p-12 shadow-xl">
      <div class="space-y-8">

        <!-- Introdução -->
        <div class="space-y-4">
          <h2 class="text-2xl font-bold text-primary-600">O que são Cookies</h2>
          <p class="text-gray-700 leading-relaxed">
            Cookies são pequenos arquivos de texto armazenados no seu dispositivo quando você visita nosso site.
            Eles nos ajudam a melhorar sua experiência de navegação, lembrar suas preferências e personalizar o conteúdo.
          </p>
        </div>

        <!-- Tipos de Cookies -->
        <div class="space-y-4">
          <h2 class="text-2xl font-bold text-primary-600">Tipos de Cookies Utilizados</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">

            <!-- Cookies Essenciais -->
            <div class="bg-red-50 p-6 rounded-xl border border-red-100">
              <div class="flex items-center gap-3 mb-4">
                <div class="bg-red-500 p-2 rounded-lg">
                  <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                  </svg>
                </div>
                <h3 class="font-bold text-red-800">Essenciais</h3>
              </div>
              <p class="text-sm text-red-700 leading-relaxed">
                Necessários para o funcionamento básico do site, incluindo segurança, autenticação e navegação principal.
              </p>
            </div>

            <!-- Cookies de Performance -->
            <div class="bg-yellow-50 p-6 rounded-xl border border-yellow-100">
              <div class="flex items-center gap-3 mb-4">
                <div class="bg-yellow-500 p-2 rounded-lg">
                  <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                </div>
                <h3 class="font-bold text-yellow-800">Performance</h3>
              </div>
              <p class="text-sm text-yellow-700 leading-relaxed">
                Coletam dados sobre como você usa o site para nos ajudar a otimizar a experiência do usuário.
              </p>
            </div>

            <!-- Cookies de Marketing -->
            <div class="bg-green-50 p-6 rounded-xl border border-green-100">
              <div class="flex items-center gap-3 mb-4">
                <div class="bg-green-500 p-2 rounded-lg">
                  <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4V2a1 1 0 011-1h4a1 1 0 011 1v2h4a1 1 0 110 2h-1v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6H3a1 1 0 110-2h4z"/>
                  </svg>
                </div>
                <h3 class="font-bold text-green-800">Marketing</h3>
              </div>
              <p class="text-sm text-green-700 leading-relaxed">
                Utilizados para personalizar anúncios e ofertas com base em seus interesses e comportamento.
              </p>
            </div>
          </div>
        </div>

        <!-- Controle de Cookies -->
        <div class="space-y-4">
          <h2 class="text-2xl font-bold text-primary-600">Como Gerenciar Cookies</h2>
          <div class="bg-blue-50 p-6 rounded-xl border border-blue-100">
            <h3 class="font-semibold text-blue-800 mb-4">Configurações do Navegador:</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div class="flex items-center gap-3">
                <div class="bg-blue-500 p-2 rounded-lg">
                  <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div>
                  <div class="font-medium text-blue-800">Chrome</div>
                  <div class="text-xs text-blue-600">Configurações → Privacidade</div>
                </div>
              </div>
              <div class="flex items-center gap-3">
                <div class="bg-orange-500 p-2 rounded-lg">
                  <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div>
                  <div class="font-medium text-blue-800">Firefox</div>
                  <div class="text-xs text-blue-600">Opções → Privacidade</div>
                </div>
              </div>
              <div class="flex items-center gap-3">
                <div class="bg-gray-500 p-2 rounded-lg">
                  <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div>
                  <div class="font-medium text-blue-800">Safari</div>
                  <div class="text-xs text-blue-600">Preferências → Privacidade</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Serviços Terceiros -->
        <div class="space-y-4">
          <h2 class="text-2xl font-bold text-primary-600">Serviços de Terceiros</h2>
          <p class="text-gray-700 mb-4">
            Utilizamos alguns serviços externos que podem definir seus próprios cookies:
          </p>
          <div class="space-y-4">

            <!-- Google Analytics -->
            <div class="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
              <div class="bg-blue-500 p-3 rounded-lg">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="font-semibold text-gray-800">Google Analytics</h3>
                <p class="text-sm text-gray-600">Análise de tráfego e comportamento dos usuários</p>
                <a href="https://policies.google.com/privacy" target="_blank" class="text-primary-500 text-sm hover:underline">
                  Ver Política de Privacidade
                </a>
              </div>
            </div>

            <!-- Facebook Pixel -->
            <div class="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
              <div class="bg-blue-600 p-3 rounded-lg">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="font-semibold text-gray-800">Facebook Pixel</h3>
                <p class="text-sm text-gray-600">Otimização de campanhas publicitárias</p>
                <a href="https://www.facebook.com/policies/" target="_blank" class="text-primary-500 text-sm hover:underline">
                  Ver Política de Dados
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Seus Direitos -->
        <div class="space-y-4">
          <h2 class="text-2xl font-bold text-primary-600">Seus Direitos</h2>
          <div class="bg-primary-50 p-6 rounded-xl border border-primary-100">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="flex items-start gap-3">
                <div class="bg-primary-500 p-2 rounded-lg mt-1">
                  <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-primary-800">Aceitar ou Recusar</h3>
                  <p class="text-sm text-primary-700">Você pode aceitar ou recusar cookies não essenciais</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <div class="bg-primary-500 p-2 rounded-lg mt-1">
                  <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-primary-800">Gerenciar Preferências</h3>
                  <p class="text-sm text-primary-700">Altere suas configurações a qualquer momento</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Informações Finais -->
        <div class="mt-8 bg-gray-50 p-6 rounded-xl border border-gray-100">
          <div class="flex items-start gap-4">
            <div class="bg-primary-500 p-2 rounded-lg">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <div>
              <p class="text-sm text-gray-600 leading-relaxed">
                <strong>Importante:</strong> Ao continuar navegando, você concorda com o uso de cookies conforme nossa política.
                Esta política foi atualizada em 12 de junho de 2025 e pode ser modificada periodicamente.
              </p>
              <div class="mt-3">
                <p class="text-xs text-gray-500">
                  Para dúvidas: <a href="mailto:privacidade@autoshield.com.br" class="text-primary-500 hover:underline">privacidade@autoshield.com.br</a>
                </p>
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
