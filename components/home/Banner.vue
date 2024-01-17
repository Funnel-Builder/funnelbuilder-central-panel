<template>
  <div class="">
    <div class="container mx-auto pt-16">
      <!--     Section One -->
      <div class="flex flex-col items-center gap-y-7 pb-20 ">
        <div class="flex items-center gap-x-2 border border-[#5A78AD] rounded-full px-3 py-1.5">
          <img src="/banner/workIcon.svg" alt="icon">
          <p class="text-[#5A78AD] text-[16px] font-[400]">Your Perfect Workspace</p>
        </div>
        <div class="px-8 md:px-[40px] lg:px-[100px]">
          <p class="text-[#5A78AD] text-center font-[600] text-[26px] md:text-[40px] lg:text-[52px]">All-In-One Collaboration and
            Productivity Platform</p>
        </div>
        <div class="flex justify-center items-center gap-x-4">
          <div class="buttonHover hover:ring-1 hover:ring-[#5A78AD] text-white flex items-center bg-[#5A78AD] gap-x-1 rounded-full px-4 py-1.5 hover:cursor-pointer">
<!--            <img class="h-[16px]" src="/banner/demoIcon.svg" alt="icon">-->
            <i class="pi pi-play" style="font-size: 1rem"></i>
            <p class="font-[600] text-[16px]">Demo</p>
          </div>
          <button class="buttonHover hover:ring-1 hover:ring-[#5A78AD] bg-[#5A78AD] text-white px-4 py-1.5 rounded-full font-[600]">Start Free Trial</button>
        </div>
        <div class="flex justify-center flex-wrap xl:w-[60%] gap-x-8 gap-y-4 lg:pt-12 xl:pt-6">
          <div v-for="(item ,i) in bannerItem" :key="i">
            <div class="flex items-center gap-x-2 border border-[#5A78AD] rounded-full px-5 py-1.5">
              <img :src="item.icon" alt="icon">
              <p class="text-[#5A78AD] text-[16px] font-[400]">{{ item.label }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="">
      <home-banner-image/>
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
  //background-image: url('/banner/bannerBg.svg') !important;
  background-color: white !important;
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: center;
}

.buttonHover:hover{
  background: white;
  color: #5A78AD;
  transition: 0.6s;
}

</style>