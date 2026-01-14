<script setup>
import { ref } from "vue";
import ResumeForm from "../components/ResumeForm.vue";
import ResumePreview from "../components/ResumePreview.vue";

const resume = ref({
  name: "Ruba Ahmad",
  summary: "Backend developer",
  skills: ["Node.js", "MySQL", "Vue"]
});

</script>
<template>
  <main class="home">
    <h1>Resume Builder</h1>
    <p>Create your resume easily.</p>

    <RouterLink to="/editor">
      <button>Create Resume</button>
    </RouterLink>
  </main>
</template>

<style scoped>
.home {
  padding: 2rem;
  text-align: center;
}
button {
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
}
</style>

<!--
<script setup>
import { ref, onMounted } from "vue";
import api from "../services/api";

const templates = ref([]);
const loading = ref(true);
const error = ref(null);

onMounted(async () => {
  try {
    const res = await api.get("/templates");
    templates.value = res.data;
  } catch (err) {
    error.value = "Failed to load templates";
    console.error(err);
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <main style="padding: 2rem">
    <h1>Resume Templates</h1>

    <p v-if="loading">Loading templates…</p>
    <p v-if="error" style="color: red">{{ error }}</p>

    <ul v-if="!loading && !error">
      <li v-for="template in templates" :key="template.id">
        <strong>{{ template.name }}</strong>
        <br />
        <small>Used {{ template.usageCount }} times</small>
      </li>
    </ul>
  </main>
</template>
-->