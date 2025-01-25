// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxtjs/i18n',
    '@nuxt/eslint',
  ],

  i18n: {
    lazy: true,
    defaultLocale: 'fr',
    langDir: '../src/infrastructure/i18n/locales/',
    strategy: 'prefix',
    locales: [
      {
        code: 'en',
        name: 'English',
        iso: 'en-US',
        file: 'en.ts',
      },
      {
        code: 'fr',
        name: 'Français',
        iso: 'fr-FR',
        file: 'fr.ts',
      },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      alwaysRedirect: true,
      redirectOn: 'root', // Redirige uniquement sur la homepage
    },
  },

  pages: true,

  components: {
    dirs: ['presentation/components'],
  },

  imports: {
    dirs: ['presentation/composables', '/stores'],
  },
  devtools: { enabled: true },

  css: ['/presentation/assets/main.css'],
  dir: {
    pages: 'presentation/pages',
    layouts: 'presentation/layouts',
  },

  srcDir: 'src/',

  compatibilityDate: '2024-11-01',
});