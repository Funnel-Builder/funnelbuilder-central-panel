<template>
  <div>
    <div class="dropdown">
      <div class="dropbtn flex justify-between items-center p-4 py-2 gap-x-2 cursor-pointer rounded-md">
        <div class="flex items-center gap-x-2  rounded-full cursor-pointer">
          <img class="md:hidden lg:block h-[16px] lg:h-[20px]" src="/landing/userIconWhite.svg" alt="logo"/>
          <p class="text-[12px] lg:text-[14px] font-[600] text-white">{{ truncatedUserName }}</p>
        </div>
        <i class="pi pi-bars menu" style="font-size: 20px; color:white;"></i>
      </div>
      <div class="dropdown-content rounded-md">
        <a class="rounded-md">
          <div class="text-center">
            <nuxt-link to="shop" class="text-[12px] p-0 lg:text-[14px]  font-[600] ">Go To Shop</nuxt-link>
          </div>
        </a>
        <a class="rounded-md">
          <div @click="logout" class="text-center p-1 ">
            <p class="text-[12px] lg:text-[14px]  font-[600] ">Logout</p>
          </div>
        </a>
      </div>
    </div>

<!--    <div v-if="authStore.user" class="flex items-center gap-x-2">-->
<!--      <nuxt-link to="shop" class="text-[12px] lg:text-[14px] px-3.5 py-1.5 gap-x-2 rounded-full cursor-pointer font-[600] bg-[#eff1f7] text-[#5a78ad] hover:bg-[#5a78ad] hover:text-[white] hover:transition-all">Go To Shop</nuxt-link>-->
<!--      <div class="flex justify-between items-center gap-x-2 px-3 py-1.5 rounded-full cursor-pointer"-->
<!--           style=" background-color:#eff1f7; ">-->
<!--        <img class="md:hidden lg:block h-[16px] lg:h-[20px]" src="/landing/userIcon.svg" alt="logo"/>-->
<!--        <p class="text-[12px] lg:text-[14px] font-[600]" style="color:#5a78ad;">{{ truncatedUserName }}</p>-->
<!--      </div>-->
<!--      <div>-->
<!--        <div @click="logout" class="flex justify-center items-center hover:shadow-2xl hover:shadow-red-700 gap-x-2 rounded-full cursor-pointer"-->
<!--             style=" background-color:#5a78ad;">-->
<!--          <i class="pi pi-sign-out p-1 lg:p-2.5" style="color:white; font-size:0.8rem;"></i>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
  </div>
</template>


<script setup>
const authStore = useAuthStore();
const router = useRouter();
const showDropdownMenu = ref(false);

const toggleDropdownMenu = () => {
  showDropdownMenu.value = !showDropdownMenu.value;
  console.log(showDropdownMenu.value);
};


const logout = async () => {
  const {data, pending, error, refresh} = await authStore.logout();
  await router.push('/');
};

const truncatedUserName = computed(() => {
  const userName = authStore.user.name;
  return userName.substring(0, 2).toUpperCase();
});

</script>

<style scoped>

.dropbtn {
  background-color: #5a78ad;
  color: white;
  font-size: 16px;
  border: none;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  right: 0;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  cursor: pointer;
  padding: 4px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {background-color: #5a78ad; color:white;}

.dropdown:hover .dropdown-content {display: block;}

.dropdown:hover .dropbtn {background-color: #dd6c0d;}

</style>