<template>
  <div class="container mx-auto">
    <div v-if="isLoading">
      <CommonLoader></CommonLoader>
    </div>
    <div v-else>
      <div class="flex flex-col items-center justify-center min-h-screen">
        <div class="w-[100%] sm:w-[70%] md:w-[60%] lg:w-[50%]">
          <div class="px-4 sm:px-0">
            <h1 class="text-[30px] md:text-[36px] lg:text-[40px] xl:text-[44px] 2xl:text-[48px] text-white font-[600]">
              Forgot Password?</h1>
            <p class="text-[12px] md:text-[14px] text-white font-[400]">No worry! we will send you reset instruction.
              Provide your valid email.</p>
          </div>
          <div class="px-4 sm:px-0">
            <form >
              <div class="pt-8">
                <label class="inputGroupLabel" for="email">Email</label><br>
                <InputText @keyup.enter="submitData" v-model="email.value.value" :class="{ 'invalid': email.errorMessage.value }"
                           class="inputGroupField focus:shadow-none py-2 sm:py-3" id="email" type="email"
                           placeholder="Enter email address" />
                <form-input-error :message="email.errorMessage.value" text-color="#FFD600" />
              </div>
              <div class="pt-12 text-center">
                <Button :disabled="isSubmitDisabled"  @click="submitData" class="btn p-2 md:p-2.5  focus:shadow-none"
                        label="Continue" />
              </div>
            </form>
            <div class="pt-12 flex justify-center items-center gap-x-4">
              <i class="pi pi-arrow-left" style="font-size: 0.8rem; color:white;"></i>
              <nuxt-link to="/login" class="text-white font-bold">Back to login</nuxt-link>
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
  layout: "auth",
  middleware:['guest']
});
//Variables
const authStore = useAuthStore();
const router = useRouter();
const isLoading = ref(false);
const max_limit = ref('')
//validation rules
const { handleSubmit, isSubmitting, handleReset, setErrors } = useForm({
  validationSchema: {
    email(value) {
      if (!value) return 'Email is required'
      else if (/^[a-z0-9.-]+@[a-z0-9.-]+.[a-z]+$/i.test(value)) return true;
      return "Invalid email";
    }
  }
})
//form fields
const email = useField('email');


//Computed Properties
const isSubmitDisabled = computed(() => {
  return !(email.value.value);
});

//Methods
const submitData = handleSubmit(async (values) => {
  const { data, error } = await postData('get-otp', values)
  if (error && error.value) {
    if (error.value.statusCode == 422) {
      setErrors(error.value.data.errors || {})
    }
  } else {
    await authStore.setUserMailAndTime({email: values.email, retry_after: data.value.retry_after})
    await router.push('/forget-password/verify');
  }
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

