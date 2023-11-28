<template>
  <div class="grid grid-cols-2 items-center justify-center">
    <div>
      <img class="w-full h-screen" src="/error/1.gif" alt="">
    </div>
    <div>
      <h1 class="text-[54px] font-medium">Opp's</h1>
      <h4 class="text-[30px]">Page not found</h4>
      <div class="mt-12">
        <nuxt-link to="/" class="bg-red-500 px-12 py-2 text-[20px] rounded-md text-white">go to home</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  error: Object
})

</script>

<style scoped></style>