<template>
  <div class="container mx-auto">
    <div>
      <div class="py-12 sm:py-0 flex flex-col items-center justify-center min-h-screen">
        <div class="w-[100%] sm:w-[70%] md:w-[60%] lg:w-[50%]">
          <div class="px-4 sm:px-0 ">
            <h1 class="text-[30px] md:text-[36px] lg:text-[40px] xl:text-[44px] 2xl:text-[48px] text-white font-[600]">Get
              Started</h1>
            <p class="text-[14px] sm:text-[16px] text-white font-[400]">Welcome to BDFunnelBuilder. Let’s
              Get Started.</p>
          </div>
          <div class="px-4 sm:px-0">
            <form @submit.prevent.stop="submitForm">
              <div class="pt-5">
                <label class="inputGroupLabel" for="username">Full Name*</label><br>
                <InputText name="name" v-model="name.value.value" :class="{ 'invalid': name.errorMessage.value }"
                           class="inputGroupField focus:shadow-none py-2 sm:py-3" id="username" type="text"
                           placeholder="Enter your name" />
                <form-input-error :message="name.errorMessage.value" text-color="#FFD600" />
              </div>
              <div class="pt-5">
                <label class="inputGroupLabel" for="phone">Phone Number*</label><br>
                <InputGroup class="">
                  <InputGroupAddon class="inputGroupFieldFlag p-2 md:p-2.5 rounded-l-xl">
                    <img class="rounded-md" src="/auth/bdFlag.svg" alt="flag" />
                    <p class="text-[14px] md:text-[16px] px-2">+880</p>
                  </InputGroupAddon>
                  <InputText name="phone" v-model="phone.value.value" :class="{ 'invalid': phone.errorMessage.value }" setErrorMessage
                             class="inputGroupFieldFlag rounded-l-none rounded-r-xl focus:shadow-none py-2 sm:py-3" id="phone"
                             type="number" />
                </InputGroup>
                <form-input-error :message="phone.errorMessage.value" text-color="#FFD600" />
              </div>
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
                  <IconField>
                    <InputIcon>
                      <i @click="isShowPassword" :class="isShow ? 'pi pi-eye' : 'pi pi-eye-slash'" style="color:black"></i>
                    </InputIcon>
                    <InputText name="password" v-model="password.value.value" :class="{ 'invalid': password.errorMessage.value }"
                               class="inputGroupField focus:shadow-none py-2 sm:py-3" id="password" toggleMask
                               :type="isShow ? 'text' : 'password'" placeholder="Enter minimum 8 characters" />
                  </IconField>
                </div>
                <form-input-error :message="password.errorMessage.value" text-color="#FFD600" />
              </div>
              <div class="pt-5">
                <label class="inputGroupLabel" for="confirmPassword">Confirm Password*</label><br>
                <div class="p-input-icon-right w-full">
                  <IconField>
                    <InputIcon>
                      <i @click="isShowConfirmPassword" :class="isShowConfirm ? 'pi pi-eye' : 'pi pi-eye-slash'"
                         style="color:black"></i>
                    </InputIcon>
                    <InputText name="password_confirmation" v-model="password_confirmation.value.value"
                               :disabled="!(password.value.value && password.value.value.length)"
                               :class="{ 'invalid': password_confirmation.errorMessage.value }"
                               class="inputGroupField focus:shadow-none py-2 sm:py-3" id="confirmPassword"
                               :type="isShowConfirm ? 'text' : 'password'" placeholder="Enter minimum 8 characters" />
                  </IconField>
                </div>
                <form-input-error :message="password_confirmation.errorMessage.value" text-color="#FFD600" />
              </div>
              <div class="pt-6 xl:flex justify-between items-center">
                <div class="inline-flex items-center gap-x-2">
                  <Checkbox v-model="termsAndCondition.value.value"
                            :class="{ 'invalid': termsAndCondition.errorMessage.value }"
                            style="background-color:#6582b2 !important; border: 0 solid #2196F3;"
                            class="focus:border-0 hover:border-green-500 bg-blue-900 focus:shadow-none focus:outline-none focus:outline-offset-0 check"
                            id="chbx" binary name="termsAndCondition" value="termsAndCondition" />
                  <p class="text-white text-[14px] sm:text-[16px]">I accept</p><nuxt-link to="/terms-and-conditions"
                                                                                          target="_blank" class="text-white text-[14px] sm:text-[16px] underline">Terms & conditions</nuxt-link>
                </div>
                <div class="flex py-2 gap-x-2">
                  <p class="text-white text-[14px] sm:text-[16px] ">Already have an account?</p>
                  <nuxt-link to="/login"
                             class="text-white text-[14px] sm:text-[16px] font-[400] underline">Login</nuxt-link>
                </div>
              </div>
              <form-input-error :message="termsAndCondition.errorMessage.value" text-color="#FFD600" />
              <div class="py-4">
                <buttons-action-button  :loading="isLoading" text="Register" />
              </div>
            </form>
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
  middleware: ['guest']
});

useSeoMeta({
  title: 'Signup to BD Funnel Builder',
})

//Define Variables
const authStore = useAuthStore();
const router = useRouter();
const isShow = ref(false);
const isShowConfirm = ref(false);
const isLoading = ref(false);

//validation rules
const { handleSubmit, isSubmitting, handleReset, setErrors } = useForm({
  validationSchema: {
    name(value) {
      if (!value) return 'Name is required'
      else if (value.length < 3 || value.length > 100) return 'Name must be between 3 and 100 characters'
      return true;
    },
    phone(value) {
      if (!value) return 'Phone number is required'
      else if (value && value.startsWith('0')) {
        if (!/^(?:\+88|01)?(?:\d{11}|\d{13})$/.test(value)) return "Invalid phone number";
      }
      else if (value && value.startsWith('1')) {
        if (!/^(?:\+88|01)?(?:\d{10}|\d{12})$/.test(value)) return "Invalid phone number";
      }
      return true;
    },
    email(value) {
      if (!value) return 'Email is required'
      else if (/^[a-z0-9.-]+@[a-z0-9.-]+.[a-z]+$/i.test(value)) return true;
      return "Invalid email";
    },
    password(value) {
      if (!value) return 'Password is required'
      else if (value.length >= 8) return true;
      else return 'Password must be at least 8 characters'
    },
    password_confirmation(value) {
      if (!value) return 'Confirm password is required';
      else if (value !== password.value.value) return 'Password does not match';
      return true;
    },
    termsAndCondition(value) {
      if (value) return true
      return 'Terms & Conditions is required'
    }
  }
})
//form fields
const name = useField('name');
const phone = useField('phone');
const email = useField('email');
const password = useField('password');
const password_confirmation = useField('password_confirmation');
const termsAndCondition = useField('termsAndCondition');

//Computed Properties
const isPasswordMatch = computed(() => {
  return password.value.value === password_confirmation.value.value;
});

const isSubmitDisabled = computed(() => {
  return !((name.value.value && name.value.value.length >= 3) && phone.value.value && email.value.value && password.value.value && password_confirmation.value.value && termsAndCondition.value.value && isPasswordMatch.value);
});

//Methods
const isShowPassword = () => {
  isShow.value = !isShow.value;
};
const isShowConfirmPassword = () => {
  isShowConfirm.value = !isShowConfirm.value;
};

const submitForm = handleSubmit(async (values) => {
  if (isLoading.value) return;
  isLoading.value = true;
  if (values.phone.startsWith('0')) {
    values.phone = `+880${values.phone.substring(1)}`;
  }
  else if (values.phone.startsWith('1')) {
    values.phone = `+880${values.phone}`;
  }
  const { data, pending, error, refresh } = await authStore.register(values);
  if (error && error.value) {
    if (error.value.statusCode === 422) {
      setErrors(error.value.data.errors || {})
    }
  }
  else {
    await router.push('/verify-email');
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
  background-color: #A0B1D0;
  width: 100%;
  border-radius: 10px;
  color: white;
  border: none;
}

.toggleMaskButton {
  width: 100%;
  /* Set width to 100% */
}

::placeholder {
  color: slategray;
}

input:focus::placeholder {
  color: white;
}

//This class used for input group(phone)
.inputGroupFieldFlag {
  background-color: #A0B1D0;
  color: white;
  border: none;
}
</style>

