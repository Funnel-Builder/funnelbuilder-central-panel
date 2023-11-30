<template>
    <nuxt-link to="/" class="">
        <img :class="classes" src="/shop/ota-logo.svg" alt="logo">
    </nuxt-link>
</template>
<script setup>
const props = defineProps({
    classes:{
        type: String,
        default: 'w-60 md:w-full'
    }
})
</script>