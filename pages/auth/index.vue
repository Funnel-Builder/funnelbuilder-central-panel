<template>
  <div class="container mx-auto">
    <div class="h-screen flex justify-center items-center ">
      <h1 class="text-[46px] text-white font-[600] font-['Poppins']">Welcome to BDFunnelBuilder. Let’s Get Started.</h1>
      <div class="pt-4">
        <label class="text-white pl-1" for="email">Email Address</label><br>
        <InputText
            class="w-full p-2 md:p-2.5 rounded-xl  bg-[#A0B1D0] focus: bg-[#6883B2] border-0 focus:border focus:border-[white] focus:shadow-none placeholder-gray-500 focus:placeholder-amber-50 focus:text-white text-white"
            id="email"
            type="email" v-model="email"
            placeholder="Enter email address"/>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "auth",
});
</script>

<style>

</style>