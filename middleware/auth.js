export default defineNuxtRouteMiddleware((to, from) => {
    const authStore = useAuthStore()
    const { isLoggedIn } = storeToRefs(authStore)
    if (!isLoggedIn) {
        return navigateTo('/login?next=' + to.path)
    }
})