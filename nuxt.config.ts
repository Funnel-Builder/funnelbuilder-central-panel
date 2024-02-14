export default defineNuxtConfig({
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
      baseURL: process.env.BASE_URL || 'https://auth-service-webserver/api/',
      sellerServiceFrontendURL: process.env.SELLER_PANEL_URL || 'https://seller-service-webserver/',
    },
  }
});
console.log(process.env.BASE_URL)
console.log(process.env)
