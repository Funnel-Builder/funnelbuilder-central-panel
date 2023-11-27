<template>
  <div>
    <div class="py-4 bannerBg">
      <HomeBanner/>
    </div>
    <nuxt-link to="/blank">Blank Page</nuxt-link>
  </div>
</template>

<script setup>
const date = ref();
</script>
<style scoped lang="scss">
.card {
  max-width: 500px;
  margin: 50px auto 0;
}
</style>