export default defineNuxtConfig({
  extends: 'content-wind',

  routeRules: {
    '/': { prerender: false }
  },

  compatibilityDate: '2024-07-17',
  modules: ["@nuxt/image"]
})
