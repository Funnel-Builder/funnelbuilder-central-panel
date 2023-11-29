<template>
    <div class="container mx-auto px-4 md:px-1">
        <div class="flex justify-center items-center h-screen">
            <div class="w-full sm:w-[80%] md:w-[70%] lg:w-[40%] xl:w-[35%]">
                <div>
                    <utilities-otp-shooter validUntil="2023-11-29T08:47:13.978Z"/>
                </div>
                <div class="pt-8 flex justify-center">
                    <button @click="removeUser" class="button flex border-2  items-center px-6 py-2 rounded-md text-white">Logout</button>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script setup>

definePageMeta({
    layout: 'auth'
});

const authStore = useAuthStore();
const router = useRouter();


const removeUser = async() => {
    const {data} = await authStore.logout();
    if(data.value.message === 'User logged out successfully'){
        await router.push('/login')
    }
}
</script>
<style scoped>
.button:hover {
  background: white;
  color: black;
  border: 2px solid rgb(185, 93, 93);
  transition: .6s;
}
</style>
  
  
  