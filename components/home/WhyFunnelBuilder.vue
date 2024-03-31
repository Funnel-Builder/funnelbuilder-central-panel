<template>
  <div class="container mx-auto px-4 md:px-16 pt-12 md:pt-4 lg:pt-20">
    <div class="md:flex items-center gap-x-8">
      <div class="aos-container" data-aos="fade-right" data-aos-offset="300" data-aos-duration="1000" data-aos-easing="ease-in-sine">
        <p class="textAnimation pb-6 text-[18px] lg:text-[24px] xl:text-[32px] font-[600] textColor md:text-left text-center">Why BD Funnel Builder ?</p>
        <div class="flex items-center">
          <img loading="lazy" class="h-[36px] lg:h-[40px] xl:h-[50px] 2xl:h-[50px]" src="/whyFunnelBuilder/icon1.svg" alt="icon"/>
          <div class="text-left px-4">
            <p class="text-[14px] lg:text-[16px] xl:text-[18px] font-[500] textColor">Let’s face it</p>
            <p class="text-[12px] lg:text-[12px] xl:text-[14px] textSecondary">a website without paying customers is like building a store in the middle of the desert without a single road leading to it.</p>
          </div>
        </div>
        <div class="flex items-center pt-6">
          <img loading="lazy" class="h-[36px] lg:h-[40px] xl:h-[50px] 2xl:h-[50px]" src="/whyFunnelBuilder/icon2.svg" alt="icon"/>
          <div class="text-left px-4">
            <p class="text-[14px] lg:text-[16px] xl:text-[18px] font-[500] textColor">That’s Where A “Funnel” Comes In.</p>
            <p class="text-[12px] lg:text-[12px] xl:text-[14px] text-[#667085] textSecondary">A funnel is like a “digital road” that moves your dream customers to your website and into your online store with their credit cards in hand!</p>
          </div>
        </div>
      </div>
      <div class="aos-container flex justify-center py-8 md:py-0" data-aos="fade-left" data-aos-offset="300" data-aos-duration="1000" data-aos-easing="ease-in-sine">
        <img loading="lazy" class="md:h-[400px] lg:h-auto" src="/whyFunnelBuilder/Image.svg" alt="whyFunnelBuilder"/>
      </div>
    </div>
  </div>
</template>

<script setup>

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

@media only screen and (max-width: 768px) {
  .aos-container {
    opacity: 1 !important;
    transform: none !important;
  }
}

</style>