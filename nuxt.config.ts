// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
  srcDir: 'src/',
  components: {
    dirs: ['presentation/components',],
  },
  imports: {
    dirs: ['src/composables', 'src/stores']
  },
  pages: true,
  css: ['@/presentation/assets/main.css'],
});
