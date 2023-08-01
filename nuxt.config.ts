// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/strapi', '@nuxt/image'],
  css: ['~/assets/scss/main.scss'],

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
            '@use "@/assets/scss/vars/_colors.scss" as *; @use "@/assets/scss/vars/_fonts.scss" as *;',
        },
      },
    },
  },

  // @ts-ignore
  strapi: {
    url: process.env.STRAPI_URL || 'http://localhost:1337',
  },
});
