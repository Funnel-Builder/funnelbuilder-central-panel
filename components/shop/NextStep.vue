<template>
    <div>
        <div>
            <div class="set_anim pb-8">
                <div>
                    <FileUploadFileUploader />
                    <div class="pt-4">
                        <p class="text-[#5A78AD]"><small>Description</small></p>
                        <Textarea placeholder="write here ..." style="background-color: #EFF1F7 !important;"
                            class="mt-3 w-full h-20 md:h-20 text-xs md:text-lg flex items-center focus:shadow-none" rows="5"
                            cols="6" />
                        <p class="text-[#5A78AD]"><small>Phone number</small></p>
                        <InputText placeholder="Enter your number" style="background-color: #EFF1F7 !important;" type="text"
                            class="mt-3 w-full h-10 md:h-12 text-xs md:text-lg flex items-center focus:shadow-none" />
                        <p class="text-[#5A78AD]"><small>Shp email</small></p>
                        <InputText placeholder="Enter a email to manage your shop"
                            style="background-color: #EFF1F7 !important;" type="text"
                            class="mt-3 w-full h-10 md:h-12 text-xs md:text-lg flex items-center focus:shadow-none" />
                        <p class="text-[#5A78AD] py-1"><small>Shop address</small></p>
                        <InputText placeholder="Enter shop address" style="background-color: #EFF1F7 !important;"
                            type="text"
                            class="mt-3 w-full h-10 md:h-12 text-xs md:text-lg flex items-center focus:shadow-none" />
                    </div>
                </div>
                <div class="w-full pt-4">
                    <Button style="background-color: #5A78AD; border: none; border-radius: 15px;"
                        class="w-full h-10 md:h-12 text-xs md:text-lg focus:shadow-none" label="Create" />
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
</script>
<style scoped>
.set_anim {
    opacity: 0.1;
    animation: fadeIn .61s ease forwards;
}

@keyframes fadeIn {
    from {
        opacity: 0.1;
    }

    to {
        opacity: 1;
    }
}
</style>