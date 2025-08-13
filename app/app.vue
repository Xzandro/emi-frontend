<template>
  <NuxtLoadingIndicator :color="colors.primary" />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
const menuStore = useMenuStore();

await useAsyncData('menu', () => menuStore.getMenu());
</script>
