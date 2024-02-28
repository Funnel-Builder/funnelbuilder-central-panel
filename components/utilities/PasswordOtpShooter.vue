<template>
    <div>
        <div class="pl-2">
            <h1 class="text-[30px] md:text-[36px] lg:text-[40px] xl:text-[44px] 2xl:text-[48px] text-white font-[600]">
                Verification Code</h1>
            <p class="text-[12px] md:text-[14px] text-white font-[400]">We have sent six digit code to your email</p>
        </div>
        <div>
            <form @keyup.enter="submitOtp">
              <div class="py-16">
                <div>
                  <p class="text-[12px] md:text-[14px] text-white font-[400] pl-2">Enter Code</p>
                  <div class="mt-1 flex justify-between">
                    <v-otp-input  ref="otpInput" input-classes="otp-input" separator="" :num-inputs="6"
                                 :should-auto-focus="true" :is-input-num="true" @on-change="handleOnChange"
                                 @on-complete="handleOnComplete">
                    </v-otp-input>
                  </div>
                  <div class="flex justify-between pt-2 pl-2">
                    <div>
                      <utilities-otp-timer v-if="setTime > 0" :sec="setTime" @timeEnd="timeEnd($event)" />
                    </div>
                    <div>
                      <button @click="resendOtp" :disabled="timeOver" :class="timeOver ? 'text-gray-400':'text-white'" class="underline">Resend</button>
                    </div>
                  </div>
                </div>
                <form-input-error :message="error_mes" text-color="#FFD600" />
              </div>
              <div class="text-center">
                <Button @click="submitOtp" :disabled="isDisabled" class="btn p-2 md:p-2.5  focus:shadow-none"
                        label="Continue" />
              </div>
            </form>
        </div>
    </div>
</template>
  
<script setup>
import { useAuthStore } from "~/stores/auth.js";

definePageMeta({
    layout: "auth",
});
const router = useRouter()
const otpNumber = ref(null)
const timeOver = ref(true)
const setTime = ref(0)
const error_mes = ref('')
const authStore = useAuthStore();
const otp = getOtp();
const isDisabled = ref(true)

onMounted(async () => {
    if (authStore.otp_email_time && Object.keys(authStore.otp_email_time).length > 0) {
        setTime.value = authStore.otp_email_time.retry_after;
    } else {
        await router.push('/forget-password')
    }
});

const resendOtp = async () => {
    timeOver.value = true
    setTime.value = 0
    const { data, error } = await postData('get-otp', { email: authStore.otp_email_time.email })
    if (error && error.value) {
        if (error.value.statusCode == 422) {
            error_mes.value = error.value.data.message
        }
    } else {
        setTime.value = data.value.retry_after;
    }
}

const handleOnComplete = async (value) => {
    otpNumber.value = value;
    await submitOtp()
};
const handleOnChange = async (value) => {
    error_mes.value = ''
    //do some action
    if (value.length === 6) {
        isDisabled.value = false
    } else {
        isDisabled.value = true
    }
}
const timeEnd = (evn) => {
    timeOver.value = false;
}

const submitOtp = async () => {
    const { data, error } = await postData('verify-otp', { email: authStore.otp_email_time.email, otp: otpNumber.value })

    if (error && error.value) {
        if (error.value.statusCode === 422) {
            error_mes.value = error.value.data.message
        }
    }
    else {
        authStore.setAuthorizationCode(data.value.authorization_code)
        await router.push('/reset-password')
    }
}

const resetOtp = () => {
    error_mes.value = ''
    const inputFields = document.querySelectorAll('.otp-input');
    inputFields.forEach((input) => {
        input.value = '';
    });
}
</script>
  
<style lang="scss">
//This class used for register button
.btn {
    background-color: white;
    color: black;
    width: 100%;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    text-decoration: none;
}

.otp-input {
    width: 100%;
    height: 70px;
    padding: 5px 0px;
    margin: 0 8px;
    font-size: 38px;
    font-weight: bold;
    color: white;
    border-radius: 9.76px;
    text-align: center;
    background-color: #9fb0cf;

    @media only screen and (max-width: 768px) {
        height: 40px;
        font-size: 18px;
    }
}

.otp-input:focus {
    outline: none;
}

.p-button:not(.p-disabled):hover {
    background-color: white;
}
</style>
  
  