<template>
  <div class="container mx-auto pt-20 px-4 md:px-8 lg:px-16">
    <div class="text-center">
      <section-heading tag="Features" title="BD Funnel Builder Gives You Everything You Need To Market, Sell And Deliver Your Products Online"
                       sub-title="Powerful, self-serve product and growth analytics to help you convert, engage and retain more users. Trusted by over 4,000 startups." />
    </div>
<!--    Section 1-->
    <div>
      <section-feature-element :items="store" image="/features/storePic.svg" phone-image="/features/storePhone.svg" order-class-one="order-1"  order-class-two="order-2"/>
    </div>
<!--    Section 2-->
    <div>
      <section-feature-element :items="domain" image="/features/domainPic.svg" phone-image="/features/domainPhone.svg" order-class-one="order-2"  order-class-two="order-1"/>
    </div>
    <!--    Section 3-->
    <div>
      <section-feature-element :items="templates" image="/features/templatePic.svg" phone-image="/features/templatePhone.svg" />
    </div>
    <!--    Section 4-->
    <div>
      <section-feature-element :items="sms" image="/features/smsPic.svg" phone-image="/features/smsPhone.svg" order-class-one="order-2"  order-class-two="order-1"/>
    </div>
<!--    Button-->
    <div class="text-center flex justify-center pt-16">
      <animated-button-two text="Grow Your Business" to="#pricing" />
<!--      <primary-button text="Join with Us" to="/pricing" type="link"/>-->
    </div>
  </div>
</template>

<script setup>
import PrimaryButton from "~/components/buttons/PrimaryButton.vue";
import SectionHeading from "~/components/common/SectionHeading.vue";
import SectionFeatureElement from "~/components/common/SectionFeatureElement.vue";
import AnimatedButton from "~/components/buttons/AnimatedButton.vue";
import AnimatedButtonTwo from "~/components/buttons/AnimatedButtonTwo.vue";

const store = ref([
  {
    title: 'Setup Store',
    subtitle: 'Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.',
    image: '/features/storePic.svg',
    icon: '/features/template.svg',
    context:[
      { name: "Leverage automation to move fast" },
      { name: "Always give customers a human to chat to" },
      { name: "Automate customer support and close leads faster" },
    ]
  }
])

const domain = ref([
  {
    title: 'Store Domain Set Up & Publish',
    subtitle: 'An all-in-one customer service platform that helps you balance everything your customers need to be happy.',
    image: '/features/domainPic.svg',
    icon: '/features/domain.svg',
    context:[
      { name: "Keep your customers in the loop with live chat" },
      { name: "Embed help articles right on your website" },
      { name: "Customers never have to leave the page to find an answer" },
    ]
  }
])

const templates = ref([
  {
    title: 'Template Library',
    subtitle: 'Measure what matters with Untitled’s easy-to-use reports. You can filter, export and drill down on the data in a couple clicks.',
    image: '/features/templatePic.svg',
    icon: '/features/store.svg',
    context:[
      { name: "Filter, export and drill down on the data quickly" },
      { name: "Save, schedule and automate reports to your inbox" },
      { name: "Connect the tools you already use with 100+ integrations" },
    ]
  }
])

const sms = ref([
  {
    title: 'SMS Service',
    subtitle: 'An all-in-one customer service platform that helps you balance everything your customers need to be happy.',
    image: '/features/smsPic.svg',
    icon: '/features/sms.svg',
    context:[
      { name: "Keep your customers in the loop with live chat" },
      { name: "Embed help articles right on your website" },
      { name: "Customers never have to leave the page to find an answer" },
    ]
  }
])



</script>

<style lang="scss" scoped>
.buttonHover:hover{
  background: white;
  color: #5A78AD;
  transition: 0.6s;
}
</style>