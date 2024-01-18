<template>
  <div class="">
    <div class="container mx-auto pt-16">
      <!--     Section One -->
      <div class="flex flex-col items-center gap-y-7 pb-20 ">
        <feature-button text="Your Perfect Workspace" image-icon="/banner/workIcon.svg" />
        <div class="px-8 md:px-[40px] lg:px-[100px]">
          <p class="text-[#5A78AD] text-center font-[600] text-[26px] md:text-[40px] lg:text-[52px]">All-In-One Collaboration and
            Productivity Platform</p>
        </div>
        <div class="flex justify-center items-center gap-x-4">
          <primary-button text="Demo" to="/" type="icon" icon-class="pi pi-play" />
          <primary-button text="Start Free trial" to="/" type="link" />
        </div>
        <div class="flex justify-center flex-wrap xl:w-[60%] gap-x-8 gap-y-4 lg:pt-12 xl:pt-6">
          <div v-for="(item ,i) in bannerItem" :key="i">
            <feature-button :text="item.label" :image-icon="item.icon" />
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
import PrimaryButton from "~/components/buttons/PrimaryButton.vue";
import FeatureButton from "~/components/buttons/FeatureButton.vue";

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

<style scoped>
</style>