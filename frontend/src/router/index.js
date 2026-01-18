import { createRouter, createWebHistory } from "vue-router";

import LandingPage from "@/views/LandingPage.vue";
import HomeView from "@/views/HomeView.vue";
import EditorView from "@/views/EditorView.vue";
import LoginView from "@/views/LoginView.vue";
import RegisterView from "@/views/RegisterView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // 🌍 Landing (public)
    {
      path: "/",
      name: "Landing",
      component: LandingPage
    },

    // 🔐 Auth (ALWAYS accessible)
    {
      path: "/login",
      name: "Login",
      component: LoginView
    },
    {
      path: "/register",
      name: "Register",
      component: RegisterView
    },

    // 🏠 Home (protected)
    {
      path: "/home",
      name: "Home",
      component: HomeView,
      meta: { requiresAuth: true }
    },

    // ✍️ Editor (protected)
    {
      path: "/editor",
      name: "Editor",
      component: EditorView,
      meta: { requiresAuth: true }
    }
  ]
});

// 🔐 Auth guard (ONLY protects private pages)
router.beforeEach((to) => {
  const token = localStorage.getItem("token");

  if (to.meta.requiresAuth && !token) {
    return { path: "/login" };
  }
});

export default router;
