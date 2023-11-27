<template>
  <div v-if="isLoading" class="mt-40 card flex justify-content-center">
    <i class="pi pi-spin pi-spinner" style="font-size: 2rem"></i>
  </div>
  <div v-else class="mt-8 card flex justify-content-center">
    <h1 class="text-center">Blank Page</h1>
    {{ products }}
  </div>
</template>

<script setup>

const products = ref({});
const isLoading = ref(false);

const init = async () => {
  isLoading.value = true;
  const { data, pending, error, refresh } = await getData('home');
  if (error && error.value || !data.value) {
    throw createError({statusCode: 404, statusMessage: 'Page Not Found'})
  } else {
    console.log('else')
    products.value = data.value;
  }
  isLoading.value = false;
}
init()
</script>
<style scoped lang="scss">
.card {
  max-width: 500px;
  margin: 50px auto 0;
}
</style>