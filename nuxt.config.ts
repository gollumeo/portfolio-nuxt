// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from '@tailwindcss/vite';
import { defineNuxtConfig } from 'nuxt/config';


export default defineNuxtConfig({
  modules: [
    '@nuxtjs/i18n',
    '@nuxt/eslint',
  ],

  vite: {
    plugins: [
      tailwindcss(),
    ],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "_fonts.scss" as *;',
        },
      },
    },
  },

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
      redirectOn: 'root',
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

  css: [
    '/presentation/assets/main.scss',
  ],
  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
    },
  },
  dir: {
    pages: 'presentation/pages',
    layouts: 'presentation/layouts',
  },

  srcDir: 'src/',

  compatibilityDate: '2024-11-01',
});