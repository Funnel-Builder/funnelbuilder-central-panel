import {navigateTo} from "#app";

export default defineNuxtRouteMiddleware((to, from) => {
    const authStore = useAuthStore()
    if (authStore.isLoggedIn && authStore.isVerified) {
        return navigateTo('/')
    }
})