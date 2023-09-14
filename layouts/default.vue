<template>
  <div class="h-100">
    <v-app-bar>
      <template v-slot:prepend>
        <nuxt-link to="/">
          <v-avatar color="primary" variant="outlined">
            <v-icon size="x-small" icon="mdi-robot-dead-outline"></v-icon>
          </v-avatar>
        </nuxt-link>
      </template>

      <v-toolbar-title class="text-body-1 text-md-h6"
        >AI Discovery</v-toolbar-title
      >

      <v-spacer></v-spacer>

      <v-btn
        :icon="theme === 'dark' ? 'mdi-weather-night' : 'mdi-weather-sunny'"
        color="primary"
        variant="outlined"
        class="mr-4"
        size="small"
        @click="toggleTheme"
      ></v-btn>
    </v-app-bar>

    <slot />

    <v-footer>
      <div class="px-4 py-2 text-center w-100">
        {{ new Date().getFullYear() }} — AI Discovery | Contact us:
        <span class="text-primary text-decoration-underline"
          >ney.senrith19@kit.edu.kh</span
        >
      </div>
    </v-footer>
  </div>
</template>

<script setup lang="ts">
const theme = useCookie("theme", {
  default: () => "light",
  expires: new Date(Date.now() + 86400000 * 100),
});

async function toggleTheme() {
  theme.value = theme.value === "dark" ? "light" : "dark";
}
</script>
