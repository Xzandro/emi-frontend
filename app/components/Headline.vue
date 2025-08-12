<template>
  <h2 v-if="block.text" class="text-h2" :class="classes" v-text="block.text"></h2>
  <Circles />
</template>

<script setup>
const props = defineProps({
  block: {
    type: Object,
    default() {
      return {
        text: null,
      };
    },
  },
  classes: {
    type: String,
    default: 'mb-6',
  },
});
</script>
