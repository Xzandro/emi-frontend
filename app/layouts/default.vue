<template>
  <Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">
    <v-app id="app">
      <MobileDrawer />

      <v-layout :class="{ 'is-mobile': mdAndDown }">
        <Menu />
        <slot />
      </v-layout>
      <BottomNavigation />
    </v-app>
  </Html>
</template>

<style lang="scss" scoped>
.v-layout {
  // otherwise position sticky will not work for child elements
  // overflow: visible !important;
}
</style>

<script setup>
const { mdAndDown, mobile } = useDisplay();

const head = useLocaleHead();
</script>
