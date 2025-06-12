<!-- components/base/Footer.vue -->
<template>
  <footer class="max-w-screen-xl px-8 mx-auto bg-gray-50">
    <div class="w-full border-t border-gray-200">
      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-0">
        <!-- Seção Logo -->
        <div class="p-6 lg:p-12 border-b md:border-b-0 md:border-r border-gray-200">
          <NuxtLink to="/" class="block mb-6">
            <NuxtImg
              src="/img/logo/autoshield.svg"
              width="120"
              height="40"
              alt="AutoShield Logo"
              class="h-10"
            />
          </NuxtLink>
          <p class="text-sm text-gray-600 mt-4">
            Proteção veicular completa e personalizada para sua frota
          </p>
        </div>

        <!-- Links Rápidos -->
        <div class="p-6 lg:p-12 border-b md:border-b-0 lg:border-r border-gray-200">
          <h3 class="text-sm font-semibold text-gray-800 mb-4">Nossos Serviços</h3>
          <ul class="space-y-3">
            <NavLink v-for="link in services" :key="link.name" :name="link.name" :url="link.url" />
          </ul>
        </div>

        <!-- Suporte -->
        <div class="p-6 lg:p-12 border-b md:border-b-0 border-gray-200">
          <h3 class="text-sm font-semibold text-gray-800 mb-4">Suporte</h3>
          <ul class="space-y-3">
            <NavLink v-for="link in support" :key="link.name" :name="link.name" :url="link.url" />
          </ul>
        </div>

        <!-- Newsletter -->
        <div class="p-6 lg:p-12 space-y-6">
          <div class="space-y-2">
            <h3 class="text-sm font-semibold text-gray-800">Atualizações</h3>
            <p class="text-sm text-gray-600">Receba alertas e dicas de proteção veicular</p>
          </div>
          <form @submit.prevent="subscribeNewsletter" class="flex gap-2">
            <input
              v-model="email"
              type="email"
              placeholder="Seu e-mail"
              class="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
              required
            />
            <button type="submit" class="btn-primary px-4 py-3">
              <ArrowRightIcon class="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </div>

    <!-- Copyright -->
    <div class="py-6 text-center text-sm text-gray-600 bg-white">
      &copy; {{ new Date().getFullYear() }} AutoShield. Todos os direitos reservados
    </div>
  </footer>
</template>

<script setup lang="ts">
const email = ref('')

const services = [
  { name: 'Planos Empresariais', url: '#' },
  { name: 'Cobertura Completa', url: '#' },
  { name: 'Assistência 24h', url: '#' },
  { name: 'Rastreador Veicular', url: '#' }
]

const support = [
  { name: 'Central de Atendimento', url: '#' },
  { name: 'Regulamento de Proteção', url: '#' },
  { name: 'Solicitar Sinistro', url: '#' },
  { name: 'Política de Privacidade', url: '#' }
]

const subscribeNewsletter = () => {
  console.log('E-mail cadastrado:', email.value)
  email.value = ''
}
</script>
