export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image", "@nuxt/fonts"],
  css: ["@/assets/css/global.css"],
  typescript: {
    typeCheck: true,
  },
});
