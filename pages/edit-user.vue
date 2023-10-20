<template>
  <div>
    <v-row justify="center">
      <v-col cols="10">
        <h2>Edit User</h2>
      </v-col>
      <v-col cols="10">
        <v-row>
          <v-col cols="6">
            <v-text-field
              label="User Name"
              placeholder="User Name"
              v-model="username"
              outlined
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              label="First Name"
              placeholder="First Name"
              v-model="firstname"
              outlined
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              label="Last Name"
              placeholder="Last Name"
              v-model="lastname"
              outlined
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              label="Email"
              placeholder="Email"
              v-model="email"
              outlined
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              label="password"
              placeholder="password"
              v-model="password"
              outlined
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              label="City"
              placeholder="City"
              v-model="city"
              outlined
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              label="Street"
              placeholder="Street"
              v-model="street"
              outlined
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              label="Lane Number"
              placeholder="Lane Number"
              v-model="number"
              outlined
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              label="Zip Code"
              placeholder="Zip Code"
              v-model="zipcode"
              outlined
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              label="Phone Number"
              placeholder="Phone Number"
              v-model="phone"
              outlined
            ></v-text-field>
          </v-col>
        </v-row>
        <v-btn @click="login()"> Submit </v-btn>
      </v-col>
    </v-row>
  </div>
</template>
<script setup lang="ts">
import { storeToRefs } from "pinia";
import { usercreate } from "~/store/createuser";
import jwt_decode from "jwt-decode";
const jwt = ref(useCookie("token"));
const usercreateStore = usercreate();

const decodedJwtJsonData = jwt_decode<decodedJwtJsonData>(jwt.value);
await usercreateStore.userDetails({
  userid: decodedJwtJsonData.sub.toString(),
});
const userAlldetails = computed(() => {
  return storeToRefs(usercreateStore).getsingleUserDetails.value;
});
console.log(userAlldetails.value.email)
const firstname = ref(userAlldetails.value.name.firstname);
const lastname = ref(userAlldetails.value.name.lastname);
const email = ref(userAlldetails.value.email);
const password = ref(userAlldetails.value.password);
const username = ref(userAlldetails.value.username);
const city = ref(userAlldetails.value.address.city);
const street = ref(userAlldetails.value.address.street);
const number = ref(userAlldetails.value.address.number);
const zipcode =ref(userAlldetails.value.address.zipcode);
const phone = ref(userAlldetails.value.phone);

// const name = useState<String>("firstname", () => "");
async function login() {
  console.log("hii");
  try {
    await usercreateStore.createUser({
      name: { firstname: firstname.value, lastname: lastname.value },
      address: {
        city: city.value,
        street: street.value,
        number: number.value,
        zipcode: zipcode.value,
        geolocation: {
          lat: "2",
          long: "2",
        },
      },
      email: email.value,
      username: username.value,
      password: password.value,
      phone: phone.value,
    });
  } catch (error) {
    console.log("Unable to verify OTP!");
  }
  watch(userAlldetails, function() {
      console.log('value changes detected');
   });
}
</script>
<style lang="scss" scoped></style>
