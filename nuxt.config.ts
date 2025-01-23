// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt',
        '@nuxtjs/i18n',
        '@nuxt/eslint',
    ],

    pages: true,

    components: {
        dirs: ['presentation/components'],
    },

    imports: {
        dirs: ['presentation/composables', '/stores'],
    },
    devtools: {enabled: true},

    css: ['/presentation/assets/main.css'],
    dir: {
        pages: 'presentation/pages',
        layouts: 'presentation/layouts',
    },

    srcDir: 'src/', compatibilityDate: '2024-11-01',
})