import { createVuetify } from "vuetify";
import { VDataTableServer } from "vuetify/lib/labs/components.mjs";

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: true,
    components: {
      VDataTableServer,
    },
  });

  nuxtApp.vueApp.use(vuetify);

  return {
    provide: {
      vuetify,
    },
  };
});
