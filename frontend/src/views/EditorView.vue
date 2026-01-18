<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import ResumeForm from "../components/ResumeForm.vue";
import ResumePreview from "../components/ResumePreview.vue";
import TemplatePicker from "../components/TemplatePicker.vue";
import { getTemplates } from "../services/templates";
import { createResume } from "../services/resumes";
import BaseLayout from "@/layouts/BaseLayout.vue";

/* Resume state */
const resume = ref({
  header: {
    name: "",
    email: "",
    phone: ""
  },
  skills: [],
  experience: [],
  education: []
});

/* Templates */
const templates = ref([]);
const selectedTemplate = ref(null);

/* Save state */
const saving = ref(false);
const message = ref("");

const route = useRoute();

onMounted(async () => {
  try {
    const data = await getTemplates();

    templates.value = data.map(t => ({
      ...t,
      layoutType: t.layoutType || t.layout_type || t.slug
    }));

    const templateId = route.query.templateId;

    if (templateId) {
      selectedTemplate.value =
        templates.value.find(t => t.id === Number(templateId)) || null;
    } else {
      selectedTemplate.value =
        templates.value.find(t => t.layoutType === "classic") ||
        templates.value[0] ||
        null;
    }

  } catch (err) {
    console.error("Failed to load templates:", err);
  }
});


function selectTemplate() {
  const templateId = route.query.templateId;

  if (templateId) {
    selectedTemplate.value =
      templates.value.find(t => t.id === Number(templateId)) || null;
  } else {
    // ALWAYS default to classic
    selectedTemplate.value =
      templates.value.find(t => t.slug === "classic") || null;
  }
}


async function handleSave() {
  if (!selectedTemplate.value) return;

  saving.value = true;
  message.value = "";

  try {
    await createResume({
      title: resume.value.header.name || "Untitled Resume",
      data: resume.value,
      templateId: selectedTemplate.value.id
    });

    message.value = "✅ Resume saved successfully";
  } catch (err) {
    console.error(err);
    message.value = "❌ Failed to save resume";
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
              Resume Editor
            </h2>
            <p class="text-xs text-slate-500">
              Edit content & choose layout
            </p>
          </div>

          <button
            @click="handleSave"
            :disabled="saving"
            class="rounded-lg bg-slate-900 px-4 py-2 text-sm
                   font-medium text-white hover:bg-slate-800
                   disabled:opacity-50"
          >
            {{ saving ? "Saving…" : "Save" }}
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
            <h3 class="mb-3 text-sm font-semibold text-slate-700">
              Template
            </h3>

            <TemplatePicker
              :templates="templates"
              :selectedTemplate="selectedTemplate"
              @select="selectedTemplate = $event"
            />
          </section>

          <!-- Form -->
          <section>
            <h3 class="mb-3 text-sm font-semibold text-slate-700">
              Content
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
            Live Preview
          </h2>

          <span class="text-xs text-slate-500">
            Updates instantly
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
