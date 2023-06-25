import { createRouter, createWebHistory } from "vue-router";
import DataPage from "../pages/Data.vue";
import EcoPage from "../pages/Eco.vue";
import LogsPage from '../pages/Logs.vue';

const routes: Array<any> = [
  {
    path: "/eco",
    component: EcoPage,
  },
  {
    path: "/data",
    component: DataPage,
  },
  {
    path: "/logs",
    component: LogsPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
