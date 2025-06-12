<template>
  <footer class="max-w-screen-xl px-8 mx-auto">
    <div class="w-full border-y border-gray-200">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
        <!-- Seção Logo e Links Rápidos -->
        <div class="p-6 lg:p-12 flex flex-col lg:flex-row lg:items-start lg:gap-10 border-b md:border-b-0 md:border-r border-gray-200">
          <NuxtLink to="/" class="hidden xl:block mb-6 lg:mb-0">
            <NuxtImg src="/img/logo/nefa.svg" width="96" height="40" alt="NEFA Logo" class="w-24" />
          </NuxtLink>
          <ul class="space-y-4">
            <NavLink v-for="link in quickLinks" :key="link.name" :name="link.name" :url="link.url" />
          </ul>
        </div>

        <!-- Seção Institucional -->
        <div class="p-6 lg:p-12 border-b md:border-b-0 lg:border-r border-gray-200">
          <ul class="space-y-4">
            <NavLink v-for="link in institutional" :key="link.name" :name="link.name" :url="link.url" />
          </ul>
        </div>

        <!-- Seção Suporte -->
        <div class="p-6 lg:p-12 border-b md:border-b-0 border-gray-200">
          <ul class="space-y-4">
            <NavLink v-for="link in support" :key="link.name" :name="link.name" :url="link.url" />
          </ul>
        </div>

        <!-- Newsletter -->
        <div class="p-6 lg:p-12 space-y-6">
          <div class="space-y-2">
            <h3 class="text-sm font-semibold text-gray-600">Newsletter</h3>
            <p class="text-sm text-gray-500">Receba atualizações e insights exclusivos</p>
          </div>
          <form @submit.prevent="subscribeNewsletter" class="flex gap-2">
            <input
              v-model="email"
              type="email"
              placeholder="Seu melhor e-mail"
              class="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
            <button
              type="submit"
              class="px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <ArrowRightIcon class="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </div>

    <!-- Copyright -->
    <div class="py-8 text-center text-sm text-gray-500">
      &copy; {{ new Date().getFullYear() }} NEFA LLC. Todos os direitos reservados
    </div>
  </footer>
</template>

<script setup lang="ts">
const email = ref('')

const quickLinks = [
  { name: 'Criptomoedas', url: '#' },
  { name: 'Exchanges', url: '#' },
  { name: 'Watchlist', url: '#' },
  { name: 'Portfólio', url: '#' },
  { name: 'NFT', url: '#' }
]

const institutional = [
  { name: 'Produtos', url: '#' },
  { name: 'Sobre Nós', url: '#' },
  { name: 'Carreiras', url: '#' },
  { name: 'Blog', url: '#' },
  { name: 'Segurança', url: '#' }
]

const support = [
  { name: 'Central de Ajuda', url: '#' },
  { name: 'Contato', url: '#' },
  { name: 'Status do Sistema', url: '#' },
  { name: 'Política de Privacidade', url: '#' }
]

const subscribeNewsletter = () => {
  // Lógica de inscrição
  console.log('E-mail cadastrado:', email.value)
  email.value = ''
}
</script>
