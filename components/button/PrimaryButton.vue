<template>
    <div><Button style="background-color: #5A78AD; border: none; " class="w-full h-10 md:h-14 text-xs md:text-lg" :label="text" /></div>
</template>
<script setup>
const pros = defineProps({
    text:{
        type: String,
        default : ''
    }
})
</script>