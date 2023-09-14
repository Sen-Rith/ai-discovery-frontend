<template>
  <v-app>
    <NuxtLoadingIndicator style="opacity: 1" class="loading-indicator" />
    <v-theme-provider class="h-100" with-background :theme="theme">
      <nuxt-layout>
        <v-main class="pt-16 h-100">
          <nuxt-page />
        </v-main>
      </nuxt-layout>
    </v-theme-provider>
  </v-app>
</template>

<script setup lang="ts">
const theme = useCookie("theme", { default: () => "light" });
</script>

<style lang="scss">
.loading-indicator {
  color: var(--v-primary-base);
}
</style>
