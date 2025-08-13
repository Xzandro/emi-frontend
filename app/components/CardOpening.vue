<template>
  <CardBase v-bind="$attrs" blurred>
    <div class="opening-grid">
      <template v-for="day in $attrs.opening.days" :key="day.id">
        <div class="grid-item">{{ day.day }}:</div>
        <!-- Morning slot -->
        <div class="grid-item center">
          <template v-if="day.times[0] && !isAfternoon(day.times[0].startTime)">
            {{ toLocaleTime(new Date(`2025-08-12T${day.times[0].startTime}`)) }}
            <span> - </span>
            {{ toLocaleTime(new Date(`2025-08-12T${day.times[0].endTime}`)) }}
          </template>
        </div>
        <!-- Vertical separator (only show if there's an afternoon slot) -->
        <div
          class="grid-item center"
          v-if="(day.times.length > 1 && day.times[1]) || (day.times.length === 1 && day.times[0] && isAfternoon(day.times[0].startTime))"
        >
          |
        </div>
        <div class="grid-item" v-else></div>
        <!-- Afternoon slot -->
        <div class="grid-item center">
          <template v-if="day.times.length > 1 && day.times[1]">
            {{ toLocaleTime(new Date(`2025-08-12T${day.times[1].startTime}`)) }}
            <span> - </span>
            {{ toLocaleTime(new Date(`2025-08-12T${day.times[1].endTime}`)) }}
          </template>
          <template v-else-if="day.times.length === 1 && day.times[0] && isAfternoon(day.times[0].startTime)">
            {{ toLocaleTime(new Date(`2025-08-12T${day.times[0].startTime}`)) }}
            <span> - </span>
            {{ toLocaleTime(new Date(`2025-08-12T${day.times[0].endTime}`)) }}
          </template>
        </div>
      </template>
    </div>
  </CardBase>
</template>

<style lang="scss" scoped>
span {
  font-weight: 500;
  white-space: nowrap;
  font-size: 1rem;
}
.opening-grid {
  display: grid;
  grid-template-columns: 2fr 1fr auto 1fr;
  column-gap: 10px;
  row-gap: 4px;
  align-items: center;
  font-size: 1rem;
  font-weight: 500;
}
.grid-item.center {
  justify-self: center;
}
</style>

<script setup>
const isAfternoon = (time) => {
  return new Date(`2025-08-12T${time}`).getHours() >= 12;
};
</script>
