<template>
  <div class="leftBar">
    <p>Меню</p>
    <div class="leftBar__button" v-for="(path, id) in routesList" :key="id">
      <router-link :to="path.route">
        <p>{{ path.name }}</p>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const routesList: Object = ref([
  {
    route: "/name",
    name: "Мой участок",
  },
  {
    route: "/",
    name: "Аналитика",
  },
  {
    route: "/",
    name: "Склад   ",
  },
  {
    route: "/",
    name: "Уборка урожая",
  },
  {
    route: "/",
    name: "Производство",
  },
  {
    route: "/",
    name: "Агрономия",
    afterRoutes: [
      {
        afterRoute: "/",
        afterName: "Постановка задачи",
      },
      {
        afterRoute: "/",
        afterName: "Тех.карты",
      },
      {
        afterRoute: "/",
        afterName: "История погоды",
      },
      {
        afterRoute: "/",
        afterName: "Метеостанции",
      },
      {
        afterRoute: "/",
        afterName: "Датчики для почвы",
      },
      {
        afterRoute: "/",
        afterName: "Прогноз болезней",
      },
      {
        afterRoute: "/",
        afterName: "Фенофаза",
      },
      {
        afterRoute: "/",
        afterName: "Прогноз урожая",
      },
      {
        afterRoute: "/",
        afterName: "Урожайность(план.факт)",
      },
    ],
  },
]);
</script>

<style scoped lang="scss">
.leftBar {
  height: 100vh;
  &__button {
  }
}
</style>
