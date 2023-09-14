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
            "Discover AI: Your one-stop platform for exploring a wide range of Artificial Intelligence services. Uncover the latest advancements, understand their applications, and find the perfect AI solution for your needs.",
        },
        {
          property: "og:image",
          content: "`/banner.jpg",
        },
        {
          name: "description",
          content:
            "Discover AI: Your one-stop platform for exploring a wide range of Artificial Intelligence services. Uncover the latest advancements, understand their applications, and find the perfect AI solution for your needs.",
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
});
