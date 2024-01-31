<template>
    <div class="min-h-screen set_layout_bg">
        <div class="flex justify-center pt-24 md:pt-10 md:pb-8 ">
            <utilities-Logo classes="w-60 md:w-full" />
        </div>
        <slot />
    </div>
</template>

<script setup lang="ts">

</script>
<style scoped lang="scss">
.bg_property {
    background-repeat: no-repeat;
    width: 100%;
    background-size: cover;
    background-position: center;
    padding-bottom: 20px;
    min-height: 100vh;
}

.set_layout_bg {
    @extend .bg_property;
    background-image: url('/shop/shop-group.svg');

    @media only screen and (max-width: 768px) {
        background-image: url('/shop/sm-shop-group.svg');
    }
}
</style>