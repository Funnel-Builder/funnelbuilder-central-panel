<template>
    <div>
        <div v-if="loading">
            <div class="flex justify-center">
                <Skeleton width="10rem" height="4rem"></Skeleton>
            </div>
            <Skeleton style="height: 40px;" class="mb-2"></Skeleton>
            <Skeleton style="height: 40px;" class="mb-2"></Skeleton>
            <Skeleton style="height: 40px;" class="mb-2"></Skeleton>
        </div>
        <div v-else>
            <div>
                <div class="pb-8">
                    <div class="flex justify-center">
                        <FileUpload style="height: 50px; background-color: #5A78AD;" mode="basic" name="demo[]"
                            accept="image/*" :maxFileSize="1000000" />
                    </div>
                    <div class="pt-4">
                        <p class="text-[#5A78AD] py-1"><small>Description</small></p>
                        <Textarea placeholder="write here ..." style="background-color: #EFF1F7 !important;"
                            class="mt-3 w-full h-20 md:h-28 text-xs md:text-lg flex items-center focus:shadow-none" rows="5"
                            cols="10" />
                            <p class="text-[#5A78AD] py-1"><small>Phone number</small></p>
                        <InputText placeholder="Enter your number" style="background-color: #EFF1F7 !important;" type="text"
                            class="mt-3 w-full h-10 md:h-14 text-xs md:text-lg flex items-center focus:shadow-none" />
                            <p class="text-[#5A78AD] py-1"><small>Shp email</small></p>
                        <InputText placeholder="Enter a email to manage your shop" style="background-color: #EFF1F7 !important;" type="text"
                            class="mt-3 w-full h-10 md:h-14 text-xs md:text-lg flex items-center focus:shadow-none" />
                            <p class="text-[#5A78AD] py-1"><small>Shop address</small></p>
                        <InputText placeholder="Enter shop address" style="background-color: #EFF1F7 !important;" type="text"
                            class="mt-3 w-full h-10 md:h-14 text-xs md:text-lg flex items-center focus:shadow-none" />
                    </div>
                </div>
                <div class="w-full">
                    <Button style="background-color: #5A78AD; border: none; border-radius: 15px;"
                        class="w-full h-10 md:h-14 text-xs md:text-lg focus:shadow-none" label="Create" />
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
const loading = ref(true);
onMounted(() => {
    setTimeout(() => {
        loading.value = false;
    }, 100);
});
</script>