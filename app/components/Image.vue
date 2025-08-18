<template>
  <v-img
    v-if="!native && getImageURL(image)"
    v-bind="$attrs"
    :src="getImageURL(image)"
    :srcset="srcset ? srcset : undefined"
    :alt="image.alternativeText"
  />
  <img v-else-if="getImageURL(image)" v-bind="$attrs" :src="getImageURL(image)" :srcset="srcset ? srcset : undefined" :alt="image.alternativeText" />
</template>

<script setup>
const props = defineProps({
  native: {
    type: Boolean,
    default: false,
  },
  image: {
    type: Object,
    default: () => ({
      alternativeText: '',
      url: '',
      formats: {},
    }),
  },
});

const srcset = computed(() => {
  if (!props.image.formats) return null;
  const formats = props.image.formats || {};
  const urls = Object.keys(formats).map((key) => `${getImageURL(formats[key])} ${formats[key].width}w`);
  return urls.join(', ');
});
</script>
