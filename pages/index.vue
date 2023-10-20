<template>
  <div>
    <MainBanner></MainBanner>
    <v-row justify="center">
      <v-col cols="4" v-for="(item, index) in productsList" :key="index">
        <ProductBlock
          :product="item"
          @singlPage="(e) => gotoPage(e)"
        ></ProductBlock>
      </v-col>
    </v-row>
  </div>
</template>
<script setup lang="ts">
const router = useRouter();
import { storeToRefs } from "pinia";
import { productList } from "~/store/products";
const store = productList();
await store.fetchproduct();
const productsList = storeToRefs(store).getAllProducts.value;
// definePageMeta({
//   layout: "product",
// });
function gotoPage(e: string) {
  router.push({
    path: `/products/${e}`,
  });
}
</script>
<style lang="scss" scoped></style>
