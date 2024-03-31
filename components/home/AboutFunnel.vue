<template>
  <div class="container mx-auto pt-20 px-4 md:px-8 lg:px-16">
    <div class="text-center pb-16">
      <section-heading tag="About us" title="About The Company"
                       sub-title="Learn more about the company and the team behind it." />
    </div>
    <div class="p-2 md:p-8 lg:p-12 gap-x-8 lg:gap-x-16 bg-[#EFF1F7] flex md:flex-row flex-col items-center justify-center">
      <div class="order-2 md:order-1 py-4 md:py-0">
        <img loading="lazy" class="h-[300px] xl:h-[450px]" src="/about/image.png" alt="image"/>
      </div>
      <div class="py-4 md:py-0 text-center md:text-left xl:pt-8 order-1 md:order-2">
        <p class="text-[16px] font-[600] textPrimary">We’ve helped hundreds of companies</p>
        <p class="text-[24px] xl:text-[36px] font-[600] textColor">We’re only just getting started on our journey</p>
        <div class="grid grid-cols-2 pt-6 gap-6">
          <template class="" v-for="(item ,i) in counter" :key="i">
            <div>
              <p class="text-[30px] xl:text-[40px] font-[600] textPrimary">{{ formatNumber(item.currentValue) }}{{ item.tag }}</p>
              <p class="text-[16px] xl:text-[20px] font-[500] textColor">{{ item.label }}</p>
            </div>
          </template>
        </div>
      </div>
    </div>
    <div class="flex md:flex-row flex-col gap-y-6 justify-evenly items-center  gap-x-8 pt-16">
       <template v-for="(item ,i) in info" :key="i" class="">
          <div class="text-center">
            <p class="text-[18px] lg:text-[20px] font-[600] textColor">{{ item.title }}</p>
            <p class="text-[14px] lg:text-[16px] font-[400] textSecondary py-2">{{ item.subTitle }}</p>
            <p class="text-[14px] lg:text-[16px] font-[600] textPrimary">{{ item.tag }}</p>
          </div>
       </template>
    </div>
  </div>
</template>

<script setup>
import SectionHeading from "~/components/common/SectionHeading.vue";

const counter = ref([
  { number: 40, tag:'k+', label: 'Customer', currentValue: 0 },
  { number: 3, tag:'M', label: 'Investment', currentValue: 0 },
  { number: 10, tag:'k', label: 'Global Connects', currentValue: 0 },
  { number: 200, tag:'+', label: '5-star reviews', currentValue: 0 }
])

const info = ref([
  { title:'Support', subTitle: 'Our friendly team is here to help.', tag:'support@bdfb.com' },
  { title:'Sales', subTitle: 'Questions or queries? Get in touch!', tag:'sales@bdfb.com' },
  { title:'Phone', subTitle: 'Mon-Fri from 8am to 5pm.', tag:'+1 (555) 000-0000' }
])


const formatNumber = (value) => {
  return value.toLocaleString();
}

const startCounter = () => {
  const incrementInterval = 200;
  const startCounting = (index) => {
    const item = counter.value[index];
    const incrementValue = Math.ceil(item.number / (item.number < 100 ? 10 : 100));

    setTimeout(() => {
      if (item.currentValue < item.number) {
        item.currentValue += incrementValue;
        item.currentValue = Math.min(item.currentValue, item.number);
        startCounting(index);
      }
    }, incrementInterval);
  };
  counter.value.forEach((_, index) => {
    startCounting(index);
  });
}

onMounted(() => {
  startCounter();
});


</script>

<style lang="scss" scoped>

</style>