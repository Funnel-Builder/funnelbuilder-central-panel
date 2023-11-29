<template>
  <div>
    <!--    For Web View -->
    <div class="hidden md:flex justify-between items-center nav px-8">
      <div>
        <img src="/landing/logo.svg" alt="logo"/>
      </div>
      <div class="flex justify-center items-center lg:gap-x-6  xl:gap-x-8 2xl:gap-x-12">
        <div v-for="(item ,i) in items">
          <nuxt-link class="navActive" :to="item.link">
            <span class="navItem text-[14px] md:text-[16px] ">{{ item.label }}</span>
          </nuxt-link>
        </div>
      </div>
      <div>
        <div v-if="storeToRefs(authStore.isLoggedIn)" class="flex items-center gap-x-2">
          <CommonUserMenuDropdown></CommonUserMenuDropdown>
        </div>
        <div v-else class="flex justify-center items-center xl:gap-x-2 2xl:gap-x-6">
          <nuxt-link to="/register">
            <span class="navItem text-[14px] md:text-[16px] ">Sign up</span>
          </nuxt-link>
          <nuxt-link to="/login">
            <span class="navItem text-[14px] md:text-[16px] ">Get Started</span>
          </nuxt-link>
        </div>
      </div>
    </div>
    <!--    For Mobile View -->
    <div class="w-full flex md:hidden">
      <div class="nav flex justify-between items-center w-full px-4 py-3">
        <div>
          <img class="h-[50px] md:h-[70px]" src="/landing/logo.svg" alt="logo"/>
        </div>
        <div class="flex justify-center items-center gap-x-2">
          <nuxt-link to="/login" class="text-[14px] md:text-[16px] rounded-full font-[600]"
                     style="padding: 4px 10px; background-color:#5A78AD; color:white">Get Started
          </nuxt-link>
          <i @click="showMenu()" class="pi pi-bars menu" style="font-size: 20px; padding:10px; color:#5A78AD;"></i>
        </div>
      </div>
      <div :class="showMobileMenu ? 'open-menu' : 'closed-menu'" class="text">
        <div class="nav-menu">
          <div class="flex justify-end items-center gap-x-2">
            <div class="flex justify-center items-center px-4 py-2 gap-x-2 rounded-full"
                 style=" background-color:#eff1f7;">
              <img src="/landing/userIcon.svg" alt="logo"/>
              <p class="text-[14px] font-[600]" style="color:#5a78ad;">Rick Lichard</p>
            </div>
            <i @click="closeMenu" class="pi pi-times-circle menu"
               style="font-size: 20px; padding:10px;  background-color:#5A78AD;  color:#ffffff;"></i>
          </div>
          <div class="px-4 py-12" style="">
            <div v-for="(item ,i) in items" class="py-2">
              <nuxt-link :to="item.link">
                <span class="px-2 ">{{ item.label }}</span>
              </nuxt-link>
            </div>
            <div class="mt-8">
              <button class="flex justify-center items-center gap-x-2 px-8 py-1 rounded-[16px]"
                      style="background-color:#5A78AD; color:#ffffff;"><i class="pi pi-sign-out"
                                                                          style="font-size: 15px; padding:2px 2px; color:#ffffff;"></i>Logout
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
const items = ref([
  {label: 'Home', link: '/'},
  {label: 'Feature', link: '/feature'},
  {label: 'Pricing', link: '/pricing'},
  {label: 'Contact Us', link: '/contact-us'},
]);

const showMobileMenu = ref(false);
const showMenu = () => {
  showMobileMenu.value = !showMobileMenu.value;
};
const closeMenu = () => {
  showMobileMenu.value = false;
};

</script>

<style scoped lang="scss">
.nav {
  background: #ffffff;
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
}

.router-link-active {
  padding: 4px 10px;
  font-weight: 600;
  color: #ffffff;
  background: #5A78AD;
  border-radius: 16px;
}

.navItem {
  border-radius: 16px;
  padding: 4px 10px;
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
    background: white;
    overflow: hidden;
    position: fixed;
    top: 0;
    width: 100%;
    height: auto;
    z-index: 1000;
  }
  .open-menu {
    opacity: 1;
    height: 150px;
    //transition:all 0.1s ease-in-out;
  }
  .closed-menu {
    opacity: 0;
    height: 0;
    padding: 0;
    //transition:all 0.1s ease-in-out
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