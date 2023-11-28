<template>
    <div>
        <div>
            <div class="set_anim pb-8">
                <div>
                    <FileUploadFileUploader />
                    <div class="pt-4">
                        <div>
                            <p class="text-[rgb(90,120,173)]"><small>Description</small></p>
                            <Textarea id="description" v-model="description.value.value"
                                :class="{ 'invalid': description.errorMessage.value }" placeholder="write here ..."
                                style="background-color: #EFF1F7 !important;"
                                class="mb-3 w-full h-20 md:h-20 text-xs md:text-lg flex items-center focus:shadow-none"
                                rows="5" cols="6" />
                        </div>
                        <form-input-error :message="description.errorMessage.value" />
                        <div>
                            <p class="text-[rgb(90,120,173)]"><small>Phone number</small></p>
                            <InputText id="phone_number" v-model="phone_number.value.value"
                                :class="{ 'invalid': phone_number.errorMessage.value }" placeholder="Enter your number"
                                style="background-color: #EFF1F7 !important;" type="text"
                                class="mb-3 w-full h-10 md:h-12 text-xs md:text-lg flex items-center focus:shadow-none" />
                        </div>
                        <form-input-error :message="phone_number.errorMessage.value" />
                        <div>
                            <p class="text-[#5A78AD]"><small>Shop email</small></p>
                            <InputText id="phone_number" v-model="shop_mail.value.value"
                                :class="{ 'invalid': phone_number.errorMessage.value }"
                                placeholder="Enter a email to manage your shop"
                                style="background-color: #EFF1F7 !important;" type="text"
                                class="mb-3 w-full h-10 md:h-12 text-xs md:text-lg flex items-center focus:shadow-none" />
                        </div>
                        <form-input-error :message="shop_mail.errorMessage.value" />
                        <div>
                            <p class="text-[#5A78AD]"><small>Shop address</small></p>
                            <InputText id="shop_address" v-model="shop_address.value.value"
                                :class="{ 'invalid': shop_address.errorMessage.value }" placeholder="Enter shop address"
                                style="background-color: #EFF1F7 !important;" type="text"
                                class="mb-3 w-full h-10 md:h-12 text-xs md:text-lg flex items-center focus:shadow-none" />
                        </div>
                        <form-input-error :message="shop_address.errorMessage.value" />
                    </div>
                </div>
                <div class="w-full pt-4">
                    <button @click="createShop" :disabled="isDisabled"
                        :class="{ 'bg-gray-400': isDisabled, 'bg-[#5A78AD]': !isDisabled }"
                        class="bg-[#5A78AD] rounded-lg w-full h-10 md:h-12 text-xs md:text-lg focus:shadow-none text-white font-semibold">Create</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { useField, useForm } from 'vee-validate';
const props = defineProps({
    shopDetails: {
        type: Object,
        default: {}
    }
});

//validation schema
const { handleSubmit, isSubmitting, handleReset, setErrors } = useForm({
    validationSchema: {
        description(value) {
            if (value?.length > 250) return 'Description must less then 250 characters'
            return true;
        },
        phone_number(value) {
            if (!value) return 'Phone number Name is required'
            else if (!/^(?:\+88|01)?(?:\d{11}|\d{13})$/.test(value)) return "Invalid phone number";
            return true;
        },
        shop_mail(value) {
            if (!value) return 'Shop Email is required'
            else if (!/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(value)) return "Invalid email"
            return true;
        },
        shop_address(value) {
            if (!value) return 'Shop Address is required'
            else if (value.length > 100) return 'Shop Address must less then 40 characters'
            return true;
        }
    }
});

const isDisabled = computed(() => {
    return !(
        description.value?.value?.length <= 250 &&
        phone_number.value?.value &&
        shop_mail.value?.value &&
        shop_address.value?.value?.length <= 40 &&
        !(!/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(shop_mail.value?.value))
    );
});


const description = useField('description');
const phone_number = useField('phone_number');
const shop_mail = useField('shop_mail');
const shop_address = useField('shop_address');



const createShop = handleSubmit(async (values) => {
    values.shop_url = props.shopDetails.shopUrl
    values.shop_name = props.shopDetails.shopName
    console.log(values);
})

</script>
<style scoped>
.set_anim {
    opacity: 0.1;
    animation: fadeIn .61s ease forwards;
}

@keyframes fadeIn {
    from {
        opacity: 0.1;
    }

    to {
        opacity: 1;
    }
}
</style>