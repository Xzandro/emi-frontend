<template>
  <template v-if="$attrs.opening">
    <CardOpening v-bind="$attrs" />
  </template>
  <CardBase v-else v-bind="$attrs" />
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
