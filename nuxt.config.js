// https://nuxt.com/docs/api/configuration/nuxt-config

import axios from "axios";

export default defineNuxtConfig({
  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL,
  },
  devtools: { enabled: true },
  modules: ["@nuxtjs/strapi", "@nuxt/image", "nuxt-simple-sitemap"],
  css: ["~/assets/scss/main.scss"],

  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
          crossorigin: "",
        },
      ],
    },
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

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ["/"],
    },
  },

  // @ts-ignore
  strapi: {
    url: process.env.STRAPI_URL || "http://localhost:1337",
  },
});
