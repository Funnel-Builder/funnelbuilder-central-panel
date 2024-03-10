<script setup>
definePageMeta({
  middleware: false,
})
const router = useRouter()
const authStore = useAuthStore()

console.log('sss')
if (authStore.isLoggedIn) {
  const {data, pending, error, refresh} = await authStore.logout();
  if (error && error.value) {
    console.log(error);
  } else {
    await authStore.clearAuth();
  }
}
await router.push('/');
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