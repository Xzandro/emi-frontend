<template>
  <v-footer class="py-10" v-bind="$attrs">
    <v-container class="constrained content-wrapper">
      <div class="d-flex align-center justify-space-between h-100 flex-wrap">
        <img src="/logo-neg.svg" alt="Footer Logo" height="70" />
        <div class="footer-navigation mt-5 mt-md-0">
          <NuxtLink class="ml-0 ml-md-6 mr-6 mr-md-0" v-for="item in data" :key="item.documentId" :to="item.path">{{ item.title }}</NuxtLink>
        </div>
      </div>
    </v-container>
  </v-footer>
</template>

<style lang="scss" scoped>
@use '@/assets/globals.scss' as *;

.v-footer {
  background-image: url('/images/footer-background.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top left;
  color: #ffffff;
}
a {
  font-weight: 700;
  color: #ffffff;
  text-decoration: none;
  transition: $transition-ease-out;
  &:hover,
  &.router-link-active {
    color: $colors-stroke;
  }
}
</style>

<script setup>
const client = useStrapiClient();

const { data, error } = await useAsyncData(
  `footer`,
  () =>
    client('/navigation/render/footer', {
      query: {
        type: 'TREE',
      },
    }),
  {
    lazy: true,
  }
);
</script>
