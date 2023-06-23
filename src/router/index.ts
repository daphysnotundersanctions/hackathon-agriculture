import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/index.vue";
import Calendar from "../pages/calendar.vue";

const routes: Array<any> = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/calendar",
    component: Calendar,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
