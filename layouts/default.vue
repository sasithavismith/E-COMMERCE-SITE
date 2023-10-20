<template>
  <div>
    <v-toolbar>
      <NuxtLink to="/" class="text-decoration-none"
        ><v-toolbar-title>Sasi Products</v-toolbar-title></NuxtLink
      >
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn class="mr-4"
          ><NuxtLink
            class="text-decoration-none"
            v-if="tokenValue == undefined"
            to="/login"
            >Login</NuxtLink
          ></v-btn
        >
        <v-btn class="mr-4" @click="logout()" v-if="tokenValue != undefined"
          >Logout</v-btn
        >
        <v-btn class="mr-4" v-if="tokenValue != undefined"
          ><NuxtLink class="text-decoration-none" to="/cart"
            >Cart</NuxtLink
          ></v-btn
        >
        <v-btn class="mr-4"
          ><NuxtLink class="text-decoration-none" to="/sign-up"
            >Sign Up</NuxtLink
          ></v-btn
        >
        <v-btn class="mr-4" v-if="tokenValue != undefined"
          ><NuxtLink class="text-decoration-none" to="/edit-user"
            >Edit User</NuxtLink
          ></v-btn
        >
        <v-btn class="mr-4"
          ><NuxtLink class="text-decoration-none" to="/categories"
            >All Categories</NuxtLink
          ></v-btn
        >
      </v-toolbar-items>
    </v-toolbar>
    <div class="container mx-auto p-4">
      <slot />
    </div>
  </div>
</template>
<script setup lang="ts">
const route = useRoute();
import { usercreate } from "~/store/createuser";

const tokenValue = useCookie("token");
const usercreateStore = usercreate();

function logout() {
  usercreateStore.logUserOut();
}
</script>
