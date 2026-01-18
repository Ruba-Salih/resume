<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
import LanguageSwitcher from "@/components/LanguageSwitcher.vue";
import { useI18n } from "vue-i18n";

useI18n();

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

function goHome() {
  router.push(isAuthenticated.value ? "/home" : "/");
}
</script>

<template>
  <header class="border-b border-slate-200 bg-white">
    <div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

      <!-- Logo -->
      <div
        class="cursor-pointer text-xl font-bold text-slate-900"
        @click="goHome"
      >
        {{ $t("common.appName", "ResumeBuilder") }}
      </div>

      <!-- Right side -->
      <div class="flex items-center gap-4">

        <!-- Language -->
        <LanguageSwitcher />

        <!-- Auth -->
        <template v-if="!isAuthenticated">
          <button
            @click="goLogin"
            class="text-sm font-medium text-slate-700 hover:text-slate-900 transition"
          >
            {{ $t("common.login") }}
          </button>

          <button
            @click="goRegister"
            class="rounded-lg bg-slate-900 px-4 py-2
                   text-sm font-medium text-white
                   hover:bg-slate-800 transition"
          >
            {{ $t("common.register") }}
          </button>
        </template>

        <button
          v-else
          @click="logout"
          class="rounded-lg border border-slate-300 px-4 py-2
                 text-sm font-medium text-slate-700
                 hover:bg-slate-100 transition"
        >
          {{ $t("common.logout") }}
        </button>
      </div>
    </div>
  </header>
</template>
