<template>
  <div class="px-4 md:px-0">
    <div class="pt-8 md:pt-16 md:flex  items-center md:gap-x-12">
      <div :class="orderClassOne" v-for="(item ,i) in items" :key="i">
        <div class="flex items-center gap-x-2 pb-4">
          <div>
            <img loading="lazy" class="h-[30px] lg:h-[40px] xl:h-auto" :src="item.icon" alt="icon">
          </div>
          <p class="text-[20px] lg:text-[20px] xl:text-[24px] font-[600]  textColor">{{ item.title }}</p>
        </div>
        <p class="text-[14px] lg:text-[14px] xl:text-[16px] font-[400] textSecondary pb-4">{{ item.subtitle }}</p>
        <div class="flex items-center pt-1" v-for="(context,i) in item.context" :key="i">
          <img loading="lazy" class="h-[18px]" src="/features/check.svg" alt="icon">
          <p class="pl-2 text-[14px] lg:text-[14px] xl:text-[16px] font-[400] textSecondary">{{ context.name }}</p>
        </div>
      </div>
      <div class="hidden md:block aos-container" :class="orderClassTwo" data-aos="flip-right" data-aos-duration="1500">
        <img loading="lazy" class="" :src="image" alt="icon">
      </div>
      <div class="md:hidden flex justify-center pt-6" :class="orderClassTwo">
        <img loading="lazy" class="" :src="phoneImage" alt="icon">
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
@media only screen and (max-width: 768px) {
  .aos-container {
    opacity: 1 !important;
    transform: none !important;
  }
}
</style>