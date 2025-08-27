// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
export default defineNuxtConfig({

  app: {
    head: {
      title: 'Beloved Laos',
      meta: [
        { name: 'description', content: 'Beloved Laos' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  },

  ssr: true,
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  // modules: [],

  build: {
    transpile: ['vuetify'],
  },
  modules: [
    '@nuxt/eslint',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    //...
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },

  devServer: {
    host: '0.0.0.0',
    port: 5000
  }
})