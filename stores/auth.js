import { defineStore } from "pinia";
export const useAuthStore = defineStore('auth', {
    state: () => ({
        isAuthenticate: !!accessToken(),
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
            return {data, pending, error, refresh}
        },
        async login(payload) {
            const {data, pending, error, refresh} = await postData('login', payload)
            if (data) {
                this.setToken(data.value?.authorization)
                this.setUser(data.value?.user)
            }
            return {data, pending, error, refresh}
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
            return {data, pending, error, refresh}
        },
        async logout() {
            const {data, pending, error, refresh} = await postData('logout')
            if (data) {
                this.clearAuth()
                const router = useRouter()
                router.push('/')
            }
            return {data, pending, error, refresh}
        },
        clearAuth() {
            this.token = null
            this.user = null
            this.isAuthenticate= false

        }
    },
    persist: true
})