<template>
  <v-app>
    <v-theme-provider class="h-100" with-background :theme="theme">
      <div class="d-flex justify-center align-center h-100">
        <v-alert
          closable
          prominent
          max-width="500"
          type="error"
          variant="outlined"
          :title="`Status Code: ${statusCode}`"
          :text="message"
          @click:close="handleError"
          ><template #prepend
            ><v-icon icon="mdi-robot-vacuum-alert" /></template
        ></v-alert>
      </div>
    </v-theme-provider>
  </v-app>
</template>

<script setup>
const props = defineProps({
  error: Object,
});

const error = useError();
const theme = useCookie("theme", { default: () => "light" });

const statusCode = ref(error.value.statusCode ?? 500);
const message = ref(error.value.message ?? "Something went wrong");

async function handleError() {
  await clearError({ redirect: "/" });
}
</script>
