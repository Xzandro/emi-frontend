<template>
  <PageStructure :blocks="blocks" :pageStructure="pageStructure" />
</template>

<script setup>
const { find } = useStrapi();

const { data: pageData, error } = await useAsyncData(
  `page-home`,
  () =>
    find('pages', {
      filters: {
        slug: 'home',
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
  description: pageStructure?.description,
});
</script>
