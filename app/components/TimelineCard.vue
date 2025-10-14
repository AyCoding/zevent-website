<script setup lang="ts"></script>

<template>
  <div
    class="flex flex-col w-full max-w-[400px] rounded-4xl outline outline-white/10 relative"
  >
    <div class="image w-full h-[240px] rounded-t-4xl">
      <!--      Mettre une div de même taille pour ajouter le background gradient -->
      <img
        src="/zevent2024.png"
        alt=""
        class="w-full h-full object-fill rounded-t-4xl"
      />
    </div>
    <div class="flex flex-col gap-6 p-8">
      <div class="flex flex-col gap-1">
        <span
          class="text-xl leading-5 tracking-tighter font-bold text-[#02E869]"
          >ZEVENT 2024</span
        >
        <p class="leading-4 text-[#838383] text-xs">05-08 septembre</p>
      </div>
      <p class="font-medium text-[56px] tracking-[-2.8px] pt-6">10 145 881 €</p>
      <div class="flex gap-1 pb-4 flex-wrap self-stretch">
        <Association>Les Bureaux du Coeur</Association>
        <Association>Solidarité Paysans</Association>
        <Association>Secours Populaire</Association>
        <Association>Chapitre 2</Association>
        <Association>Cop1</Association>
      </div>
      <CTAGhost>Voir le bilan</CTAGhost>
    </div>
    <div class="handle">
      <div class="bulle"></div>
    </div>
  </div>
</template>

<style scoped>
.image {
  background: linear-gradient(180deg, #000 23.75%, rgba(0, 0, 0, 0) 100%);
}

.handle {
  width: 78px;
  height: 1px;
  background: #fff;
  position: absolute;
  top: 50%;
  right: -78px;
  transform: translateY(-50%);

  .bulle {
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
</style>
