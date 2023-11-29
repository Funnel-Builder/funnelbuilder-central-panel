<script setup>
defineProps({
  message: {
    type: String,
  },
});
</script>

<template>
  <div v-show="message">
    <p class="mt-1 text-sm" style="color:#FFD600;">
      {{ message }}
    </p>
  </div>
</template>