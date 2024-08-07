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
      appEnv: process.env.APP_ENV || 'production',
      appSecret: process.env.APP_SECRET || 'app-secret',
      baseURL: process.env.BASE_URL || 'https://auth-service-webserver/api/',
      subscriptionServiceURL: process.env.SUBSCRIPTION_SERVICE_URL || 'https://subscription-service-webserver/api/',
      sellerServiceFrontendURL: process.env.SELLER_PANEL_URL || 'https://seller-service-webserver/',
    },
  }
});
