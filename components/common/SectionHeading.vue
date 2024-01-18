<template>
  <div>
    <p class="text-[24px] font-[600] text-[#5A78AD]">{{ tag }}</p>
    <p class="text-[34px] font-[600] px-20 pb-4">{{ title }}</p>
    <span class="text-[16px] text-[#667085] font-[400]">{{ subTitle }}</span>
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