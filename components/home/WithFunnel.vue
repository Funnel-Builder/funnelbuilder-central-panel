<template>
  <div class="container mx-auto pt-20 px-16">
     <div>
        <p class="text-[32px] font-[600] text-center">The Funnel Is The Secret To Your Online Success</p>
        <p class="text-[16px] font-[400] text-center text-[#667085] pt-2">It’s the difference between the 1,929,999,999 websites that don’t make money, <span class="font-[700]">and the .000000002% that do!</span></p>
     </div>
     <div class="flex justify-center items-center gap-x-60 pt-12">
       <div class="bg-[#F1F6FF] px-16 py-6 rounded-md">
         <p class="text-[24px] font-[600]">Without Funnel</p>
         <template v-for="(item , i) in withOutFunnel" :key="i">
           <div class="flex items-center pt-2">
             <img class="h-[16px]" src="/withFunnel/red.svg" alt="icon">
             <p class="pl-2 text-[14px] font-[500]">{{ item.name }}</p>
           </div>
         </template>
       </div>
       <div class="bg-[#F1F6FF] px-16 py-6 rounded-md">
         <p class="text-[24px] font-[600]">Without Funnel</p>
         <template v-for="(item , i) in withFunnel" :key="i">
           <div class="flex items-center pt-2">
             <img class="h-[16px]" src="/withFunnel/green.svg" alt="icon">
             <p class="pl-2 text-[14px] font-[500]">{{ item.name }}</p>
           </div>
         </template>
       </div>
     </div>
  </div>
</template>

<script setup>
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