<script setup lang="ts">

</script>

<template>
  <NuxtLink to="/">
    <div class="cta-special">
      <slot/>
    </div>
  </NuxtLink>
</template>

<style scoped>
.cta-special {
  display: flex;
  color: #18181B;
  justify-content: center;
  align-items: center;
  width: fit-content;
  padding-inline: 1.5rem;
  height: 40px;
  gap: 0.5rem;
  border-radius: 40px;
  font-size: 15px;
  font-weight: 600;
  line-height: 20px; /* 133.333% */
  letter-spacing: -0.3px;
  background-color: #02E869;
  opacity: 0.8;
}
.cta-special:hover {
  outline: 1px solid rgba(24, 24, 27, 0.20);
  opacity: 1;
}
</style>