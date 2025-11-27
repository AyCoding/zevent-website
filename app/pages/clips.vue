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
  <div class="px-4 pt-20 lg:pt-[364px]">
    <div
      class="lg:sticky top-[100px] z-2000 flex flex-wrap gap-4 justify-center w-full"
    >
      <div
        class="flex justify-center p-1 rounded-[48px] bg-[#292931] w-fit gap-px border border-white/10"
      >
        <SegmentedItem :active="true">Tops</SegmentedItem>
        <SegmentedItem :active="false">Récents</SegmentedItem>
      </div>
      <div
        class="flex justify-center p-1 rounded-[48px] bg-[#292931] w-fit gap-px border border-white/10"
      >
        <button
          :class="[
            'h-10 flex gap-1.5 justify-center items-center p-4 rounded-4xl opacity-75 hover:opacity-100 cursor-pointer',
            /*filterMode === 'LAN'
              ? 'text-black opacity-100 bg-[#02E869]'
              : 'opacity-75 hover:opacity-100',*/
          ]"
        >
          Tous les jours
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="invert"
          >
            <g class="oi-chevron-down">
              <path
                class="oi-incomplete-triangle"
                d="M18 10L12 16L6 10"
                stroke="#000000"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </svg>
        </button>
      </div>
      <div
        class="flex justify-center p-1 rounded-[48px] bg-[#292931] w-fit gap-px border border-white/10"
      >
        <button
          :class="[
            'h-10 flex gap-1.5 justify-center items-center p-4 rounded-4xl opacity-75 hover:opacity-100',
          ]"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="invert"
          >
            <g class="oi-search">
              <path
                class="oi-ellipse"
                d="M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                stroke="#000000"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                class="oi-line"
                d="M21 21L15 15"
                stroke="#000000"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </svg>
          <input type="text" placeholder="Rechercher" class="outline-none" />
        </button>
      </div>
    </div>
    <div class="mx-auto px-4 gap-10 mt-8 pb-40 flex flex-wrap justify-center">
      <StreamerClips v-for="clip in data" :data="clip" />
    </div>
  </div>
</template>

<style scoped></style>
