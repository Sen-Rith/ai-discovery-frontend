import vuetify from "vite-plugin-vuetify";

export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: "AI Discovery",
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.png" },
        { rel: "preload", href: "~/assets/fonts/VT323-Regular.ttf" },
      ],
      meta: [
        {
          property: "og:title",
          content: "AI Discovery",
        },
        {
          property: "og:description",
          content:
            "Phantom Mail is a secure and private temporary email service that allows you to generate custom email addresses with custom expiration times. Our service uses end-to-end encryption to protect your messages from prying eyes, ensuring that your privacy is always our top priority. With Phantom Mail, you can easily create a new email address and start receiving emails today!",
        },
        {
          property: "og:image",
          content: "`/banner.jpg",
        },
        {
          name: "description",
          content:
            "Phantom Mail is a secure and private temporary email service that allows you to generate custom email addresses with custom expiration times. Our service uses end-to-end encryption to protect your messages from prying eyes, ensuring that your privacy is always our top priority. With Phantom Mail, you can easily create a new email address and start receiving emails today!",
        },
      ],
    },
  },
  css: [
    "vuetify/lib/styles/main.sass",
    "@mdi/font/css/materialdesignicons.min.css",
    "@/assets/main.css",
    "@/assets/variables.scss",
  ],
  modules: [
    async (options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        config.plugins?.push(vuetify());
      });
    },
  ],
  build: {
    transpile: ["vuetify"],
  },
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
})
