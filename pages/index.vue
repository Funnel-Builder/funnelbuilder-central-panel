<template>
  <div class="mt-8 card flex justify-content-center">
    <Calendar v-model="date" />
  </div>
  <div class="container">
    <i class="pi pi-spin pi-spinner" style="font-size: 2rem"></i>
    <i class="pi pi-spin pi-cog" style="font-size: 2rem"></i>
    <Button label="Danger" severity="danger" />
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