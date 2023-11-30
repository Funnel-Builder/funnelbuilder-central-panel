<template>
  <div class="container mx-auto py-10">
   <div class="grid grid-cols-1 lg:grid-cols-3">
     <div class="flex flex-col items-start px-4 sm:px-0 pb-6">
       <div>
         <img src="/landing/logo.svg" alt="logo"/>
         <p style="color:#667085;">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document</p>
         <div class="pt-4">
           <p style="color:#667085;" class="font-[600]">Address:</p>
           <p style="color:#667085;" class="pt-2">Sector 10, Uttara, Dhaka, Bangladesh</p>
         </div>
       </div>
     </div>
     <div class="hidden md:flex flex-col items-center gap-y-3 pt-3">
       <p style="color:#5A78AD" class="font-[600] md:text-[20px]">Company</p>
       <template v-for="(item, i) in company" :key="i">
         <nuxt-link :to="item.link">
           <span class="text">{{ item.label }}</span>
         </nuxt-link>
       </template>
     </div>
     <div class="hidden md:flex flex-col items-center gap-y-3 pt-3">
       <p style="color:#5A78AD" class="font-[600] md:text-[20px]">Social</p>
       <template v-for="(item, i) in social" :key="i">
         <nuxt-link :to="item.link">
           <span class="text">{{ item.label }}</span>
         </nuxt-link>
       </template>
     </div>
<!--     For Mobile View -->
     <div class="flex justify-evenly md:hidden pb-8">
       <div class="flex flex-col items-center gap-y-3 pt-3">
         <p style="color:#5A78AD" class="font-[600] md:text-[20px]">Company</p>
         <template v-for="(item, i) in company" :key="i">
           <nuxt-link :to="item.link">
             <span class="text text-[14px]">{{ item.label }}</span>
           </nuxt-link>
         </template>
       </div>
       <div class="flex flex-col items-center gap-y-3 pt-3">
         <p style="color:#5A78AD" class="font-[600] md:text-[20px]">Social</p>
         <template v-for="(item, i) in social" :key="i">
           <nuxt-link :to="item.link">
             <span class="text text-[14px]">{{ item.label }}</span>
           </nuxt-link>
         </template>
       </div>
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
  {label: 'About Us', link: '/'},
  {label: 'Contact', link: '/'},
  {label: 'Terms & Conditions', link: '/terms-and-conditions'},
  {label: 'Refund Policy', link: '/'},
  {label: 'Privacy Policy', link: '/'}
]);
const social = ref([
  {label: 'Twitter', link: '/'},
  {label: 'Linkedin', link: '/'},
  {label: 'Facebook', link: '/'},
  {label: 'Whatsapp', link: '/'},
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