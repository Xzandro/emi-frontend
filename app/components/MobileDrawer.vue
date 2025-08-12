<template>
  <v-navigation-drawer v-model="drawer" width="300" v-if="isMobile" temporary app position="fixed" :color="colors.primary" :scrim="colors.primary">
    <v-spacer />
    <v-list>
      <template v-for="menuItem in items">
        <v-list-item
          v-if="menuItem.items.length === 0"
          :key="menuItem.documentId"
          exact
          :to="menuItem.type === 'INTERNAL' ? menuItem.path : undefined"
          :href="menuItem.type === 'EXTERNAL' ? menuItem.path : undefined"
          :target="menuItem.type === 'EXTERNAL' ? '_blank' : undefined"
          class="py-5 px-6"
        >
          <v-list-item-title>{{ menuItem.title }}</v-list-item-title>
        </v-list-item>
        <v-list-group :value="isParentActive(menuItem)" v-else :key="`group-${menuItem.documentId}`">
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" :title="menuItem.title" class="py-5 px-6"></v-list-item>
          </template>

          <v-list-item
            v-for="childItem in menuItem.items"
            :key="childItem.documentId"
            :to="childItem.type === 'INTERNAL' ? childItem.path : undefined"
            :href="childItem.type === 'EXTERNAL' ? childItem.path : undefined"
            :target="childItem.type === 'EXTERNAL' ? '_blank' : undefined"
            exact
            class="py-5 px-6"
          >
            <v-list-item-title>{{ childItem.title }}</v-list-item-title>
          </v-list-item>
        </v-list-group>
      </template>
    </v-list>
    <v-spacer />
  </v-navigation-drawer>
</template>

<style lang="scss" scoped>
@use '@/assets/globals.scss' as *;

:deep(.v-list-group .v-list-group__items) {
  background: $colors-stroke;
}
</style>

<script setup>
const route = useRoute();
const menuStore = useMenuStore();

const { mobile } = useDisplay();

const isMobile = computed(() => mobile.value);
const { items, drawer } = storeToRefs(menuStore);

const isParentActive = (menuItem) => route.path.includes(menuItem.path);
</script>
