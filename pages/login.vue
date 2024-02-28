<template>
  <div class="container mx-auto">
    <div>
      <div class="flex flex-col items-center justify-center min-h-screen">
        <div class="w-[100%] sm:w-[70%] md:w-[60%] lg:w-[50%]">
          <div class="px-4 sm:px-0">
            <h1 class="text-[30px] md:text-[36px] lg:text-[40px] xl:text-[44px] 2xl:text-[48px] text-white font-[600]">
              Welcome Back!</h1>
          </div>
          <div class="px-4 sm:px-0">
            <div class="pt-5">
              <label class="inputGroupLabel" for="email">Email Address*</label><br>
              <InputText name="email" v-model="email.value.value" :class="{ 'invalid': email.errorMessage.value }"
                         class="inputGroupField focus:shadow-none py-2 sm:py-3" id="email" type="email"
                         placeholder="Enter email address" />
              <form-input-error :message="email.errorMessage.value" text-color="#FFD600" />
            </div>
            <div class="pt-5">
              <label class="inputGroupLabel" for="password">Password*</label><br>
              <div class="p-input-icon-right w-full">
                <InputText name="password" @keyup.enter="submitData" v-model="password.value.value" :class="{ 'invalid': password.errorMessage.value }"
                           class="inputGroupField focus:shadow-none py-2 sm:py-3" id="password" toggleMask
                           :type="isShow ? 'text' : 'password'" placeholder="Enter password" />
                <i @click="isShowPassword" :class="isShow ? 'pi pi-eye' : 'pi pi-eye-slash'" style="color:white"></i>
              </div>
              <form-input-error :message="password.errorMessage.value" text-color="#FFD600" />
            </div>
            <div class="pt-4 md:flex justify-between items-center">
              <nuxt-link to="/forget-password" class="text-[14px] md:text-[16px] text-white font-[400] underline">Forget
                Password</nuxt-link>
              <div class="pt-2 flex items-center gap-x-2">
                <p class="text-[14px] md:text-[16px] text-white font-[400]">Don’t have an account?</p>
                <nuxt-link to="/register"
                           class="text-[14px] md:text-[16px] text-white font-[400] underline">Register</nuxt-link>
              </div>
            </div>
            <div class="pt-8 md:pt-12">
              <buttons-action-button @submitData="submitData" type="submit" text="Login" :disabled="isSubmitDisabled"
                                     :loading="isLoading" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useField, useForm } from 'vee-validate';
import {goToShopPanel} from "~/composables/helper.js";

definePageMeta({
  layout: "auth",
  middleware: ['guest']
});
//Variables
const authStore = useAuthStore();
const router = useRouter();
const isShow = ref(false);
const isLoading = ref(false);
//validation rules
const { handleSubmit, isSubmitting, handleReset, setErrors } = useForm({
  validationSchema: {
    email(value) {
      if (!value) return 'Email is required'
      else if (/^[a-z0-9.-]+@[a-z0-9.-]+.[a-z]+$/i.test(value)) return true;
      return "Invalid email";
    },
    password(value) {
      if (!value) return 'Password is required'
      else if (value.length >= 8) return true;
      else return 'Password must be at least 8 characters'
    }
  }
})
//form fields
const email = useField('email');
const password = useField('password');

//Computed Properties
const isSubmitDisabled = computed(() => {
  return !(email.value.value && password.value.value)
});
//Methods
const isShowPassword = () => {
  isShow.value = !isShow.value;
};

const getSecret = async (shopId) => {
  const { data, pending, error, refresh } = await getData('get-secret?shop_id=' + shopId)
  if (error && error.value) {
    console.log(error);
  }
  else {
    goToShopPanel(shopId, data.value?.sub_domain, data.value.data)
  }
};

const submitData = handleSubmit(async (values) => {
  isLoading.value = true;
  const { data, pending, error, refresh } = await authStore.login(values);
  if (error && error.value) {
    if (error.value.statusCode === 422) {
      setErrors(error.value.data.errors || {})
    }
  }
  else {
    if (data.value.next === 'verify-email') {
      await router.push('/verify-email')
    } else if (data.value.next === 'create-shop') {
      await router.push('/shop/create')
    } else {
      await getSecret(data.value.user.shop_id)
    }
  }
  isLoading.value = false;
});
</script>

<style scoped lang="scss">
//This class used for input group(phone number hide arrows)
::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

//This class used for input group label
.inputGroupLabel {
  color: white;
  padding-left: .2rem;
}

//This class used for input group(name, email, password, confirm password)
.inputGroupField {
  background-color: #A0B1D0 !important;
  width: 100%;
  border-radius: 10px;
  color: white;
  border: none;
}

::placeholder {
  color: slategray;
}

input:focus::placeholder {
  color: white;
}
</style>

