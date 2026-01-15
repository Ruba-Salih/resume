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

  try {
    const res = await login(email.value, password.value);

    // ✅ Save token
    localStorage.setItem("token", res.data.token);

    // ✅ Redirect to editor
    router.push("/");
  } catch (err) {
    error.value = "Invalid email or password";
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <div class="mx-auto max-w-md rounded-xl border bg-white p-6 shadow-sm">
    <h2 class="mb-4 text-xl font-semibold">Login</h2>

    <p v-if="error" class="mb-3 text-sm text-red-600">
      {{ error }}
    </p>

    <input
      v-model="email"
      type="email"
      placeholder="Email"
      class="mb-3 w-full rounded border px-3 py-2"
    />

    <input
      v-model="password"
      type="password"
      placeholder="Password"
      class="mb-4 w-full rounded border px-3 py-2"
    />

    <button
      @click="handleLogin"
      :disabled="loading"
      class="w-full rounded bg-slate-900 py-2 text-white disabled:opacity-50"
    >
      {{ loading ? "Logging in..." : "Login" }}
    </button>
  </div>
</template>
