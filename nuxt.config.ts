// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    'nuxt-primevue',
    '@pinia/nuxt',
  ],
  css: [
    "@/assets/scss/main.scss",
    "primevue/resources/themes/md-light-indigo/theme.css",
    "primeicons/primeicons.css",
  ],
  primevue: {
    options: {
      ripple: true
    },
    usePrimeVue: true,
    theme: 'md-light-indigo',
  }

})
