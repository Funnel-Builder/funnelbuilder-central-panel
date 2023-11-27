<template>
  <div>
    <div class="py-4 bannerBg">
      <Button label="Submit" @click="login" />
      <HomeBanner/>
    </div>
    <nuxt-link to="/blank">Blank Page</nuxt-link>
  </div>
</template>

<script setup>
const authStore = useAuthStore()
const login = () => {
  const payload = {
    "email" : "tabrassumm@gmail.com",
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