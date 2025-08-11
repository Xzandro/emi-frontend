<template>
  <PageStructure :blocks="blocks" :pageStructure="pageStructure" />
</template>

<script setup>
const route = useRoute();
const { find } = useStrapi();

const {
  data: pageData,
  pending,
  refresh,
  error,
} = await useAsyncData(
  `page-${route.params.slugsub.toLowerCase()}`,
  () =>
    find('pages', {
      filters: {
        slug: route.params.slugsub.toLowerCase(),
      },
    }),
  {
    serverMaxAge: 60 * 120,
    clientMaxAge: 60 * 60,
  }
);

if (pageData.value.data.length === 0 || error.value) {
  throw createError({ statusCode: 404, fatal: true });
}

const pageStructure = pageData.value.data[0];
const blocks = pageData.value.data[0].blocks;

useSeoMeta({
  title: pageStructure?.title,
});
</script>
