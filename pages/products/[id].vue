<template>
  <div>
    <v-row justify="center">
      <v-col cols="5">
        <img class="mt-5" style="max-width: 374px" :src="singalProduct.image" />
      </v-col>
      <v-col cols="6">
        <h1 class="mt-10">{{ singalProduct.title }}</h1>
        <p class="mt-10">{{ singalProduct.description }}</p>
        <h3 class="mt-10">Rs. {{ singalProduct.price.toFixed(2) }}</h3>
        <v-rating
          hover
          :length="5"
          :size="32"
          :model-value="singalProduct.rating.rate"
          active-color="red"
        />
        <br>
        <v-btn class="mt-3">
          Add to Cart
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>
<script setup lang="ts">
import { storeToRefs } from "pinia";
import { productList } from "~/store/products";
const route = useRoute();
const store = productList();
const ids = route.params.id;
await store.fetchProductData({
  id: ids?.toString(),
});
const singalProduct = storeToRefs(store).getAllProductData.value;
</script>
<style lang="scss" scoped></style>
