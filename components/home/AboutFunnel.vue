<template>
  <div class="container mx-auto pt-20 px-16">
    <div class="text-center pb-16">
      <section-heading tag="About us" title="About the company"
                       sub-title="Learn more about the company and the team behind it." />
    </div>
    <div class="p-16 gap-x-16 bg-[#EFF1F7] flex justify-center">
      <div>
        <img class="h-[500px]" src="/about/image.svg" alt="image"/>
      </div>
      <div class="pt-16">
        <p class="text-[16px] font-[600] text-[#5A78AD]">We’ve helped hundreds of companies</p>
        <p class="text-[36px] font-[600]">We’re only just getting started on our journey</p>
        <div class="grid grid-cols-2 pt-6 gap-6">
          <template class="" v-for="(item ,i) in counter" :key="i">
            <div>
              <p class="text-[40px] font-[600] text-[#5A78AD]">{{ item.number }}</p>
              <p class="text-[20px] font-[500]">{{ item.label }}</p>
            </div>
          </template>
        </div>
      </div>
    </div>
    <div class="flex justify-evenly items-center gap-x-8 pt-16">
       <template v-for="(item ,i) in info" :key="i">
          <div class="text-center">
            <p class="text-[20px] font-[600]">{{ item.title }}</p>
            <p class="text-[16px] font-[400] text-[#667085] py-2">{{ item.subTitle }}</p>
            <p class="text-[16px] font-[600] text-[#5A78AD]">{{ item.tag }}</p>
          </div>
       </template>
    </div>
  </div>
</template>

<script setup>
import SectionHeading from "~/components/common/SectionHeading.vue";

const counter = ref([
  { number:'40k+' , label: 'Customer' },
  { number:'3M' , label: 'Investment' },
  { number:'10k' , label: 'Global Connects' },
  { number:'200+' , label: '5-star reviews' }
])

const info = ref([
  { title:'Support', subTitle: 'Our friendly team is here to help.', tag:'support@bdfb.com' },
  { title:'Sales', subTitle: 'Questions or queries? Get in touch!', tag:'sales@bdfb.com' },
  { title:'Phone', subTitle: 'Mon-Fri from 8am to 5pm.', tag:'+1 (555) 000-0000' }
])

</script>

<style lang="scss" scoped>

</style>