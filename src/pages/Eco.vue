<template>
  <UiSelect v-model="chosenEmployee" :options="employeeList" />
  <UiCalendar />
</template>

<script setup lang="ts">
import { ref } from "vue";
import UiCalendar from "../components/ui-kit/UiCalendar.vue";
import UiSelect from "../components/ui-kit/UiSelect.vue";

const employeeList = ref(["Маша", "Вася", "Петя", "Коля"]);
const chosenEmployee = ref(null);
</script>

<style scoped></style>
