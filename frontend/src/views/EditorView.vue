<script setup>
import { ref, onMounted } from "vue";
import ResumeForm from "../components/ResumeForm.vue";
import ResumePreview from "../components/ResumePreview.vue";
import TemplatePicker from "../components/TemplatePicker.vue";
import { getTemplates } from "../services/templates";
import { saveResume } from "../services/resumes";

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

onMounted(async () => {
  templates.value = await getTemplates();
  selectedTemplate.value = templates.value[0] || null;
});

async function handleSave() {
  if (!selectedTemplate.value) return;

  saving.value = true;
  message.value = "";

  try {
    await saveResume({
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
  <div class="grid gap-6 lg:grid-cols-2">
    <!-- LEFT -->
    <section class="space-y-6 rounded-2xl border bg-white p-6 shadow-sm">
      <div class="flex items-center justify-between">
        <h2 class="text-lg font-semibold text-slate-800">
          Resume Editor
        </h2>

        <button
          @click="handleSave"
          :disabled="saving"
          class="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800 disabled:opacity-50"
        >
          {{ saving ? "Saving..." : "Save" }}
        </button>
      </div>

      <p v-if="message" class="text-sm">
        {{ message }}
      </p>

      <TemplatePicker
        :templates="templates"
        :selectedTemplate="selectedTemplate"
        @select="selectedTemplate = $event"
      />

      <ResumeForm :resume="resume" />
    </section>

    <!-- RIGHT -->
    <section class="rounded-2xl border bg-white p-6 shadow-sm">
      <h2 class="mb-4 text-lg font-semibold text-slate-800">
        Live Preview
      </h2>

      <ResumePreview
        :resume="resume"
        :template="selectedTemplate"
      />
    </section>
  </div>
</template>
