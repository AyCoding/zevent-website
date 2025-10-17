<script setup lang="ts">
import type { Streamer } from "~/types/streamer";

defineProps<{
  data: Streamer;
}>();
</script>

<template>
  <a
    :href="data.twitch"
    target="_blank"
    rel="noopener noreferrer"
    class="streamer-cards bg-[#080808] h-[400px] min-w-[280px] max-w-[400px] relative rounded-2xl overflow-hidden border border-white/10"
  >
    <img
      :src="data.photo"
      alt=""
      class="photo w-full h-full object-cover"
      v-if="data.photo"
    />
    <div class="p-4 absolute bottom-0 flex gap-2 z-10">
      <div class="avatar rounded-full">
        <img
          :src="data.avatar"
          alt=""
          class="rounded-full"
          width="56"
          height="56"
          v-if="data.photo"
        />
      </div>
      <div class="flex flex-col gap-2">
        <div class="flex gap-1">
          <h4 class="text-[22px] font-semibold leading-[22px]">
            {{ data.pseudo }}
          </h4>
          <img src="/online-yes.svg" alt="" v-if="data.online" />
          <img src="/online-no.svg" alt="" v-else />
        </div>
        <p class="cagnotte text-xs leading-4 w-fit">{{ data.cagnotte }} €</p>
      </div>
    </div>
    <div
      class="streamer-bottom absolute bottom-0 w-full h-[200px] bg-green-700/20"
    ></div>
    <div v-if="!data.photo" class="w-full flex justify-center pt-[70px]">
      <img
        :src="data.avatar"
        alt=""
        class="rounded-full"
        width="160"
        height="160"
      />
    </div>
  </a>
</template>

<style scoped>
.cagnotte {
  display: inline-flex;
  height: 24px;
  padding: 1px 8px;
  justify-content: center;
  align-items: center;
  gap: 8px;

  border-radius: 36px;
  border: 1px solid rgba(255, 255, 255, 0.1);

  background: rgba(0, 189, 0, 0.2);

  backdrop-filter: blur(4px);

  color: #00bd00;
}

.streamer-cards:hover .cagnotte {
  background: #00bd00;
  color: #fff;
  transition: 0.3s;
}
.streamer-cards {
  img {
    transition: 0.5s;
  }
}

.streamer-cards:hover .photo {
  transform: scale(1.05);
  transition: 0.5s;
}

.streamer-cards .streamer-bottom {
  transition: background 0.3s ease;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #0b1c0b 100%);
}

.streamer-cards:hover .streamer-bottom {
  transition: background 0.3s ease;
  background: linear-gradient(
    180deg,
    rgba(11, 28, 11, 0) 0%,
    rgba(0, 189, 0, 0.5) 100%
  );
}
</style>
