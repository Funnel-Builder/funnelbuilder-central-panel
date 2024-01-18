<template>
  <div class="container mx-auto pt-20 px-16">
    <div class="text-center">
      <section-heading title="Cutting-edge features for advanced analytics" sub-title="Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups." />
    </div>
    <div class="flex justify-center pt-16">
      <img src="/analytic/image.svg" alt="image"/>
    </div>
    <div class="grid grid-cols-3 gap-x-12 gap-y-12 py-12">
      <template v-for="(item,i) in items" :key="i">
        <section-feature :title="item.title" :sub-title="item.subtitle" :image-icon="item.image" />
      </template>
    </div>
  </div>
</template>

<script setup>
import SectionHeading from "~/components/common/SectionHeading.vue";
import SectionFeature from "~/components/common/SectionFeature.vue";

const items =  ref([
  { title:'Product Management', subtitle: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.', image: '/analytic/product.svg'},
  { title:'Stock Management', subtitle: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.', image:'/analytic/stock.svg' },
  { title:'Access Management', subtitle: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.', image:'/analytic/access.svg' }
])
</script>

<style lang="scss" scoped>

</style>