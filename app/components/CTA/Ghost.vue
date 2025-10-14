<script setup lang="ts"></script>

<template>
  <NuxtLink to="/">
    <div class="cta-ghost">
      <slot />
    </div>
  </NuxtLink>
</template>

<style scoped>
.cta-ghost {
  display: inline-flex;
  width: 100%;
  color: #fff;
  justify-content: center;
  align-items: center;
  padding-inline: 1.5rem;
  height: 40px;
  gap: 0.5rem;
  border-radius: 40px;
  font-size: 15px;
  font-weight: 600;
  line-height: 20px; /* 133.333% */
  letter-spacing: -0.3px;
  background: rgba(255, 255, 255, 0.1);
  opacity: 0.8;
  outline: 1px solid rgba(255, 255, 255, 0.2);
}
.cta-ghost:hover {
  opacity: 1;
  background: rgba(255, 255, 255, 0.2);
}
</style>
