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
              <Dropdown @keyup.enter="goToShop" v-model="selectedShop" :options="shop" optionLabel="name" placeholder="Select your shop"
                class="w-full custom-class" />
            </div>
            <div class="w-full pt-8">
              <buttons-action-button @submitData="goToShop" :disabled="isDisabled" :loading="loading" text="Continue"
                activeClass="bg-[#5A78AD] text-white" />
              <h4 class="text-center py-3 text-[#5A78AD]">Or</h4>
              <div>
                <buttons-action-button classes="font-bold w-full text-white bg-[#5A78AD]"
                  type="link" :disabled="isDisabled" :loading="loading" text="Create One" to="/shop/create"
                  activeClass="bg-[#5A78AD] text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import {useCookie} from "#app";
import {goToShopPanel} from "~/composables/helper.js";

definePageMeta({
  layout: 'shop',
  // middleware: ['auth', 'should-be-verified']
})

// addRouteMiddleware('test',()=>{
  const authStore = useAuthStore()
  if (!authStore.isLoggedIn) {
    console.log('not found',authStore.token,process.client)
    // return navigateTo('/login')
  } else {
    console.log('found',authStore.token,process.client)
  }
  console.log(useCookie('token').value)
onMounted(()=>{
  console.log('mounted')
  console.log(useCookie('token').value)
  console.log(authStore.token)
})
// })

const router = useRouter();

const selectedShop = ref();
const loading = ref(false)
const isDisabled = computed(() => !selectedShop.value);

const shop = ref([]);

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

await getShop()

const goToShop = async () => {
  const { data, pending, error, refresh } = await getData('get-secret?shop_id=' + selectedShop.value.id)
  if (error && error.value) {
    console.log(error);
  }
  else {
    goToShopPanel(selectedShop.value.id, data.value?.sub_domain, data.value.data)
  }
}
</script>

<style>
.custom-class {
  padding: 2px !important;
  width: 100% !important;
  border: none !important;
  background-color: #EFF1F7 !important;
}</style>
