<template>
  <div class="leftBar">
    <div class="leftBar__container">
      <div class="leftBar__list">
        <div class="leftBar__header">VineKRD</div>
        <div class="leftBar__tag">Меню</div>
        <div v-for="(path, id) in routesList" :key="id">
          <div
            class="leftBar__button"
            :class="path.route === $route.path && 'leftBar__button--active'"
          >
            <router-link :to="path.route">
              <p>{{ path.name }}</p>
            </router-link>
            <!-- проверка на начилие вложености в объектах -->
            <!-- <div class="leftBar__afterRoutes" v-if="path.afterRoutes">
            <template v-for="(aRoute, id) in path.afterRoutes" :key="id">
            <router-link class="leftBar__afterButton" :to="aRoute.afterRoute">
              <p>{{ aRoute.afterName }}</p>
            </router-link>
          </template>
        </div> -->
          </div>
        </div>
      </div>
      <div class="leftBar__exit">Выход из системы</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const routesList: Object = ref([
  {
    route: "/eco",
    name: "Агрономия",
  },
  {
    route: "/logs",
    name: "Логи",
  },
  {
    route: "/data",
    name: "Датчики ",
  },
]);
</script>

<style scoped lang="scss">
.leftBar {
  height: 100vh;
  max-width: 210px;
  width: 100%;
  border-right: 1px solid $grey;
  &__container {
    padding: 20px 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
  // margin: 0 20px;
  &__header {
    font-size: 30px;
    cursor: pointer;
  }
  &__button {
    font-size: 20px;
    padding-left: 6px;
    margin-bottom: 10px;
    &--active {
      border-left: 4px solid $yellow-light;
      padding-left: 10px;
    }
  }
  &__afterRoutes {
    padding-left: 20px;
    font-size: 16px;
  }
  &__tag {
    color: $grey-text;
    margin-bottom: 10px;
    margin-top: 15px;
    font-size: 16px;
  }
  &__exit {
    color: $grey-text;
    font-size: 16px;
    cursor: pointer;
  }
}
</style>
