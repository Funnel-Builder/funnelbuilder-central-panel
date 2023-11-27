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
                        <utilities-otp-timer validUntil="2023-11-27T06:05:59.222850Z" @timeEnd="timeEnd($event)"/>
                    </div>
                    <div>
                        <button :disabled="!timeOver" class="underline text-white">Resend</button>
                    </div>
                </div>
            </div>
            <div class="text-center">
                <Button link class="btn p-2 md:p-2.5  focus:shadow-none" label="Continue" />
            </div>
        </div>
    </div>
</template>
  
<script setup>
definePageMeta({
    layout: "auth",
});
const otpNumber = ref(null)
const timeOver = ref(false)

const handleOnComplete = async (value) => {
    otpNumber.value = value;
};
const handleOnChange = async (value) => {
    //do some action
}
const timeEnd = (evn) => {
    timeOver.value = evn;
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

    @media only screen and (max-width: 1300px) {
        height: 50px;
    }
    @media only screen and (max-width: 768px) {
        height: 40px;
    }
}

.otp-input:focus {
    outline: none;
}
</style>
  
  