<script setup>
import TemplateStructurePreview from "./TemplateStructurePreview.vue";

defineProps({
  templates: { type: Array, required: true },
  selectedTemplate: Object
});

const emit = defineEmits(["select"]);
</script>

<template>
  <div class="space-y-3">
    <h3 class="text-sm font-semibold text-slate-700">Templates</h3>

    <div class="grid grid-cols-2 gap-3">
      <button
        v-for="template in templates"
        :key="template.id"
        @click="emit('select', template)"
        class="rounded-xl border p-3 text-left transition"
        :class="
          selectedTemplate?.id === template.id
            ? 'border-slate-900 ring-2 ring-slate-900'
            : 'hover:border-slate-400'
        "
      >
        <!-- ✅ STRUCTURE PREVIEW -->
        <TemplateStructurePreview :type="template.layoutType || 'classic'" />

        <!-- Debug line (keep temporarily) -->
        <div class="mt-2 text-xs text-slate-500">
          layoutType: {{ template.layoutType }}
        </div>

        <div class="mt-1 font-medium text-sm">
          {{ template.name }}
        </div>
      </button>
    </div>
  </div>
</template>
