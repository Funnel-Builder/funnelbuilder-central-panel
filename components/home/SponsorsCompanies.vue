<template>
  <div class="container mx-auto pt-12 md:pt-24 lg:pt-20  xl:pt-32 2xl:pt-[150px]">
     <div class="text-center">
       <p class="text-[16px] font-[500] textSecondary">Join 4,000+ companies already growing</p>
     </div>
     <div class="grid grid-cols-2 gap-y-6 md:flex justify-center lg:gap-x-8 xl:gap-x-12 pt-8">
       <template v-for="(item ,i) in sponsorsCompanies">
         <div class="flex justify-center items-center px-2 lg:px-0 gap-x-1 lg:gap-x-4">
           <img class="h-[24px] lg:h-[28px] xl:h-[35px]" :src="item.logo" alt="logo">
           <p class="text-[16px] lg:text-[18px] xl:text-[20px] font-[600] textColor">{{ item.name }}</p>
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