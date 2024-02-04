// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    typeCheck: true,
    strict: true,
  },
  app: {
    head: {
      title: 'M.Gietka',
      meta: [
        // { charset: 'utf-8' },
        // { name: 'viewport', content: 'width=device-width,initial-scale=1' },
        { name: 'description', content: 'My developer landing page' },
      ],
      // link: [
      //   {
      //     rel: 'icon',
      //     type: 'image/x-icon',
      //     href: '/favicon.ico' // Path to your favicon file
      //   },
      // ], TODO favicon
    },
  },
  modules: [
    '@nuxt/ui',
    '@nuxtjs/tailwindcss',
    '@formkit/auto-animate/nuxt',
    '@nuxt/image',
  ],
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css',
    '@/assets/css/main.css'
  ]
})
