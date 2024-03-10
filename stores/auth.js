import { defineStore } from "pinia";
export const useAuthStore = defineStore('auth', {
    state: () => ({
        token: accessToken() || null,
        user: getUser() || null,
        otp_email_time: null,
        authorization_code: '',
    }),
    getters: {
        isLoggedIn: (state) => {
            return !!(state.token) && !!(state.user)
        },
        isVerified: (state) => {
            return !!(state.user?.email_verified_at)
        },
    },
    actions: {
        setToken(token) {
            this.token = token
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
            this.user = null
            this.token = null
            resetAllCookies()
        },
        setUserMailAndTime(data){
            this.otp_email_time = data
        },
        setAuthorizationCode(code){
          this.authorization_code = code
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
                // if (this.user?.email_verified_at === null){
                //     this.setOtpCookies(this.user?.email, 'login')
                // }
            }
            return {data, pending, error, refresh}
        },
        async refreshToken() {
            const { data, pending, error, refresh } = await postData('refresh_token')
            if (error && error.value) {
                this.clearAuth()
            } else {
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
        async getOtp() {
            const { data, pending, error, refresh } = await postData('get-otp', { email: this.user?.email })
            if (data) {
                // this.setUserMailAndTime(data.value)
            }
            return { data, pending, error, refresh }
        },
        async logout() {
            const {data, pending, error, refresh} = await postData('logout')
            if (data) {
                // this.clearAuth()
            }
            return {data, pending, error, refresh}
        }
    }
})