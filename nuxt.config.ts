import tailwindcss from "@tailwindcss/vite"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: [],
  vite: {
    plugins: [tailwindcss()],
  },
  app: {
    head: {
      link: [{ rel: "icon", type: "image/svg+xml", href: "/zevent.svg" }],
    },
  },

  runtimeConfig: {
    twitchClientId: process.env.TWITCH_CLIENT_ID,
    twitchClientSecret: process.env.TWITCH_CLIENT_SECRET,
    twitchClientToken: process.env.TWITCH_CLIENT_TOKEN,
  },
})
