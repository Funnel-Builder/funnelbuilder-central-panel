<template>
  <div>
    <div class="flex items-center gap-x-2 border border-[#5A78AD] rounded-full px-5 py-1.5" >
      <img :src="imageIcon" alt="icon">
      <p class="text-[#5A78AD] text-[16px] font-[400]">{{ text }}</p>
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