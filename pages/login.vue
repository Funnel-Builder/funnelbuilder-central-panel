<template>
  <div class="container mx-auto">
    <div class="pt-[100px] sm:pt-0 sm:flex sm:flex-col justify-center items-center min-h-screen">
      <div class="px-4 sm:px-0 w-[100%] sm:w-[70%] md:w-[60%] lg:w-[50%]">
        <h1 class="text-[30px] md:text-[36px] lg:text-[40px] xl:text-[44px] 2xl:text-[48px] text-white font-[600]">Welcome Back!</h1>
        <div class="flex items-center gap-x-2">
          <p class="text-[12px] md:text-[14px] text-white font-[400]">Don’t have an account?</p>
          <nuxt-link to="/register"  class="text-white font-bold">Register</nuxt-link>
        </div>
      </div>
      <div class="px-4 sm:px-0 w-[100%] sm:w-[70%] md:w-[60%] lg:w-[50%]">
        <div class="pt-4">
          <label class="inputGroupLabel"  for="phone">Phone Number</label><br>
          <InputText
              class="inputGroupField focus:shadow-none"
              id="phone"
              type="number" v-model="phone"
              placeholder="Enter your number"/>
        </div>
        <div class="pt-4">
          <label class="inputGroupLabel" for="password">Password</label><br>
          <InputText
              class="inputGroupField focus:shadow-none"
              id="password"
              type="password" v-model="password"
              placeholder="Enter minimum 8 characters"/>
        </div>
        <div class="pt-4 text-end">
          <nuxt-link to="/forgot-password"  class="text-white font-bold underline">Forgot Password</nuxt-link>
        </div>
        <div class="pt-12">
          <Toast class="bg-transparent"/>
          <Button class="btn p-2 md:p-2.5  focus:shadow-none"
                  @click="showSuccess"
                  label="Login"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useToast } from "primevue/usetoast";
definePageMeta({
  layout: "auth",
  middleware: ["guest"]
});
const toast = useToast();
const phone = ref(null);
const password = ref(null);

const showSuccess = () => {
  toast.add({ severity: 'success', summary: 'Success Message', detail: 'Message Content', life: 2000 });
};

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

