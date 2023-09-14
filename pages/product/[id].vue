<template>
  <v-row class="pa-2 pa-sm-6 h-100" no-gutters>
    <v-col cols="0" lg="2"></v-col>
    <v-col cols="12" lg="8">
      <v-card>
        <v-img :src="product.imgUrl" cover style="max-height: 350px"></v-img>
        <v-card-item>
          <v-card-title>
            {{ product.title }}
          </v-card-title>
          <v-card-text class="pa-0" style="height: 138px">
            <v-rating
              :model-value="product.rating"
              color="warning"
              density="compact"
              half-increments
              readonly
              size="small"
            ></v-rating>
            <div>
              {{ product.description }}
            </div>
          </v-card-text>
          <v-divider class="mx-4 my-2"></v-divider>
          <div class="px-4">
            <v-chip-group>
              <v-chip v-for="category in product.categories">{{
                category
              }}</v-chip>
            </v-chip-group>
          </div>
        </v-card-item>
      </v-card>

      <v-card class="mt-4">
        <v-card-title>Reviews:</v-card-title>
        <v-card-text>
          <v-timeline side="end">
            <v-timeline-item
              v-for="index in $faker.number.int({ min: 1, max: 5 })"
            >
              <template #icon>
                <v-avatar
                  color="primary"
                  variant="outlined"
                  :image="$faker.image.avatar()"
                >
                </v-avatar>
              </template>

              <template #default>
                <v-card variant="outlined">
                  <p class="py-3 px-6" style="font-size: 1.25rem">
                    {{ $faker.person.fullName() }} :
                    <v-rating
                      :model-value="product.rating"
                      color="warning"
                      density="compact"
                      half-increments
                      readonly
                      size="small"
                    ></v-rating>
                  </p>
                  <v-card-text>{{ $faker.hacker.phrase() }} </v-card-text>
                </v-card>
              </template>
            </v-timeline-item>
          </v-timeline>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="0" lg="2"></v-col>
  </v-row>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ["product"],
});

const { selectedProduct } = useProducts();

const product = ref(selectedProduct.value!);
</script>

<style lang="scss">
.v-timeline .v-timeline-divider__inner-dot {
  background: none !important;
}

.v-timeline--vertical.v-timeline.v-timeline--side-end
  .v-timeline-item
  .v-timeline-item__body {
  width: 100%;
}
</style>
