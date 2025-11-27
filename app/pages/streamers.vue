<script setup lang="ts">
import { ref, computed } from "vue"
import type { Streamer } from "~/types/streamer"

useHead({
  title: "ZEVENT 2025",
})

const onLive = ref(false)

const toggleLiveFilter = () => {
  onLive.value = !onLive.value
}

const streamer = ref<Streamer[]>([])
const { data: streamersData } = await useAsyncData<{ live: Streamer[] }>(
  "zevent",
  () => $fetch("/api/zevent"),
)

// État local pour stocker les statuts live de chaque streamer
const liveStatuses = ref<Record<string, boolean>>({})

// Fonction pour mettre à jour le statut live d'un streamer
const handleLiveStatusUpdate = (twitch: string, isLive: boolean) => {
  liveStatuses.value[twitch] = isLive
}

watch(
  streamersData,
  (newData) => {
    streamer.value = newData?.live ?? []
  },
  { immediate: true },
)

const filterMode = ref<"all" | "LAN" | "Online">("all")

const showOnline = (event?: boolean) => {
  // Désactiver le filtre "En live" quand on change de mode
  // onLive.value = false

  if (event === true) filterMode.value = "Online"
  else if (event === false) filterMode.value = "LAN"
  else filterMode.value = "all"
}

const filteredStreamers = computed<Streamer[]>(() => {
  if (!streamer.value || streamer.value.length === 0) return [] as Streamer[]

  let list = streamer.value

  // Filter by mode (LAN / Online / all)
  if (filterMode.value === "Online") {
    list = list.filter((s: Streamer) => s.location === "Online")
  } else if (filterMode.value === "LAN") {
    list = list.filter((s: Streamer) => s.location === "LAN")
  }

  // Filter by live if the button is active (utilise maintenant liveStatuses)
  if (onLive.value) {
    list = list.filter((s: Streamer) => liveStatuses.value[s.twitch] === true)
  }

  // Sort by Twitch username
  return list.toSorted((a: Streamer, b: Streamer) =>
    a.twitch.localeCompare(b.twitch, "fr", { sensitivity: "base" }),
  )
})
</script>

<template>
  <HeroTitle>./Streamers</HeroTitle>

  <div class="px-4 pt-20 lg:pt-[364px]">
    <div
      class="lg:sticky top-[100px] z-2000 flex flex-wrap gap-4 justify-center w-full"
    >
      <div
        class="flex justify-center p-1 rounded-[48px] bg-[#292931] w-fit gap-px border border-white/10"
      >
        <SegmentedItem :active="filterMode === 'all'" @click="showOnline()">
          Tous
        </SegmentedItem>
        <SegmentedItem
          :active="filterMode === 'LAN'"
          @click="showOnline(false)"
        >
          Sur place
        </SegmentedItem>

        <SegmentedItem
          :active="filterMode === 'Online'"
          @click="showOnline(true)"
        >
          À distance
        </SegmentedItem>
      </div>
      <div
        class="flex justify-center p-1 rounded-[48px] bg-[#292931] w-fit gap-px border border-white/10"
      >
        <button
          :class="[
            'h-10 flex justify-center items-center p-4 rounded-4xl cursor-pointer opacity-75 hover:opacity-100',
            onLive ? 'bg-[#FF5555] text-black opacity-100' : '',
          ]"
          @click="toggleLiveFilter"
        >
          En live
        </button>
      </div>
      <div
        class="flex justify-center p-1 rounded-[48px] bg-[#292931] w-fit gap-px border border-white/10"
      >
        <button
          :class="[
            'h-10 flex gap-1.5 justify-center items-center p-4 rounded-4xl cursor-pointer opacity-75 hover:opacity-100',
          ]"
        >
          Trier par
          <img src="/icons/Sort.svg" alt="" />
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
    <div class="mx-auto px-4 gap-6 mt-8 pb-40 flex flex-wrap justify-center">
      <StreamerCards
        v-for="streamer in filteredStreamers"
        :key="streamer.twitch"
        :streamer="streamer"
        @live-status-update="handleLiveStatusUpdate"
      />
    </div>
  </div>
</template>

<style scoped></style>
