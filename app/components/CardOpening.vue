<template>
  <CardBase v-bind="$attrs" blurred>
    <div class="d-flex flex-column">
      <div class="d-flex" v-for="day in $attrs.opening.days" :key="day.id">
        <span>{{ day.day }}:</span>
        <v-spacer />

        <div class="mb-1 d-flex" v-for="(time, index) in day.times" :key="time.id">
          <span v-if="index !== 0" class="mx-4">|</span>

          <span v-if="time.startTime">{{ toLocaleTime(new Date(`2025-08-12T${time.startTime}`)) }}</span>
          <span class="mx-2"> - </span>
          <span v-if="time.endTime">{{ toLocaleTime(new Date(`2025-08-12T${time.endTime}`)) }}</span>
        </div>
      </div>
    </div>
  </CardBase>
</template>
<style lang="scss" scoped>
span {
  font-weight: 500;
  white-space: nowrap;
  font-size: 1rem;
}
</style>
