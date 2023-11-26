<template>
  <div class="mt-8 card flex justify-content-center">
    <h1 class="text-center">Blank Page</h1>
    {{ products }}
  </div>
</template>

<script setup>

const products = ref({});

const { data, pending, error, refresh } = await getData('home');
if (error && error.value) {
  console.log(error.value);
} else {
  products.value = data.value;
}
console.log(data);
</script>
<style scoped lang="scss">
.card {
  max-width: 500px;
  margin: 50px auto 0;
}
</style>