<script setup lang="ts">
import type { Clips } from "~/types/clips"

useHead({
  title: "ZEVENT 2025",
})

interface ClipsResponse {
  items: Clips[]
}
const data = ref<Clips[]>([])
const { data: clipsData } = await useAsyncData<ClipsResponse>("clips", () =>
  $fetch<ClipsResponse>("/api/clips"),
)
watchEffect(() => {
  data.value = clipsData.value?.items ?? []
})
</script>

<template>
  <HeroTitle>./Clips</HeroTitle>
  <div class="pt-[364px]">
    <div
      class="sticky top-[100px] z-2000 flex flex-wrap gap-4 justify-center w-full"
    >
      <div
        class="flex justify-center p-1 rounded-[48px] bg-[#292931] w-fit gap-px border border-white/10"
      >
        <button
          :class="[
            'h-10 flex justify-center items-center p-4 rounded-4xl cursor-pointer text-black opacity-100 bg-[#02E869]',
            /*filterMode === 'all'
              ? 'text-black opacity-100 bg-[#02E869]'
              : 'text-white opacity-75  hover:opacity-100',*/
          ]"
        >
          Tops
        </button>
        <button
          :class="[
            'h-10 flex justify-center items-center p-4 rounded-4xl cursor-pointer',
            /*filterMode === 'LAN'
              ? 'text-black opacity-100 bg-[#02E869]'
              : 'opacity-75 hover:opacity-100',*/
          ]"
        >
          Récents
        </button>
      </div>
      <div
        class="flex justify-center p-1 rounded-[48px] bg-[#292931] w-fit gap-px border border-white/10"
      >
        <button
          :class="[
            'h-10 flex justify-center items-center p-4 rounded-4xl cursor-pointer',
            /*filterMode === 'LAN'
              ? 'text-black opacity-100 bg-[#02E869]'
              : 'opacity-75 hover:opacity-100',*/
          ]"
        >
          Dropdown here
        </button>
      </div>
      <div
        class="flex justify-center p-1 rounded-[48px] bg-[#292931] w-fit gap-px border border-white/10"
      >
        <button
          :class="[
            'h-10 flex justify-center items-center p-4 rounded-4xl cursor-pointer',
            /*filterMode === 'LAN'
              ? 'text-black opacity-100 bg-[#02E869]'
              : 'opacity-75 hover:opacity-100',*/
          ]"
        >
          Search bar
        </button>
      </div>
    </div>
    <div class="mx-auto px-4 gap-10 mt-8 pb-40 flex flex-wrap justify-center">
      <StreamerClips v-for="clip in data" :data="clip" />
    </div>
  </div>
</template>

<style scoped></style>
