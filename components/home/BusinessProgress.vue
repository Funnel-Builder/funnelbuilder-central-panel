<template>
  <div class="container mx-auto">
    <div class="text-center">
      <section-heading title="How To Set Up Your Online Shop" sub-title="You must be thinking of setting up the store nicely. If your answer is yes then follow these five steps." />
    </div>
    <div class="grid grid-cols-2 gap-4 md:flex justify-center lg:gap-x-1 xl:gap-x-2 2xl:gap-x-6 pt-12 px-8 lg:px-0">
      <template v-for="(item ,i) in items" :key="i">
        <div class="hidden md:flex justify-center items-center">
          <img class="h-[12px] lg:h-[16px] xl:h-auto" v-if="i !== 0" src="/business/arrow.svg" alt="icon">
        </div>
        <div class="flex border border-[#B9B9B9] rounded-md justify-center items-center gap-x-4 p-3 lg:p-4">
          <div class="flex flex-col justify-center gap-y-1 lg:gap-y-3 items-center">
            <img class="h-[28px] lg:h-[32px]  xl:h-[40px] 2xl:h-[50px]" :src="item.logo" alt="logo">
            <p class="text-[12px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] font-[500] text-center">{{ item.name }}</p>
          </div>
        </div>
      </template>
    </div>
    <div class="text-center pt-12">
      <primary-button text="Join with Us" to="/pricing" type="link" />
    </div>
  </div>
</template>

<script setup>
import SectionHeading from "~/components/common/SectionHeading.vue";
import PrimaryButton from "~/components/buttons/PrimaryButton.vue";

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