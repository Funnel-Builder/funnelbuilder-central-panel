import { defineStore } from "pinia";
export const useAuthStore = defineStore('auth', {
    state: () => ({
        token: accessToken() || null,
        user: getUser() || null,
        user_email: ''
    }),
    getters: {
        isLoggedIn: (state) => {
            return !!(state.token && (state.user && Object.keys(state.user).length))
        }
    },
    actions: {
        setToken(token) {
            setAccessToken(token)
        },
        setUser(user) {
            this.user = user
            setUser(user)
        },
        setOtpCookies(email, from) {
            setOtpCookies({ email, from })
        },
        clearAuth() {
            resetAllCookies()
        },
        setUserMail(email){
            this.user_email = email
        },
        async register(payload) {
            const { data, pending, error, refresh } = await postData('register', payload)
            if (data) {
                this.setToken(data.value?.authorization)
                this.setUser(data.value?.user)
                this.setOtpCookies(this.user?.email, 'register')
            }
            return {data, pending, error, refresh}
        },
        async login(payload) {
            const {data, pending, error, refresh} = await postData('login', payload)
            if (data) {
                this.setToken(data.value?.authorization)
                this.setUser(data.value?.user)
                this.setOtpCookies(this.user?.email, 'login')
            }
            return {data, pending, error, refresh}
        },
        async refreshToken() {
            const { data, pending, error, refresh } = await postData('refresh_token')
            if (data) {
                this.setToken(data.value)
                setUser(getUser())
            }
        },
        async getLoggedUser() {
            const { data, pending, error, refresh } = await getData('user')
            if (data) {
                this.setUser(data.value?.data)
            }
            return { data, pending, error, refresh }
        },
        async logout() {
            const {data, pending, error, refresh} = await postData('logout')
            if (data) {
                this.clearAuth()
                this.user = null
                this.token = null
            }
            return {data, pending, error, refresh}
        }
    },
    persist: true
})