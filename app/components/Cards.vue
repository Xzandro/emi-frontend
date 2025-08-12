<template>
  <div class="container-wrap" :class="block.background ? `background-${block.background}` : null">
    <v-container class="constrained" :class="[gap]">
      <slot></slot>

      <v-row class="content-row justify-center align-stretch">
        <v-col class="d-flex" cols="12" :md="columnSize" v-for="card in block.items" :key="card.id">
          <CardBase v-bind="card" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
const props = defineProps({
  block: {
    type: Object,
    default() {
      return {
        items: [],
        cardsPerRow: 3,
      };
    },
  },
});

const columnSize = computed(() => Math.max(12 / (props.block.items.length || 1), 12 / props.block.cardsPerRow));

const gap = useGap(props.block);
</script>
