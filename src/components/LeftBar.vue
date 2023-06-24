<template>
  <div class="leftBar">
    <div v-for="(path, id) in routesList" :key="id">
      <div>
        <router-link
          class="leftBar__button"
          :class="path.route === $route.path && 'leftBar__button--active'"
          :to="path.route"
        >
          <p>{{ path.name }}</p>
        </router-link>
        <!-- проверка на начилие вложености в объектах -->
        <div class="leftBar__afterRoutes" v-if="path.afterRoutes">
          <template v-for="(aRoute, id) in path.afterRoutes" :key="id">
            <router-link class="leftBar__afterButton" :to="aRoute.afterRoute">
              <p>{{ aRoute.afterName }}</p>
            </router-link>
          </template>
        </div>
      </div>
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
  margin: 0 20px;
  max-width: 210px;
  width: 100%;
  border-right: 1px solid $grey;
  &__button {
    font-size: 20px;
    &--active {
    }
  }
  &__afterRoutes {
    padding-left: 20px;
    font-size: 16px;
  }
}
</style>
