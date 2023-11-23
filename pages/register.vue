<template>
  <div class="container mx-auto">
    <div class="pt-[80px] sm:pt-0 sm:flex sm:flex-col justify-center items-center min-h-screen">
      <div class="px-4 sm:px-0 w-[100%] sm:w-[70%] md:w-[60%] lg:w-[50%]">
        <h1 class="text-[30px] md:text-[36px] lg:text-[40px] xl:text-[44px] 2xl:text-[48px] text-white font-[600]">Get
          Started</h1>
        <p class="text-[12px] md:text-[14px] text-white font-[400]">Welcome to BDFunnelBuilder. Let’s
          Get Started.</p>
      </div>
      <div class="px-4 sm:px-0 w-[100%] sm:w-[70%] md:w-[60%] lg:w-[50%]">
        <div class="pt-4">
          <label class="inputGroupLabel" for="username">Full Name</label><br>
          <InputText
              class="inputGroupField focus:shadow-none "
              id="username"
              type="text" v-model="name"
              placeholder="Enter your name"/>
        </div>
        <div class="pt-4">
          <label class="inputGroupLabel" for="phone">Phone Number</label><br>
          <InputGroup class="">
            <InputGroupAddon class="inputGroupFieldFlag p-1 md:p-2.5 rounded-l-xl">
              <img src="/auth/bdFlag.svg" alt="flag"/>
            </InputGroupAddon>
            <InputGroupAddon class="inputGroupFieldFlag w-[30%] sm:w-[30%] md:w-[25%] lg:w-[25%] xl:w-[20%] p-1 md:p-2.5">
              <p class="text-[14px] md:text-[16px] px-2 border-r-2 border-white">BD +880</p>
            </InputGroupAddon>
            <InputText
                class="inputGroupFieldFlag rounded-l-none rounded-r-xl focus:shadow-none"
                id="phone"
                type="number" v-model="phone"
            />
          </InputGroup>
        </div>
        <div class="pt-4">
          <label class="inputGroupLabel" for="email">Email Address</label><br>
          <InputText
              class="inputGroupField focus:shadow-none"
              id="email"
              type="email" v-model="email"
              placeholder="Enter email address"/>
        </div>
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
        <div class="pt-4 md:flex justify-between items-center">
          <div class="flex items-center">
            <Checkbox class="" v-model="termsAndCondition" inputId="ingredient1" name="termsAndCondition"
                      value="termsAndCondition"/>
            <label for="ingredient1" class="ml-2 text-white"> Terms & Conditions </label>
          </div>
          <div class="flex gap-x-2">
            <p class="text-white">Already have an account?</p>
            <a href="/login" class="text-white font-bold">Login</a>
          </div>
        </div>
        <div class="py-4">
          <Button class="btn p-2 md:p-2.5  focus:shadow-none"
                  label="Register"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "auth",
});

const name = ref(null);
const phone = ref(null);
const email = ref(null);
const password = ref(null);
const confirmPassword = ref(null);
const termsAndCondition = ref(false);

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
::placeholder {
  color: slategray;
}
input:focus::placeholder {
  color: white;
}
//This class used for input group(phone)
.inputGroupFieldFlag {
  background-color: #A0B1D0;
  color:white;
  border: none;
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

