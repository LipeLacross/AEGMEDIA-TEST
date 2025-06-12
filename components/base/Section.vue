<!-- components/base/Section.vue -->
<template>
  <section class="relative max-w-screen-xl px-4 sm:px-8 mx-auto grid grid-cols-12 gap-x-6 overflow-hidden py-16 lg:py-24" v-bind="$attrs">
    <slot />
  </section>
</template>

<script setup lang="ts">
defineOptions({
  name: 'BaseSection'
});
</script>
