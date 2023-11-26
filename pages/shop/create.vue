<template>
    <div class="container mx-auto">
        <div class="flex justify-center items-center">
            <div class="w-full lg:w-[60%]">
                <div class="w-full flex flex-col items-center">
                    <div class="text-center pb-10">
                        <h2 class="text-[#5A78AD] text-[24px] md:text-[32px] font-bold">Create Shop</h2>
                        <p class="text-[12px] md:text-[14px]">Create your own shop. Enter shop credentials</p>
                    </div>
                    <div class="w-full flex">
                        <div class="w-full">
                            <div>
                                <div v-if="!step">
                                    <p class="pb-1"><small class="text-[#5A78AD]">Shop Url</small></p>
                                    <div>
                                        <div class="flex items-center">
                                            <InputGroup style="background-color: #EFF1F7;" class="rounded-md ">
                                                <InputText v-model="shopName" style="background-color: #EFF1F7;"
                                                    class="border-0 w-full h-10 md:h-12 text-xs md:text-lg flex items-center focus:shadow-none"
                                                    id="phone" type="text" />
                                                <InputGroupAddon style="background-color: #EFF1F7; color: gray;"
                                                    class="w-full md:w-[50%] h-10 md:h-12 text-xs md:text-lg flex items-center focus:shadow-none">
                                                    @funnelbuilder.com
                                                </InputGroupAddon>
                                            </InputGroup>
                                            <div>
                                                <i :class="checkShopNameValidity"></i>
                                            </div>
                                        </div>
                                        <small v-if="shop_status == 'failed'" class="text-red-500">this shop name already
                                            exist</small>
                                    </div>
                                    <div class="pt-3">
                                        <p class="pb-1"><small class="text-[#5A78AD]">Shop Name</small></p>
                                        <InputText placeholder="Enter shop name"
                                            style="background-color: #EFF1F7 !important;" type="text"
                                            class="w-full h-10 md:h-12 text-xs md:text-lg flex items-center focus:shadow-none" />
                                    </div>
                                    <p class="pt-3 pb-10"><small>By clicking below, you agree to the <a class="underline"
                                                href="#">BDFunnelBuilder</a> Terms of Service and <a class="underline"
                                                href="#">Privacy Policy</a>.</small></p>

                                    <div class="w-full">
                                        <Button @click="nextStep"
                                            style="background-color: #5A78AD; border: none; border-radius: 15px;"
                                            class="w-full h-10 md:h-12 text-xs md:text-lg focus:shadow-none"
                                            label="Continue" />
                                    </div>
                                </div>
                                <div v-else>
                                    <shop-next-step />
                                </div>
                            </div>
                            <div class="flex justify-center gap-2 mt-12">
                                <div :class="step ? 'bg-gray-400' : 'bg-[#5A78AD]'" class="w-3 h-3 rounded-full"></div>
                                <div :class="step ? 'bg-[#5A78AD]' : 'bg-gray-400'" class="w-3 h-3 rounded-full"></div>
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
const shopName = ref('')
const step = ref(false)

const shop_status = ref('');
const text = 'my_shop';


watch(shopName, (nv) => {
    shop_status.value = 'written'
    setTimeout(() => {
        if (nv.length > 3) {
            if (nv == text) {
                shop_status.value = 'success'
            } else {
                shop_status.value = 'failed'
            }
        }
    }, 1000);

})

const checkShopNameValidity = computed(() => {
    if (shop_status.value) {
        if (shop_status.value == 'written') return 'pi pi-spin pi-spinner loading ml-2'
        else if (shop_status.value == 'success') return 'pi pi-verified success ml-2'
        else if (shop_status.value == 'failed') return 'pi pi-ban failed ml-2'
    }

})


const nextStep = () => {
    step.value = true
}
</script>

<style lang="scss" scoped>
@mixin iconColor($color) {
    color: $color;
    font-size: 1.5rem;
    background: none !important;

    @media only screen and (max-width: 768px) {
        font-size: 1rem;
    }
}


.loading {
    @include iconColor(black)
}

.success {
    @include iconColor(green)
}

.failed {
    @include iconColor(red)
}
</style>

