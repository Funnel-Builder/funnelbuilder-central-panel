<template>
    <nuxt-link to="/" class="">
        <img class="w-60 md:w-full" src="/shop/ota-logo.svg" alt="">
    </nuxt-link>
</template>
<script setup>
const props = defineProps({
    classes:{
        type: String,
        default: ''
    }
})
</script>