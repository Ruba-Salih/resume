<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { register } from "../services/auth";

const router = useRouter();

const name = ref("");
const email = ref("");
const password = ref("");
const error = ref("");
const loading = ref(false);

async function handleRegister() {
  error.value = "";
  loading.value = true;

  try {
    await register(name.value, email.value, password.value);

    // after register → go to login
    router.push("/login");
  } catch (err) {
    error.value = "Registration failed";
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <div class="mx-auto max-w-md rounded-xl border bg-white p-6 shadow-sm">
    <h2 class="mb-4 text-xl font-semibold">Register</h2>

    <p v-if="error" class="mb-3 text-sm text-red-600">
      {{ error }}
    </p>

    <input
        v-model="name"
        placeholder="Full name"
        class="mb-3 w-full rounded border px-3 py-2"
    />

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
      @click="handleRegister"
      :disabled="loading"
      class="w-full rounded bg-slate-900 py-2 text-white disabled:opacity-50"
    >
      {{ loading ? "Creating account..." : "Register" }}
    </button>

    <p class="mt-4 text-sm text-center">
      Already have an account?
      <RouterLink to="/login" class="text-slate-900 font-medium">
        Login
      </RouterLink>
    </p>
  </div>
</template>
