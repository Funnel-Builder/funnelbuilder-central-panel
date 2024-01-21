<template>
  <div class="bg-[#5A78AD] mt-20">
    <div class="container mx-auto py-8 md:py-12">
      <div class="flex md:flex-row flex-col justify-center gap-y-4 md:justify-evenly items-center">
        <div class="text-center">
          <p class="text-[24px] xl:text-[32px] text-white font-[600] pb-2">Start your free trial</p>
          <p class="text-[14px] xl:text-[18px] text-[#E9D7FE] font-[400]">Join over 4,000+ startups already growing with BD Funnel Builder.</p>
        </div>
        <div class="flex items-center gap-x-4">
          <primary-button text="Learn more" to="/contact-us" type="trail"/>
          <primary-button text="Get started" to="/contact-us" type="trail"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import PrimaryButton from "~/components/buttons/PrimaryButton.vue";
</script>

<style lang="scss" scoped>

</style>