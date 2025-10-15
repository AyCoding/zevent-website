<script setup lang="ts">
defineProps<{
  src: String;
  link: String;
}>();
</script>

<template>
  <NuxtLink :to="link" target="_blank">
    <div
      class="w-10 h-10 p-2 flex items-center justify-center bg-white/10 hover:bg-white/20 hover:border hover:border-white/20 rounded-full cursor-pointer"
    >
      <img :src="src" alt="" width="16" height="16" class="invert" />
    </div>
  </NuxtLink>
</template>

<style scoped>
@keyframes gentleFadeIn {
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

a:hover img {
  animation: gentleFadeIn 600ms cubic-bezier(0.33, 1, 0.68, 1);
}
</style>
