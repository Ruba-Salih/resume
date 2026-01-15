<script setup>
defineProps({
  templates: {
    type: Array,
    required: true
  },
  selectedTemplate: Object
});

const emit = defineEmits(["select"]);
</script>

<template>
  <div class="space-y-3">
    <h3 class="text-sm font-semibold text-slate-700">
      Templates
    </h3>

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
        <div class="font-medium">
          {{ template.name }}
        </div>

        <div
          class="mt-2 h-2 w-full rounded"
          :style="{ backgroundColor: template.layoutConfig.colors.primary }"
        />
      </button>
    </div>
  </div>
</template>
