<script setup lang="ts">
import { ref, onMounted, watchEffect } from "vue";
import StreamerCards from "~/components/StreamerCards.vue";
import type { Streamer } from "~/types/streamer";

useHead({
  title: "ZEVENT 2025",
});

let onLive = ref(false);

const buttonLive = () => {
  onLive.value = !onLive.value;
};

const streamers = ref<Streamer[]>([
  {
    pseudo: "Zerator",
    avatar: "/zerator-avatar.png",
    photo: "/zerator.png",
    twitch: "https://www.twitch.tv/ZeratoR",
    online: false,
    cagnotte: 1154211.58,
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
]);

const sortStreamersAZ = () => {
  streamers.value.sort((a, b) =>
    a.pseudo.localeCompare(b.pseudo, "fr", { sensitivity: "base" }),
  );
};

watchEffect(sortStreamersAZ);
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
      <StreamerCards
        v-for="streamer in streamers"
        :key="streamer.pseudo"
        :data="streamer"
      />
    </div>
  </div>
</template>

<style scoped></style>
