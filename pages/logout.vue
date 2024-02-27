<script setup>
definePageMeta({
  layout: false
})
const route = useRoute()
const router = useRouter()
const authStore = useAuthStore()
const shopId = route.query.shop_id
const secret = route.query.secret

if (!shopId || !secret) {
  router.push('/login')
}

const config = useRuntimeConfig();
if (authStore.isLoggedIn && shopId == authStore.user?.shop_id && config.public.appSecret === secret) {
  authStore.logout()
  router.push('/login')
} else {
  router.push('/login')
}
</script>
<template>
  <div>
    <div class="container" >
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