// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: {enabled: true},

    modules: [
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt',


        '@nuxtjs/i18n'
    ],

    srcDir: 'src/',

    components: {
        dirs: ['presentation/components']
    },

    imports: {
        dirs: ['presentation/composables', '/stores']
    },

    pages: true,
    dir: {
        pages: 'presentation/pages',
        layouts: 'presentation/layouts'
    },

    css: ['/presentation/assets/main.css']
});
