<template>
  <div class="container-wrap" :class="block.background ? `background-${block.background}` : null">
    <v-container class="constrained content-wrapper" :class="[gap]">
      <ContentRows :headline="block.headline" :resizeSingleColumns="block.resizeSingleColumns" :rows="block.rows" />
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
.restricted {
  max-width: 800px;
}
</style>

<script setup>
const props = defineProps({
  block: {
    type: Object,
    default() {
      return {
        rows: [],
      };
    },
  },
});

const gap = useGap(props.block);
</script>
