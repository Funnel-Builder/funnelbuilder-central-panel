<template>
  <div class="container mx-auto py-10">
   <div class="grid grid-cols-2 lg:grid-cols-4">
     <div class="flex flex-col items-center px-4 sm:px-0 pb-6">
       <div>
         <img src="/landing/logo.svg" alt="logo"/>
         <p style="color:#667085;">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document</p>
         <div class="pt-4">
           <p style="color:#667085;" class="font-[600]">Address:</p>
           <p style="color:#667085;" class="pt-2">Sector 10, Uttara, Dhaka, Bangladesh</p>
         </div>
       </div>
     </div>
     <div class="flex flex-col items-center gap-y-3 pt-3">
       <p style="color:#5A78AD" class="font-[600] md:text-[20px]">Company</p>
       <template v-for="(item, i) in company" :key="i">
          <nuxt-link :to="item.link">
           <span class="text">{{ item.label }}</span>
         </nuxt-link>
       </template>
     </div>
     <div class="flex flex-col items-center gap-y-3 pt-3">
       <p style="color:#5A78AD" class="font-[600] md:text-[20px]">Legal</p>
       <template v-for="(item, i) in legal" :key="i">
         <nuxt-link :to="item.link">
           <span class="text">{{ item.label }}</span>
         </nuxt-link>
       </template>
     </div>
     <div class="flex flex-col items-center gap-y-3 pt-3">
       <p style="color:#5A78AD" class="font-[600] md:text-[20px]">Social</p>
       <template v-for="(item, i) in social" :key="i">
         <nuxt-link :to="item.link">
           <span class="text">{{ item.label }}</span>
         </nuxt-link>
       </template>
     </div>
   </div>
    <hr>
    <div class="px-4">
      <p style="color:#667085;" class="text-center pt-4">© {{ new Date().getFullYear() }} BDFunnelBuilder. All rights reserved.</p>
    </div>
  </div>
</template>

<script setup>
const company = ref([
  {label: 'About Us', link: '/about-us'},
  {label: 'Careers', link: '/careers'},
  {label: 'News', link: '/news'},
  {label: 'Contact', link: '/contact-us'},
]);
const legal = ref([
  {label: 'Terms of service', link: '/terms-of-service'},
  {label: 'Privacy Policy', link: '/privacy-policy'},
  {label: 'Cookies', link: '/cookies'},
  {label: 'Licenses', link: '/licenses'},
  {label: 'Refund Policy', link: '/refund-policy'}
]);
const social = ref([
  {label: 'Twitter', link: '/twitter'},
  {label: 'Linkedin', link: '/linkedin'},
  {label: 'Facebook', link: '/facebook'},
  {label: 'Whatsapp', link: '/whatsapp'},
]);
</script>

<style scoped lang="scss">
.text {
  color: #667085; /* Set your default link color */
  text-decoration: none;
  transition: color 0.3s ease; /* Smooth transition for color change */
}

/* Hover styles */
.text:hover {
  color: #D98C48; /* Set your hover link color */
}
</style>
```