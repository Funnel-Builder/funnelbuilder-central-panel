<template>
  <div class="container mx-auto pt-20 px-16">
    <div class="text-center">
      <p class="text-[16px] font-[600] text-[#5A78AD]">Features</p>
      <p class="text-[36px] font-[600] px-20">BD Funnel Builder Gives You Everything You Need To Market, Sell And Deliver Your Products Online</p>
      <p class="text-[16px] font-[400] text-[#667085]">Powerful, self-serve product and growth analytics to help you convert, engage and retain more users. Trusted by over 4,000 startups.</p>
    </div>
<!--    Section 1-->
    <div class="pt-16 flex items-center gap-x-12">
      <div>
        <img class="" src="/features/store.svg" alt="icon">
        <p class="text-[24px] font-[600] pt-1">Setup Store</p>
        <p class="text-[16px] font-[400] text-[#667085] pb-4">Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.</p>
        <div class="flex items-center pt-1" v-for="(item,i) in store" :key="i">
          <img class="h-[18px]" src="/features/check.svg" alt="icon">
          <p class="pl-2 text-[16px] font-[400] text-[#667085]">{{ item.name }}</p>
        </div>
      </div>
      <div>
        <img class="" src="/features/storePic.svg" alt="icon">
      </div>
    </div>
<!--    Section 2-->
    <div class="pt-16 flex items-center gap-x-12">
      <div>
        <img class="" src="/features/domainPic.svg" alt="icon">
      </div>
      <div>
        <img class="" src="/features/domain.svg" alt="icon">
        <p class="text-[24px] font-[600] pt-1">Store Domain Set Up & Publish</p>
        <p class="text-[16px] font-[400] text-[#667085] pb-4">An all-in-one customer service platform that helps you balance everything your customers need to be happy.</p>
        <div class="flex items-center pt-1" v-for="(item,i) in domain" :key="i">
          <img class="h-[18px]" src="/features/check.svg" alt="icon">
          <p class="pl-2 text-[16px] font-[400] text-[#667085]">{{ item.name }}</p>
        </div>
      </div>
    </div>
    <!--    Section 3-->
    <div class="pt-16 flex items-center gap-x-12">
      <div>
        <img class="" src="/features/template.svg" alt="icon">
        <p class="text-[24px] font-[600] pt-1">Template Library</p>
        <p class="text-[16px] font-[400] text-[#667085] pb-4">Measure what matters with Untitled’s easy-to-use reports. You can filter, export and drilldown on the data in a couple clicks.</p>
        <div class="flex items-center pt-1" v-for="(item,i) in templates" :key="i">
          <img class="h-[18px]" src="/features/check.svg" alt="icon">
          <p class="pl-2 text-[16px] font-[400] text-[#667085]">{{ item.name }}</p>
        </div>
      </div>
      <div>
        <img class="" src="/features/templatePic.svg" alt="icon">
      </div>
    </div>
    <!--    Section 4-->
    <div class="pt-16 flex items-center gap-x-12">
      <div>
        <img class="" src="/features/smsPic.svg" alt="icon">
      </div>
      <div>
        <img class="" src="/features/sms.svg" alt="icon">
        <p class="text-[24px] font-[600] pt-1">SMS Service</p>
        <p class="text-[16px] font-[400] text-[#667085] pb-4">An all-in-one customer service platform that helps you balance everything your customers need to be happy.</p>
        <div class="flex items-center pt-1" v-for="(item,i) in sms" :key="i">
          <img class="h-[18px]" src="/features/check.svg" alt="icon">
          <p class="pl-2 text-[16px] font-[400] text-[#667085]">{{ item.name }}</p>
        </div>
      </div>
    </div>
<!--    Button-->
    <div class="text-center pt-12">
      <nuxt-link to="/pricing" class="buttonHover hover:ring-1 hover:ring-[#5A78AD] bg-[#5A78AD] text-white px-4 py-1.5 rounded-full font-[600]">Join with Us</nuxt-link>
    </div>
  </div>
</template>

<script setup>

const store = ref([
  { name: "Leverage automation to move fast" },
  { name: "Always give customers a human to chat to" },
  { name: "Automate customer support and close leads faster" },
])

const domain = ref([
  { name: "Keep your customers in the loop with live chat" },
  { name: "Embed help articles right on your website" },
  { name: "Customers never have to leave the page to find an answer" },
])

const templates = ref([
  { name: "Filter, export and drill down on the data quickly" },
  { name: "Save, schedule and automate reports to your inbox" },
  { name: "Connect the tools you already use with 100+ integrations" },
])

const sms = ref([
  { name: "Keep your customers in the loop with live chat" },
  { name: "Embed help articles right on your website" },
  { name: "Customers never have to leave the page to find an answer" },
])

</script>

<style lang="scss" scoped>
.buttonHover:hover{
  background: white;
  color: #5A78AD;
  transition: 0.6s;
}
</style>