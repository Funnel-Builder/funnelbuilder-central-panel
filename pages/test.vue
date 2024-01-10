<script setup lang="ts">
const name = useCookie('test')
name.value = 'Setting Value'

const clientSideName = ref('')
onMounted(()=>{
  clientSideName.value = useCookie('test').value as string
})
</script>

<template>
<div class="mt-10 flex justify-center">
  Server Side {{name}}
  <br/>
  Client Side: {{clientSideName}}
</div>
</template>

<style scoped lang="scss">

</style>