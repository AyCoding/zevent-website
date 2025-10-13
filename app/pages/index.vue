<script setup lang="ts">

</script>

<template>
  <div class="lcd"></div>
  <div class="hero-video">
    <video src="/HEADER-ZEVENT.mp4" autoplay muted loop></video>
    <div class="hero-content">
      <h1>L'évènement caritatif qui récolte des fonds pour la solidarité</h1>
    </div>
  </div>
<!--  <section>ddihged</section>-->
</template>

<style scoped>
.hero-video {
  width: 100%;
  height: 1000px;
  max-height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.lcd {
  background-image: url("/lcd.png");
  width: 100%;
  height: 2000px; /* */
  position: absolute;
  top: 0;
  mix-blend-mode: overlay;
}

.hero-video video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  opacity: .6;
}

.hero-content {
  width: 100%;
  max-width: 1080px;
  height: 100%  ;
  z-index: 1000;
  position: absolute;
  bottom: 0;

  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;

  h1 {
    text-wrap: balance;
    font-size: 80px;
    font-weight: 500;
    line-height: 100%; /* 80px */
    letter-spacing: -4px;
  }
}
</style>