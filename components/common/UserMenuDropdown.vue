<template>
  <div>
    <div v-if="authStore.user" class="flex items-center gap-x-2">
      <div class="flex justify-center items-center px-4 py-2 gap-x-2 rounded-full cursor-pointer"
           style=" background-color:#eff1f7;">
        <img src="/landing/userIcon.svg" alt="logo"/>
        <p class="text-[14px] font-[600]" style="color:#5a78ad;">{{ authStore.user.name }}</p>
      </div>
      <div>
        <div @click="logout" class="flex justify-center items-center px-4 py-2 gap-x-2 rounded-full cursor-pointer"
             style=" background-color:#eff1f7;">
          <i class="pi pi-sign-out p-2" style="color:#5a78ad;"></i>
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
</script>