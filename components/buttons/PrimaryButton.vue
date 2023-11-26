<template>
    <div><Button to="link" style="background-color: #5A78AD; border: none; border-radius: 15px;" class="w-full h-10 md:h-12 text-xs md:text-lg focus:shadow-none" :label="text" /></div>
</template>
<script setup>
const pros = defineProps({
    text:{
        type: String,
        default : ''
    }
})
</script>