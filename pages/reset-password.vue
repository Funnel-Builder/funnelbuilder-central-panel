<template>
  <div class="container mx-auto">
    <div class="flex flex-col items-center justify-center min-h-screen">
       <div class="w-[100%] sm:w-[70%] md:w-[60%] lg:w-[50%]">
         <div class="px-4 sm:px-0">
           <h1 class="text-[30px] md:text-[36px] lg:text-[40px] xl:text-[44px] 2xl:text-[48px] text-white font-[600]">Reset Password</h1>
           <p class="text-[12px] md:text-[14px] text-white font-[400]">Must be at least 8 characters</p>
         </div>
         <div class="px-4 sm:px-0">
           <div class="pt-4">
             <label class="inputGroupLabel" for="password">Password</label><br>
             <InputText
                 v-model="password.value.value"
                 :class="{ 'invalid': password.errorMessage.value }"
                 class="inputGroupField focus:shadow-none py-2 sm:py-3"
                 id="password"
                 type="password"
                 placeholder="Enter minimum 8 characters"/>
              <form-input-error :message="password.errorMessage.value"/>
           </div>
           <div class="pt-4">
             <label class="inputGroupLabel" for="confirmPassword">Confirm Password</label><br>
             <InputText
                 v-model="password_confirmation"
                 :class="{ 'invalid': password_confirmation.errorMessage.value }"
                 class="inputGroupField focus:shadow-none py-2 sm:py-3"
                 id="confirmPassword"
                 type="password"
                 placeholder="Enter minimum 8 characters"/>
              <form-input-error :message="password_confirmation.errorMessage.value"/>
           </div>
           <div class="pt-12">
             <Button class="btn p-2 md:p-2.5  focus:shadow-none"
                     label="Reset Password"/>
           </div>
           <div class="pt-12 flex justify-center items-center gap-x-4">
             <i class="pi pi-arrow-left" style="font-size: 0.8rem; color:white;"></i>
             <a href="/login" class=" text-white font-bold">Back to login</a>
           </div>
         </div>
       </div>
    </div>
  </div>
</template>

<script setup>
import {useField, useForm} from 'vee-validate';

definePageMeta({
  layout: "auth",
});

//Define Variables
const isShow = ref(false);
const isShowConfirm = ref(false);
const isLoading = ref(false);

//validation rules
const {handleSubmit, isSubmitting, handleReset, setErrors} = useForm({
  validationSchema: {
    password(value) {
      if (!value) return 'Password is required'
      else if (value.length >= 8) return true;
      else return 'Password must be at least 8 characters'
    },
    password_confirmation(value) {
      if (!value) return 'Confirm password is required';
      else if (value !== password.value.value) return 'Password does not match';
      return true;
    }
  }
})
//form fields
const password = useField('password');
const password_confirmation = useField('password_confirmation');

//Computed Properties
const isPasswordMatch = computed(() => {
  return password.value.value === password_confirmation.value.value;
});

const isSubmitDisabled = computed(() => {
  return !((name.value.value && name.value.value.length > 3) && password.value.value && password_confirmation.value.value && isPasswordMatch.value);
});

//Methods
const isShowPassword = () => {
  isShow.value = !isShow.value;
};
const isShowConfirmPassword = () => {
  isShowConfirm.value = !isShowConfirm.value;
};

const submitForm = handleSubmit(async (values) => {
  // console.log(values);
  isLoading.value = true;
  values.phone = `+880${values.phone}`;
  const {data, pending, error, refresh} = await authStore.register(values);
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
    router.push('/verify-otp');
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

