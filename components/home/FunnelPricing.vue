<template>
  <div class="container mx-auto pt-20 px-4 md:px-16">
    <div class="text-center">
      <section-heading tag="Pricing" title="Simple, Transparent Pricing"
                       sub-title="We believe Untitled should be accessible to all companies, no matter the size." />
    </div>
    <div v-if="items && items.length">
      <div class="grid grid-cols-1 md:grid-cols-3 pt-12 gap-x-12">
        <div v-for="(item, i) in items" :key="i" class="">
          <div class="bg-white rounded-2xl shadow-xl w-full  my-4 p-8">
            <div class="text-center pb-8">
              <p class="text-[24px] xl:text-[30px] font-[600] textColor">{{ item.title }}</p>
              <div v-if="item.discount" class="flex justify-center items-center gap-2">
                <p class="text-[16px] xl:text-[20px] font-[600] pb-2 textColor">{{ item.price - item.discount }}</p>
                <p class="text-[16px] xl:text-[20px] font-[600] pb-2 text-gray-400 line-through">{{ item.price }}</p>
                <p class="text-[16px] xl:text-[20px] font-[600] pb-2 textColor">BDT</p>
              </div>
              <div v-else>
                <p class="text-[16px] xl:text-[20px] font-[600] pb-2 textColor">{{ item.price }} BDT</p>
              </div>
              <p class="text-[12px] xl:text-[16px] font-[400] textSecondary">{{ item.duration }} Days</p>
            </div>
            <div v-for="(feature ,i) in item.features" :key="i" class="pt-2 flex items-center gap-x-2">
              <img loading="lazy" class="h-[20px]" src="/pricing/check.svg" alt="image"/>
              <p class="text-[14px] xl:text-[16px] font-[400] textSecondary">{{ feature }}</p>
            </div>
            <div class="pt-5">
              <template v-if="!authStore.isLoggedIn">
                <nuxt-link to="/login">
                  <div class="buttonHover  hover:ring-1 hover:ring-[white] text-white flex justify-center items-center bg-[#5A78AD] gap-x-1 rounded-md  py-1.5 hover:cursor-pointer">
                    <p class="font-[600] text-center text-[16px]">Get started</p>
                  </div>
                </nuxt-link>
              </template>
              <template v-if="authStore.isLoggedIn">
                <nuxt-link to="/shop">
                  <div class="buttonHover  hover:ring-1 hover:ring-[white] text-white flex justify-center items-center bg-[#5A78AD] gap-x-1 rounded-md  py-1.5 hover:cursor-pointer">
                    <p class="font-[600] text-center text-[16px]">Get started</p>
                  </div>
                </nuxt-link>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="md:flex justify-center pt-6 md:pt-8">
      <div class="p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300" role="alert">
        <span class="font-medium">No plans available!</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import SectionHeading from "~/components/common/SectionHeading.vue";
const authStore = useAuthStore();

const items = ref([]);
const isPlansLoading = ref(false);

const getPlans = async () => {
  isPlansLoading.value = true;
  const { data, pending, error, refresh } = await getData('/plans', 'subscription');
  if (error && error.value) {
    console.log(error.value);
  } else {
    items.value = data.value.data;
  }
  isPlansLoading.value = false;
};
getPlans();

const pricing = ref([
  { title: 'Free', subTitle: 'Billed monthly.', tag:'Basic plan',
    context:[
      { label: "Access to all basic features" },
      { label: "Basic reporting and analytics" },
      { label: "Up to 10 individual users" },
      { label: "20GB individual data each user" },
      { label: "Basic chat and email support" }
    ]
  },
  { title: '3000 BDT', subTitle: 'Billed monthly.', tag:'Business plan',
    context:[
      { label: "200+ integrations" },
      { label: "Advanced reporting and analytics" },
      { label: "Up to 20 individual users" },
      { label: "40GB individual data each user" },
      { label: "Priority chat and email support" }
    ]
  },
])

</script>

<style lang="scss" scoped>
.buttonHover:hover{
  background: #415984;
  color: white;
  transition: 0.6s;
}
</style>