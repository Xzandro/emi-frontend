<template>
  <div class="container-wrap" :class="[gap]">
    <div class="carousel-wrapper">
      <Carousel v-bind="carouselConfig">
        <Slide v-for="item in block.items" :key="item.id">
          <div class="carousel__item h-100 w-100 px-1">
            <v-container class="constrained">
              <v-row>
                <v-col cols="12" md="6" class="pa-10 d-flex flex-column justify-center">
                  <Headline :block="{ text: item.headline }" classes="mb-0" />
                  <div v-if="item.content" v-html="item.content" class="mt-8"></div>
                  <Button v-for="button in item.buttons" :key="button.id" v-bind="button" class="mt-8 mr-2" />
                </v-col>
                <v-col order="12" cols="12" md="6" class="pa-0">
                  <img :src="getImageURL(item.image)" cover />
                </v-col>
              </v-row>
            </v-container>
          </div>
        </Slide>
        <template #addons>
          <ClientOnly>
            <Navigation>
              <template #prev>
                <v-btn icon="mdi-chevron-left" width="60" variant="flat" height="44"></v-btn>
              </template>
              <template #next>
                <v-btn icon="mdi-chevron-right" width="60" variant="flat" height="44"></v-btn>
              </template>
            </Navigation>
            <Pagination />
          </ClientOnly>
        </template>
      </Carousel>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/globals.scss' as *;

.v-container {
  background-color: $colors-background;
  border-radius: $menu-content-border-radius;
  border: 1px solid $colors-stroke;
  overflow: hidden;
}
.carousel-wrapper {
  max-width: $grid-size;
  margin: 0 auto;
}
img {
  max-width: 100%;
  height: 100%;
  object-fit: cover;
}
.carousel {
  --vc-png-bottom: -20px;
  --vc-pgn-background-color: #{$colors-stroke};
  --vc-pgn-active-color: #{$colors-primary};
  --vc-nav-height: 44px;
  --vc-nav-width: 60px;
}
:deep(.carousel__prev) {
  position: absolute;
  right: 72px;
  left: auto;
  top: -40px;
}
:deep(.carousel__next) {
  position: absolute;
  right: 0px;
  left: auto;
  top: -40px;
}
.v-btn {
  border: 1px solid $colors-primary;
  color: $colors-primary;
  border-radius: $menu-content-border-radius;
}
</style>
<style></style>

<script setup>
const props = defineProps({
  block: {
    type: Object,
    default() {
      return {
        items: [],
      };
    },
  },
});

const carouselConfig = computed(() => ({
  itemsToShow: 1,
  wrapAround: true,
  snapAlign: 'start',
  autoplay: 10000,
  pauseAutoplayOnHover: true,
}));

const gap = useGap(props.block);
</script>
