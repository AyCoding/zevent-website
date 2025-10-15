<script setup lang="ts"></script>

<template>
  <NuxtLink to="/">
    <div class="cta-main">
      <slot />
    </div>
  </NuxtLink>
</template>

<style scoped>
.cta-main {
  display: flex;
  color: #18181b;
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
  background-color: #fff;
}
.cta-main:hover {
  outline: 1px solid rgba(24, 24, 27, 0.2);
  background: rgba(255, 255, 255, 0.8);
}
</style>
