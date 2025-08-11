// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },

  googleFonts: {
    families: {
      Barlow: [400, 500, 700],
      'Nothing You Could Do': [400],
    },
  },

  i18n: {
    lazy: true,
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

  css: ['@/assets/main.scss'],

  modules: ['vuetify-nuxt-module', '@nuxtjs/google-fonts', '@nuxtjs/strapi', '@nuxtjs/i18n'],
});
