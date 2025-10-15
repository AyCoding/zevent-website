<script setup lang="ts"></script>

<template>
  <header id="top" class="flex justify-between px-14 pt-6 fixed w-full">
    <div class="left flex gap-4">
      <CTANav to="/">Accueil</CTANav>
      <CTANav to="/associations">Associations</CTANav>
      <CTANav to="/streamers">Streamers</CTANav>
      <CTANav to="/clips">Clips</CTANav>
      <CTANav to="/statistiques">Statistiques</CTANav>
    </div>
    <div class="right flex gap-4">
      <CTANavExternal to="https://place.zevent.fr/">ZPlace</CTANavExternal>
      <CTANavExternal to="https://zevent.fr/concert">Concert</CTANavExternal>
      <CTAMain to="https://boutique.zevent.fr/" target="_blank">
        Boutique
      </CTAMain>
      <CTASpecial to="https://zevent.fr/don/">Faire un don</CTASpecial>
    </div>
  </header>
  <div class="protection"></div>
  <div class="logo">
    <img src="/Logo-small.png" alt="" class="" />
  </div>
</template>

<style scoped>
header {
  z-index: 1150;
}
.protection {
  width: 100%;
  height: 240px;
  position: fixed;
  top: 0;
  background: linear-gradient(180deg, #18181b 27.29%, rgba(24, 24, 27, 0) 100%);
  z-index: 1000;
}

.logo {
  position: fixed; /* TODO: A changer en sticky*/
  z-index: 1200;
  top: 8px;
  left: 50%;
  transform: translateX(-50%);

  img {
    margin: 0 auto;
    z-index: 0;
  }
}
</style>
