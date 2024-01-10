export default defineNuxtRouteMiddleware((to, from) => {
    const token = useCookie('token')
    // const authStore = useAuthStore()
    // if (!authStore.isLoggedIn) {
    //     return navigateTo('/login?next=' + to.path)
    // }
    if (!token.value) {
        return navigateTo('/login?next=' + to.path)
    }
})