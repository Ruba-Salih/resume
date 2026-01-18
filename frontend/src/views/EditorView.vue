<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import ResumeForm from "@/components/ResumeForm.vue";
import ResumePreview from "@/components/ResumePreview.vue";
import TemplatePicker from "@/components/TemplatePicker.vue";
import { getTemplates } from "@/services/templates";
import {
  createResume,
  updateResume,
  getResumeById
} from "@/services/resumes";
import BaseLayout from "@/layouts/BaseLayout.vue";

const route = useRoute();
const { t } = useI18n();

/* ===== STATE ===== */
const resume = ref({
  header: { name: "", email: "", phone: "" },
  skills: [],
  experience: [],
  education: []
});

const templates = ref([]);
const selectedTemplate = ref(null);

const saving = ref(false);
const message = ref("");

/* Detect edit mode */
const resumeId = route.params.id; // 👈 THIS is key
const isEditMode = !!resumeId;

/* ===== INIT ===== */
onMounted(async () => {
  try {
    // 1️⃣ Load templates
    templates.value = (await getTemplates()).map(t => ({
      ...t,
      layoutType: t.layoutType || t.layout_type || t.slug
    }));

    // 2️⃣ EDIT MODE → load resume
    if (isEditMode) {
      const existing = await getResumeById(resumeId);

      // load content
      resume.value = existing.data;

      // select same template
      selectedTemplate.value =
        templates.value.find(t => t.id === existing.templateId) || null;

      return;
    }

    // 3️⃣ CREATE MODE → template from query or default
    const templateId = route.query.templateId;
    selectedTemplate.value =
      templates.value.find(t => t.id === Number(templateId)) ||
      templates.value.find(t => t.slug === "classic") ||
      templates.value[0] ||
      null;

  } catch (err) {
    console.error("Editor init failed:", err);
  }
});

/* ===== SAVE ===== */
async function handleSave() {
  if (!selectedTemplate.value) return;

  saving.value = true;
  message.value = "";

  try {
    const payload = {
      title: resume.value.header.name || t("editor.untitled"),
      data: resume.value,
      templateId: selectedTemplate.value.id
    };

    if (isEditMode) {
      await updateResume(resumeId, payload);
      message.value = t("editor.updated");
    } else {
      await createResume(payload);
      message.value = t("editor.saved");
    }

  } catch (err) {
    console.error(err);
    message.value = t("editor.failed");
  } finally {
    saving.value = false;
  }
}
</script>

<template>
  <BaseLayout>
    <div class="grid gap-8 lg:grid-cols-[420px_1fr]">

      <!-- ================= LEFT: EDITOR ================= -->
      <aside
        class="flex flex-col border bg-white shadow-sm
               max-h-[calc(100vh-6rem)] sticky top-24"
      >
        <!-- Editor Header -->
        <div class="flex items-center justify-between border-b px-6 py-4">
          <div>
            <h2 class="text-lg font-semibold text-slate-900">
              {{ $t("editor.title") }}
            </h2>
            <p class="text-xs text-slate-500">
              {{ $t("editor.subtitle") }}
            </p>
          </div>

          <button
            @click="handleSave"
            :disabled="saving"
            class="rounded-lg bg-slate-900 px-4 py-2 text-sm
                   font-medium text-white hover:bg-slate-800
                   disabled:opacity-50"
          >
            {{ saving ? $t("common.saving") : $t("common.save") }}
          </button>
        </div>

        <!-- Save feedback -->
        <p
          v-if="message"
          class="px-6 pt-3 text-sm text-emerald-600"
        >
          {{ message }}
        </p>

        <!-- Scrollable content -->
        <div class="flex-1 overflow-y-auto px-6 py-6 space-y-8">

          <!-- Templates -->
          <section>
            <TemplatePicker
              :templates="templates"
              :selectedTemplate="selectedTemplate"
              @select="selectedTemplate = $event"
            />
          </section>

          <!-- Form -->
          <section>
            <h3 class="mb-3 text-sm font-semibold text-slate-700">
              {{ $t("editor.content") }}
            </h3>

            <ResumeForm :resume="resume" />
          </section>

        </div>
      </aside>

      <!-- ================= RIGHT: PREVIEW ================= -->
      <section
        class=" border bg-slate-50 p-6 shadow-inner
               flex flex-col"
      >
        <div class="mb-4 flex items-center justify-between">
          <h2 class="text-lg font-semibold text-slate-900">
            {{ $t("editor.preview") }}
          </h2>
          <span class="text-xs text-slate-500">
            {{ $t("editor.previewHint") }}
          </span>
        </div>

        <div class="flex-1 overflow-auto rounded-xl bg-white p-4">
          <ResumePreview
            :resume="resume"
            :template="selectedTemplate"
          />
        </div>
      </section>

    </div>
  </BaseLayout>
</template>
