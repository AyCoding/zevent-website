<script setup lang="ts">
import type { Streamer } from "~/types/streamer"

const props = defineProps<{
  streamer: Streamer
  photo?: string
}>()

const emit = defineEmits<{
  liveStatusUpdate: [twitch: string, isLive: boolean]
}>()

const { data: live_status } = await useFetch(
  `/api/live_status/${props.streamer.twitch}`,
)

// Émettre le statut live vers le parent quand il change
watch(
  live_status,
  (newStatus) => {
    const isLive = !!(newStatus && newStatus.length > 0)
    emit("liveStatusUpdate", props.streamer.twitch, isLive)
  },
  { immediate: true },
)

const streamer_photo = [
  "zerator",
  "ultia",
  "samueletienne",
  "joyca",
  "thegreatreview",
  "ponce",
  "clemovitch",
  "doigby",
  "etoiles",
  "angledroit",
  "enjoyphoenix",
  "domingo",
  "sylvainlyve",
  "littlebigwhale",
  "mastu",
  "theguill84",
  "jltomy",
  "flamby",
  "mynthos",
  "antoinedaniel",
  "bagherajones",
  "alphacast",
]

// Gestion des photos
const streamer_filter = computed(() => {
  const twitch = props.streamer.twitch
  return streamer_photo.includes(twitch) ? twitch : null
})
</script>

<template>
  <a
    :href="`https://twitch.tv/${streamer.twitch}`"
    target="_blank"
    rel="noopener noreferrer"
    class="streamer-cards bg-[#080808] w-full h-[400px] min-w-[280px] max-w-[333px] relative rounded-2xl overflow-hidden border border-white/10"
  >
    <div
      class="flex flex-1 text-xs font-normal leading-4 absolute right-0 p-1 m-2 z-10"
    >
      <span v-if="!live_status?.length" class="opacity-75">Offline</span>
      <div v-else-if="live_status?.length" class="flex items-center gap-px">
        Live
        <div class="flex justify-center items-center w-4 h-4">
          <span class="pulse-dot" aria-hidden="true"></span>
        </div>
      </div>
    </div>
    <img
      :src="`/streamers-images/${streamer_filter}.png`"
      alt=""
      class="photo w-full h-full object-cover"
      v-if="streamer_filter"
    />
    <div class="p-4 absolute bottom-0 flex gap-2 z-10">
      <div class="avatar rounded-full">
        <img
          :src="streamer.profileUrl"
          alt=""
          class="rounded-full"
          width="56"
          height="56"
          v-if="streamer_filter"
        />
      </div>
      <div class="flex flex-col gap-2">
        <div class="flex items-center gap-1">
          <h4 class="text-[22px] font-semibold leading-[22px]">
            {{ streamer.display }}
          </h4>
          <IconOnline v-if="streamer.location === 'Online'"></IconOnline>
          <IconOffline v-else></IconOffline>
        </div>
        <p class="cagnotte text-xs leading-4 w-fit">
          {{
            Intl.NumberFormat("fr-FR").format(
              Math.round(streamer.donationAmount["number"]),
            )
          }}
          €
        </p>
      </div>
    </div>
    <div
      class="streamer-bottom absolute bottom-0 w-full h-[200px] bg-green-700/20"
    ></div>
    <div
      v-if="!streamer_filter"
      class="w-full flex justify-center pt-[70px] relative"
    >
      <img
        :src="streamer.profileUrl"
        alt=""
        class="avatar-large rounded-full z-10"
        width="160"
        height="160"
      />
    </div>
    <template v-if="!streamer_filter">
      <img
        :src="streamer.profileUrl"
        alt=""
        class="blur-avatar rounded-full absolute top-[50%] translate-y-[-50%] z-0 blur-[32px] scale-125 opacity-30"
        width="420"
        height="420"
      />
    </template>
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

.streamer-cards:hover .photo,
.streamer-cards:hover .avatar-large {
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

.streamer-cards:hover .blur-avatar {
  transition: 0.3s;
  opacity: 0.5;
}

/* Pulse dot */
.pulse-dot {
  width: 6px;
  height: 6px;
  background: #ff0000;
  border-radius: 9999px;
  position: relative;
  display: inline-block;
}

.pulse-dot::after {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) scale(1);
  width: 6px;
  height: 6px;
  border-radius: 9999px;
  background: #ff0000;
  opacity: 0.6;
  animation: pulse 1.6s ease-out infinite;
}

@keyframes pulse {
  0% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.8;
  }
  70% {
    transform: translate(-50%, -50%) scale(3);
    opacity: 0;
  }
  100% {
    transform: translate(-50%, -50%) scale(4);
    opacity: 0;
  }
}
</style>
