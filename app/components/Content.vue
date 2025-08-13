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

const expand = ref(false);

const getColumnPadding = (columns, index) => {
  if (!columns) return null;
  if (columns.length < 2) return null;

  const isLast = columns.length === index + 1;

  return isLast ? 'pr-md-6' : 'pr-md-6';
};

const rowCenter = (rows, rowIndex) => {
  if (props.block.resizeSingleColumns === false || !rows?.[rowIndex]) return null;
  const columns = rows[rowIndex].columns;

  return columns.length < 2 ? 'justify-center' : null;
};

const columnRestricted = (rows, rowIndex) => {
  if (props.block.resizeSingleColumns === false || !rows?.[rowIndex]) return null;
  const columns = rows[rowIndex].columns;

  return columns.length < 2 ? 'restricted' : null;
};

const gap = useGap(props.block);
</script>
