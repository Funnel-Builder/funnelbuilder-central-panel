<template>
  <main class="min-h-screen authBG">
    <div>
      <slot />
    </div>
  </main>
</template>

<script setup lang="ts">
</script>

<style lang="scss">
.authBG {
  background-image: url('/auth/bgMask.svg') !important;
  background-color: #5A78AD !important;
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: center;
}
</style>
```