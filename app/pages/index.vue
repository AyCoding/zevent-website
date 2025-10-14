<script setup lang="ts">
useHead({
  title: "ZEVENT 2025",
});
</script>

<template>
  <div class="lcd"></div>
  <div class="hero-video">
    <video src="/HEADER-ZEVENT.mp4" autoplay muted loop></video>
    <div class="hero-content">
      <h1>L'évènement caritatif qui récolte des fonds pour la solidarité</h1>
      <div class="pt-20 flex px-6 gap-4">
        <div class="flex flex-col text-start text-pretty gap-4 m-2 w-[160px]">
          <h2 class="text-[40px] font-semibold text-[#02E869] tracking-tight">
            4 Sept.
          </h2>
          <p>Concert au Zenith de Montpellier</p>
        </div>
        <div class="flex flex-col text-start text-pretty gap-4 m-2 w-[160px]">
          <h2 class="text-[40px] font-semibold text-[#02E869] tracking-tight">
            5-7 Sept.
          </h2>
          <p>Collecte de fonds en stream</p>
        </div>
      </div>
      <div class="mt-20">
        <CTAMain to="#">Découvrir l’événement</CTAMain>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero-video {
  width: 100%;
  height: 1000px;
  max-height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    #000 50%,
    rgba(0, 0, 0, 0) 100%
  );
  /*z-index: 2;*/
}

.lcd {
  background-image: url("/lcd.png");
  width: 100%;
  height: 2000px; /* */
  position: absolute;
  top: 0;
  mix-blend-mode: overlay;

  /*z-index: 1;*/
}

.hero-video video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  opacity: 0.6;
}

.hero-content {
  width: 100%;
  max-width: 1080px;
  height: 100%;
  position: absolute;
  bottom: 0;

  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  z-index: 0;

  h1 {
    text-wrap: balance;
    font-size: 80px;
    font-weight: 500;
    line-height: 100%; /* 80px */
    letter-spacing: -4px;
  }
}
</style>
