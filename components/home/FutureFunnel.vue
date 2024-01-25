<template>
  <div class="container mx-auto pt-20 px-8 lg:px-16">
     <div class="text-center">
       <section-heading title="Analytics That Feels Like It’s From The Future" sub-title="Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups." />
     </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-8 md:gap-y-12 py-16">
      <template v-for="(item,i) in items" :key="i">
        <section-feature :title="item.title" :sub-title="item.subtitle" :image-icon="item.image" />
      </template>
    </div>
    <div class="bannerBg rounded-md h-[720px] md:h-[400px] lg:h-[600px] md:flex flex-col justify-center">
      <div class="md:relatives md:flex justify-between items-center">
        <div class="pt-4 pl-5 md:pl-8">
          <p class="text-[24px] lg:text-[28px] xl:text-[36px] textWhite font-[600] ">Providing Some Great Features for You</p>
          <template v-for="(item,i) in features" :key="i">
            <div class="flex items-center gap-x-3 pt-3">
              <img class="h-[18px]" src="/futureFunnel/check.svg" alt="icon">
              <p class="text-[14px] lg:text-[16px] xl:text-[20px] font-[400] textWhite">{{ item.name }}</p>
            </div>
          </template>
        </div>
        <div class="pl-4 md:pl-0 aos-container" data-aos="fade-left" data-aos-duration="1500">
          <img class="h-[400px] lg:h-[500px]" src="/futureFunnel/image.svg" alt="icon">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import SectionHeading from "~/components/common/SectionHeading.vue";
import SectionFeature from "~/components/common/SectionFeature.vue";

const items =  ref([
  { title:'Site Builder', subtitle: 'Lorem ipsum is placeholder text commonly used in the graphic, print and publishing industries for previewing layouts.', image: '/futureFunnel/builder.svg'},
  { title:'Unlimited Templates & Components', subtitle: 'Lorem ipsum is placeholder text commonly used in the graphic, print and publishing industries for previewing layouts.', image:'/futureFunnel/template.svg' },
  { title:'Order Management', subtitle: 'Lorem ipsum is placeholder text commonly used in the graphic, print and publishing industries for previewing layouts.', image:'/futureFunnel/order.svg' },
  { title:'Courier Automation', subtitle: 'Lorem ipsum is placeholder text commonly used in the graphic, print and publishing industries for previewing layouts.', image:'/futureFunnel/courier.svg' },
  { title:'Stock Management', subtitle: 'Lorem ipsum is placeholder text commonly used in the graphic, print and publishing industries for previewing layouts.', image:'/futureFunnel/stock.svg' },
  { title:'Sales & Order Live Graphs', subtitle: 'Lorem ipsum is placeholder text commonly used in the graphic, print and publishing industries for previewing layouts.', image:'/futureFunnel/graph.svg' },
  { title:'SMS Marketing', subtitle: 'Lorem ipsum is placeholder text commonly used in the graphic, print and publishing industries for previewing layouts.', image:'/futureFunnel/sms.svg' },
  { title:'Auto Invoice Making', subtitle: 'Lorem ipsum is placeholder text commonly used in the graphic, print and publishing industries for previewing layouts.', image:'/futureFunnel/invoice.svg' },
  { title:'Super Fast Hosting', subtitle: 'Lorem ipsum is placeholder text commonly used in the graphic, print and publishing industries for previewing layouts.', image:'/futureFunnel/hosting.svg' }
])

const features = ref([
  { name:'Customizable workflows will give freedom' },
  { name:'End task has time tracking and reporting' },
  { name:'Real-time data management' },
  { name:'Role permission and invite users' },
  { name:'Custom Domain setup and Courier Management' },
  { name:'Support Ticket' }
])

</script>

<style lang="scss" scoped>
.bannerBg {
  background-image: url('/futureFunnel/mask.png') !important;
  background-color: #5A78AD !important;
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: center;
}
.authBG {
  background-image: url('/auth/bgMask.svg') !important;
  background-color: #5A78AD !important;
  border-radius: 10px !important;
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: center;
}

@media only screen and (max-width: 768px) {
  .aos-container {
    opacity: 1 !important;
    transform: none !important;
  }
}
</style>