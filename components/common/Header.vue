<template>
  <div>
    <!--    For Web View -->
    <div class="hidden shadow md:flex  justify-between items-center  nav px-8">
      <div class="container grid grid-cols-4 items-center mx-auto">
        <div class="col-span-1">
          <utilities-logo classes="md:h-[50px] lg:h-[70px]"></utilities-logo>
        </div>
        <div class="w-full col-span-2">
          <div class="flex justify-center items-center gap-x-0 lg:gap-x-2">
            <div v-for="(item ,i) in items">
              <nuxt-link :to="item.link"
                         class="navItem"
                         :class="{ 'router-link-active': isActive(item.link) }">
                <span class=" md:text-[14px] lg:text-[16px] ">{{ item.label }}</span>
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="flex justify-end col-span-1 z-99">
          <div v-if="authStore.isLoggedIn" class="flex items-center gap-x-2">
            <CommonUserMenuDropdown></CommonUserMenuDropdown>
          </div>
          <div v-else class="flex justify-center items-center xl:gap-x-2 2xl:gap-x-0">
            <nuxt-link to="/register">
              <span class="navItem text-[14px] lg:text-[16px] ">Sign up</span>
            </nuxt-link>
            <nuxt-link to="/login">
              <span class="navItem text-[14px] lg:text-[16px] ">Login</span>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <!--    For Mobile View -->
    <div class="w-full flex md:hidden">
      <div class="nav shadow flex justify-between items-center w-full px-4 py-3">
        <div>
          <img loading="lazy" class="h-[50px] md:h-[70px]" src="/landing/logo.svg" alt="logo"/>
        </div>
        <div class="flex justify-center items-center gap-x-2">
         <div v-if="authStore.isLoggedIn">
<!--           <nuxt-link to="/login" class="text-[14px]  md:text-[16px] rounded-full font-[600]"-->
<!--                      style="padding: 8px 12px; background-color:#eff1f7; color:#5A78AD">Go to Shop-->
<!--           </nuxt-link>-->
         </div>
          <div v-if="!authStore.isLoggedIn">
            <nuxt-link to="/login" class="text-[14px] md:text-[16px] rounded-full font-[600]"
                       style="padding: 6px 14px; background-color:#5A78AD; color:white">Login
            </nuxt-link>
          </div>
          <i @click="showMenu()" class="pi pi-bars menu" style="font-size: 20px; padding:10px; color:#5A78AD;"></i>
        </div>
      </div>
      <div :class="showMobileMenu ? 'block' : 'hidden'" class="text">
        <div class="nav-menu">
          <div class="flex justify-end items-center gap-x-2">
            <div v-if="authStore.isLoggedIn" class="flex items-center gap-x-2">
              <CommonUserMenuDropdown></CommonUserMenuDropdown>
<!--              <nuxt-link to="shop" class="text-[14px] px-2 py-1.5 gap-x-2 rounded-full cursor-pointer font-[600]" style="background-color:#eff1f7; color:#5a78ad;">Go To Shop</nuxt-link>-->
<!--              <div class="flex justify-center items-center px-4 py-1.5 gap-x-2 rounded-full"-->
<!--                   style=" background-color:#eff1f7;">-->
<!--                <img loading="lazy" loading="lazy" class="h-[20px]" src="/landing/userIcon.svg" alt="logo"/>-->
<!--                <p class="text-[14px] font-[600]" style="color:#5a78ad;">{{ truncatedUserName }}</p>-->
<!--              </div>-->
            </div>
            <div v-if="!authStore.isLoggedIn">
              <nuxt-link to="/login" class="text-[14px] md:text-[16px] rounded-full font-[600]"
                         style="padding: 6px 14px; background-color:#5A78AD; color:white">Login
              </nuxt-link>
            </div>
            <i @click="closeMenu" class="pi pi-times-circle menu"
               style="font-size: 18px; padding:8px;  background-color:#5A78AD;  color:#ffffff;"></i>
          </div>
          <div class="px-4 py-12" style="">
            <div v-for="(item ,i) in items" class="py-2">
              <nuxt-link :to="item.link" @click="closeMenu">
                <span class="px-2 ">{{ item.label }}</span>
              </nuxt-link>
            </div>
            <div v-if="authStore.isLoggedIn" class="mt-8">
              <button @click="logout" class="flex justify-center items-center gap-x-2 px-8 py-1 rounded-[16px]" style="background-color:#5A78AD; color:#ffffff;">
                <i class="pi pi-sign-out" style="font-size: 15px; padding:2px 2px; color:#ffffff;"></i>
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const authStore = useAuthStore();
const router = useRouter();

const items = ref([
  {label: 'Home', link: '/'},
  {label: 'Feature', link: '#feature'},
  {label: 'Pricing', link: '#pricing'},
  {label: 'Contact Us', link: '#contact'}
]);


const isActive = (link) => {
  return router.currentRoute.value.path === link;
};
const menu = ref();
const itemss = ref([
  {
    label: 'Options',
    items: [
      {
        label: 'Refresh',
        icon: 'pi pi-refresh'
      },
      {
        label: 'Export',
        icon: 'pi pi-upload'
      }
    ]
  }
]);

const toggle = (event) => {
  menu.value.toggle(event);
};


const showMobileMenu = ref(false);
const showMenu = () => {
  showMobileMenu.value = !showMobileMenu.value;
};
const closeMenu = () => {
  showMobileMenu.value = false;
};

const logout = async () => {
  const {data, pending, error, refresh} = await authStore.logout();
  await router.push('/');
  showMobileMenu.value = false;

};

const truncatedUserName = computed(() => {
  const userName = authStore.user.name;
  return userName.substring(0, 2).toUpperCase();
});
</script>

<style scoped lang="scss">
.nav {
  background: rgba(255, 255, 255, 0.8);
  //overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  backdrop-filter: blur(10px);
}


.navItem {
  border-radius: 16px;
  padding: 5px 10px;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.3s ease; /* Smooth transition for color change */
}

/* Hover styles */
.navItem:hover {
  color: #ffffff;
  background: #5A78AD;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 16px;
  transition: 0.5s;
}

.btn {
  background: white;
  border-radius: 16px;
  color: black;
  padding: 6px 10px;
  margin: 0;
  font-size: 14px;
}

.menu {
  background-color: #eff1f7;
  margin: 0;
  padding: 0;
  border-radius: 50%;
}

@media screen and (max-width: 768px) {
  .nav-menu {
    padding: 20px;
    background: rgba(255, 255, 255, 0.8); /* Adjust the alpha value for transparency */
    overflow: hidden;
    position: fixed;
    top: 0;
    width: 100%;
    height: auto;
    z-index: 1000;
    backdrop-filter: blur(10px);

  }
  .open-menu {
    opacity: 1;
    height: 150px;
    transition: all 0.2s ease-in-out;
  }
  .closed-menu {
    opacity: 0;
    height: 0;
    padding: 0;
    transition: all 0.3s ease-in-out;
  }
  .nav-content {
    flex-direction: column;
    z-index: 100;
    position: relative;
    transition: all 0.3s ease-out;
  }
  .nav-items {
    flex-direction: column;
  }
  i {
    display: block;
    text-align: right;
    padding: 0 10px 10px 0;
  }
  .test {
    transition: all 0.3s ease; /* Smooth transition for color change */
  }
}
</style>