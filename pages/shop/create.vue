<template>
    <div class="container mx-auto px-2">
        <div class="flex justify-center items-center">
            <div class="w-full sm:w-[80%] md:w-[70%] lg:w-[70%] xl:w-[50%]">
                <div class="w-full flex flex-col items-center">
                    <div class="text-center pb-10">
                        <h2 class="text-[#5A78AD] text-[24px] md:text-[32px] font-bold">Create Shop</h2>
                        <p class="text-[12px] md:text-[14px]">Create your own shop. Enter shop credentials</p>
                    </div>
                    <div class="w-full flex">
                        <div class="w-full">
                            <div>
                                <div v-if="!step">
                                    <p class="pb-1"><small class="text-[#5A78AD]">Shop URL*</small></p>
                                    <div>
                                        <div class="flex items-center">
                                            <InputGroup :class="{ 'invalid': shopUrl.errorMessage.value }"
                                                style="background-color: #EFF1F7;" class="rounded-md ">
                                                <InputText v-model="shopUrl.value.value" style="background-color: #EFF1F7;"
                                                    class="border-0 w-full h-10 md:h-12 text-xs md:text-lg flex items-center focus:shadow-none"
                                                    id="shopUrl" type="text" />
                                                <InputGroupAddon style="background-color: #EFF1F7; color: gray;"
                                                    class="w-full md:w-[50%] h-10 md:h-12 text-xs md:text-lg flex items-center focus:shadow-none">
                                                    .funnelbuilder.com
                                                </InputGroupAddon>
                                            </InputGroup>
                                            <div>
                                                <i :class="checkShopNameValidity"></i>
                                            </div>
                                        </div>
                                        <form-input-error :message="shopUrl.errorMessage.value" />
                                    </div>
                                    <div class="pt-3">
                                        <p class="pb-1"><small class="text-[#5A78AD]">Shop Name*</small></p>
                                        <InputText v-model="shopName.value.value"
                                            placeholder="Enter shop name minimum 5 character"
                                            style="background-color: #EFF1F7 !important;" type="text"
                                            :class="{ 'invalid': shopName.errorMessage.value }" id="shopName"
                                            class="w-full h-10 md:h-12 text-xs md:text-lg flex items-center focus:shadow-none" />
                                    </div>
                                    <form-input-error :message="shopName.errorMessage.value" />
                                    <p class="pt-3 pb-10"><small>By clicking below, you agree to the <a class="underline"
                                                href="#">BDFunnelBuilder</a> Terms of Service and <a class="underline"
                                                href="#">Privacy Policy</a>.</small></p>

                                    <div class="w-full">
                                        <button @click="nextStep" :disabled="isDisabled"
                                            :class="{ 'bg-gray-400': isDisabled, 'bg-[#5A78AD]': !isDisabled }"
                                            class="bg-[#5A78AD] rounded-lg w-full h-10 md:h-12 text-xs md:text-lg focus:shadow-none text-white font-semibold">Continue</button>
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
  
<script setup>
import { useField, useForm } from 'vee-validate';

definePageMeta({
    layout: 'shop'
})

const step = ref(false)

const shop_status = ref('');
const text = 'my_shop';

//validation schema
const { handleSubmit, isSubmitting, handleReset, setErrors } = useForm({
    validationSchema: {
        shopUrl(value) {
            if (!value) return 'Shop URL is required'
            else if (value.length < 4 || value.length > 100) return 'Shop Url must be between 4 and 100 characters'
            return true;
        },
        shopName(value) {
            if (!value) return 'Shop Name is required'
            else if (value.length < 4 || value.length > 100) return 'Shop Name url must be between 4 and 40 characters'
            return true;
        }
    }
});

const isDisabled = computed(() => {
    return !(
        shopUrl.value?.value?.length >= 4 &&
        shopUrl.value?.value?.length <= 100 &&
        shopName.value?.value?.length >= 4 &&
        shopName.value?.value?.length <= 40
    );
});


const shopUrl = useField('shopUrl');
const shopName = useField('shopName');

watch(() => shopUrl.value.value, (nv) => {
    shop_status.value = 'written'
    setTimeout(async () => {
        if (nv.length > 3) {
            const { data, pending, error, refresh } = await postData('validate-shop-domain', { sub_domain: nv });
            console.log(data.value.message);
        }
    }, 1000);
}
)


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

