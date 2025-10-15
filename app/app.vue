<script setup lang="ts">
import gsap from "gsap";
import { watch, watchEffect } from "vue";

const lenis = useLenis((lenis) => {
  console.log("page callback", lenis);
});

watch(
  lenis,
  (lenis) => {
    console.log("page", lenis);
  },
  { immediate: true },
);

const lenisRef = useTemplateRef("lenisRef");

watchEffect((onInvalidate) => {
  function update(time: number) {
    lenisRef.value?.lenis?.raf(time * 1000);
  }
  gsap.ticker.add(update);

  onInvalidate(() => {
    gsap.ticker.remove(update);
  });
});
</script>

<template>
  <div>
    <div class="lcd"></div>
    <Header />
    <VueLenis root :options="{ autoRaf: false }" ref="lenisRef" />
    <NuxtPage />
    <Footer />
  </div>
</template>

<style scoped>
.lcd {
  background-image: url("/lcd.png");
  width: 100%;
  height: 1920px; /* */
  position: fixed;
  top: 0;
  mix-blend-mode: overlay;

  z-index: -1;
}
</style>
