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
console.log(authStore.isLoggedIn, 'isLoggedIn')
console.log(secret, 'secret')
console.log(config.public.appSecret, 'appSecret')
if (authStore.isLoggedIn && config.public.appSecret == secret) {
  console.log('Logging out...')
  await authStore.logout()
  await router.push('/login')
} else {
  console.log('Invalid request')
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