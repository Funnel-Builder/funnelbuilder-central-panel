<script setup>
definePageMeta({
  layout: false,
  middleware: ['auth']
})
const route = useRoute()
const router = useRouter()
const authStore = useAuthStore()
// const shopId = route.query.shop_id
// const secret = route.query.secret


authStore.logout()
router.push('/login')
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