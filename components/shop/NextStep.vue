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
                        <FileUpload style="height: 100px; background-color: #5A78AD;" mode="basic" name="demo[]"
                            accept="image/*" :maxFileSize="1000000" />
                    </div>
                    <div class="pt-4">
                        <Textarea style="background-color: #EFF1F7 !important;"
                            class="mt-3 w-full h-20 md:h-32 text-xs md:text-lg flex items-center focus:shadow-none" rows="5"
                            cols="10" />
                        <InputText style="background-color: #EFF1F7 !important;" type="text"
                            class="mt-3 w-full h-10 md:h-14 text-xs md:text-lg flex items-center focus:shadow-none" />
                        <InputText style="background-color: #EFF1F7 !important;" type="text"
                            class="mt-3 w-full h-10 md:h-14 text-xs md:text-lg flex items-center focus:shadow-none" />
                        <InputText style="background-color: #EFF1F7 !important;" type="text"
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