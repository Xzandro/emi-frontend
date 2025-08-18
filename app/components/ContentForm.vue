<template>
  <div class="container-wrap" :class="block.background ? `background-${block.background}` : null">
    <v-container class="constrained" :class="[gap]">
      <v-row>
        <v-col cols="12">
          <v-card flat>
            <v-card-text>
              <v-row>
                <v-col cols="12">
                  <Headline :block="{ text: block.headline }" v-if="block.headline" />
                  <div v-if="block.content" v-html="block.content" />
                  <Form class="mt-5" :form="block.form" />
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
.v-card {
  background: transparent !important;
}
</style>

<script setup>
const props = defineProps({
  block: {
    type: Object,
    default() {
      return {
        rows: [],
      };
    },
  },
});

const gap = useGap(props.block);
</script>
