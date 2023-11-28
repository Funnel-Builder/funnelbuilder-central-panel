<template>
  <div>
    <div class="py-4 bannerBg">
      <Button label="Submit" @click="login" />
      <nuxt-link to="/blank">Blank Page</nuxt-link>
      <Button label="Show" @click="showToast = !showToast" />
      <utilities-toast :show-toast="showToast"/>
      <HomeBanner/>
    </div>
  </div>
</template>

<script setup>
const authStore = useAuthStore()
const showToast = ref(false)
const login = () => {
  const payload = {
    "email" : "tabrassummmmmmmmm@gmail.com",
    "password" : "secretsecret"
  }
  authStore.login(payload)
}
</script>
<style scoped lang="scss">
.card {
  max-width: 500px;
  margin: 50px auto 0;
}
</style>