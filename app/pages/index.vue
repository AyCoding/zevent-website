<script setup lang="ts">
useHead({
  title: "ZEVENT 2025",
});
</script>

<template>
  <div class="lcd"></div>
  <div class="hero-video">
    <video src="/HEADER-ZEVENT.mp4" autoplay muted loop></video>
    <div class="hero-content px-4">
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
        <CTAMain to="#decouvrir">Découvrir l’événement</CTAMain>
      </div>
    </div>
  </div>
  <section id="decouvrir" class="flex max-w-7xl mx-auto px-4 py-70 gap-20">
    <div class="flex flex-col gap-10 w-full max-w-[600px]">
      <h1 class="font-medium text-[88px] leading-20 tracking-tight">
        ./ Le <span class="text-Z">ZEvent</span> c’est quoi ?
      </h1>
      <p>
        Zevent est un projet caritatif destiné à récolter des fonds par le biais
        du streaming pendant 3 jours.
      </p>
    </div>
    <div class="flex flex-col gap-10 w-full max-w-[600px]">
      <p>
        Créé par <span class="underline">Adrien Nougaret</span> et
        <span class="underline">Alexandre Dachary</span> en 2016, il est divisé
        en 2 parties : l'événement se compose d'un concert qui fait office
        d'amorce et est suivi par un marathon de streaming sur Twitch lors
        duquel de nombreux animateurs spécialisés se rassemblent tout au long du
        weekend.
      </p>
      <p>
        Pendant plus de 50h, les participants diffusent du contenu en direct
        tous ensemble et encouragent les spectateurs à se mobiliser pour
        soutenir une cause commune.
      </p>
    </div>
  </section>
  <section class="py-25 h-screen">
    <h1 class="font-medium text-[88px] leading-20 tracking-tight text-center">
      Historique
    </h1>

    <div>
      <div class="w-[80px] h-[1px] bg-white mx-auto mt-8 line"></div>
      <div class="vertical-line"></div>
      <div class="flex flex-col items-center pr-[555px] gap-40">
        <TimelineCard />
        <TimelineCard />
      </div>
    </div>
  </section>
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
  height: 1920px; /* */
  position: fixed;
  top: 0;
  mix-blend-mode: overlay;

  z-index: -1;
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

.line {
  background: linear-gradient(
    270deg,
    rgba(255, 255, 255, 0) 0%,
    #fff 40%,
    #fff 60%,
    rgba(255, 255, 255, 0) 100%
  );
}

.vertical-line {
  position: absolute;
  /* top: 0; */
  left: 50%;
  width: 1px;
  height: 1000px;
  margin-inline: auto;
  background: linear-gradient(180deg, #fff 50%, rgba(255, 255, 255, 0) 100%);
  transform: translateX(-50%);
}
</style>
