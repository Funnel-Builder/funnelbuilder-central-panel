<template>
  <div class="container mx-auto px-2">
    <div class="flex justify-center items-center">
      <div class="w-full sm:w-[80%] md:w-[70%] lg:w-[70%] xl:w-[50%]">
        <div class="w-full flex flex-col items-center">
          <div class="text-center pb-10">
            <h2 class="text-[#5A78AD] text-[24px] md:text-[32px] font-bold">Welcome!</h2>
            <p class="text-[12px] md:text-[14px]">Choose your existing shop or create one.</p>
          </div>
          <div class="flex flex-col items-center w-full ">
            <div class="w-full ">
              <p class="pb-1"><small class="text-[#5A78AD]">Choose your shop*</small></p>
              <Dropdown v-model="selectedShop" :options="shop" optionLabel="name" placeholder="Select your shop"
                class="w-full custom-class" />
            </div>
            <div class="w-full pt-8">
              <button @click="goToShop" :disabled="isDisabled"
                :class="{ 'bg-gray-400': isDisabled, 'bg-[#5A78AD]': !isDisabled }"
                class="font-bold w-full text-white flex justify-center items-center rounded-2xl h-10 md:h-12 text-xs md:text-lg">Next</button>
              <h4 class="text-center py-3 text-[#5A78AD]">Or</h4>
              <div>
                <nuxt-link to="/shop/create"
                  class="font-bold w-full text-white bg-[#5A78AD] flex justify-center items-center rounded-2xl h-10 md:h-12 text-xs md:text-lg">Create
                  One</nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'shop',
  middleware: ['auth', 'should-be-verified']
})

const selectedShop = ref();
const loading = ref(false)
const isDisabled = computed(() => !selectedShop.value);

const shop = ref([]);

onMounted(async () => {
  setTimeout(async () => {
    await getShop()
  }, 500);
})

const getShop = async () => {
  loading.value = true
  const { data, error } = await getData('user-shop-list')
  if (error && error.value) {
    console.log(error);
  }
  else {
    shop.value = data.value.data
  }
  loading.value = false
}

const goToShop = () => {
  console.log(selectedShop.value);
}
</script>

<style>
.custom-class {
  padding: 2px !important;
  width: 100% !important;
  border: none !important;
  background-color: #EFF1F7 !important;
}
</style>
