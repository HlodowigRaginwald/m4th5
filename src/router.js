import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";

import routerDebug from "./router-debug";

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      children: [
        {
          name: "home",
          path: "/",
          component: HomePage,
        },
      ],
    },
    {
      path: "/-debug-",
      children: routerDebug,
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: { name: "home" },
    },
  ],
});
