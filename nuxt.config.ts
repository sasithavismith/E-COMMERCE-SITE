// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['vuetify/lib/styles/main.sass', '@mdi/font/css/materialdesignicons.min.css'],
  build: {
    transpile: ['vuetify'],
  },
  devtools: { enabled: true },
  
  modules: ["@pinia/nuxt"],

  imports: {
    dirs: ["store/**", "composables/**", "types/**"],
  },
  pinia: {
    autoImports: ["defineStore"],
  },
  ssr: false,
});
