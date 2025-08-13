<template>
  <div>
    <v-row class="content-row justify-center" v-for="(row, rowIndex) in rows" :key="row.id" :class="rowCenter(rows, rowIndex)">
      <v-col
        cols="12"
        :md="columnSize(row.columns, index)"
        v-for="(column, index) in row.columns"
        :key="column.id"
        class="content-column"
        :class="[getColumnPadding(row.columns, index), columnRestricted(rows, rowIndex, index)]"
      >
        <template v-if="rowIndex === 0 && index === 0 && headline">
          <Headline :block="{ text: headline }" />
        </template>
        <v-img class="mb-8 content-image" v-if="getImageURL(column.image)" :src="getImageURL(column.image)" />
        <div class="mb-8" v-if="column.card">
          <CardBase :card="column.card" />
        </div>
        <h3 v-if="column.header" class="text-h3 column-content-header mb-5">
          {{ column.header }}
        </h3>
        <div class="text-content" v-if="column.content" v-html="column.content"></div>
        <div v-if="column.buttons?.length > 0" class="content-buttons mt-10">
          <Button class="mr-5 mb-5" blueDark v-bind="button" v-for="button in column.buttons" :key="button.id" />
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<style lang="scss" scoped>
.v-row + .v-row {
  margin-top: 20px;
}
.restricted {
  max-width: 800px;
}
.text-content :deep(p) {
  margin-bottom: 16px;
  &:last-child {
    margin-bottom: 0;
  }
}
</style>

<script setup>
const props = defineProps({
  headline: String,
  resizeSingleColumns: Boolean,
  rows: {
    type: Array,
    default() {
      return [];
    },
  },
});

const getColumnPadding = (columns, index) => {
  if (!columns) return null;
  if (columns.length < 2) return null;

  const isLast = columns.length === index + 1;

  return isLast ? 'pr-md-6' : 'pr-md-6';
};

const rowCenter = (rows, rowIndex) => {
  if (props.resizeSingleColumns === false || !rows?.[rowIndex]) return null;
  const columns = rows[rowIndex].columns;

  return columns.length < 2 ? 'justify-center' : null;
};

const columnRestricted = (rows, rowIndex) => {
  if (props.resizeSingleColumns === false || !rows?.[rowIndex]) return null;
  const columns = rows[rowIndex].columns;

  return columns.length < 2 ? 'restricted' : null;
};
</script>
