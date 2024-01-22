<template>
  <div>
    <div class="py-4 bannerBg">
      <HomeBanner/>
    </div>
    <div class="py-8 md:py-20">
      <sponsors-companies/>
    </div>
    <div>
     <business-progress/>
    </div>
    <div>
      <why-funnel-builder/>
    </div>
    <div>
      <with-funnel/>
    </div>
    <div id="feature">
      <home-features/>
    </div>
    <div>
      <future-funnel/>
    </div>
    <div>
      <funnel-analytics/>
    </div>
    <div>
      <review-section/>
    </div>
    <div>
      <faq-section/>
    </div>
    <div id="contact">
      <contact-section/>
    </div>
    <div id="pricing">
      <funnel-pricing/>
    </div>
    <div>
      <about-funnel/>
    </div>
    <div>
      <trail-section/>
    </div>
    <div class="floating-button-div">
      <button @click="scrollToTop" v-show="showScrollButton" class="fb">
        <i class="pi pi-arrow-up" style="font-size: 0.8rem;   font-weight: 600;"></i>
      </button>
    </div>
  </div>
</template>

<script setup>
import SponsorsCompanies from "~/components/home/SponsorsCompanies.vue";
import BusinessProgress from "~/components/home/BusinessProgress.vue";
import WhyFunnelBuilder from "~/components/home/WhyFunnelBuilder.vue";
import WithFunnel from "~/components/home/WithFunnel.vue";
import FutureFunnel from "~/components/home/FutureFunnel.vue";
import FunnelAnalytics from "~/components/home/FunnelAnalytics.vue";
import ReviewSection from "~/components/home/ReviewSection.vue";
import ContactSection from "~/components/home/ContactSection.vue";
import FunnelPricing from "~/components/home/FunnelPricing.vue";
import AboutFunnel from "~/components/home/AboutFunnel.vue";
import TrailSection from "~/components/home/TrailSection.vue";
import FaqSection from "~/components/home/FaqSection.vue";

import { ref, onMounted, onBeforeUnmount } from 'vue';

const showScrollButton = ref(false);

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const handleScroll = () => {
  showScrollButton.value = window.scrollY > 100;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});

</script>
<style scoped lang="scss">
.card {
  max-width: 500px;
  margin: 50px auto 0;
}

.floating-button-div {
  position: fixed;
  bottom: 20px;
  right: 20px;
}
.fb {
  background-color: #5a78ad;
  color: white;
  border: none;
  border-radius: 50%;
  padding: 6px 12px;
  cursor: pointer;
}
</style>