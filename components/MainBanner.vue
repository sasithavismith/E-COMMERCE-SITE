<template>
  <div>
    <v-row no-gutters class="justify-content-center page-banner">
      <v-col cols="12" class="page-banner-inner">
        <div class="">
          <img
            src="https://mobitel-dev.arimac.xyz/images/home-slide.png"
            class="banner-img"
            alt="banner-img"
          />
        </div>
      </v-col>
    </v-row>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss">
.page-banner {
  position: relative;
  margin-bottom: 25px;
  @media (max-width: 1263.98px) {
    margin-bottom: 10px;
  }
  @media (max-width: 599.98px) {
    height: 65vh;
    overflow: hidden;
    margin-top: 50px !important;
  }
  &-inner {
    video,
    img {
      filter: brightness(0.65);
      object-fit: cover;
      object-position: center;
      width: 100%;
      height: 100px;
      min-height: 90vh;
      @media (max-width: 1263.98px) {
        height: calc(100vh - 170px);
      }
    }
  }
}
</style>
