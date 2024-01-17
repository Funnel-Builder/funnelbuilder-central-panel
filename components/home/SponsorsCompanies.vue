<template>
  <div class="container mx-auto pt-[60px]">
     <div class="text-center">
       <p class="text-[16px] font-[500] text-[#667085]">Join 4,000+ companies already growing</p>
     </div>
     <div class="flex justify-center gap-x-12 pt-8">
       <template v-for="(item ,i) in sponsorsCompanies">
         <div class="flex justify-center items-center gap-x-4">
           <img class="h-[35px]" :src="item.logo" alt="logo">
           <p class="text-[20px] font-[600]">{{ item.name }}</p>
         </div>
       </template>
     </div>
  </div>
</template>

<script setup>

const sponsorsCompanies = ref([
  {name: 'Layers', logo: '/sponsors/layers.svg'},
  {name: 'Sisyphus', logo: '/sponsors/sisyphus.svg'},
  {name: 'Circooles', logo: '/sponsors/circooles.svg'},
  {name: 'Catalog', logo: '/sponsors/catalog.svg'},
  {name: 'Quotient', logo: '/sponsors/quotient.svg'},
  {name: 'Flowmapp', logo: '/sponsors/flowmapp.svg'},
])

</script>

<style lang="scss" scoped>

</style>