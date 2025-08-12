<template>
  <div>
    <v-app-bar
      v-scroll="onScroll"
      :height="isMobile || scrolled ? 95 : 160"
      :class="{ 'is-mobile': isMobile, scrolled }"
      flat
      :order="1"
      :scroll-behavior="isMobile ? 'elevate hide' : null"
      :scroll-threshold="300"
    >
      <div class="container-wrap">
        <v-container class="constrained">
          <v-row>
            <v-col class="d-flex justify-center align-center">
              <NuxtLink to="/">
                <v-img
                  class="main-logo"
                  :class="{ 'is-mobile': isMobile }"
                  :width="isMobile || scrolled ? 50 : 120"
                  contain
                  :src="isMobile ? '/logo.svg' : '/logo.svg'"
                  alt="Main logo"
                />
              </NuxtLink>
              <div v-if="!mobile && !scrolled" class="d-flex flex-column ml-7">
                <p class="subtitle">Hausärztliche Praxis</p>
                <p class="title">Dr. med. Emily Günther</p>
              </div>
              <v-spacer />
              <v-app-bar-nav-icon v-if="isMobile" @click.stop="toggleDrawer" />
              <div id="main-menu" class="d-none d-lg-flex align-center">
                <div v-for="menuItem in items" :key="menuItem.documentId">
                  <NuxtLink
                    v-if="menuItem.items.length === 0"
                    :to="menuItem.type === 'INTERNAL' ? menuItem.path : undefined"
                    :href="menuItem.type === 'EXTERNAL' ? menuItem.path : undefined"
                    :target="menuItem.type === 'EXTERNAL' ? '_blank' : undefined"
                    exact
                  >
                    {{ menuItem.title }}
                  </NuxtLink>
                  <div v-else>
                    <v-menu content-class="main-menu-child" location="bottom center" offset="30" max-width="350" min-width="220">
                      <template v-slot:activator="{ isActive, props }">
                        <v-btn
                          class="px-0"
                          :class="{
                            'router-link-active': isParentActive(menuItem),
                          }"
                          tag="span"
                          text
                          :ripple="false"
                          v-bind="props"
                          variant="text"
                          >{{ menuItem.title }}
                          <v-icon class="ml-1" right>
                            {{ `mdi-chevron-${isActive ? 'up' : 'down'}` }}
                          </v-icon>
                        </v-btn>
                      </template>
                      <v-list class="py-0">
                        <v-list-item
                          class="px-8 py-7"
                          v-for="item in menuItem.items"
                          :key="item.documentId"
                          :to="item.type === 'INTERNAL' ? item.path : undefined"
                          :href="item.type === 'EXTERNAL' ? item.path : undefined"
                          :target="item.type === 'EXTERNAL' ? '_blank' : undefined"
                        >
                          <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item>
                      </v-list>
                    </v-menu>
                  </div>
                </div>
                <span class="phone">
                  <v-icon>mdi-phone</v-icon>
                  gvdfgfd
                </span>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </v-app-bar>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/globals.scss' as *;

.v-app-bar {
  background-color: #ffffff !important;
  z-index: 5 !important;
}
.v-app-bar.is-mobile,
.v-app-bar.scrolled {
  position: fixed !important;
}
:deep(.v-app-bar .v-toolbar__content) {
  flex-wrap: wrap;
  padding: 0;
}
.container-wrap {
  width: 100%;
}
.title,
.subtitle {
  font-family: $body-font-family-condensed;
  color: #000000;
  line-height: 30.725px;
}
.title {
  font-size: 1.813rem;
  font-weight: 700;
}
.subtitle {
  font-size: 1.563rem;
  font-weight: 400;
}
#main-menu a,
#main-menu span {
  font-family: $body-font-family;
  color: $colors-font;
  font-size: 1.125rem;
  text-decoration: none;
  margin-left: 40px;
  font-weight: 500;
  transition: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}
#main-menu .v-btn {
  letter-spacing: normal;
  text-transform: none;
}
#main-menu a:hover,
#main-menu span:hover {
  color: $colors-primary;
}
#main-menu span {
  cursor: pointer;
}
#main-menu span.phone {
  cursor: auto;
  color: $colors-primary;
  font-weight: 700;
}
#main-menu span.phone .v-icon {
  color: $colors-primary;
}
#main-menu a.router-link-active,
#main-menu span.router-link-active,
.main-menu-child .v-list-item--active {
  color: $colors-primary;
}
#main-menu .v-btn:hover::before {
  opacity: 0;
}
.main-logo {
  transition: $transition-ease-out;
}
.main-logo.is-mobile {
  padding: 10px 0;
}

:deep(.main-menu-child .v-list-item) {
  border-bottom: 2px solid #d9d9d9;
}
:deep(.main-menu-child .v-list-item .v-list-item-title) {
  font-family: $body-font-family;
  font-size: 1rem;
}
:deep(.main-menu-child .v-list-item.v-list-item--active .v-list-item-title) {
  color: $colors-primary;
}

:deep(.main-menu-child .v-list .v-list-item:last-child) {
  border-bottom: none;
}
:deep(.main-menu-child .v-list-item--active:hover::before),
:deep(.main-menu-child .v-list-item--active::before) {
  opacity: 0;
}
:slotted(.main-menu-child) {
  border-radius: 10px;
}
</style>

<script setup>
const route = useRoute();
const { t } = useI18n();
const menuStore = useMenuStore();

const { mobile } = useDisplay();

const isMobile = computed(() => mobile.value);

const { items, drawer } = storeToRefs(menuStore);

const threshold = 0;
const scrolled = ref(false);

const isParentActive = (menuItem) => route.path.includes(menuItem.path);
const toggleDrawer = () => {
  menuStore.drawer = !drawer.value;
};

const onScroll = () => {
  if (document.documentElement.scrollTop > threshold) {
    scrolled.value = true;
  } else {
    scrolled.value = false;
  }
};

onMounted(() => {
  onScroll();
});
</script>
