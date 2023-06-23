import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/index.vue";

const routes: Array<any> = [
  {
    path: "/",
    component: Home,
  },
  //   {
  //     path: "/:locale",
  //     children: [
  //       {
  //         path: "",
  //         component: Home,
  //       },
  //     ],
  //   },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
