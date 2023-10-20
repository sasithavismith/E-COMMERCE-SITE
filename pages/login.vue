<template>
  <div class="mt-10">
    <v-row justify="center">
      <v-col cols="10">
        <v-row justify="center">
          <h2>Login</h2>
        </v-row>
      </v-col>
      <v-col cols="10">
        <v-row justify="center">
          <v-col cols="7">
            <v-text-field
              label="User Name"
              v-model="v$.username.$model"
              variant="outlined"
              :error="v$.username.$error"
              :error-messages="errors.username"
            ></v-text-field>
          </v-col>

          <v-col cols="7">
            <v-text-field
              label="password"
              placeholder="password"
              v-model="v$.password.$model"
              variant="outlined"
              :error="v$.password.$error"
              :error-messages="errors.password"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-btn @click="login()"> Login </v-btn>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>
<script setup lang="ts">
import { useVuelidate } from "@vuelidate/core";
import { required, minLength, helpers } from "@vuelidate/validators";

import { usercreate } from "~/store/createuser";
import { storeToRefs } from "pinia";

const formData = ref({
  username: "",
  password: "",
});

const usercreateStore = usercreate();
const router = useRouter();
const rules = computed(() => {
  return {
    username: {
      required: helpers.withMessage(
        "The User Name field is required",
        required
      ),
    },
    password: {
      required: helpers.withMessage("The password field is required", required),
      minLength: minLength(6),
    },
  };
});

const v$ = useVuelidate(rules, formData);
const errors = computed(() => useValidationErrors<UserloginRes>(v$.value.$errors))
async function login() {
  v$.value.$validate();
  if (!v$.value.$error) {
    try {
    await usercreateStore.userlogin({
      username: formData.value.username,
      password: formData.value.password,
    });
    const userState = storeToRefs(usercreateStore).authenticated.value;
    console.log("use", userState);
    if (userState == true) {
      router.push({
        path: `/`,
      });
    }
  } catch (error) {
    console.log("Unable to verify OTP!");
  }
  }

}
watch(formData, (newX) => {
  console.log(`x is ${newX}`)
})
</script>
<style lang="scss" scoped>
.error-msg {
  color: red;
}
</style>
