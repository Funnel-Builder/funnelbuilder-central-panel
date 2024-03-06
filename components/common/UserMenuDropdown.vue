<template>
  <div>
    <div v-if="authStore.user" class="flex items-center gap-x-2">
      <nuxt-link to="shop" class="text-[12px] lg:text-[14px] px-3.5 py-1.5 gap-x-2 rounded-full cursor-pointer font-[600] bg-[#eff1f7] text-[#5a78ad] hover:bg-[#5a78ad] hover:text-[white] hover:transition-all">Go To Shop</nuxt-link>
      <div class="flex justify-between items-center gap-x-2 px-3 py-1.5 rounded-full cursor-pointer"
           style=" background-color:#eff1f7; ">
        <img class="md:hidden lg:block h-[16px] lg:h-[20px]" src="/landing/userIcon.svg" alt="logo"/>
        <p class="text-[12px] lg:text-[14px] font-[600]" style="color:#5a78ad;">{{ truncatedUserName }}</p>
      </div>
      <div>
        <div @click="logout" class="flex justify-center items-center hover:shadow-2xl hover:shadow-red-700 gap-x-2 rounded-full cursor-pointer"
             style=" background-color:#5a78ad;">
          <i class="pi pi-sign-out p-1 lg:p-2.5" style="color:white; font-size:0.8rem;"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const authStore = useAuthStore();
const router = useRouter();

const logout = async () => {
  const {data, pending, error, refresh} = await authStore.logout();
  await router.push('/');
};

const truncatedUserName = computed(() => {
  const userName = authStore.user.name;
  return userName.substring(0, 2).toUpperCase();
});

</script>