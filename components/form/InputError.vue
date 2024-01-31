<script setup>
defineProps({
  message: {
    type: String,
  },
  textColor:{
    type: String,
    default: "#991c1c",
  }
});
</script>

<template>
  <div v-show="message">
    <p class="mt-1 text-sm" :style="{ color: textColor}">
      {{ message }}
    </p>
  </div>
</template>