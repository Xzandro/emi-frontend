// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  vuetify: {
    moduleOptions: {
      styles: {
        configFile: 'assets/variables.scss',
      },
      ssrClientHints: {
        viewportSize: true,
      },
    },

    vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern',
          additionalData: '@use "@/assets/globalvars.scss" as *;',
        },
      },
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
})