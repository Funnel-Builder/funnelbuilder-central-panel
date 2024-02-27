<template>
  <div>
    <div class="pl-2">
      <h1 class="text-[30px] md:text-[36px] lg:text-[40px] xl:text-[44px] 2xl:text-[48px] text-white font-[600]">
        Verification Code</h1>
      <p class="text-[12px] md:text-[14px] text-white font-[400]">To complete your verification, please check your email for a verification code.</p>
    </div>
    <div>
      <div class="py-16">
        <p class="text-[12px] md:text-[14px] text-white font-[400] pl-2">Enter Code</p>
        <div class="mt-1 flex justify-between">
          <v-otp-input ref="otpInput" input-classes="otp-input" separator="" :num-inputs="6" :should-auto-focus="true"
            :is-input-num="true" @on-change="handleOnChange" @on-complete="handleOnComplete">
          </v-otp-input>
        </div>
        <div class="flex justify-between pt-2 pl-2">
          <div>
            <utilities-otp-timer v-if="setValue" :validUntil="setValue" @timeEnd="timeEnd($event)" />
            <utilities-otp-timer v-if="setTime > 0" :sec="setTime" @timeEnd="timeEnd($event)" />
          </div>
          <div>
            <button @click="resendOtp" :disabled="timeOver" class="underline text-white">Resend</button>
          </div>
        </div>
        <form-input-error text-color="#FFD600" :message="error_msg" />
      </div>
      <div class="text-center">
        <button @click="submitOtp" :disabled="isDisabled || error_msg.length > 0"
          :class="isDisabled || error_msg.length > 0 ? 'bg-gray-400 text-gray-300 cursor-not-allowed' : 'bg-white text-black'"
          class="rounded-lg w-full h-10 md:h-12 text-xs md:text-lg focus:shadow-none font-semibold">
          Continue
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import moment from "moment";

const authStore = useAuthStore();
const router = useRouter()

const isDisabled = ref(false)
const authorizedCode = ref('')
const otpNumber = ref(null)
const timeOver = ref(false)
const setValue = ref()
const setTime = ref(0)
const error_msg = ref('')

const otp = getOtp();


onMounted(async () => {
  if (otp) {
    const timers = moment(moment(otp?.expires_in)).diff(moment(), 'seconds');
    if (timers > 0) {
      timeOver.value = true
      setValue.value = otp.expires_in
    }
  } else {
    await router.push('/login')
  }
  // console.log(moment(moment(otp?.expires_in)).diff(moment(), 'seconds'))

});

const checkValidity = computed(()=>{
  return  otpNumber.value >5 ? true : false
})

const resendOtp = async () => {
  timeOver.value = true
  setTime.value = 0
  const { data, error } = await postData('get-otp', { email: otp.email })
  if (error && error.value) {
    if (error.value.statusCode == 422) {
      error_msg.value = error.value.data.message
    }
  } else {
    setTime.value = data.value.retry_after;
  }
}

const handleOnComplete = async (value) => {
  otpNumber.value = value;
  const { data, error } = await postData('verify-otp', { otp: value, email: otp.email })
  if (error && error.value) {
    if (error.value.statusCode === 422) {
      error_msg.value = error.value.data.message
    }
  } else {
    authorizedCode.value = data.value.authorization_code
  }
};
const handleOnChange = async (value) => {
  error_msg.value = ''
  isDisabled.value = value.length < 6;
}
const timeEnd = (evn) => {
  timeOver.value = false;
}

const submitOtp = async () => {
  const { data, error } = await postData('verify-email', { authorization_code: authorizedCode.value })
  if (error && error.value) {
    if (error.value.statusCode === 422) {
      error_msg.value = error.value.data.message
    }
  } else {
    console.log(data.value.data)
    if (data.value.data.email_verified_at !== null) {
      authStore.setUser(data.value.data)
      await router.push('/shop/create')
    }
  }
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
  text-decoration: none !important;
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
</style>
  
  