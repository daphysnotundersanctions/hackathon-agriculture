<template>
  <calendar-view
    :show-date="showDate"
    class="theme-default holiday-us-traditional holiday-us-official"
  >
    <template #header="{ headerProps }">
      <calendar-view-header :header-props="headerProps" @input="setShowDate" />
    </template>
  </calendar-view>
</template>

<script setup lang="ts">
import { CalendarView, CalendarViewHeader } from "vue-simple-calendar";
import { ref } from "vue";
// import "..relative-path-to-node_modules/vue-simple-calendar/dist/style.css";
// The next two lines are optional themes
// import "..relative-path-to-node_modules/vue-simple-calendar/dist/css/default.css";
// import "..relative-path-to-node_modules/vue-simple-calendar/dist/css/holidays-us.css";

const showDate = ref(new Date());

function setShowDate(date: any) {
  showDate.value = date;
}
</script>

<style scoped></style>
