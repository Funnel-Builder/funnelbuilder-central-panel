import { defineStore } from "pinia";
export const useAuthStore = defineStore('auth', {
    state: () => ({
        token: accessToken() || null,
        user: getUser() || null
    }),
    getters: {
        isLoggedIn: (state) => {
            return !!state.token
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
        async register(payload) {
            const {data, pending, error, refresh} = await postData('register', payload)
            if (data) {
                this.setToken(data.value?.authorization)
                this.setUser(data.value?.user)
            }
        },
        async login(payload) {
            const {data, pending, error, refresh} = await postData('login', payload)
            if (data) {
                this.setToken(data.value?.authorization)
                this.setUser(data.value?.user)
            }
        },
        async refreshToken() {
            const {data, pending, error, refresh} = await postData('refresh_token')
            if (data) {
                this.setToken(data.value)
                setUser(getUser())
            }
        },
        async getLoggedUser() {
            const {data, pending, error, refresh} = await getData('user')
            if (data) {
                this.setUser(data.value?.data)
            }
        },
        async logout() {
            const {data, pending, error, refresh} = await postData('logout')
            if (data) {
                resetAllCookies()
            }
        }
    },
    persist: true
})