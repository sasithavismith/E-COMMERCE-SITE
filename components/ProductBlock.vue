<template>
  <div>
    <v-card
      class="mx-auto my-12"
      max-width="374"
      @click="singlPage(product.id)"
    >
      <template slot="progress">
        <v-progress-linear
          color="deep-purple"
          height="10"
          indeterminate
        ></v-progress-linear>
      </template>

      <v-img height="250" :src="product.image"></v-img>

      <v-card-title>{{ product.title }}</v-card-title>

      <v-card-text>
        <div class="my-4 text-subtitle-1">Rs. {{ product.price.toFixed(2) }}</div>
      </v-card-text>

      <v-divider class="mx-4"></v-divider>

      <v-card-actions>
        <v-btn color="deep-purple lighten-2"> View Product </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script setup lang="ts">
const { product } = defineProps(["product"]);
const emits = defineEmits(["singlPage"]);
function singlPage(id: number) {
  emits("singlPage", id);
}
</script>

<style scoped></style>
