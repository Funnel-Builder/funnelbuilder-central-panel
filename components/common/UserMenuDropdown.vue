<template>
  <div>
    <div class="dropdown">
      <div class="dropbtn flex justify-between items-center p-4 py-2 gap-x-2 cursor-pointer rounded-md">
        <div class="flex items-center gap-x-2  rounded-full cursor-pointer">
          <img loading="lazy" class="md:hidden lg:block h-[16px] lg:h-[20px]" src="/landing/userIconWhite.svg" alt="logo"/>
<!--          <p class="text-[12px] lg:text-[14px] font-[600] text-white">{{ truncatedUserName }}</p>-->
        </div>
<!--        <div class="hidden md:block items-center">-->
<!--          <i  class="pi pi-bars menu" style="font-size: 20px; color:white;"></i>-->
<!--        </div>-->
      </div>
      <div class="dropdown-content rounded-md">
        <a @click="getUserInfo" class="rounded-md">
          <div class="text-center">
            <p class="text-[12px] p-1 lg:text-[14px]  font-[600] ">Go To Shop</p>
          </div>
        </a>
        <a class="rounded-md">
          <div @click="logout()" class="text-center p-1 ">
            <p class="text-[12px] lg:text-[14px]  font-[600] ">Logout</p>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>


<script setup>
import {goToShopPanel, urlService} from "~/composables/helper.js";

const authStore = useAuthStore();
const router = useRouter();
const showDropdownMenu = ref(false);
const userInfo = ref({});

const toggleDropdownMenu = () => {
  showDropdownMenu.value = !showDropdownMenu.value;
  console.log(showDropdownMenu.value);
};

const getUserInfo = async () => {
  const {data, pending, error, refresh} = await authStore.getLoggedUser();
  if(error && error.value) {
    console.log(error);
  } else {
    userInfo.value = data.value.data;
    if(userInfo.value.shop_id) {
      await goToShop();
    } else {
      if (userInfo.value.shop_count > 0) {
        await router.push('/shop');
      } else {
        await router.push('/shop/create');
      }
    }
  }
};

const goToShop = async () => {
  const { data, pending, error, refresh } = await getData('get-secret?shop_id=' + userInfo.value.shop_id)
  if (error && error.value) {
    console.log(error);
  }
  else {
    goToShopPanel(userInfo.value.shop_id, data.value?.sub_domain, data.value.data)
  }
}




const logout = async () => {
  const {data, pending, error, refresh} = await authStore.logout();
  if (error && error.value) {
    console.log(error);
  } else {
    // await router.push('/');
    let redirectUrl = urlService('seller-front')
    window.location.href = `${redirectUrl}/auth/logout`
  }
};

const truncatedUserName = computed(() => {
  const userName = authStore.user.name;
  return userName.substring(0, 5).toUpperCase();
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