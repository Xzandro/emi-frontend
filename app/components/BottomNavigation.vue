<template>
  <v-bottom-navigation app height="58" :active="mobile && data.length > 0" grow :color="colors.primary" bg-color="white">
    <v-btn v-for="item in data" :key="item.documentId" :to="item.path">
      <v-icon v-if="item.related?.menuIcon" :size="iconSize" :color="colors.primary" class="mb-1">{{ item.related.menuIcon }}</v-icon>
      <span>{{ item.title }}</span>
    </v-btn>
  </v-bottom-navigation>
</template>

<style lang="scss" scoped>
.v-btn--active :deep(.v-btn__overlay) {
  opacity: 0;
}
</style>

<script setup>
const { mobile } = useDisplay();

const iconSize = 20;

const client = useStrapiClient();
const { data, error } = await useAsyncData(
  `bottom-navigation`,
  () =>
    client('/navigation/render/bottom', {
      query: {
        type: 'TREE',
      },
    }),
  {
    lazy: true,
  }
);
</script>
