<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { login } from "../services/auth";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const router = useRouter();

const email = ref("");
const password = ref("");
const error = ref("");
const loading = ref(false);

async function handleLogin() {
  error.value = "";
  loading.value = true;

  if (!email.value || !password.value) {
    error.value = t("login.errorRequired");
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
    error.value = t("login.errorInvalid");
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
        {{ $t("login.title") }}
      </h2>
      <p class="mt-1 text-sm text-slate-600">
        {{ $t("login.subtitle") }}
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
             {{ $t("login.emailLabel") }}
          </label>
          <input
            v-model="email"
            type="email"
            :placeholder="$t('login.emailPlaceholder')"
            class="w-full rounded-lg border px-3 py-2 text-sm focus:border-slate-900 focus:outline-none"
          />
        </div>

        <!-- Password -->
        <div>
          <label class="block text-sm font-medium text-slate-700 mb-1">
            {{ $t("login.passwordLabel") }}
          </label>
          <input
            v-model="password"
            type="password"
            :placeholder="$t('login.passwordPlaceholder')"
            class="w-full rounded-lg border px-3 py-2 text-sm focus:border-slate-900 focus:outline-none"
          />
        </div>

        <!-- Submit -->
        <button
          @click="handleLogin"
          :disabled="loading"
          class="mt-2 w-full rounded-xl bg-slate-900 py-2.5 text-sm font-semibold text-white hover:bg-slate-800 disabled:opacity-50"
        >
          {{ loading ? $t("login.submitting") : $t("login.submit") }}
        </button>
      </div>

      <!-- Footer -->
      <p class="mt-6 text-center text-sm text-slate-600">
        {{ $t("login.noAccount") }}
        <RouterLink
          to="/register"
          class="font-medium text-slate-900 hover:underline"
        >
          {{ $t("login.createAccount") }}
        </RouterLink>
      </p>
    </div>
  </div>
</template>
