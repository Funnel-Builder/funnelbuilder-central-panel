<template>
  <div class="container mx-auto">
    <div class="pt-[100px] sm:pt-0 sm:flex sm:flex-col justify-center items-center min-h-screen">
      <div class="px-4 sm:px-0 w-[100%] sm:w-[70%] md:w-[60%] lg:w-[50%]">
        <h1 class="text-[30px] md:text-[36px] lg:text-[40px] xl:text-[44px] 2xl:text-[48px] text-white font-[600]">Reset Password</h1>
        <p class="text-[12px] md:text-[14px] text-white font-[400]">Must be at least 8 characters</p>
      </div>
      <div class="px-4 sm:px-0 w-[100%] sm:w-[70%] md:w-[60%] lg:w-[50%]">
        <div class="pt-4">
          <label class="inputGroupLabel" for="password">Password</label><br>
          <InputText
              class="inputGroupField focus:shadow-none"
              id="password"
              type="password" v-model="password"
              placeholder="Enter minimum 8 characters"/>
        </div>
        <div class="pt-4">
          <label class="inputGroupLabel" for="confirmPassword">Confirm Password</label><br>
          <InputText
              class="inputGroupField focus:shadow-none"
              id="confirmPassword"
              type="password" v-model="confirmPassword"
              placeholder="Enter minimum 8 characters"/>
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
</template>

<script setup>
definePageMeta({
  layout: "auth",
});
const isLoading = true;
const password = ref(null);
const confirmPassword = ref(null);
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

