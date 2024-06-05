export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    "@nuxt/image",
    '@pinia/nuxt',
    '@nuxtjs/svg-sprite',
    'nuxt-icon',
    'nuxt-swiper',
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @import "@/assets/scss/_mixins.scss";
          @import "@/assets/scss/_variables.scss";
          @import "@/assets/scss/_reset.scss";`,
        }
      }
    }
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'ru',
      },
      title: 'Люблю Еду',
      meta: [
        { name: 'description', content: 'Описание вашего сайта' },
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0' },
      ],
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "anonymous" },
        { href: "https://fonts.googleapis.com/css2?family=Reddit+Sans:ital,wght@0,200..900;1,200..900&display=swap", rel: "stylesheet" }
      ],
    },
    pageTransition: {
      name: 'fade',
      mode: 'out-in',
    },
  },
})
