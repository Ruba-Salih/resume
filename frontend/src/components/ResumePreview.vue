<script setup>
import { computed } from "vue";

import ClassicLayout from "./layouts/ClassicLayout.vue";
import SidebarLayout from "./layouts/SidebarLayout.vue";
import ModernTwoColumnLayout from "./layouts/ModernTwoColumnLayout.vue";
import MinimalLayout from "./layouts/MinimalLayout.vue";

const props = defineProps({
  resume: Object,
  template: Object
});

/**
 * ✅ SINGLE SOURCE OF TRUTH
 * Resolve layout safely from layoutType OR slug
 */
const layout = computed(() => {
  return props.template?.layoutType
    || props.template?.slug
    || "classic";
});
</script>

<template>
  <article
    v-if="resume && resume.header"
    class="mx-auto max-w-3xl rounded-xl border bg-white p-6 shadow-sm"
  >
    <ClassicLayout
      v-if="layout === 'classic'"
      :resume="resume"
      :template="template"
    />

    <SidebarLayout
      v-else-if="layout === 'sidebar'"
      :resume="resume"
      :template="template"
    />

    <ModernTwoColumnLayout
      v-else-if="layout === 'modern'"
      :resume="resume"
      :template="template"
    />

    <MinimalLayout
      v-else
      :resume="resume"
      :template="template"
    />
  </article>
</template>
