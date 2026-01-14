<script setup>
import { ref } from "vue";
import ResumeForm from "../components/ResumeForm.vue";
import ResumePreview from "../components/ResumePreview.vue";

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
</script>

<template>
  <main class="editor">
    <ResumeForm :resume="resume" />
    <ResumePreview :resume="resume" />
  </main>
</template>

<style scoped>
.editor {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}
</style>
