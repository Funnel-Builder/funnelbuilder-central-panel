import PrimeVue from 'primevue/config';
import Tailwind from 'primevue/passthrough/tailwind';

export default defineNuxtPlugin((app) => {
    app.vueApp.use(PrimeVue, {
        unstyled: true,
        pt: Tailwind,
        components: {
            include: '*',
            exclude: ['Editor'],
        },
    });
});