<script setup lang="ts">
const name = useCookie('token')

const clientSideName = ref('')
onMounted(() => {
  clientSideName.value = useCookie('token').value as string
})
</script>

<template>
  <div class="mt-10 flex">
    Server Side: <br> {{ name }}
    <br/>
    Client Side: <br> {{ clientSideName }}
  </div>
</template>

<style scoped lang="scss">

</style>