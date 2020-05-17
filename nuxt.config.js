import pkg from "./package";

export default {
  mode: "spa",
  srcDir: "src/",
  server: {
    port: 3030
  },

  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      dir: "rtl",
      lang: "fa-IR",
      prefix: "og: http://ogp.me/ns#"
    },
    title: "Yekta UI",
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1, shrink-to-fit=no"
      },
      {
        hid: "description",
        name: "description",
        content: pkg.description
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }]
  },

  /*
   ** Global CSS
   */
  css: ["~/assets/main.scss", "~/static/fonts/fontawesome/all.min.css"],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["~/plugins/yekta-ui"],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    ["bootstrap-vue/nuxt", { css: false, bvCSS: false }]
  ],
  buildModules: ["@nuxt/typescript-build"],

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  }
};
