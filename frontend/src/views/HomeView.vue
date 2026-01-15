<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <section class="mx-auto max-w-5xl px-4 py-16">
    <!-- Hero -->
    <div class="grid gap-10 md:grid-cols-2 md:items-center">
      <div class="space-y-6">
        <h1 class="text-4xl font-bold tracking-tight text-slate-900">
          Build your resume.<br />
          <span class="text-slate-600">Fast. Clean. Professional.</span>
        </h1>

        <p class="text-lg text-slate-600">
          Create and customize your resume with live preview, modern templates,
          and easy editing — all in one place.
        </p>

        <div class="flex gap-4">
          <RouterLink
            to="/editor"
            class="inline-flex items-center justify-center rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800"
          >
            Create Resume
          </RouterLink>

          <a
            href="#features"
            class="inline-flex items-center justify-center rounded-xl border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-white"
          >
            Learn more
          </a>
        </div>
      </div>

      <!-- Visual mock -->
      <div class="rounded-2xl border bg-white p-6 shadow-sm">
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

    <!-- Features -->
    <div
      id="features"
      class="mt-20 grid gap-6 sm:grid-cols-2 md:grid-cols-3"
    >
      <div class="rounded-2xl border bg-white p-6 shadow-sm">
        <h3 class="font-semibold text-slate-900">Live Preview</h3>
        <p class="mt-2 text-sm text-slate-600">
          See changes instantly as you edit your resume.
        </p>
      </div>

      <div class="rounded-2xl border bg-white p-6 shadow-sm">
        <h3 class="font-semibold text-slate-900">Modern Templates</h3>
        <p class="mt-2 text-sm text-slate-600">
          Choose from clean, professional designs.
        </p>
      </div>

      <div class="rounded-2xl border bg-white p-6 shadow-sm">
        <h3 class="font-semibold text-slate-900">Export Ready</h3>
        <p class="mt-2 text-sm text-slate-600">
          Download and share your resume easily.
        </p>
      </div>
    </div>
  </section>
</template>
