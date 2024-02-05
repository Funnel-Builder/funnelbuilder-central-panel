<template>
  <div class="container mx-auto pt-20 px-4 md:px-16">
    <div class="text-center pb-8 md:pb-16">
      <section-heading tag="FAQs" title="Frequently Asked Questions"
                       sub-title="Everything you need to know about the product and billing." />
    </div>
    <div class="md:flex justify-center">
      <div class="w-full">
        <template v-for="(item ,i) in faqs" :key="i">
          <div class="py-2 px-4 md:px-16">
            <div @click="toggleAnswer(i)" :class="{ 'active': activeIndex === i }" class="faq-question flex py-2 w-full justify-between items-center">
              <p class="text-[16px] xl:text-[20px] font-[500]">{{ item.question }}</p>
              <i :class="{'pi pi-plus': activeIndex !== i, 'pi pi-minus': activeIndex === i}" style="font-size: 0.7rem; font-weight: 600; color: #5a78ad"  class="transition-transform p-1 rounded-full" ></i>
            </div>
            <div v-if="activeIndex === i" class="w-full py-2 faq-answer" >
              <p class="text-[12px] xl:text-[16px] textSecondary font-[400]" >{{ item.answer }}</p>
            </div>
            <hr v-if="i !== faqs.length - 1">
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import SectionHeading from "~/components/common/SectionHeading.vue";

const activeIndex = ref(0);

const toggleAnswer = (index) => {
  if (activeIndex.value === index) {
    activeIndex.value = -1;
  } else {
    activeIndex.value = index;
  }
};

// const isShow = ref([false,false,false,false,false,false])
//
// const open = (index) => {
//   isShow.value.forEach((item,i) => {
//     if(i !== index){
//       isShow.value[i] = false;
//     }
//   })
//   isShow.value[index] = !isShow.value[index];
// }

const faqs = ref([
  { question:'Is there a free trial available?', answer: 'Yes, you can try us for free for 7 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.' },
  { question:'Can I change my plan later?', answer: 'Yes, you can try us for free for 7 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.' },
  { question:'What is your cancellation policy?', answer: 'Yes, you can try us for free for 7 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.' },
  { question:'Can other info be added to an invoice?', answer: 'Yes, you can try us for free for 7 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.' },
  { question:'How does billing work?', answer: 'Yes, you can try us for free for 7 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.' },
  { question:'How do I change my account email?', answer: 'Yes, you can try us for free for 7 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.' }
])




</script>

<style lang="scss" scoped>

.faq-question {
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.faq-question:hover {
  color: #5a78ad;
  transition: 0.5s ease;
}

.faq-question.active {
  color: #5a78ad;
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  opacity: 0;
  transition: max-height 0.3s ease, opacity 0.4s ease, 0.4s ease ;
}

.faq-question.active + .faq-answer {
  max-height: 500px;
  opacity: 1;
}

.transition-transform {
  transition: transform 0.4s ease;
}

.pi {
  transform-origin: center;
}
.pi-minus {
  transform: rotate(180deg);
}
</style>