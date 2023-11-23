<template>
    <div class="container mx-auto">
        <div class="flex justify-center items-center">
            <div class="w-full lg:w-[60%]">
                <div class="w-full flex flex-col items-center">
                    <div class="text-center pb-10">
                        <h2 class="text-[#5A78AD] text-[24px] md:text-[32px] font-bold">Create Shop</h2>
                        <p class="text-[12px] md:text-[14px]">Create your own shop. Enter shop credentials</p>
                    </div>
                    <div class="flex flex-col w-full justify-start">
                        <div class="w-full ">
                            <div>
                                <p class="pb-1"><small class="text-[#5A78AD]">Shop Url</small></p>
                                <div class="flex items-center">
                                    <div class="w-[92%]">
                                        <InputGroup style="background-color: #EFF1F7;" class="rounded-md ">
                                            <InputText style="background-color: #EFF1F7;"
                                                class="border-0 w-full h-10 md:h-14 text-xs md:text-lg flex items-center focus:shadow-none"
                                                id="phone" type="text" />
                                            <InputGroupAddon style="background-color: #EFF1F7; color: gray;"
                                                class="w-full md:w-[50%] h-10 md:h-14 text-xs md:text-lg flex items-center focus:shadow-none">
                                                .funnelbuilder.com
                                            </InputGroupAddon>
                                        </InputGroup>
                                    </div>
                                    <div class="pl-2 md:pl-4">
                                        <i class="pi pi-spin pi-spinner custom_class loading"></i>
                                        <!-- <i class="pi pi-verified success"></i>
                                        <i class="pi pi-ban failed"></i> -->
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="w-[92%]">
                            <div class="pt-3">
                                <p class="pb-1"><small class="text-[#5A78AD]">Shop Name</small></p>
                                <InputText style="background-color: #EFF1F7 !important;" type="text"
                                    class="w-full h-10 md:h-14 text-xs md:text-lg flex items-center focus:shadow-none" />
                            </div>
                            <p class="py-2"><small>By clicking below, you agree to the <a class="underline"
                                        href="#">BDFunnelBuilder</a> Terms of Service and <a class="underline"
                                        href="#">Privacy Policy</a>.</small></p>
                            <div class="w-full pt-5">
                                <buttons-primary-button text="Continue" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </div>
</template>
  
<script setup lang="ts">

definePageMeta({
    layout: 'shop'
})
const selectedCity = ref();
const shop = ref([
    { name: 'xyz shop', code: 'xyz' },
    { name: 'xyz2 shop', code: 'xyz' },
]);
</script>

<style lang="scss" scoped>
@mixin iconColor($color) {
    color: $color;
    font-size: 1.5rem;
    background: none !important;

    @media only screen and (max-width: 768px) {
        font-size: 1rem;
    }
}


.loading {
    @include iconColor(black)
}

.success {
    @include iconColor(green)
}

.failed {
    @include iconColor(red)
}
</style>