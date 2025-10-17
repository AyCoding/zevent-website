<script setup lang="ts">
import StreamerCards from "~/components/StreamerCards.vue";

useHead({
  title: "ZEVENT 2025",
});

let onLive = ref(false);

const buttonLive = () => {
  onLive.value = !onLive.value;
};
</script>

<template>
  <div class="pt-[364px]">
    <div class="sticky top-[100px] z-[2000] flex gap-4 justify-center w-full">
      <div
        class="flex justify-center p-1 rounded-[48px] bg-[#292931] w-fit gap-[1px] border border-white/10"
      >
        <button
          class="h-10 flex justify-center items-center p-4 rounded-4xl cursor-pointer opacity-75 hover:opacity-100 bg-[#02E869] text-black"
        >
          Tous
        </button>
        <button
          class="h-10 flex justify-center items-center p-4 rounded-4xl cursor-pointer opacity-75 hover:opacity-100"
        >
          Sur place
        </button>
        <button
          class="h-10 flex justify-center items-center p-4 rounded-4xl cursor-pointer opacity-75 hover:opacity-100"
        >
          À distance
        </button>
      </div>
      <!--     Bouton En live -->
      <div
        class="flex justify-center p-1 rounded-[48px] bg-[#292931] w-fit gap-[1px] border border-white/10"
      >
        <button
          :class="[
            'h-10 flex justify-center items-center p-4 rounded-4xl cursor-pointer opacity-75 hover:opacity-100 ',

            onLive ? 'bg-[#FF5555] text-black opacity-100' : '',
          ]"
          @click="buttonLive"
        >
          En live
        </button>
      </div>
    </div>
    <div class="container mx-auto px-20 grid grid-cols-4 gap-6 mt-8 pb-40">
      <StreamerCards />
      <StreamerCards />
      <StreamerCards />
      <StreamerCards />
      <StreamerCards />
      <StreamerCards />
      <StreamerCards />
      <StreamerCards />
      <StreamerCards />
      <StreamerCards />
      <StreamerCards />
      <StreamerCards />
    </div>
  </div>
</template>

<style scoped></style>
