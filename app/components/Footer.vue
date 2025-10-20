<script setup lang="ts">
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
</script>

<template>
  <footer class="">
    <div class="flex flex-col items-center gap-11 py-36">
      <img src="/logo-secondary.png" alt="" />
      <div class="flex justify-center gap-3">
        <CTAIcon
          src="/icons/bluesky.svg"
          link="https://bsky.app/profile/zevent.fr"
        />
        <CTAIcon src="/icons/twitter.svg" link="https://twitter.com/zeventfr" />
        <CTAIcon
          src="/icons/insta.svg"
          link="https://www.instagram.com/zeventfr/"
        />
        <CTAIcon
          src="/icons/reddit.svg"
          link="https://www.reddit.com/r/zevent/"
        />
        <CTAIcon
          src="/icons/facebook.svg"
          link="https://www.facebook.com/zeventofficiel/"
        />
      </div>
    </div>
    <div class="flex justify-center pb-14">
      <CTAGhost @click="scrollToTop" class="w-fit">
        Haut de la page ↑
      </CTAGhost>
    </div>
  </footer>
</template>

<style scoped>
footer {
  background: linear-gradient(
    180deg,
    rgba(24, 24, 27, 0) 0%,
    var(--Bg-2, #16161b) 100%
  );
}
</style>
