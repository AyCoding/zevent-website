<script setup lang="ts">
import { ref, computed } from "vue"
import AssociationsFdf from "~/components/Associations/Fdf.vue"
import AssociationsAidants from "~/components/Associations/Aidants.vue"
import AssociationsHelebor from "~/components/Associations/Helebor.vue"
import AssociationsLigueCancer from "~/components/Associations/LigueCancer.vue"
import AssociationsNightline from "~/components/Associations/Nightline.vue"

useHead({
  title: "ZEVENT 2025",
})

type Assoc = {
  id: string
  name: string
  component: any
}

const associations: Assoc[] = [
  { id: "fdf", name: "Fondation de france", component: AssociationsFdf },
  {
    id: "aidants",
    name: "Association Française des Aidants",
    component: AssociationsAidants,
  },
  { id: "helebor", name: "Helebor", component: AssociationsHelebor },
  {
    id: "ligue-cancer",
    name: "La Ligue Contre le Cancer",
    component: AssociationsLigueCancer,
  },
  { id: "nightline", name: "Nightline", component: AssociationsNightline },
]

const activeId = ref<string>("fdf")

function selectAssociation(id: string) {
  activeId.value = id
}

const currentComponent = computed(() => {
  const found = associations.find((a) => a.id === activeId.value)
  return found?.component ?? AssociationsFdf
})
</script>

<template>
  <HeroTitle>./Associations</HeroTitle>
  <div class="px-4 pt-20 lg:pt-[364px]">
    <div
      class="lg:sticky top-[100px] z-2000 flex flex-wrap justify-center mx-auto p-1 rounded-[48px] bg-[#292931] w-fit gap-px border border-white/10 shadow-lg"
    >
      <SegmentedItem
        v-for="association in associations"
        :key="association.id"
        :active="activeId === association.id"
        @click="selectAssociation(association.id)"
      >
        {{ association.name }}
      </SegmentedItem>
    </div>

    <component :is="currentComponent" />
  </div>
</template>

<style scoped></style>
