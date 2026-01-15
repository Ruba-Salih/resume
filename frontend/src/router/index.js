import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import EditorView from "../views/EditorView.vue";
import LoginView from "../views/LoginView.vue"; // ✅ ADD
import RegisterView from "../views/RegisterView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: HomeView },
    { path: "/login", component: LoginView },
    { path: "/register", component: RegisterView },
    {
      path: "/editor",
      component: EditorView,
      meta: { requiresAuth: true }
    }
  ]
});

router.beforeEach((to) => {
  if (to.meta.requiresAuth && !localStorage.getItem("token")) {
    return { path: "/login" };
  }
});

export default router;
