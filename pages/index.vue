<template>
  <div>
    <div class="py-4 bannerBg">
      <HomeBanner/>
    </div>
    <div class="py-20">
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
    <div>
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
    <div>
      <contact-section/>
    </div>
    <div>
      <funnel-pricing/>
    </div>
    <div>
      <about-funnel/>
    </div>
    <div>
      <trail-section/>
    </div>
  </div>
</template>

<script setup>

import SponsorsCompanies from "~/components/home/SponsorsCompanies.vue";
import BusinessProgress from "~/components/home/BusinessProgress.vue";
import WhyFunnelBuilder from "~/components/home/WhyFunnelBuilder.vue";
import WithFunnel from "~/components/home/WithFunnel.vue";
import Feature from "~/pages/feature.vue";
import FutureFunnel from "~/components/home/FutureFunnel.vue";
import FunnelAnalytics from "~/components/home/FunnelAnalytics.vue";
import ReviewSection from "~/components/home/ReviewSection.vue";
import ContactSection from "~/components/home/ContactSection.vue";
import FunnelPricing from "~/components/home/FunnelPricing.vue";
import AboutFunnel from "~/components/home/AboutFunnel.vue";
import TrailSection from "~/components/home/TrailSection.vue";
import FaqSection from "~/components/home/FaqSection.vue";
</script>
<style scoped lang="scss">
.card {
  max-width: 500px;
  margin: 50px auto 0;
}
</style>