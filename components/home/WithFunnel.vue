<template>
  <div class="container mx-auto pt-8 lg:pt-20 lg:px-16 px-4 md:px-8">
     <div class="text-center">
       <section-heading title="The Funnel Is The Secret To Your Online Success" sub-title="It’s the difference between the 1,929,999,999 websites that don’t make money, and the .000000002% that do!" />
<!--        <p class="text-[16px] font-[400] text-center text-[#667085] pt-2">It’s the difference between the 1,929,999,999 websites that don’t make money, <span class="font-[700]">and the .000000002% that do!</span></p>-->
     </div>
     <div class="md:flex justify-center items-center gap-x-6 pt-8 md:pt-12" data-aos="fade-down" data-aos-duration="1000">
       <div class="bg-[#F1F6FF] w-full md:w-[50%] lg:w-[40%] px-8 md:px-16 py-6 rounded-md">
         <p class="text-[18px] lg:text-[20px] xl:text-[24px] font-[600] textColor">Without Funnel</p>
         <template v-for="(item , i) in withOutFunnel" :key="i">
           <div class="flex items-center pt-2">
             <img class="h-[16px]" src="/withFunnel/red.svg" alt="icon">
             <p class="pl-2 text-[12px] lg:text-[14px] font-[500] textColor">{{ item.name }}</p>
           </div>
         </template>
       </div>
       <div class="bg-[#F1F6FF] mt-8 md:mt-0 w-full md:w-[50%] lg:w-[40%] px-8 md:px-16 py-6 rounded-md">
         <p class="text-[18px] lg:text-[20px] xl:text-[24px] font-[600] textColor">With Funnel</p>
         <template v-for="(item , i) in withFunnel" :key="i">
           <div class="flex items-center pt-2">
             <img class="h-[16px]" src="/withFunnel/green.svg" alt="icon">
             <p class="pl-2 text-[12px] lg:text-[14px] font-[500] textColor">{{ item.name }}</p>
           </div>
         </template>
       </div>
     </div>
    <div class="text-center flex justify-center pt-16">
      <animated-button text="Let’s Start" to="#pricing"/>
<!--      <primary-button text="Join with Us" to="#pricing" type="link" />-->
    </div>
  </div>
</template>

<script setup>
import SectionHeading from "~/components/common/SectionHeading.vue";
import PrimaryButton from "~/components/buttons/PrimaryButton.vue";
import AnimatedButton from "~/components/buttons/AnimatedButton.vue";

const withOutFunnel = ref([
  { name: "No Customer" },
  { name: "No Sales" },
  { name: "Confusing Buying Process" },
  { name: "Sadness" }
])

const withFunnel = ref([
  { name: "Stream Of Customers" },
  { name: "Simple Buying Process" },
  { name: "Sales Galore" },
  { name: "Opposite of Sadness" }
])

</script>

<style lang="scss" scoped>

</style>