<template>
  <div class="min-h-screen font-sans antialiased relative">
    <div class="relative">
      <!-- Gradiente de fundo -->
      <div class="absolute inset-0 bg-gradient-to-b from-blue-50/20 to-transparent"></div>

      <!-- Barra de navegação -->
      <BaseNavbar />

      <!-- Conteúdo principal -->
      <main class="text-neutral-800 relative z-10">
        <NuxtPage />
      </main>

      <!-- Rodapé -->
      <BaseFooter />
    </div>
  </div>
</template>

<style>
/* Gradientes */
.cover-gradient {
  background: linear-gradient(
    169.4deg,
    rgba(57, 132, 244, 0.04) -6.01%,
    rgba(12, 211, 255, 0.04) 36.87%,
    rgba(47, 124, 240, 0.04) 78.04%,
    rgba(14, 101, 232, 0.04) 103.77%
  );
}

.cover-gradient-2 {
  background: linear-gradient(
    169.4deg,
    rgba(57, 132, 244, 0.1) -6.01%,
    rgba(12, 211, 255, 0.1) 36.87%,
    rgba(47, 124, 240, 0.1) 78.04%,
    rgba(14, 101, 232, 0.1) 103.77%
  );
}

/* Efeitos de texto */
.text-gradient {
  background: linear-gradient(136.91deg, #468ef9 -12.5%, #0c66ee 107.5%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Transições */
.slide-enter-active,
.slide-leave-active {
  transition: max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}

.slide-enter-from,
.slide-leave-to {
  max-height: 0;
}

.slide-enter-to,
.slide-leave-from {
  max-height: 1000px;
}
</style>
