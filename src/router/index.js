import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import GetStartedView from "@/views/GetStartedView.vue";
import LoginView from "@/views/LoginView.vue";
import DashboardView from "@/views/DashboardView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "index",
      component: GetStartedView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: DashboardView,
      children: [
        {
          path: "/dashboard/home",
          name: "home",
          component: () => import("../views/HomeView.vue"),
        },
        {
          path: "/dashboard/statistic",
          name: "statistic",
          component: () => import("../views/StatisticView.vue"),
        },
        {
          path: "/dashboard/history",
          name: "history",
          component: () => import("../views/HistoryView.vue"),
        },
        {
          path: "/dashboard/profile",
          name: "profile",
          component: () => import("../views/ProfileView.vue"),
        },
        {
          path: "/dashboard/personal",
          name: "personal",
          component: () => import("../views/PersonalView.vue"),
        },
        {
          path: "/dashboard/password",
          name: "password",
          component: () => import("../views/PasswordView.vue"),
        },
      ],
    },
    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import("../views/AboutView.vue"),
    // },
  ],
});

export default router;
