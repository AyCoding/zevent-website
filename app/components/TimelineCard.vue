<script setup lang="ts">
import { computed } from "vue";
import type { Timeline } from "~/types/timeline";

const props = defineProps<{
  timelineData: Timeline;
  position: string;
}>();

const cover = computed(() => props.timelineData.cover);
const edition = computed(() => props.timelineData.edition);
const date = computed(() => props.timelineData.date);
const amount_raised = computed(() => props.timelineData.amount_raised);
const charities = computed(() => props.timelineData.charities);
// const position = "right";
</script>

<template>
  <div
    class="timeline flex flex-col w-full max-w-[400px] rounded-4xl outline outline-white/10 relative"
  >
    <div class="image w-full h-[240px] rounded-t-4xl overflow-hidden">
      <!--      Mettre une div de même taille pour ajouter le background gradient -->
      <img
        :src="`/cover${cover}`"
        alt=""
        class="w-full h-full object-cover scale-110 rounded-t-4xl"
      />
    </div>
    <div class="flex flex-col gap-6 p-8">
      <div class="flex flex-col gap-1">
        <span
          class="text-xl leading-5 tracking-tighter font-bold text-[#02E869]"
          >ZEVENT {{ edition }}</span
        >
        <p class="leading-4 text-[#838383] text-xs">{{ date }}</p>
      </div>
      <p class="font-medium text-[56px] tracking-[-2.8px] pt-6">
        {{ Intl.NumberFormat("fr-FR").format(amount_raised) }}
        €
      </p>
      <div class="flex gap-1 pb-4 flex-wrap self-stretch">
        <Association
          v-for="charity in charities"
          :to="charity.url"
          target="_blank"
        >
          {{ charity.name_of_charity }}
        </Association>
      </div>
      <CTAGhost>Voir le bilan</CTAGhost>
    </div>
    <div class="handle-r" v-if="position == 'right'">
      <div class="bulle-r"></div>
    </div>
    <div class="handle-l" v-else-if="position == 'left'">
      <div class="bulle-l"></div>
    </div>
  </div>
</template>

<style scoped>
.timeline {
  transition: 0.4s ease-out;

  &:hover {
    background: #000000;
  }

  img {
    transition: 0.4s ease-out;
  }
  &:hover img {
    transform: scale(1.05);
    transition: 0.4s;
  }
}

.image {
  background: linear-gradient(180deg, #000 23.75%, rgba(0, 0, 0, 0) 100%);
}

.handle-r {
  width: 78px;
  height: 1px;
  background: #fff;
  position: absolute;
  top: 50%;
  right: -78px;
  transform: translateY(-50%);

  .bulle-r {
    position: absolute;
    right: -8px;
    background: #fff;
    border-radius: 100%;
    width: 1rem;
    height: 1rem;
    top: 50%;
    transform: translateY(-50%);
  }
}
.handle-l {
  width: 78px;
  height: 1px;
  background: #fff;
  position: absolute;
  top: 50%;
  left: -78px;
  transform: translateY(-50%);

  .bulle-l {
    position: absolute;
    left: -8px;
    background: #fff;
    border-radius: 100%;
    width: 1rem;
    height: 1rem;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>
