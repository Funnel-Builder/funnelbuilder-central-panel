<template>
  <div class="container mx-auto">
    <div class="flex flex-col items-center justify-center min-h-screen">
      <div class="w-[100%] sm:w-[70%] md:w-[60%] lg:w-[50%]">
        <div class="px-4 sm:px-0">
          <h1 class="text-[30px] md:text-[36px] lg:text-[40px] xl:text-[44px] 2xl:text-[48px] text-white font-[600]">Welcome Back!</h1>
          <div class="flex items-center gap-x-2">
            <p class="text-[12px] md:text-[14px] text-white font-[400]">Don’t have an account?</p>
            <nuxt-link to="/register"  class="text-white font-bold">Register</nuxt-link>
          </div>
        </div>
        <div class="px-4 sm:px-0">
          <div class="pt-5">
            <label class="inputGroupLabel" for="email">Email Address *</label><br>
            {{ email.value.value }}
            <InputText
                v-model="email.value.value"
                :class="{ 'invalid': email.errorMessage.value }"
                class="inputGroupField focus:shadow-none py-2 sm:py-3"
                id="email"
                type="email"
                placeholder="Enter email address"/>
            <form-input-error :message="email.errorMessage.value"/>
          </div>
          <div class="pt-5">
            <label class="inputGroupLabel" for="password">Password</label><br>
            <div class="p-input-icon-right w-full">
              {{ password.value.value }}
              <InputText
                  v-model="password.value.value"
                  :class="{ 'invalid': password.errorMessage.value }"
                  class="inputGroupField focus:shadow-none py-2 sm:py-3"
                  id="password"
                  toggleMask
                  :type="isShow ? 'text' : 'password'"
                  placeholder="Enter minimum 8 characters"/>
              <i @click="isShowPassword" :class="isShow ? 'pi pi-eye' : 'pi pi-eye-slash' " style="color:white"></i>
            </div>
            <form-input-error :message="password.errorMessage.value"/>
          </div>
          <div class="pt-4 text-end">
            <nuxt-link to="/forgot-password"  class="text-white font-bold underline">Forgot Password</nuxt-link>
          </div>
          <div class="pt-8 md:pt-12">
            <Button :disabled="isSubmitDisabled" @click="submitData" class="btn p-1 md:p-2.5 focus:shadow-none"
                    label="Login"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {useField, useForm} from 'vee-validate';
import {useAuthStore} from "~/stores/auth.js";

definePageMeta({
  layout: "auth",
});

const authStore = useAuthStore();
const isShow = ref(false);
const isLoading = ref(false);
//validation rules
const {handleSubmit, isSubmitting, handleReset, setErrors} = useForm({
  validationSchema: {
    email(value) {
      if (value) return true
      return 'Email is required'
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


const isSubmitDisabled = computed(() => {
  return !( email.value.value && password.value.value)
});

const isShowPassword = () => {
  isShow.value = !isShow.value;
};

const submitData = handleSubmit(async (values) => {
  console.log(values);
  isLoading.value = true;
  let msg = `New  created successfully!`
  const {data, pending, error, refresh} = await authStore.login(values);
  if (error && error.value) {
    setErrors(error.value.data.errors || {})
    if (error.value.data.errors === 422) {
      console.log(error.value);
    }
  }
  else {
    handleReset();
    console.log(msg)
    const router = useRouter();
    router.push('/');
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
//This class used for register button
.btn {
  background-color: white;
  color: black;
  width: 100%;
  border-radius: 10px;
  border: none;
  cursor: pointer;
}
</style>

