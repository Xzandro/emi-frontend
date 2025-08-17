<template>
  <div class="container-wrap" :class="{ mobile }">
    <v-container class="constrained">
      <v-row class="pt-0 pt-md-8 pb-4 pb-md-16">
        <v-col cols="12" md="6">
          <h1 class="text-h1">
            {{ block.header }}
          </h1>
          <Circles class="mt-8" />
          <div v-if="block.content" v-html="block.content" class="mt-8"></div>
        </v-col>
        <v-col class="pl-md-25">
          <Card v-if="block.card" v-bind="block.card" headerLocation />
        </v-col>
      </v-row>
    </v-container>
    <div class="header-overlay" :class="{ mobile }"></div>
  </div>
</template>

<style lang="scss" scoped>
.container-wrap {
  background-image: url('/images/header-background-full.svg');
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  color: #ffffff;
  padding: 80px 0;
  &.mobile {
    padding: 40px 0;
    .text-h1 {
      font-size: 2rem !important;
    }
  }
}
.v-container {
  padding-bottom: 100px;
}
.header-overlay {
  position: absolute;
  left: 0;
  bottom: -1px;
  clip-path: polygon(100% 45%, 0% 100%, 100% 100%);
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  &.mobile {
    clip-path: polygon(100% 65%, 0% 100%, 100% 100%);
  }
}

:deep(p) {
  font-weight: 500;
}
</style>

<script setup>
const props = defineProps({
  block: {
    type: Object,
    default() {
      return {
        card: null,
      };
    },
  },
});

const { mobile } = useDisplay();
</script>
