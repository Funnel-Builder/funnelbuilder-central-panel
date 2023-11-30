export default defineNuxtRouteMiddleware((to, from) => {
    const authStore = useAuthStore()
    const { isVerified } = storeToRefs(authStore)
    console.log(isVerified);
    if (!isVerified) {
        return navigateTo('/login?next=' + to.path)
    }
})