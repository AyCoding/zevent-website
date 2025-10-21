<script setup lang="ts">
import { ref, computed } from "vue";
import type { Streamer } from "~/types/streamer";

useHead({
  title: "ZEVENT 2025",
});

const onLive = ref(false);
const buttonLive = () => {
  onLive.value = !onLive.value;
};

const streamer = ref<Streamer[]>([]);
const { data: streamersData } = useAsyncData<{ live: Streamer[] }>(
  "zevent",
  () =>
    $fetch("https://zevent.fr/api/", {
      referrerPolicy: "strict-origin-when-cross-origin",
    }),
);
const filterMode = ref<"all" | "LAN" | "Online">("all");

const showOnline = (event?: boolean) => {
  if (event === true) filterMode.value = "Online";
  else if (event === false) filterMode.value = "LAN";
  else filterMode.value = "all";
};

const filteredStreamers = computed<Streamer[]>(() => {
  // Populate the local ref from the fetched data if available
  streamer.value = streamersData.value?.live ?? [];

  if (!streamer.value || streamer.value.length === 0) return [] as Streamer[];

  let list = streamer.value;

  // Filtre par mode (LAN / Online / all)
  if (filterMode.value === "Online") {
    list = list.filter((s: Streamer) => s.location === "Online");
  } else if (filterMode.value === "LAN") {
    list = list.filter((s: Streamer) => s.location === "LAN");
  }

  // Filtre par live si le bouton est activé
  if (onLive.value) {
    list = list.filter((s: Streamer) => s.live === true);
  }

  // Trie par pseudo Twitch
  return list.sort((a: Streamer, b: Streamer) =>
    a.twitch.localeCompare(b.twitch, "fr", { sensitivity: "base" }),
  );
});
</script>

<template>
  <h1
    class="fixed -z-10 text-[320px] font-normal leading-[400px] tracking-[-19.2px] opacity-50 mix-blend-overlay top-[56px] left-1/2 translate-x-[-50%]"
  >
    ./Streamers
  </h1>
  <div class="pt-[364px]">
    <div class="sticky top-[100px] z-[2000] flex gap-4 justify-center w-full">
      <div
        class="flex justify-center p-1 rounded-[48px] bg-[#292931] w-fit gap-[1px] border border-white/10"
      >
        <button
          :class="[
            'h-10 flex justify-center items-center p-4 rounded-4xl cursor-pointer',
            filterMode === 'all'
              ? 'text-black opacity-100 bg-[#02E869]'
              : 'text-white opacity-75  hover:opacity-100',
          ]"
          @click="showOnline()"
        >
          Tous
        </button>
        <button
          :class="[
            'h-10 flex justify-center items-center p-4 rounded-4xl cursor-pointer',
            filterMode === 'LAN'
              ? 'text-black opacity-100 bg-[#02E869]'
              : 'opacity-75 hover:opacity-100',
          ]"
          @click="showOnline(false)"
        >
          Sur place
        </button>
        <button
          :class="[
            'h-10 flex justify-center items-center p-4 rounded-4xl cursor-pointer',
            filterMode === 'Online'
              ? 'text-black opacity-100 bg-[#02E869]'
              : 'opacity-75 hover:opacity-100',
          ]"
          @click="showOnline(true)"
        >
          À distance
        </button>
      </div>
      <div
        class="flex justify-center p-1 rounded-[48px] bg-[#292931] w-fit gap-[1px] border border-white/10"
      >
        <button
          :class="[
            'h-10 flex justify-center items-center p-4 rounded-4xl cursor-pointer opacity-75 hover:opacity-100',
            onLive ? 'bg-[#FF5555] text-black opacity-100' : '',
          ]"
          @click="buttonLive"
        >
          En live
        </button>
      </div>
    </div>
    <div class="container mx-auto px-20 grid grid-cols-4 gap-6 mt-8 pb-40">
      <StreamerCards v-for="streamer in filteredStreamers" :data="streamer" />
    </div>
  </div>
</template>

<style scoped></style>
