export default defineNuxtConfig({
  vite: {
    plugins: [
      require('dotenv').config()
    ]
  },
  devtools: { enabled: true },
  ssr: true,
  css: [
    "@/assets/css/tailwind.css",
    "@/assets/scss/main.scss",
    "primevue/resources/themes/md-light-indigo/theme.css",
    "primeicons/primeicons.css",
  ],
  modules: [
    'nuxt-primevue',
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss'
  ],
  build: {
    transpile: ['vue-toastification']
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  primevue: {
    usePrimeVue: false,
  },
  runtimeConfig: {
    public: {
      baseURL: this.$env.BASE_URL || 'https://auth-service-webserver/api/',
      sellerServiceFrontendURL: this.$env.SELLER_PANEL_URL || 'https://seller-service-webserver/',
    },
  }
});
