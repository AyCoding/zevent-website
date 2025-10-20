<script setup lang="ts">
import { ref, computed } from "vue";
import AssociationsFdf from "~/components/Associations/Fdf.vue";
import AssociationsAidants from "~/components/Associations/Aidants.vue";
import AssociationsHelebor from "~/components/Associations/Helebor.vue";
import AssociationsLigueCancer from "~/components/Associations/LigueCancer.vue";
import AssociationsNightline from "~/components/Associations/Nightline.vue";

useHead({
  title: "ZEVENT 2025",
});

type Assoc = {
  id: string;
  name: string;
  component: any;
};

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
];

const activeId = ref<string>("fdf");

function selectAssociation(id: string) {
  activeId.value = id;
}

const currentComponent = computed(() => {
  const found = associations.find((a) => a.id === activeId.value);
  return found?.component ?? AssociationsFdf;
});
</script>

<template>
  <h1
    class="fixed -z-10 text-[320px] font-normal leading-[400px] tracking-[-19.2px] opacity-50 mix-blend-overlay top-[56px] left-1/2 translate-x-[-50%]"
  >
    ./Associations
  </h1>
  <div class="pt-[364px]">
    <div
      class="sticky top-[100px] z-[2000] flex justify-center mx-auto p-1 rounded-[48px] bg-[#292931] w-fit gap-[1px] border border-white/10 shadow-lg"
    >
      <button
        v-for="association in associations"
        :key="association.id"
        @click="selectAssociation(association.id)"
        :class="[
          'h-10 flex justify-center items-center p-4 rounded-4xl cursor-pointer opacity-75 hover:opacity-100',
          activeId === association.id
            ? 'bg-[#02E869] text-black opacity-100'
            : '',
        ]"
      >
        {{ association.name }}
      </button>
    </div>

    <component :is="currentComponent" />
  </div>
</template>

<style scoped></style>
