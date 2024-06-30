<template>
  <div>
    <div>
      <div class="set_anim pb-8">
        <form @submit.prevent="createShop">
          <div>
            <p class="text-gray-700 text-center my-2 text-sm"><strong>Logo (max size 200kb)</strong> </p>
            <FileUploadFileUploader @photoUploaded="photoUploaded($event)"/>
            <div>
              <div>
                <p class="text-[rgb(90,120,173)]"><small>Phone number</small></p>
                <InputText name="phone" id="phone" v-model="phone.value.value"
                           :class="{ 'invalid': phone.errorMessage.value }" placeholder="Enter your number"
                           style="background-color: #EFF1F7 !important;" type="text"
                           class="mb-3 w-full h-10 md:h-12 text-xs md:text-lg flex items-center focus:shadow-none"/>
              </div>
              <form-input-error :message="phone.errorMessage.value"/>
              <div>
                <p class="text-[#5A78AD]"><small>Shop email</small></p>
                <InputText name="email" id="email" v-model="email.value.value"
                           :class="{ 'invalid': email.errorMessage.value }"
                           placeholder="Enter a email to manage your shop"
                           style="background-color: #EFF1F7 !important;" type="text"
                           class="mb-3 w-full h-10 md:h-12 text-xs md:text-lg flex items-center focus:shadow-none"/>
              </div>
              <form-input-error :message="email.errorMessage.value"/>
              <div>
                <p class="text-[#5A78AD]"><small>Shop address</small></p>
                <InputText name="address" id="address" v-model="address.value.value"
                           :class="{ 'invalid': address.errorMessage.value }" placeholder="Enter shop address"
                           style="background-color: #EFF1F7 !important;" type="text"
                           class="mb-3 w-full h-10 md:h-12 text-xs md:text-lg flex items-center focus:shadow-none"/>
              </div>
              <form-input-error :message="address.errorMessage.value"/>
            </div>
          </div>
          <div>
            <form-input-error :message="domain_error"/>
          </div>
          <div class="w-full pt-4">
            <button @click="createShop" :disabled="isButtonDisabled"
                    :class="{ 'bg-gray-400': isButtonDisabled, 'bg-[#5A78AD]': !isButtonDisabled }"
                    class="bg-[#5A78AD] rounded-lg w-full h-10 md:h-12 text-xs md:text-lg focus:shadow-none text-white font-semibold">
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script setup>
import {useField, useForm} from 'vee-validate';
import {goToShopPanel} from "~/composables/helper.js";


const props = defineProps({
  shopDetails: {
    type: Object,
    default: {}
  }
});

const authStore = useAuthStore();

const domain_error = ref('');
const loading = ref(false);
const awsSignUrl = ref('')


//validation schema
const {handleSubmit, isSubmitting, handleReset, setErrors} = useForm({
  validationSchema: {

    phone(value) {
      if (!value) return 'Phone number is required';
      else if (! /^(?:\+88|88)?01[3-9]\d{8}$|^(?:\+88|88)?01[3-9]\d{1}[-\s]?\d{3}[-\s]?\d{4}$|^(?:\+88|88)?01[3-9]\d{1}\s?\d{3}\s?\d{4}$|^(?:\+88|88)?01[3-9]\d{1}[-\s]?\d{3}[-\s]?\d{4}$|^(?:\+88|88)?01[3-9]\d{1}\s?\d{3}\s?\d{4}$|^(?:\(\+88\))?01[3-9]\d{1}[-\s]?\d{3}[-\s]?\d{4}$|^(?:\(\+88\))?01[3-9]\d{1}\s?\d{3}\s?\d{4}$|^(?:\+88|88)?1[3-9]\d{8}$|^(?:\(\+88\))?1[3-9]\d{8}$/.test(value?.replace(/[\s()-]/g, ''))) return "Invalid phone number";
      // else if (!/(^(\+88|0088|88)?(01){1}[3456789]{1}(\d){8})$/.test(value)) return "Invalid phone number";
      return true;
    },
    email(value) {
      if (!value) return 'Email is required'
      else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i.test(value)) return 'Invalid email';
      return true;
    },
    address(value) {
      if (!value) return 'Address is required'
      else if (value.length > 255) return 'Shop Address must less then 255 characters'
      return true;
    }
  }
});


// const isDisabled = computed(() => {
//     return !(
//         phone.value?.value &&
//         email.value?.value &&
//         address.value?.value?.length <= 255 &&
//         (!/^(?:\+88|88)?(01[3-9]\d{8})$/.test(email.value?.value)) // && !domain_error.value
//     );
// });


const isButtonDisabled = computed(() => {
  return !(phone.value.value && email.value.value && address.value.value)
});

const photoUploaded = (evn) => {
  awsSignUrl.value = evn
}


const description = useField('description');
const phone = useField('phone');
const email = useField('email');
const address = useField('address');

watch(() => phone.value.value, (value) => {
  if (value && value.length > 0) {
    isButtonDisabled.value = false
  }
})


const createShop = handleSubmit(async (values) => {
  if (loading.value) return;
  loading.value = true
  values.subdomain = props.shopDetails.shopUrl
  values.phone = formatPhone(values.phone)
  values.name = props.shopDetails.shopName
  values.image = awsSignUrl.value

  const {data, pending, error, refresh} = await postData('shop', values);
  if (error && error.value) {
    setErrors(error.value.data.errors || {});
    if (error.value.statusCode === 422) {
      domain_error.value = error.value.data.message;
      loading.value = false;
    }
  } else {
    await authStore.refreshToken()
    await goToShop(data.value.data.id)
  }

})

const goToShop = async (shopID) => {
  const {data, pending, error, refresh} = await getData('get-secret?shop_id=' + shopID)
  if (error && error.value) {
    console.log(error);
  } else {
    goToShopPanel(shopID, data.value?.sub_domain, data.value.data)
  }
}

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