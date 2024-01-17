<template>
  <div class="container mx-auto pt-20 px-16">
     <div class="text-center">
       <p class="text-[36px] font-[600] px-20">Analytics that feels like it’s from the future</p>
       <p class="text-[16px] font-[400] text-[#667085]">Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
     </div>
    <div>
      <template v-for="(item,i) in items" :key="i">
        <div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>

const items =  ref([
  { title:'Site Builder', subtitle: 'Lorem ipsum is placeholder text commonly used in the graphic, print and publishing industries for previewing layouts.', image: '/futureFunnel/site.svg'},
  { title:'Unlimited Templates & Components', subtitle: 'Lorem ipsum is placeholder text commonly used in the graphic, print and publishing industries for previewing layouts.', image:'/futureFunnel/template.svg' },
  { title:'Order Management', subtitle: 'Lorem ipsum is placeholder text commonly used in the graphic, print and publishing industries for previewing layouts.', image:'/futureFunnel/order.svg' },
  { title:'Courier Automation', subtitle: 'Lorem ipsum is placeholder text commonly used in the graphic, print and publishing industries for previewing layouts.', image:'/futureFunnel/courier.svg' },
  { title:'Stock Management', subtitle: 'Lorem ipsum is placeholder text commonly used in the graphic, print and publishing industries for previewing layouts.', image:'/futureFunnel/stock.svg' },
  { title:'Sales & Order Live Graphs', subtitle: 'Lorem ipsum is placeholder text commonly used in the graphic, print and publishing industries for previewing layouts.', image:'/futureFunnel/graph.svg' },
  { title:'SMS Marketing', subtitle: 'Lorem ipsum is placeholder text commonly used in the graphic, print and publishing industries for previewing layouts.', image:'/futureFunnel/sms.svg' },
  { title:'Auto Invoice Making', subtitle: 'Lorem ipsum is placeholder text commonly used in the graphic, print and publishing industries for previewing layouts.', image:'/futureFunnel/invoice.svg' },
  { title:'Super Fast Hosting', subtitle: 'Lorem ipsum is placeholder text commonly used in the graphic, print and publishing industries for previewing layouts.', image:'/futureFunnel/hosting.svg' }

])

</script>

<style lang="scss" scoped>

</style>