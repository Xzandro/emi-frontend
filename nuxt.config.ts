// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },

  app: {
    head: {
      titleTemplate: '%s | unsere-hausarztpraxis.de',
      title: 'emi-frontend',
      htmlAttrs: {
        lang: 'de',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
    },
  },

  googleFonts: {
    families: {
      Barlow: [400, 500, 600, 700],
      'Barlow Semi Condensed': [400, 700],
      'Nothing You Could Do': [400],
    },
  },

  runtimeConfig: {
    strapi: {
      url: process.env.STRAPI_URL || 'http://localhost:1337',
    },
    public: {
      strapi: {
        url: process.env.STRAPI_URL || 'http://localhost:1337',
      },
    },
  },

  i18n: {
    defaultLocale: 'de',
    baseUrl: process.env.BASE_URL,
    vueI18n: './nuxt-i18n.js',
    strategy: 'prefix_except_default',
    compilation: {
      strictMessage: false,
    },
    detectBrowserLanguage: {
      fallbackLocale: 'de',
      alwaysRedirect: true,
      useCookie: true,
      cookieKey: 'lang',
    },
  },

  css: ['@/assets/main.scss'],

  vuetify: {
    moduleOptions: {
      styles: {
        configFile: 'assets/variables.scss',
      },
      ssrClientHints: {
        viewportSize: true,
      },
    },

    vuetifyOptions: {
      display: {
        mobileBreakpoint: 'lg',
      },
      icons: {
        defaultSet: 'mdi',
        sets: [
          {
            name: 'mdi',
            cdn: 'https://cdn.jsdelivr.net/npm/@mdi/font@7.x/css/materialdesignicons.min.css',
          },
        ],
      },
    },
  },

  modules: ['vuetify-nuxt-module', '@nuxtjs/google-fonts', '@nuxtjs/strapi', '@nuxtjs/i18n', '@pinia/nuxt', 'vue3-carousel-nuxt'],
});
