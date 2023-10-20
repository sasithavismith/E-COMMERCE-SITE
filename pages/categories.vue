<template>
  <div>
    <MainBanner></MainBanner>
    <v-row justify="center" class="mb-5 mt-10">
      <v-col cols="auto" v-for="(item, index) in categoryList" :key="index">
        <v-chip
          :class="item == currentCategory ? 'active-chip' : ''"
          @click="changecategoryData(item)"
        >
          {{ item }}
        </v-chip>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col
        cols="4"
        v-for="(item, index) in categoryProductsList"
        :key="index"
      >
        <ProductBlock
          :product="item"
          @singlPage="(e) => gotoPage(e)"
        ></ProductBlock>
      </v-col>
    </v-row>
  </div>
</template>
<script setup lang="ts">
import { storeToRefs } from "pinia";
import { productList } from "~/store/products";
const router = useRouter();
const currentCategory = ref("electronics");
const store = productList();
await store.fetchCategoryProductData({ cName: currentCategory.value });
await store.fetchcategory();

const categoryList = storeToRefs(store).getAllCategoryData.value;
// definePageMeta({
//   layout: "product",
// });
const categoryProductsList = computed(() => {
  return storeToRefs(store).getAllCategoryProductData.value;
});
async function changecategoryData(item: string) {
  currentCategory.value = item;
  await store.fetchCategoryProductData({ cName: item });
}
function gotoPage(e: string) {
  router.push({
    path: `/products/${e}`,
  });
}
</script>
<style lang="scss" scoped>
.active-chip {
  background-color: red;
  color: #fff;
}
</style>
