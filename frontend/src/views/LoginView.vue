<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { login } from "../services/auth";

const router = useRouter();

const email = ref("");
const password = ref("");
const error = ref("");
const loading = ref(false);

async function handleLogin() {
  error.value = "";
  loading.value = true;

  if (!email.value || !password.value) {
    error.value = "Email and password are required";
    loading.value = false;
    return;
  }

  try {
    const res = await login(email.value, password.value);

    // ✅ Save token
    localStorage.setItem("token", res.data.token);

    // ✅ Redirect after login
    router.push("/home");
  } catch (err) {
    error.value = "Invalid email or password";
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-slate-50 px-4">
    <div class="w-full max-w-md rounded-2xl border bg-white p-8 shadow-sm">

      <!-- Title -->
      <h2 class="text-2xl font-bold text-slate-900">
        Welcome back
      </h2>
      <p class="mt-1 text-sm text-slate-600">
        Log in to continue building your resume
      </p>

      <!-- Error -->
      <p
        v-if="error"
        class="mt-4 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600"
      >
        {{ error }}
      </p>

      <!-- Form -->
      <div class="mt-6 space-y-4">

        <!-- Email -->
        <div>
          <label class="block text-sm font-medium text-slate-700 mb-1">
            Email address
          </label>
          <input
            v-model="email"
            type="email"
            placeholder="you@example.com"
            class="w-full rounded-lg border px-3 py-2 text-sm focus:border-slate-900 focus:outline-none"
          />
        </div>

        <!-- Password -->
        <div>
          <label class="block text-sm font-medium text-slate-700 mb-1">
            Password
          </label>
          <input
            v-model="password"
            type="password"
            placeholder="••••••••"
            class="w-full rounded-lg border px-3 py-2 text-sm focus:border-slate-900 focus:outline-none"
          />
        </div>

        <!-- Submit -->
        <button
          @click="handleLogin"
          :disabled="loading"
          class="mt-2 w-full rounded-xl bg-slate-900 py-2.5 text-sm font-semibold text-white hover:bg-slate-800 disabled:opacity-50"
        >
          {{ loading ? "Logging in..." : "Login" }}
        </button>
      </div>

      <!-- Footer -->
      <p class="mt-6 text-center text-sm text-slate-600">
        Don’t have an account?
        <RouterLink
          to="/register"
          class="font-medium text-slate-900 hover:underline"
        >
          Create one
        </RouterLink>
      </p>
    </div>
  </div>
</template>
