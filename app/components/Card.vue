<template>
  <template v-if="$attrs.openingHours?.length > 0">
    <CardBase v-bind="$attrs" blurred />
  </template>
  <CardBase v-else v-bind="$attrs" />
</template>
