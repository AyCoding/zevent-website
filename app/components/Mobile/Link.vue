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
