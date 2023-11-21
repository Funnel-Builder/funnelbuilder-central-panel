// https://nuxt.com/docs/api/configuration/nuxt-config
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
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  primevue: {
    usePrimeVue: false,
  }
})
