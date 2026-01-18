<script setup>
import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";
import TemplatePicker from "../components/TemplatePicker.vue";
import { getTemplates } from "../services/templates";
import { getRecentResumes } from "../services/resumes";
import BaseLayout from "@/layouts/BaseLayout.vue";

const router = useRouter();

const templates = ref([]);
const selectedTemplate = ref(null);

const recentResumes = ref([]);

const hasRecent = computed(() => recentResumes.value.length > 0);

onMounted(async () => {
  templates.value = await getTemplates();

  selectedTemplate.value =
    templates.value.find(t => t.slug === "classic") ||
    templates.value[0] ||
    null;

  // ✅ last 4 resumes
  try {
    recentResumes.value = await getRecentResumes(4);
  } catch (e) {
    recentResumes.value = [];
  }
});

function createResume() {
  router.push({
    path: "/editor",
    query: selectedTemplate.value
      ? { templateId: selectedTemplate.value.id }
      : {}
  });
}

function openResume(resumeId) {
  router.push({ path: `/editor/${resumeId}` });
}

function formatDate(dateStr) {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleString();
}
</script>

<template>

  <BaseLayout>
  <section class="mx-auto max-w-6xl px-6 py-20">

    <!-- HERO -->
    <section class="mx-auto max-w-6xl px-6 pt-20">
      <div class="grid gap-12 md:grid-cols-2 md:items-center">
        <div class="space-y-6">
          <h1 class="text-5xl font-bold tracking-tight text-slate-900">
            {{ $t("index.headline") }}
            <span class="block text-slate-500 text-3xl mt-2">
              {{ $t("index.subtitle") }}
            </span>
          </h1>

          <p class="text-lg text-slate-600 max-w-xl">
            {{ $t("index.description") }}
          </p>

          <button
            @click="createResume"
            class="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-7 py-3 text-sm font-semibold text-white hover:bg-slate-800"
          >
            {{ $t("index.createCta") }}
            <span class="text-lg">→</span>
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
          </div>
        </div>
      </div>
    </section>

    <!-- RECENT RESUMES -->
    <section
      v-if="hasRecent"
      class="mx-auto mt-24 max-w-6xl px-6"
    >
      <div class="mb-6 flex items-center justify-between">
        <h2 class="text-2xl font-semibold text-slate-900">
          {{ $t("index.recentTitle") }}
        </h2>
      </div>

      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <article
          v-for="r in recentResumes"
          :key="r.id"
          @click="openResume(r.id)"
          class="group cursor-pointer rounded-2xl border bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
        >
          <!-- Fake resume preview -->
          <div class="mb-4 h-32 rounded-lg border bg-slate-50 p-3">
            <div class="h-3 w-2/3 rounded bg-slate-300"></div>
            <div class="mt-2 h-2 w-1/2 rounded bg-slate-200"></div>
            <div class="mt-4 space-y-1">
              <div class="h-1.5 w-full rounded bg-slate-200"></div>
              <div class="h-1.5 w-5/6 rounded bg-slate-200"></div>
            </div>
          </div>

          <h3 class="truncate font-semibold text-slate-900">
            {{ r.title || $t("index.untitled") }}
          </h3>

          <p class="mt-1 text-sm text-slate-500">
            {{ $t("index.edited") }} {{ formatDate(r.updatedAt) }}
          </p>

          <div class="mt-3 text-sm font-medium text-slate-700 group-hover:text-slate-900">
            {{ $t("index.open") }} →
          </div>
        </article>
      </div>
    </section>

    <!-- TEMPLATES SECTION -->
    <section class="mx-auto mt-28 max-w-6xl px-6 pb-24">
      <h2 class="mb-6 text-2xl font-semibold text-slate-900">
        {{ $t("index.templatesTitle") }}
      </h2>

      <TemplatePicker
        :templates="templates"
        :selectedTemplate="selectedTemplate"
        @select="selectedTemplate = $event"
      />
    </section>

  </section>
  </BaseLayout>
</template>
