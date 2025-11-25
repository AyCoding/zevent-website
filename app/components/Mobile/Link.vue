<script setup lang="ts">
defineProps<{
  img: string
}>()
</script>

<template>
  <NuxtLink>
    <div
      class="flex flex-col justify-center items-center gap-1 text-[10px] font-bold w-[76px] h-[56px]"
    >
      <img :src="img" alt="" />
      <slot />
    </div>
  </NuxtLink>
</template>

<style scoped>
.router-link-active img,
.router-link-exact-active img {
  filter: brightness(0) saturate(100%) invert(73%) sepia(16%) saturate(6795%)
    hue-rotate(95deg) brightness(97%) contrast(105%);
}

.router-link-active div,
.router-link-exact-active div {
  color: #02e869;
}
</style>
