<template>
  <v-row class="pa-2 pa-sm-6 h-100" no-gutters>
    <v-col cols="0" lg="2"></v-col>
    <v-col cols="12" lg="8">
      <div class="text-right mr-2 mb-2">
        <v-select
          v-model="selectedCategories"
          :items="categories"
          label="Categories"
          variant="outlined"
          chips
          closable-chips
          multiple
          clearable
        >
          <template #chip="{ item }">
            <v-chip
              color="primary"
              variant="outlined"
              close
              size="large"
              @click:close="
                selectedCategories = selectedCategories.filter(
                  (category) => category !== item.title
                )
              "
            >
              {{ item.title }}
            </v-chip>
          </template>
        </v-select>
      </div>
      <v-row no-gutters>
        <v-col
          v-for="product in currentProducts"
          cols="12"
          sm="6"
          xl="4"
          class="pa-2"
          style="height: 550px"
        >
          <v-card height="100%" variant="outlined" @click="onClick(product)">
            <v-img :src="product.imgUrl" height="200px" cover></v-img>
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
                <div class="product-description">
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
        </v-col>
      </v-row>
      <div class="text-center">
        <v-pagination
          v-model="page"
          :length="Math.ceil(filteredProducts.length / 9)"
          prev-icon="mdi-menu-left"
          next-icon="mdi-menu-right"
        ></v-pagination>
      </div>
    </v-col>
    <v-col cols="0" lg="2"></v-col>
  </v-row>
</template>

<script setup lang="ts">
import { Product } from "~/composables/use-products";

const { products, selectedProduct } = useProducts();
const { categories, selectedCategories } = useCategories();

const page = ref(1);

const filteredProducts = computed(() => {
  if (!selectedCategories.value.length) return products.value;
  return products.value.filter((product) =>
    product.categories.some((category) =>
      selectedCategories.value.includes(category)
    )
  );
});

const currentProducts = computed(() => {
  const start = (page.value - 1) * 9;
  const end = start + 9;
  return filteredProducts.value.slice(start, end);
});

async function onClick(product: Product) {
  selectedProduct.value = product;
  await navigateTo(`/product/${product.id}`);
}
</script>

<style scoped lang="scss">
.product-description {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
