<template>
  <template v-if="type === 'appointment'">
    <v-btn v-bind="$attrs" :height="circle ? undefined : 56" :rounded="rounded" :icon="circle" variant="flat">
      <v-icon v-if="icon && (!iconSide || iconSide === 'left')" :class="[circle ? null : 'mr-2', iconClass]">{{ icon }}</v-icon>
      {{ text }}
      <v-icon v-if="icon && iconSide === 'right'" :class="iconClass">{{ icon }}</v-icon>
      <v-dialog activator="parent" max-width="900" height="100%" v-model="dialogOpen">
        <template v-slot:default>
          <v-card>
            <v-card-title class="text-h2 py-10 px-8"> Termin vereinbaren </v-card-title>
            <v-card-text class="py-10">
              <iframe
                ref="iframe"
                :src="`https://webtermin.medatixx.de/#/${config.public.medatixx.configid}`"
                width="100%"
                height="100%"
                frameborder="0"
                @load="onIframeLoad"
              ></iframe>
            </v-card-text>
          </v-card>
        </template>
      </v-dialog>
    </v-btn>
  </template>

  <v-btn
    v-else
    v-bind="$attrs"
    :height="circle ? undefined : 56"
    :rounded="rounded"
    :icon="circle"
    variant="flat"
    :href="isExternal ? url : undefined"
    :to="!isExternal ? url : undefined"
    :target="isExternal ? '_blank' : '_self'"
  >
    <v-icon v-if="icon && (!iconSide || iconSide === 'left')" :class="[circle ? null : 'mr-2', iconClass]">{{ icon }}</v-icon>
    {{ text }}
    <v-icon v-if="icon && iconSide === 'right'" :class="iconClass">{{ icon }}</v-icon>
  </v-btn>
</template>

<style lang="scss" scoped>
@use '@/assets/globals.scss' as *;

.v-btn {
  border: 1px solid $colors-primary;
  color: $colors-primary;
  border-radius: $menu-content-border-radius;
  font-weight: 600;
  font-size: 1rem;
  text-transform: none;
  max-width: fit-content;
  padding: 0 28px;
  :deep(.v-icon) {
    margin-top: 6px;
  }
}
.v-card {
  border-radius: $menu-content-border-radius;
}
.v-dialog > .v-card > .v-card-title,
.text-h4 {
  font-weight: 400;
}
.v-card-title {
  background-color: $colors-primary;
  color: #fff;
}
.v-card-subtitle,
.v-card-text {
  font-size: 0.875rem !important;
  font-weight: 400;
  letter-spacing: 0.0071428571em;
  line-height: 1.375rem;
}
</style>

<script setup>
const props = defineProps({
  text: String,
  isExternal: Boolean,
  url: String,
  icon: String,
  circle: Boolean,
  type: String,
  rounded: {
    type: Boolean,
    default: true,
  },
  iconSide: {
    type: String,
    default: 'left',
  },
  iconClass: String,
});

const config = useRuntimeConfig();

const iframe = ref(null);
const iframeLoaded = ref(false);
const dialogOpen = ref(false);

const onIframeLoad = (e) => {
  iframeLoaded.value = !!iframeLoaded.value;
  if (dialogOpen.value && iframeLoaded.value) {
    dialogOpen.value = false;
    iframeLoaded.value = false;
  }
};

onUnmounted(() => {
  iframeLoaded.value = false;
  dialogOpen.value = false;
});
</script>
