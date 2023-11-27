<template>
    <div><Button to="link" style="background-color: #5A78AD; border: none; border-radius: 15px;"
            class="w-full h-10 md:h-12 text-xs md:text-lg focus:shadow-none">
            <span class="font-bold w-full text-white flex justify-center items-center rounded-2xl h-10 md:h-12 text-xs md:text-lg">{{ text }}</span>
        </Button>
    </div>
</template>
<script setup>
const pros = defineProps({
    text: {
        type: String,
        default: ''
    }
})
</script>