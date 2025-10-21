<script setup lang="ts">
import type { Clips } from "~/types/clips";
defineProps<{
  data: Clips;
}>();
</script>

<template>
  <NuxtLink :to="data.url" target="_blank" rel="noreferrer">
    <div
      class="streamer-clips min-w-[320px] max-w-[480px] hover:bg-[#16161B] overflow-hidden rounded-lg"
    >
      <img :src="data.thumbnail_url" alt="" class="thumbnails" />
      <div class="flex gap-4 p-4">
        <div>
          <img
            :src="data.broadcaster['profile_image_url']"
            alt=""
            width="48"
            height="48"
            class="rounded-full"
          />
        </div>
        <div class="flex flex-col gap-2">
          <p class="font-medium tracking-tight">
            {{ data.title }}
          </p>
          <div>
            <p
              class="pseudo font-semibold text-[13px] leading-5 tracking-tight"
            >
              {{ data.broadcaster["display_name"] }}
            </p>
            <div
              class="flex gap-2 text-[13px] leading-5 tracking-tight opacity-50"
            >
              <p>
                {{ Intl.NumberFormat("fr-FR").format(data.view_count) }} vues
              </p>
              <p>{{ data.created_at }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<style scoped>
.streamer-clips {
  border: 1px solid rgba(255, 255, 255, 0);
  transition: border-color 0.3s ease-out;

  .thumbnails {
    border-radius: 8px;
    transform: scale(1);
    transition: transform 0.3s ease-out;
  }

  .pseudo {
    transition: color 0.3s ease-out;
  }

  &:hover {
    border: 1px solid rgba(255, 255, 255, 0.1);

    .thumbnails {
      transform: scale(1.05);
    }

    .pseudo {
      color: var(--Z);
    }
  }
}
</style>
