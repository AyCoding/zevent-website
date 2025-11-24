<script setup lang="ts"></script>

<template>
  <div>
    <div class="lcd"></div>
    <Header />
    <MobileHeader class="lg:hidden" />
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
