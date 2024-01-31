<template>
  <div  class="container mx-auto pt-8 md:pt-20 px-4 lg:px-16">
    <div class="text-center">
      <section-heading tag="Client Reviews" title="World Class Entrepreneurs Love Using BD Funnel Builder" />
    </div>
    <div class="card pt-2">
      <Carousel :value="items" :numVisible="1" :numScroll="1" :responsiveOptions="responsiveOptions" circular :autoplayInterval="3000"
                :pt="{
                  indicatorButton:{
                    style:{
                      'display': 'none'
                    }
                  },
                  nextButtonIcon:{
                    style:{
                      'display': 'none'
                    }
                  },
                  previousButtonIcon:{
                    style:{
                      'display': 'none'
                    }
                  }
                }"
      >
        <template #item="slotProps">
          <div class="w-full border-1 surface-border border-round m-2 text-center py-5 md:px-3">
            <div class="flex justify-center">
              <img class="h-[130px] rounded-full" :src="slotProps.data.image" alt="avatar"/>
            </div>
            <div class="pt-1">
              <p class="text-[18px] font-[600] textColor">{{ slotProps.data.name }}</p>
              <p class="text-[16px] font-[400] textPrimary">{{ slotProps.data.position }}</p>
            </div>
            <div class="pt-3 md:px-20">
              <p class="text-[16px] font-[400] textSecondary">{{ slotProps.data.reviewText }}</p>
            </div>
            <div class="flex justify-center items-center gap-x-4 pt-4">
              <div v-for="(item, i) in slotProps.data.media" :key="i">
                <nuxt-link :to="item.link" target="_blank">
                  <img :src="item.image" alt="image">
                </nuxt-link>
              </div>
            </div>
          </div>
        </template>
      </Carousel>
    </div>
  </div>
</template>

<script setup>

import SectionHeading from "~/components/common/SectionHeading.vue";

const responsiveOptions = ref([
  {
    breakpoint: '1400px',
    numVisible: 2,
    numScroll: 1
  },
  {
    breakpoint: '1199px',
    numVisible: 1,
    numScroll: 1
  },
  {
    breakpoint: '767px',
    numVisible: 2,
    numScroll: 1
  },
  {
    breakpoint: '575px',
    numVisible: 1,
    numScroll: 1
  }
]);

const items = ref([
  {
    name: 'Lana Steiner',
    position:'Product Manager',
    image:'/review/avatar1.jpg',
    reviewText:'“Whether it’s courses, books, live events, physical products… literally any business I have a stake in needs to have a funnel. A funnel removes complexity, help the customer get what they want faster, and increases your profits.”',
    media:[
      { name:'Twitter', image:'/review/twitter.svg', link:'https://twitter.com/' },
      { name:'Linkedin', image:'/review/linkedin.svg', link:'https://www.linkedin.com/' },
      { name:'Website', image:'/review/website.svg', link:'https://anik-chandra.vercel.app/' }
    ]
  },
  {
    name: 'Lana Steiner',
    position:'Product Manager',
    image:'/review/avatar2.jpg',
    reviewText:'“Whether it’s courses, books, live events, physical products… literally any business I have a stake in needs to have a funnel. A funnel removes complexity, help the customer get what they want faster, and increases your profits.”',
    media:[
      { name:'Twitter', image:'/review/twitter.svg', link:'https://twitter.com/' },
      { name:'Linkedin', image:'/review/linkedin.svg', link:'https://www.linkedin.com/' },
      { name:'Website', image:'/review/website.svg', link:'https://anik-chandra.vercel.app/' }
    ]
  },
  {
    name: 'Lana Steiner',
    position:'Product Manager',
    image:'/review/avatar3.jpg',
    reviewText:'“Whether it’s courses, books, live events, physical products… literally any business I have a stake in needs to have a funnel. A funnel removes complexity, help the customer get what they want faster, and increases your profits.”',
    media:[
      { name:'Twitter', image:'/review/twitter.svg', link:'https://twitter.com/' },
      { name:'Linkedin', image:'/review/linkedin.svg', link:'https://www.linkedin.com/' },
      { name:'Website', image:'/review/website.svg', link:'https://anik-chandra.vercel.app/' }
    ]
  }
])

</script>

<style lang="scss" scoped>

</style>