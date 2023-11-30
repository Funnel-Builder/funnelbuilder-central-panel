<template>
    <div class="container mx-auto px-4 md:px-1">
        <div class="flex justify-center items-center h-screen">
            <div class="w-full sm:w-[80%] md:w-[70%] lg:w-[40%] xl:w-[35%]">
                <div>
                    <utilities-password-otp-shooter validUntil="2023-11-29T08:47:13.978Z"/>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script setup>
definePageMeta({
    layout: 'auth'
});

</script>
<style scoped>
.button:hover {
  background: white;
  color: black;
  border: 2px solid rgb(185, 93, 93);
  transition: .6s;
}
</style>
  
  
  