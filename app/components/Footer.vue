<script setup lang="ts"></script>

<template>
  <footer class="py-36">
    <div class="flex flex-col items-center gap-11">
      <img src="/logo-secondary.png" alt="" />
      <div class="flex justify-center gap-3">
        <CTAIcon src="/bluesky.svg" link="https://bsky.app/profile/zevent.fr" />
        <CTAIcon src="/twitter.svg" link="https://twitter.com/zeventfr" />
        <CTAIcon src="/insta.svg" link="https://www.instagram.com/zeventfr/" />
        <CTAIcon src="/reddit.svg" link="https://www.reddit.com/r/zevent/" />
        <CTAIcon
          src="/facebook.svg"
          link="https://www.facebook.com/zeventofficiel/"
        />
      </div>
    </div>
  </footer>
  <div class="flex justify-center pb-14">
    <CTAGhost to="#top" class="w-fit">Haut de la page ↑</CTAGhost>
  </div>
</template>

<style scoped></style>
