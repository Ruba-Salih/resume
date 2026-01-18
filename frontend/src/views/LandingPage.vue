<script setup>
import { useRouter } from "vue-router";
import BaseLayout from "@/layouts/BaseLayout.vue";

const router = useRouter();

function goLogin() {
  router.push("/login");
}

function goRegister() {
  router.push("/register");
}
</script>

<template>
  <div class="min-h-screen flex flex-col bg-slate-50">

    <BaseLayout>
    <main class="flex-1">

      <!-- HERO -->
      <section class="mx-auto max-w-7xl px-6 py-24">
        <div class="grid gap-12 md:grid-cols-2 md:items-center">
          <div class="space-y-6">
            <h1 class="text-5xl font-bold tracking-tight text-slate-900">
              {{ $t("landing.headline") }}<br />
            <span class="text-slate-600">
              {{ $t("landing.subtitle") }}
            </span>
            </h1>

            <p class="text-lg text-slate-600 max-w-xl">
              {{ $t("landing.description") }}
            </p>

            <!-- HERO ACTIONS -->
            <div class="flex flex-wrap gap-4">
              <button
                @click="goRegister"
                class="rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800"
              >
                {{ $t("landing.getStarted") }}
              </button>

              <button
                @click="goLogin"
                class="rounded-xl border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-white"
              >
                {{ $t("landing.login") }}
              </button>
            </div>
          </div>

          <!-- MOCK PREVIEW -->
          <div class="rounded-2xl border bg-white p-8 shadow-sm">
            <div class="space-y-4">
              <div class="h-4 w-2/3 rounded bg-slate-200"></div>
              <div class="h-3 w-1/2 rounded bg-slate-200"></div>

              <div class="mt-6 space-y-2">
                <div class="h-2 w-full rounded bg-slate-100"></div>
                <div class="h-2 w-5/6 rounded bg-slate-100"></div>
                <div class="h-2 w-4/6 rounded bg-slate-100"></div>
              </div>

              <div class="mt-6 flex gap-2">
                <div class="h-6 w-20 rounded bg-slate-900"></div>
                <div class="h-6 w-20 rounded bg-slate-200"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
<!-- ================= EXAMPLE RESUMES ================= -->
<section class="bg-white border-t border-slate-200">
  
  <div class="mx-auto max-w-7xl px-6 py-20">

    <!-- Section header -->
    <div class="mb-12 text-center">
      <h2 class="text-3xl font-bold text-slate-900">
        {{ $t("landing.examplesTitle") }}
      </h2>
      <p class="mt-2 text-slate-600">
        {{ $t("landing.examplesSubtitle") }}
      </p>
    </div>

    <!-- Examples grid -->
    <div class="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

      <!-- ================= CLASSIC LAYOUT ================= -->
      <div class="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm hover:shadow-md transition">

        <span class="text-xs font-semibold uppercase text-blue-600">
          {{ $t("landing.classic") }}
        </span>


        <h3 class="mt-2 text-lg font-semibold text-slate-900">
          Alex Johnson
        </h3>
        <p class="text-sm text-slate-600">
          Software Engineer · alex.johnson@email.com
        </p>

        <div class="mt-4 space-y-3 text-sm text-slate-700">
          <p>
            <strong>Experience</strong><br />
            Frontend Developer — Techify (2021–Present)
          </p>

          <p>
            Developed scalable web applications using Vue.js,
            improved performance by 30%, and collaborated with
            cross-functional teams.
          </p>

          <p>
            <strong>Skills</strong><br />
            JavaScript · Vue.js · HTML · CSS
          </p>
        </div>
      </div>

      <!-- ================= SIDEBAR LAYOUT ================= -->
      
      <div
        class="relative z-10
              rounded-2xl border border-slate-300 bg-white p-6
              shadow-lg hover:shadow-xl transition
              -translate-y-12"
      >

        <span class="text-xs font-semibold uppercase text-blue-600">
          {{ $t("landing.sidebar") }}
        </span>


        <div class="mt-3 flex gap-4">
          <!-- Sidebar -->
          <aside class="w-1/3 text-sm text-slate-700">
            <p class="font-semibold text-slate-900">
              Alex Johnson
            </p>
            <p class="text-slate-600">
              Software Engineer
            </p>

            <div class="mt-4">
              <p class="font-medium">Skills</p>
              <ul class="mt-1 space-y-1 text-slate-600">
                <li>Vue.js</li>
                <li>JavaScript</li>
                <li>REST APIs</li>
                <li>Git</li>
              </ul>
            </div>
          </aside>

          <!-- Main -->
          <main class="flex-1 text-sm text-slate-700">
            <p class="font-medium text-slate-900">
              Experience
            </p>
            <p class="mt-1">
              Frontend Developer at Techify (2021–Present)
            </p>
            <p class="mt-2 text-slate-600">
              Built modern interfaces, reusable components,
              and responsive layouts for SaaS products.
            </p>
          </main>
        </div>
      </div>

      <!-- ================= MINIMAL LAYOUT ================= -->
      <div class="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm hover:shadow-md transition">

        <span class="text-xs font-semibold uppercase text-blue-600">
          {{ $t("landing.minimal") }}
        </span>

        <h3 class="mt-3 text-lg font-semibold text-slate-900">
          Alex Johnson
        </h3>
        <p class="text-sm text-slate-600">
          Software Engineer
        </p>

        <div class="mt-4 space-y-2 text-sm text-slate-700">
          <p>
            Frontend Developer at Techify
          </p>
          <p class="text-slate-600">
            Vue.js · JavaScript · CSS
          </p>

          <p class="text-slate-600">
            Passionate about clean code, performance,
            and user-focused design.
          </p>
        </div>
      </div>

    </div>

    <!-- CTA -->
    <div class="mt-12 text-center">
      <button
        @click="goRegister"
        class="rounded-xl bg-slate-900 px-8 py-3 text-sm font-semibold text-white hover:bg-slate-800"
      >
        {{ $t("landing.ctaBottom") }}
      </button>
    </div>

  </div>
</section>

      <!-- FEATURES -->
      <section class="bg-white border-t">
        <div class="mx-auto max-w-7xl px-6 py-20 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          <div class="rounded-2xl border p-6 shadow-sm">
            <h3 class="font-semibold text-slate-900">{{ $t("landing.features.livePreview") }}</h3>
            <p class="mt-2 text-sm text-slate-600">
              {{ $t("landing.features.livePreviewDesc") }}
            </p>
          </div>

          <div class="rounded-2xl border p-6 shadow-sm">
            <h3 class="font-semibold text-slate-900">{{ $t("landing.features.layouts") }}</h3>
            <p class="mt-2 text-sm text-slate-600">
              {{ $t("landing.features.layoutsDesc") }}
            </p>
          </div>

          <div class="rounded-2xl border p-6 shadow-sm">
            <h3 class="font-semibold text-slate-900">{{ $t("landing.features.export") }}</h3>
            <p class="mt-2 text-sm text-slate-600">
              {{ $t("landing.features.exportDesc") }}
            </p>
          </div>
        </div>
      </section>

    </main>
  </BaseLayout>
  </div>
  
</template>
