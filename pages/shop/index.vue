<template>
  <div class="container mx-auto">
    <div class="flex justify-center items-center">
      <div class="w-full md:w-[50%]">
        <div class="w-full flex flex-col items-center">
          <div class="text-center pb-10">
            <h2 class="text-[#5A78AD] text-[24px] md:text-[32px] font-bold">Welcome!</h2>
            <p class="text-[12px] md:text-[14px]">Choose your existing shop or create one.</p>
          </div>
          <div class="flex flex-col items-center w-full ">
            <div class="w-full ">
              <p class="pb-1"><small class="text-[#5A78AD]">Choose your shop</small></p>
              <Dropdown v-model="selectedCity" :options="shop" optionLabel="name" placeholder="Select your shop"
                class="w-full custom_class h-10 md:h-12 text-xs md:text-lg flex items-center" />
            </div>
            <div class="w-full pt-5">
              <buttons-primary-button text="Next" />
              <h4 class="text-center py-3 text-[#5A78AD]">Or</h4>
              <div>
                <nuxt-link to="/shop/create" class="font-bold w-full text-white bg-[#5A78AD] flex justify-center items-center rounded-2xl h-10 md:h-12 text-xs md:text-lg" >Create One</nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

definePageMeta({
  layout: 'shop'
})
const selectedCity = ref();
const shop = ref([
  { name: 'xyz shop', code: 'xyz' },
  { name: 'xyz2 shop', code: 'xyz' },
]);
</script>

<style>
.custom_class {
  padding: 2px !important;
  width: 100% !important;
  border: none !important;
  background-color: #EFF1F7 !important;
}
</style>