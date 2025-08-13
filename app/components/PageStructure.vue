<template>
  <v-main>
    <slot></slot>
    <section
      v-for="(block, i) in blocks"
      :key="`${block.id}-${block.__component}`"
      :class="block.__component.replace('.', '-')"
      :data-section="`${block.__component}-${block.id}`"
    >
      <component :is="components[block.__component]" :block="block" :casino="casino" :page="page"> </component>
    </section>
    <slot name="bottom"></slot>
  </v-main>
  <Footer v-if="showFooter" app :absolute="absoluteFooter" />
</template>

<script setup>
const props = defineProps({
  pageStructure: {
    type: Object,
    default() {
      return {
        attributes: {},
      };
    },
  },
  blocks: {
    type: Array,
    default() {
      return [];
    },
  },
  casino: null,
  page: String,
  forceShowFooter: Boolean,
  absoluteFooter: Boolean,
});

const showFooter = computed(() => props.pageStructure?.showFooter === null || props.pageStructure?.showFooter === true || props.forceShowFooter);

const components = {
  'blocks.cards': resolveComponent('LazyCards'),
  'blocks.content': resolveComponent('LazyContent'),
  'blocks.form': resolveComponent('LazyContentForm'),
  'blocks.content-slider': resolveComponent('LazyContentSlider'),
  'blocks.header': resolveComponent('LazyHeader'),
};
</script>
