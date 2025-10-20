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

const allStreamers = ref<Streamer[]>([
  {
    pseudo: "Zerator",
    avatar: "/zerator-avatar.png",
    photo: "/zerator.png",
    twitch: "https://www.twitch.tv/ZeratoR",
    online: false,
    cagnotte: 1154211.58,
    live: true,
  },
  {
    pseudo: "Ultia",
    avatar: "/ultia-avatar.png",
    photo: "/ultia.png",
    twitch: "https://www.twitch.tv/Ultia",
    online: false,
    cagnotte: 125685.25,
  },
  {
    pseudo: "BastiUi",
    avatar: "/bastiui-avatar.png",
    photo: "",
    twitch: "https://www.twitch.tv/BastiUi",
    online: true,
    cagnotte: 7713.45,
    live: true,
  },
  {
    pseudo: "AntoineDaniel",
    avatar: "/antoinedaniel-avatar.png",
    photo: "",
    twitch: "https://www.twitch.tv/AntoineDaniel",
    online: false,
    cagnotte: 1218838.44,
  },
  {
    pseudo: "Etoiles",
    avatar: "/etoiles-avatar.png",
    photo: "",
    twitch: "https://www.twitch.tv/etoiles",
    online: false,
    cagnotte: 201236.1,
  },
  {
    pseudo: "BagheraJones",
    avatar: "/bagz-avatar.png",
    photo: "",
    twitch: "https://www.twitch.tv/BagheraJones",
    online: false,
    cagnotte: 135326.78,
  },
  {
    pseudo: "samueletienne",
    avatar: "/samueletienne-avatar.png",
    photo: "/samueletienne.png",
    twitch: "https://www.twitch.tv/samueletienne",
    online: false,
    cagnotte: 403097.43,
  },
  {
    pseudo: "Joyca",
    avatar: "/joyca-avatar.png",
    photo: "/joyca.png",
    twitch: "https://www.twitch.tv/joyca",
    online: false,
    cagnotte: 305318.8,
  },
  {
    pseudo: "Flonflon",
    avatar: "/flonflon-avatar.png",
    photo: "",
    twitch: "https://twitch.tv/flonflon",
    online: true,
    cagnotte: 14667.51,
  },
  {
    pseudo: "mistermv",
    avatar: "/mistermv-avatar.png",
    photo: "",
    twitch: "https://twitch.tv/mistermv",
    online: true,
    cagnotte: 306123.27,
  },
]);

const filterMode = ref<"all" | "onsite" | "remote">("all");

const showOnline = (event?: boolean) => {
  if (event === true) filterMode.value = "remote";
  else if (event === false) filterMode.value = "onsite";
  else filterMode.value = "all";
};

const filteredStreamers = computed(() => {
  let list = allStreamers.value.slice();

  if (filterMode.value === "remote") {
    list = list.filter((s) => s.online);
  } else if (filterMode.value === "onsite") {
    list = list.filter((s) => !s.online);
  }

  if (onLive.value) {
    list = list.filter((s) => s.live === true);
  }

  return list.sort((a, b) =>
    a.pseudo.localeCompare(b.pseudo, "fr", { sensitivity: "base" }),
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
            filterMode === 'onsite'
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
            filterMode === 'remote'
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
      <StreamerCards
        v-for="streamer in filteredStreamers"
        :key="streamer.pseudo"
        :data="streamer"
      />
    </div>
  </div>
</template>

<style scoped></style>
