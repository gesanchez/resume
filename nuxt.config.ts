// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/theme/light/index.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    '@nuxt/image',
    '@nuxtjs/i18n',
    '@nuxt/fonts',
  ],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },
  routeRules: {
    "/": { prerender: true },
  },
  i18n: {
    locales: [{
      code: 'en',
      file: 'en.ts',
      name: 'English'
    }, {
      code: 'es',
      file: 'es.ts',
      name: 'Español'
    }],
    defaultLocale: 'es',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root' // recommended
    },
    langDir: 'lang',
  }
})