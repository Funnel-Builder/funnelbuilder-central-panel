<template>
    <div>
        <nuxt-link v-if="type == 'link'" :to="to" :class="`${classes} flex justify-center items-center rounded-md h-10 md:h-12 text-xs md:text-lg`">{{ text }}</nuxt-link>
        <button v-else :disabled="disabled" type="submit" @click="$emit('submitData')" :class="`${disabled ? disabledClass : activeClass} ${classes} flex items-center justify-center`">{{ text }} <i v-if="loading" class="pi pi-spin pi-spinner" style="font-size: 1rem; margin-left: 5px;"></i></button>
    </div>
</template>
<script setup>
const pros = defineProps({
    type:{type: String, default: ''},
    to:{type: String, default: '/'},
    loading:{type: Boolean, default: false},
    text: { type: String, default: 'Action button' },
    activeClass: { type: String, default: 'bg-white text-black' },
    classes: { type: String, default: 'w-full py-3 rounded-lg font-semibold' },
    disabled: { type: Boolean, default: false },
    disabledClass: { type: String, default: 'bg-[#8c9ebd] text-gray-600 cursor-not-allowed' }
})
</script>