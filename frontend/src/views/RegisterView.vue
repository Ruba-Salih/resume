<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { register } from "../services/auth";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const router = useRouter();

const name = ref("");
const email = ref("");
const password = ref("");
const error = ref("");
const loading = ref(false);

async function handleRegister() {
  error.value = "";
  loading.value = true;

  if (!name.value || !email.value || !password.value) {
    error.value = t("register.errorRequired");
    loading.value = false;
    return;
  }

  try {
    await register(name.value, email.value, password.value);
    router.push("/home");
  } catch (err) {
    error.value = t("register.errorExists");
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-slate-50 px-4">
    <div class="w-full max-w-md rounded-2xl border bg-white p-8 shadow-sm">

      <!-- Header with icon -->
      <div class="flex items-center gap-3 mb-2">
        <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white">
          <!-- User Plus Icon -->
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none"
               viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M18 9v3m0 0v3m0-3h3m-3 0h-3M15 21H3v-1a6 6 0 0112 0v1zM9 7a4 4 0 100-8 4 4 0 000 8z"/>
          </svg>
        </div>

        <div>
          <h2 class="text-2xl font-bold text-slate-900">
            {{ $t("register.title") }}
          </h2>
          <p class="text-sm text-slate-600">
            {{ $t("register.subtitle") }}
          </p>
        </div>
      </div>

      <!-- Error -->
      <p
        v-if="error"
        class="mt-4 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600"
      >
        {{ error }}
      </p>

      <!-- Form -->
      <div class="mt-6 space-y-4">

        <!-- Name -->
        <div>
          <label class="block text-sm font-medium text-slate-700 mb-1">
            {{ $t("register.nameLabel") }}
          </label>
          <div class="relative">
            <span class="absolute inset-y-0 left-3 flex items-center text-slate-400">
              <!-- User Icon -->
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none"
                   viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M5.121 17.804A9 9 0 1118.88 17.804M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
            </span>
            <input
              v-model="name"
              type="text"
              :placeholder="$t('register.namePlaceholder')"
              class="w-full rounded-lg border pl-10 px-3 py-2 text-sm focus:border-slate-900 focus:outline-none"
            />
          </div>
        </div>

        <!-- Email -->
        <div>
          <label class="block text-sm font-medium text-slate-700 mb-1">
            {{ $t("register.emailLabel") }}
          </label>
          <div class="relative">
            <span class="absolute inset-y-0 left-3 flex items-center text-slate-400">
              <!-- Mail Icon -->
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none"
                   viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M3 8l9 6 9-6M4 6h16a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2z"/>
              </svg>
            </span>
            <input
              v-model="email"
              type="email"
              :placeholder="$t('register.emailPlaceholder')"
              class="w-full rounded-lg border pl-10 px-3 py-2 text-sm focus:border-slate-900 focus:outline-none"
            />
          </div>
        </div>

        <!-- Password -->
        <div>
          <label class="block text-sm font-medium text-slate-700 mb-1">
            {{ $t("register.passwordLabel") }}
          </label>
          <div class="relative">
            <span class="absolute inset-y-0 left-3 flex items-center text-slate-400">
              <!-- Lock Icon -->
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none"
                   viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M12 11c1.657 0 3 .895 3 2v3H9v-3c0-1.105 1.343-2 3-2z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M5 11h14V9a7 7 0 10-14 0v2z"/>
              </svg>
            </span>
            <input
              v-model="password"
              type="password"
              placeholder="••••••••"
              class="w-full rounded-lg border pl-10 px-3 py-2 text-sm focus:border-slate-900 focus:outline-none"
            />
          </div>
          <p class="mt-1 text-xs text-slate-500">
            {{ $t("register.passwordHint") }}
          </p>
        </div>

        <!-- Submit -->
        <button
          @click="handleRegister"
          :disabled="loading"
          class="mt-2 w-full rounded-xl bg-slate-900 py-2.5 text-sm font-semibold text-white hover:bg-slate-800 disabled:opacity-50"
        >
          {{ loading ? $t("register.submitting") : $t("register.submit") }}
        </button>
      </div>

      <!-- Footer -->
      <p class="mt-6 text-center text-sm text-slate-600">
        {{ $t("register.haveAccount") }}
        <RouterLink
          to="/login"
          class="font-medium text-slate-900 hover:underline"
        >
          {{ $t("common.login") }}
        </RouterLink>
      </p>

    </div>
  </div>
</template>
