<template>
  <div>
    <v-row justify="center">
      <v-col cols="10">
        <h2>Sign up</h2>
      </v-col>
      <v-col cols="10">
        <v-row>
          <v-col cols="6">
            <v-text-field
              label="User Name*"
              placeholder="User Name"
              v-model="v$.username.$model"
              variant="outlined"
              :error="v$.username.$error"
              :error-messages="errors.username"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              label="First Name*"
              placeholder="First Name"
              v-model="v$.firstname.$model"
              variant="outlined"
              :error="v$.firstname.$error"
              :error-messages="errors.firstname"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              label="Last Name*"
              placeholder="Last Name"
              v-model="v$.lastname.$model"
              variant="outlined"
              :error="v$.lastname.$error"
              :error-messages="errors.lastname"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              label="Email*"
              placeholder="Email"
              v-model="v$.email.$model"
              variant="outlined"
              :error="v$.email.$error"
              :error-messages="errors.email"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              label="password*"
              placeholder="password"
              v-model="v$.password.$model"
              variant="outlined"
              :error="v$.password.$error"
              :error-messages="errors.password"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              label="City*"
              placeholder="City"
              v-model="v$.city.$model"
              variant="outlined"
              :error="v$.city.$error"
              :error-messages="errors.city"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              label="Street*"
              placeholder="Street"
              v-model="v$.street.$model"
              :error="v$.street.$error"
              :error-messages="errors.street"
              variant="outlined"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              label="Lane Number*"
              placeholder="Lane Number"
              v-model="v$.number.$model"
              variant="outlined"
              :error="v$.number.$error"
              :error-messages="errors.number"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              label="Zip Code*"
              placeholder="Zip Code"
              v-model="v$.zipcode.$model"
              variant="outlined"
              :error="v$.zipcode.$error"
              :error-messages="errors.zipcode"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              label="Phone Number"
              placeholder="Phone Number"
              v-model="formData.phone"
              variant="outlined"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-btn @click="login()"> Submit </v-btn>
      </v-col>
    </v-row>
  </div>
</template>
<script setup lang="ts">
import { useVuelidate } from "@vuelidate/core";
import { required, minLength, helpers } from "@vuelidate/validators";
import { usercreate } from "~/store/createuser";
const formData = ref({
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  username: "",
  city: "",
  street: "",
  number: "",
  zipcode: "",
  phone: "",
});

const usercreateStore = usercreate();
const rules = computed(() => {
  return {
    firstname: {
      required: helpers.withMessage(
        "The First Name field is required",
        required
      ),
    },
    lastname: {
      required: helpers.withMessage(
        "The Last Name field is required",
        required
      ),
    },
    email: {
      required: helpers.withMessage("The Email field is required", required),
    },
    password: {
      required: helpers.withMessage("The password field is required", required),
      minLength: minLength(6),
    },
    username: {
      required: helpers.withMessage(
        "The User Name field is required",
        required
      ),
    },
    city: {
      required: helpers.withMessage("The City field is required", required),
    },
    street: {
      required: helpers.withMessage("The Street field is required", required),
    },
    number: {
      required: helpers.withMessage("The Number field is required", required),
    },
    zipcode: {
      required: helpers.withMessage("The Zipcode field is required", required),
    },
  };
});
const v$ = useVuelidate(rules, formData);
const errors = computed(() =>
  useValidationErrors<UserCreateErrors>(v$.value.$errors)
);
// const name = useState<String>("firstname", () => "");
async function login() {
  v$.value.$validate();
  if (!v$.value.$error) {
    try {
      await usercreateStore.createUser({
        name: {
          firstname: formData.value.firstname,
          lastname: formData.value.lastname,
        },
        address: {
          city: formData.value.city,
          street: formData.value.street,
          number: formData.value.number,
          zipcode: formData.value.zipcode,
          geolocation: {
            lat: "2",
            long: "2",
          },
        },
        email: formData.value.email,
        username: formData.value.username,
        password: formData.value.password,
        phone: formData.value.phone,
      });
    } catch (error) {
      console.log("Unable to verify OTP!");
    }
  }
}
</script>
<style lang="scss" scoped></style>
