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
