<template>
  <div class="logsPage">
    <div class="page__header">Логи</div>
    <div class="logsPage__list">
      <div class="logsPage__item" v-for="(log, id) in logsData" :key="id">
        <p>{{ log }}</p>
        <hr class="logsPage__line" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
// onMounted(() => {
//   getLogs().then((resp: any) => (logsData.value = resp));
// });
const logsData: Array<string> = ref([
  "Подстрижены кусты, 5 единиц, выполнил Антон",
  "Политы участки (1,3,5), 5 единиц, выполнил Антон",
  "Подстрижены кусты, 2 единиц, выполнил Антон",
  "Подстрижены кусты, 7 единиц, выполнил Антон",
  "Подстрижены кусты, 10 единиц, выполнил Антон",
  "Политы участки (2,8,20), 5 единиц, выполнил Антон",
  "Политы участки (1,3,5), 2 единиц, выполнил Антон",
  "Подстрижены кусты, 5 единиц, выполнил Антон",
  "Политы участки (1,3,5), 10 единиц, выполнил Антон",
  "Политы участки (1,3,5), 6 единиц, выполнил Антон",
  "Подстрижены кусты, 10 единиц, выполнил Антон",
  "Политы участки (1,3,5), 5 единиц, выполнил Антон",
]);
</script>

<style lang="scss" scoped>
.logsPage {
  &__list {
    max-width: 950px;
    margin: 0 auto;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  &__line {
    background-color: $grey;
    height: 2px;
    border: none;
  }
}
</style>
