<template>
  <div class="bannerBg">
    <div class="container mx-auto py-12">
      <!--     Section One -->
      <div class="flex flex-col items-center gap-y-8">
        <div class="flex items-center gap-x-2 border rounded-full px-6 py-2">
          <img src="/banner/workIcon.svg" alt="icon">
          <p class="text-[#ffffff] text-[16px] font-[400]">Your Perfect Workspace</p>
        </div>
        <div class="px-8 md:px-[40px] lg:px-[100px]">
          <p class="text-white text-center font-[600] text-[26px] md:text-[40px] lg:text-[64px]">All-In-One Collaboration and
            Productivity Platform</p>
        </div>
        <div class="flex justify-center items-center gap-x-4">
          <button class="bg-white px-6 py-2 rounded-full font-[600]"><i class="pi pi-caret-right" style="font-size: 15px;"></i>Demo</button>
          <button class="bg-white px-6 py-2 rounded-full font-[600]">Start Free Trial</button>
        </div>
        <div class="flex justify-center flex-wrap xl:w-[60%] gap-x-8 gap-y-4 lg:pt-12 xl:pt-20">
          <div v-for="(item ,i) in bannerItem" :key="i">
            <div class="flex items-center gap-x-2 border rounded-full px-6 py-2">
              <img :src="item.icon" alt="icon">
              <p class="text-[#ffffff] text-[16px] font-[400]">{{ item.label }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const bannerItem = ref([
  {label: 'Site Builder', icon: '/landing/siteIcon.svg'},
  {label: 'SMS Marketing', icon: '/landing/smsIcon.svg'},
  {label: 'Components', icon: '/landing/componentsIcon.svg'},
  {label: 'Custom Domain', icon: '/landing/domainIcon.svg'},
  {label: 'Unlimited Theme', icon: '/landing/themeIcon.svg'},
  {label: 'Order Management', icon: '/landing/orderIcon.svg'},
  {label: 'Courier Automation', icon: '/landing/courierIcon.svg'},
]);
</script>

<style scoped lang="scss">
.bannerBg {
  background-image: url('/banner/bannerBg.svg') !important;
  background-color: #5A78AD !important;
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: center;
}
</style>