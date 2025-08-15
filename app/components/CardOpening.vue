<template>
  <CardBase v-bind="$attrs" blurred> </CardBase>
</template>

<style lang="scss" scoped>
span {
  font-weight: 500;
  white-space: nowrap;
  font-size: 1rem;
}
.opening-grid {
  display: grid;
  grid-template-columns: 1fr 1fr auto 1fr;
  column-gap: 10px;
  row-gap: 4px;
  align-items: center;
  font-size: 1rem;
  font-weight: 500;
}
.grid-item.center {
  justify-self: center;
}
</style>

<script setup>
const props = defineProps({
  openingHour: {
    type: Object,
    default: () => ({}),
  },
});
const isAfternoon = (time) => {
  return new Date(`2025-08-12T${time}`).getHours() >= 12;
};
</script>
