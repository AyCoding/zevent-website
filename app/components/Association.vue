<script setup lang="ts"></script>

<template>
  <NuxtLink>
    <div
      class="w-fit px-2 py-[1px] rounded-4xl border border-white/10 bg-white/20 h-6 flex justify-center text-center items-center text-xs font-medium leading-4 hover:bg-white hover:text-black backdrop-blur-xs cursor-pointer"
    >
      <slot />
    </div>
  </NuxtLink>
</template>

<style scoped></style>
