<template>
  <div>
    <p class="text-[20px] lg:text-[20px] xl:text-[24px] font-[600] textPrimary">{{ tag }}</p>
    <p class="textAnimation text-[20px] md:text-[26px] lg:text-[28px] xl:text-[34px] font-[600] md:px-20 pb-2 lg:pb-3 xl:pb-4 textColor">{{ title }}</p>
    <span class="text-[12px] lg:text-[14px] xl:text-[16px] text-[#667085] font-[400] textSecondary">{{ subTitle }}</span>
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


.textAnimation{
  animation: flow 30s ease-in-out infinite;
  background: linear-gradient(-60deg, #5A78AD,#DC6803,#121FCF,#CF1512, #5A78AD,#DC6803,#121FCF);
  background-size: 300%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

@keyframes flow {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}


</style>