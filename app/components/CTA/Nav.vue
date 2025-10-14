<script setup lang="ts"></script>

<template>
  <NuxtLink to="/">
    <div class="cta-nav">
      <slot />
    </div>
  </NuxtLink>
</template>

<style scoped>
.cta-nav {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  padding-inline: 1rem;
  height: 40px;
  gap: 0.5rem;
  border-radius: 40px;
  font-size: 15px;
  font-weight: 400;
  line-height: 20px; /* 133.333% */
  letter-spacing: -0.3px;
  opacity: 0.75;
}

.cta-nav::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 40px;
  padding: 1px;
  background: var(--Stroke);
  -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
  z-index: 1;
  opacity: 0;
  transition: opacity 0.2s;
}

.cta-nav:hover::after,
.cta-nav:hover {
  opacity: 1;
}
</style>
