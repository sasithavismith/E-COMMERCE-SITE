<template>
  <div>
    <MainBanner></MainBanner>
    <!-- <v-row justify="center" class="mb-5 mt-10">
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
      </v-row> -->
  </div>
</template>
<script setup lang="ts">
import { storeToRefs } from "pinia";
import { userCartData } from "~/store/usercart";
import jwt_decode from "jwt-decode";
//   const router = useRouter();
//   const currentCategory = ref("electronics");
const store = userCartData();
const jwt = ref(useCookie("token"));

const decodedJwtJsonData = jwt_decode<decodedJwtJsonData>(jwt.value);
await store.fetchuserCart({ userid: decodedJwtJsonData.sub.toString() });

const cartlist = storeToRefs(store).getAllCart.value;
</script>
<style lang="scss" scoped>
.active-chip {
  background-color: red;
  color: #fff;
}
</style>
