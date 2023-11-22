<template>
    <div class="min-h-screen set_layout_bg">
        <div class="flex justify-center pt-28  md:pb-12 ">
            <ShareLogo classes="w-60" />
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
    height: 100vh;
}

.set_layout_bg {
    @extend .bg_property;
    background-image: url('../public/shop/shop-group.svg');
}

@media only screen and (max-width: 768px) {
    .set_layout_bg {
        @extend .bg_property;
        background-image: url('../public/shop/sm-shop-group.svg');
    }
}
</style>