// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui-pro',
    '@nuxt/content',
    'nuxt-vuefire'
  ],

  devtools: {
    enabled: true
  },

  nitro: {
    prerender: {
      crawlLinks: true
    },
    preset: 'firebase',
    firebase: {
      gen: 2,
      httpsOptions: {
        region: 'asia-southeast1',
        maxInstances: 2
      },
      nodeVersion: '20',
      serverFunctionName: 'app_server'
    }
  },

   vuefire: {
    config: {
      apiKey: import.meta.env.FIREBASE_API_KEY,
      authDomain: import.meta.env.FIREBASE_AUTH_DOMAIN,
      projectId: import.meta.env.FIREBASE_PROJECT_ID,
      storageBucket: import.meta.env.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: import.meta.env.FIREBASE_MESSAGING_SENDER_ID,
      appId: import.meta.env.FIREBASE_APP_ID,
      measurementId: import.meta.env.FIREBASE_MEASUREMENT_ID
    },
    auth: {
      enabled: true
      // sessionCookie: true
      // popupRedirectResolver: 'browser',
    },
    emulators: false
  },


  css: ['~/assets/css/main.css'],

  content: {
    preview: {
      api: 'https://api.nuxt.studio'
    }
  },

  mdc: {
    highlight: {
      noApiRoute: false
    }
  },

  routeRules: {
    '/': { prerender: true }
  },

  future: {
    compatibilityVersion: 4
  },

  compatibilityDate: '2025-01-15',

  typescript: {
    strict: false
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  }
})