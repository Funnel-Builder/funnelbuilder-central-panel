<template>
  <div>
    <div class="flex items-center gap-x-2 border border-[#5A78AD] rounded-full px-3 md:px-5 py-1.5" >
      <img class="h-[18px] xl:h-auto" :src="imageIcon" alt="icon">
      <p class="text-[#5A78AD] text-[12px] md:text-[14px] xl:text-[16px] font-[600] md:font-[400]">{{ text }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  text:{ type: String, default: 'Primary Button' },
  imageIcon:{type: String, default: '/banner/workIcon.svg'},
})
</script>

<style lang="scss" scoped>

</style>