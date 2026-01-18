<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import TemplatePicker from "../components/TemplatePicker.vue";
import { getTemplates } from "../services/templates";
import BaseLayout from "@/layouts/BaseLayout.vue";

const router = useRouter();

const templates = ref([]);
const selectedTemplate = ref(null);

onMounted(async () => {
  const data = await getTemplates();
  templates.value = data;

  // ✅ Default selection = Classic
  selectedTemplate.value =
    templates.value.find(t => t.slug === "classic") ||
    templates.value[0] ||
    null;
});

function createResume() {
  // ✅ ALWAYS allow entering editor
  router.push({
    path: "/editor",
    query: selectedTemplate.value
      ? { templateId: selectedTemplate.value.id }
      : {}
  });
}
</script>


<template>

  <BaseLayout>
  <section class="mx-auto max-w-6xl px-6 py-20">

    <!-- HERO -->
    <div class="grid gap-14 md:grid-cols-2 md:items-center">
      <div class="space-y-6">
        <h1 class="text-5xl font-bold tracking-tight text-slate-900">
          Build your resume.<br />
          <span class="text-slate-600">Fast. Clean. Professional.</span>
        </h1>

        <p class="text-lg text-slate-600 max-w-xl">
          Choose a modern resume layout and start building your professional
          resume in minutes.
        </p>

        <button
          @click="createResume"
          class="rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800"
        >
          Create Resume
        </button>
      </div>

      <!-- RIGHT MOCK -->
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

    <!-- TEMPLATES SECTION -->
    <div class="mt-24">
      <h2 class="mb-6 text-2xl font-semibold text-slate-900">
        Choose a template
      </h2>

      <TemplatePicker
        :templates="templates"
        :selectedTemplate="selectedTemplate"
        @select="selectedTemplate = $event"
      />
    </div>

  </section>
  </BaseLayout>
</template>
