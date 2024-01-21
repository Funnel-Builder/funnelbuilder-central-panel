<template>
  <div class="px-4 md:px-0">
    <div class="pt-8 md:pt-16 md:flex  items-center md:gap-x-12">
      <div :class="orderClassOne" v-for="(item ,i) in items" :key="i">
        <img class="h-[36px] lg:h-[40px] xl:h-auto" :src="item.icon" alt="icon">
        <p class="text-[18px] lg:text-[20px] xl:text-[24px] font-[600] pt-1">{{ item.title }}</p>
        <p class="text-[14px] lg:text-[14px] xl:text-[16px] font-[400] text-[#667085] pb-4">{{ item.subtitle }}</p>
        <div class="flex items-center pt-1" v-for="(context,i) in item.context" :key="i">
          <img class="h-[18px]" src="/features/check.svg" alt="icon">
          <p class="pl-2 text-[14px] lg:text-[14px] xl:text-[16px] font-[400] text-[#667085]">{{ context.name }}</p>
        </div>
      </div>
      <div class="hidden md:block" :class="orderClassTwo">
        <img class="" :src="image" alt="icon">
      </div>
      <div class="md:hidden flex justify-center pt-6" :class="orderClassTwo">
        <img class="" :src="phoneImage" alt="icon">
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  items: { type:Array, default: [] },
  image:{type: String, default: ''},
  phoneImage:{type: String, default: ''},
  orderClassOne: { type: String, default: '' },
  orderClassTwo: { type: String, default: '' }
})
</script>

<style lang="scss" scoped>

</style>