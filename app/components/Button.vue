<template>
  <v-btn
    v-bind="$attrs"
    :height="circle ? undefined : 56"
    :rounded="rounded"
    :icon="circle"
    variant="flat"
    :href="isExternal ? url : undefined"
    :to="!isExternal ? url : undefined"
    :target="isExternal ? '_blank' : '_self'"
  >
    <v-icon v-if="icon && (!iconSide || iconSide === 'left')" :class="[circle ? null : 'mr-2', iconClass]">{{ icon }}</v-icon>
    {{ text }}
    <v-icon v-if="icon && iconSide === 'right'" :class="iconClass">{{ icon }}</v-icon>
  </v-btn>
</template>

<style lang="scss" scoped>
@use '@/assets/globals.scss' as *;

.v-btn {
  border: 1px solid $colors-primary;
  color: $colors-primary;
  border-radius: $menu-content-border-radius;
  font-weight: 600;
  font-size: 1rem;
  text-transform: none;
  max-width: fit-content;
  padding: 0 28px;
  :deep(.v-icon) {
    margin-top: 6px;
  }
}
</style>

<script setup>
const props = defineProps({
  text: String,
  isExternal: Boolean,
  url: String,
  icon: String,
  circle: Boolean,
  rounded: {
    type: Boolean,
    default: true,
  },
  iconSide: {
    type: String,
    default: 'left',
  },
  iconClass: String,
});
</script>
