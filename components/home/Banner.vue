<template>
  <div class="">
    <div class="bannerBG container mx-auto pt-16 md:pt-4 lg:pt-8 xl:pt-10 2xl:pt-16">
      <!--     Section One -->
      <div class="flex flex-col items-center gap-y-6 lg:gap-y-4 xl:gap-y-7 pb-4 md:pb-16 ">
        <feature-button text="Your Perfect Workspace" image-icon="/banner/workIcon.svg" />
        <div class="px-8 md:px-[40px] lg:px-[100px]">
          <p class="textPrimary text-center font-[600] text-[24px] md:text-[36px] xl:text-[46px] 2xl:text-[52px]">All-In-One Collaboration and
            Productivity Platform</p>
        </div>
        <div class="flex justify-center items-center gap-x-4">
<!--          <primary-button text="Demo" to="/" type="icon" icon-class="pi pi-play" />-->
<!--          <primary-button text="Start Free trial" to="/" type="link" />-->
          <hover-button text="Demo" to="/" type="icon" icon-class="pi pi-play"  />
          <hover-button text="Start Free trial" to="/" type="link"/>

        </div>
        <div class="flex justify-center  flex-wrap md:w-[90%] lg:w-[80%] xl:w-[80%] 2xl:w-[60%] gap-x-2 md:gap-x-8 gap-y-4 pt-4 lg:pt-10 xl:pt-6">
          <div v-for="(item ,i) in bannerItem" :key="i">
            <feature-button :text="item.label" :image-icon="item.icon" />
          </div>
        </div>
      </div>
      <div class="hidden md:flex justify-center">
        <img class=" md:h-[350px] lg:h-[420px] xl:h-[500px] 2xl:h-[600px]" src="/banner/builder.svg"
             alt="Banner Image"/>
      </div>
    </div>
    <div class="block md:hidden" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
      <home-banner-image/>
    </div>
  </div>
</template>

<script setup>
import PrimaryButton from "~/components/buttons/PrimaryButton.vue";
import FeatureButton from "~/components/buttons/FeatureButton.vue";
import HoverButton from "~/components/buttons/HoverButton.vue";

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


@media only screen and (min-width: 768px) {
  .bannerBG {
    background-image: url('/banner/cover.svg') !important;
    background-repeat: no-repeat;
    background-size: cover;
    background-position-x: center;
  }
}

</style>