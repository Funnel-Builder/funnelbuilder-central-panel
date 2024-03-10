<script setup>
import {onMounted} from "vue";

definePageMeta({
  middleware: ['auth'],
  layout: false
})
const router = useRouter()
const authStore = useAuthStore()

onMounted(async () => {
  if (authStore.isLoggedIn) {
    await authStore.clearAuth();
  }
  await router.push('/login');
})
</script>
<template>
  <div>
    <div class="container">
      <div class="logout-card">
        <h4 class="text-red-600 text-3xl">Logging out...</h4>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.logout-card {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>