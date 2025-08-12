<template>
  <v-card v-bind="$attrs" elevation="0" class="d-flex flex-column mb-4" :class="{ blurred }">
    <div class="card-head" :class="{ 'no-image': !getImageURL(image) }">
      <v-img v-if="getImageURL(image)" :src="getImageURL(image)" cover height="100%" />
    </div>

    <v-card-text class="pa-7">
      <h3 v-if="header" class="text-h3 mb-5" v-text="header"></h3>
      <div v-if="description" v-html="description"></div>
    </v-card-text>
  </v-card>
</template>

<style lang="scss" scoped>
.v-card {
  height: 150%;
  border-radius: 28px;
  border: 1px solid #fff;

  z-index: 1;
  &.blurred {
    background: radial-gradient(64.24% 100.27% at 25.6% -7.27%, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0) 100%), rgba(252, 253, 247, 0.51);
    box-shadow: 0 11px 15px 0 rgba(0, 59, 28, 0.1) !important;
    backdrop-filter: blur(12px);
  }
}
</style>

<script setup>
const props = defineProps({
  image: null,
  header: null,
  description: null,
  blurred: {
    type: Boolean,
    default: false,
  },
});
</script>
