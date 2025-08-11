<template>
  <div class="circles-container">
    <div class="circle" v-for="(circle, index) in circles" :key="index" :style="{ backgroundColor: circle }"></div>
  </div>
</template>

<style lang="scss" scoped>
.circles-container {
  display: flex;
  align-items: center;
  gap: 10px;
}

.circle {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}
</style>

<script setup>
const props = defineProps({
  circles: {
    type: Array,
    default: () => ['#FD9B09', '#FDED09', '#AFEE02'],
  },
});
</script>
