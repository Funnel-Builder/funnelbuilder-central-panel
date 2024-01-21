<template>
  <div>
    <p class="text-[20px] lg:text-[20px] xl:text-[24px] font-[600] text-[#5A78AD]">{{ tag }}</p>
    <p class="text-[20px] md:text-[26px] lg:text-[28px] xl:text-[34px] font-[600] md:px-20 pb-2 lg:pb-3 xl:pb-4">{{ title }}</p>
    <span class="text-[12px] lg:text-[14px] xl:text-[16px] text-[#667085] font-[400]">{{ subTitle }}</span>
  </div>
</template>

<script setup>
const props = defineProps({
  tag:{ type: String, default: '' },
  title:{ type: String, default: '' },
  subTitle:{ type: String, default: '' }
})
</script>

<style lang="scss" scoped>

</style>