<!-- components/base/Button.vue -->
<template>
  <button
    class="text-sm text-center rounded-full hover:shadow-md hover:shadow-emerald-500/50 transition duration-300"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
  name: 'BaseButton'
});
</script>
