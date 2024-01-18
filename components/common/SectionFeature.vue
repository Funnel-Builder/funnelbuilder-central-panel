<template>
  <div>
    <div class="text-center">
      <div class="flex justify-center pb-2">
        <img :src="imageIcon" alt="image"/>
      </div>
      <p class="pb-2 text-[20px] font-[500]">{{ title }}</p>
      <span class="text-[16px] font-[400] text-[#667085]">{{ subTitle }}</span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title:{ type: String, default: '' },
  subTitle:{ type: String, default: '' },
  imageIcon:{type: String, default: ''},
})
</script>

<style lang="scss" scoped>

</style>