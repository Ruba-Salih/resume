<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

// 🔐 Auth state
const isAuthenticated = computed(() => {
  return !!localStorage.getItem("token");
});

// 👉 Actions
function goLogin() {
  router.push("/login");
}

function goRegister() {
  router.push("/register");
}

function logout() {
  localStorage.removeItem("token");
  router.push("/");
}
</script>

<template>
  <!-- ================= HEADER ================= -->
  <header class="bg-white border-b border-slate-200">
    <div
      class="mx-auto max-w-7xl px-6 py-4
             flex items-center justify-between"
    >
      <!-- Logo -->
      <div
        class="text-xl font-bold text-slate-900 cursor-pointer"
        @click="router.push('/home')"
      >
        ResumeBuilder
      </div>

      <!-- Navigation -->
      <nav class="flex items-center gap-4">
        <!-- NOT logged in -->
        <template v-if="!isAuthenticated">
          <button
            @click="goLogin"
            class="text-sm font-medium text-slate-700 hover:text-slate-900 transition"
          >
            Login
          </button>

          <button
            @click="goRegister"
            class="rounded-lg bg-slate-900 px-4 py-2
                   text-sm font-medium text-white
                   hover:bg-slate-800 transition"
          >
            Register
          </button>
        </template>

        <!-- Logged in -->
        <button
          v-else
          @click="logout"
          class="rounded-lg border border-slate-300 px-4 py-2
                 text-sm font-medium text-slate-700
                 hover:bg-slate-100 transition"
        >
          Logout
        </button>
      </nav>
    </div>
  </header>
</template>
