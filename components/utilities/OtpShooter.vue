<template>
    <div>
        <div class="pl-2">
            <h1 class="text-[30px] md:text-[36px] lg:text-[40px] xl:text-[44px] 2xl:text-[48px] text-white font-[600]">
                Verification Code</h1>
            <p class="text-[12px] md:text-[14px] text-white font-[400]">Enter your six digit verification code.</p>
        </div>
        <div>
            <div class="py-16">
                <p class="text-[12px] md:text-[14px] text-white font-[400] pl-2">Enter Code</p>
                <div class="mt-1 flex justify-between">
                    <v-otp-input ref="otpInput" input-classes="otp-input" separator="" :num-inputs="6"
                        :should-auto-focus="true" :is-input-num="true" @on-change="handleOnChange"
                        @on-complete="handleOnComplete">
                    </v-otp-input>
                </div>
                <div class="flex justify-between pt-2 pl-2">
                    <div>
                        <utilities-otp-timer v-if="setValue" :validUntil="setValue" @timeEnd="timeEnd($event)" />
                        <utilities-otp-timer v-if="setTime > 0" :sec="setTime" @timeEnd="timeEnd($event)" />
                    </div>
                    <div>
                        <button @click="resendOtp"   class="underline text-white">Resend</button>
                    </div>
                </div>
                <form-input-error :message="error_mes"/>
            </div>
            <div class="text-center">
                <Button :disabled="otpNumber?.length !== 6" link class="btn p-2 md:p-2.5  focus:shadow-none" label="Continue" />
            </div>
        </div>
    </div>
</template>
  
<script setup>
import moment from "moment";

definePageMeta({
    layout: "auth",
});
const otpNumber = ref(null)
const timeOver = ref(false)
const setValue = ref()
const setTime = ref(0)
const error_mes = ref('')

const otp = getOtp();
console.log(otp, 'otp')


onMounted(() => {
    // console.log(moment(moment(otp?.expires_in)).diff(moment(), 'seconds'))
    const timers = moment(moment(otp?.expires_in)).diff(moment(), 'seconds');
    if(timers > 0){
        timeOver.value = true
        setValue.value = otp.expires_in
    }
});

const resendOtp = async() =>{
    timeOver.value = true
    setTime.value = 0
    const {data, error} = await postData('get-otp', {email: otp.email})
    if(error && error.value){
        if(error.value.statusCode == 422){
            error_mes.value = error.value.data.message
        }
    }else{
        setTime.value = data.value.retry_after;
    }
}

const handleOnComplete = async (value) => {
    otpNumber.value = value;
};
const handleOnChange = async (value) => {
    //do some action
}
const timeEnd = (evn) => {
    timeOver.value = false;
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
</style>
  
  