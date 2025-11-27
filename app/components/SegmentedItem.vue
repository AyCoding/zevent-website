<script setup lang="ts">
defineProps<{
  active: boolean
}>()
</script>

<template>
  <button
    :class="[
      'h-10 flex justify-center items-center p-4 rounded-4xl cursor-pointer  opacity-75 hover:opacity-100',
      active
        ? 'text-black opacity-100 bg-[#02E869]'
        : 'text-white opacity-75  hover:opacity-100 hover:bg-black/10',
    ]"
  >
    <slot></slot>
  </button>
</template>
