<script setup lang="ts">
useHead({
  title: "ZEVENT 2025",
});
const { data: clipsData } = useAsyncData("clips", () => $fetch("/api/clips"));
</script>

<template>
  <h1
    class="fixed -z-10 text-[320px] font-normal leading-[400px] tracking-[-19.2px] opacity-50 mix-blend-overlay top-[56px] left-1/2 translate-x-[-50%]"
  >
    ./Clips
  </h1>
  <div class="pt-[364px]">
    <div class="sticky top-[100px] z-[2000] flex gap-4 justify-center w-full">
      <div
        class="flex justify-center p-1 rounded-[48px] bg-[#292931] w-fit gap-[1px] border border-white/10"
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
        class="flex justify-center p-1 rounded-[48px] bg-[#292931] w-fit gap-[1px] border border-white/10"
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
        class="flex justify-center p-1 rounded-[48px] bg-[#292931] w-fit gap-[1px] border border-white/10"
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
      <StreamerClips v-for="clip in clipsData.items" :data="clip" />
    </div>
  </div>
</template>

<style scoped></style>
