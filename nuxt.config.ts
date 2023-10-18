export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Buuz24.app",
      meta: [
        { name: "author", content: "Dmitry Conquer" },
       // { name: "google-site-verification", content: "UpXdwz9Dg-EP51veCDxZ0EIg_UJu6j8qh-5sU3FVqlg" },
      ],
    },
    // pageTransition: { name: "page", mode: "out-in" },
  },
  devtools: { enabled: false },
  runtimeConfig: {},
  build: {
    transpile: ["@fawmi/vue-google-maps"],
  },
  spaLoadingTemplate: false,
  routeRules: {},
  css: ["~/assets/styles/style.scss"],

  modules: [
    "nuxt-swiper",
    "nuxt-delay-hydration",
    "nuxt-simple-sitemap",
    "nuxt-simple-robots",
    "nuxt-gtag",
    "nuxt-schema-org",
  ],

  swiper: {
    modules: ["pagination"], // all modules are imported by default
  },

  gtag: {
    // id: "G-",
    loadingStrategy: "async",
  },
  site: {
    // url: "https://buuz24.app/",
    name: "Buuz24.app",
  },
  image: {
    // domains: ["mgcrscqcxnwbrqseoapz.supabase.co"],
    // provider: "ipx",
  },

  // supabase: {
    // redirect: false,
  // },
  delayHydration: {
    // enables nuxt-delay-hydration in dev mode for testing
    debug: process.env.NODE_ENV === "development",
    mode: "mount",
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {
        grid: true,
        overrideBrowserslist: "last 2 versions",
      },
      ...(process.env.NODE_ENV === "production" ? { cssnano: {} } : {}),
    },
  },
});
