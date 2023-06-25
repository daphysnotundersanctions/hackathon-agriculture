import { createRouter, createWebHistory } from "vue-router";
import DataPage from "../pages/Data.vue";
import EcoPage from "../pages/Eco.vue";
import LogsPage from '../pages/Logs.vue';

const routes: Array<any> = [
  {
    path: "/data",
    component: DataPage,
    meta: { transition: 'slide-left' },
  },
  {
    path: "/eco",
    component: EcoPage,
    meta: { transition: 'slide-left' },
  },
  {
    path: "/logs",
    component: LogsPage,
    meta: { transition: 'slide-left' },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
