<template>
  <div class="container mx-auto pt-20 px-16">
    <div class="bg-[#EFF1F7] rounded-2xl py-8">
      <div class="flex justify-center">
        <div>
          <img src="/contact/avatar.svg" alt="image"/>
        </div>
      </div>
      <div>
        <div class="text-center pt-4">
          <p class="text-[20px] font-[500]">Still have questions?</p>
          <span class="">Can’t find the answer you’re looking for? Please chat to our friendly team.</span>
        </div>
        <div class="text-center pt-8">
          <primary-button text="Get in touch" to="/contact-us" type="contact"/>
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