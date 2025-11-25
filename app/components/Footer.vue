<script setup lang="ts">
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" })
}
</script>

<template>
  <footer class="px-4">
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
      <CTAGhost @click="scrollToTop" to="#" class="w-fit">
        Haut de la page ↑
      </CTAGhost>
    </div>
    <!-- <div class="flex flex-col items-center pb-4 gap-1 text-sm">
      <div>
        <p>
          Fait par
          <a
            href="https://aymericdelange.fr"
            target="_blank"
            rel="noopener noreferrer"
            class="text-[#02E869] font-bold"
          >
            Aymeric DE LANGE
          </a>
          à l'aide du redesign de
          <a
            href="https://www.figma.com/community/file/1559521225721548044"
            target="_blank"
            rel="noopener noreferrer"
            class="text-[#02E869] font-bold"
          >
            BastiUi
          </a>
        </p>
      </div>
      <div>
        <p>
          Ce site n'est pas officiel et ne dépend pas du staff du
          <a
            href="https://zevent.fr/"
            target="_blank"
            rel="noopener noreferrer"
            class="text-[#02E869] font-bold"
          >
            ZEvent
          </a>
        </p>
      </div>
    </div> -->
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
