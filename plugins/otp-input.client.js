import OtpInput from 'vue3-otp-input';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("v-otp-input", OtpInput);
});
