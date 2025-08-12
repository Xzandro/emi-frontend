<template>
  <template v-if="$attrs.opening">
    <CardOpening v-bind="$attrs" />
  </template>
  <CardBase v-else v-bind="$attrs" />
</template>
