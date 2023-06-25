<template>
  <div class="logsPage">
    <div class="page__header">Логи</div>
    <div class="logsPage__list">
      <p>213</p>
      <hr class="logsPage__line" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { getLogs } from "../API/ways/logs";
const logsData: Object = ref(null);

onMounted(() => {
  getLogs().then((resp: any) => (logsData.value = resp));
});
</script>

<style lang="scss" scoped>
.logsPage {
  &__list {
    max-width: 950px;
    margin: 0 auto;
    margin-top: 50px;
  }
  &__line {
    background-color: $grey;
    height: 2px;
    border: none;
  }
}
</style>
