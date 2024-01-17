<template>
  <div class="container mx-auto">
    <div class="text-center">
      <p class="text-[34px] font-[600] pb-2">How To Set Up Your Online Shop</p>
      <span class="text-[16px] text-[#667085] font-[400]">You must be thinking of setting up the store nicely. If your answer is yes then follow these five steps.</span>
    </div>
    <div class="flex justify-center gap-x-6 pt-12">
      <template v-for="(item ,i) in items" :key="i">
        <img v-if="i !== 0" src="/business/arrow.svg" alt="icon">
        <div class="flex border border-[#B9B9B9] rounded-md justify-center items-center gap-x-4 p-4">
          <div class="flex flex-col justify-center gap-y-3 items-center">
            <img class="h-[50px]" :src="item.logo" alt="logo">
            <p class="text-[16px] font-[500] text-center">{{ item.name }}</p>
          </div>
        </div>
      </template>
    </div>
    <div class="text-center pt-12">
      <nuxt-link to="/pricing" class="buttonHover hover:ring-1 hover:ring-[#5A78AD] bg-[#5A78AD] text-white px-4 py-1.5 rounded-full font-[600]">Join with Us</nuxt-link>
    </div>
  </div>
</template>

<script setup>
const items = ref([
  {name: 'Create Shop', logo: '/business/shop.svg'},
  {name: 'Use Template', logo: '/business/template.svg'},
  {name: 'Upload Product', logo: '/business/product.svg'},
  {name: 'Ready To Start', logo: '/business/start.svg'},
  {name: 'Order Management', logo: '/business/order.svg'},
  {name: 'Delivery Service', logo: '/business/truck.svg'},
])

</script>

<style lang="scss" scoped>
.buttonHover:hover{
  background: white;
  color: #5A78AD;
  transition: 0.6s;
}
</style>