<template>
  <div>
    <img :src="`/img/partner/${img}`" class="sm:w-1/2 lg:w-72 mx-auto" :alt="img" />
  </div>
</template>
<script setup>
defineProps({
  img: {
    type: String,
    default: ''
  }
})
</script>
