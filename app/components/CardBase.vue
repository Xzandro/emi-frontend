<template>
  <v-card
    v-bind="$attrs"
    elevation="0"
    class="d-flex flex-column mb-4"
    :class="[blurred ? 'blurred' : null, background ? `background-${background}` : null]"
  >
    <div class="card-head" :class="{ 'no-image': !getImageURL(image) }">
      <v-img v-if="getImageURL(image)" :src="getImageURL(image)" cover height="300" />
    </div>

    <v-card-text class="pa-7">
      <h3 v-if="header" class="text-h3" v-text="header"></h3>
      <div v-if="subheader">
        {{ subheader }}
      </div>
      <template v-if="$slots.default">
        <slot></slot>
      </template>
      <div v-else-if="$attrs.content" v-html="$attrs.content" class="mt-4"></div>
    </v-card-text>
    <v-card-text v-if="$attrs.button" class="px-6 pt-0 pb-6">
      <Button v-if="$attrs.button" v-bind="$attrs.button" block />
    </v-card-text>
  </v-card>
</template>

<style lang="scss" scoped>
.v-card {
  height: 100%;
  border-radius: 28px;
  border: 1px solid #c4d4c8;
  width: 100%;
  z-index: 1;

  :deep(p) {
    margin-bottom: 16px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  &.blurred {
    background: radial-gradient(64.24% 100.27% at 25.6% -7.27%, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0) 100%), rgba(252, 253, 247, 0.51);
    box-shadow: 0 11px 15px 0 rgba(0, 59, 28, 0.1) !important;
    backdrop-filter: blur(12px);
    border: 1px solid #fff;
  }

  .v-card-text {
    font-size: 1rem;
  }
}
</style>

<script setup>
const props = defineProps({
  image: null,
  header: null,
  subheader: null,
  description: null,
  background: null,
  blurred: {
    type: Boolean,
    default: false,
  },
});
</script>
