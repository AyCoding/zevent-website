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
      <img :src="src" alt="" width="16" height="16" style="filter: invert(1)" />
    </div>
  </NuxtLink>
</template>

<style scoped></style>
