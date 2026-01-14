<script setup>
defineProps({
  resume: Object
});
</script>

<template>
  <div class="preview">

    <!-- Header -->
    <section v-if="resume.header">
      <h1>{{ resume.header.name }}</h1>
      <p>
        {{ resume.header.email }} · {{ resume.header.phone }}
      </p>
    </section>

    <!-- Skills -->
    <section v-if="resume.skills.length">
      <h3>Skills</h3>
      <ul>
        <li v-for="(skill, index) in resume.skills" :key="index">
          {{ skill }}
        </li>
      </ul>
    </section>

    <!-- Experience -->
    <section v-if="resume.experience.length">
      <h3>Experience</h3>

      <div
        v-for="(exp, index) in resume.experience"
        :key="index"
        class="block"
      >
        <strong>{{ exp.role }}</strong> – {{ exp.company }}
        <div>{{ exp.years }}</div>
        <p>{{ exp.description }}</p>
      </div>
    </section>

    <!-- Education -->
    <section v-if="resume.education.length">
      <h3>Education</h3>

      <div
        v-for="(edu, index) in resume.education"
        :key="index"
        class="block"
      >
        <strong>{{ edu.degree }}</strong> – {{ edu.school }}
        <div>{{ edu.year }}</div>
      </div>
    </section>

  </div>
</template>

<style scoped>
.preview {
  border: 1px solid #ccc;
  padding: 1.5rem;
  font-family: Arial, sans-serif;
}

section {
  margin-bottom: 1.5rem;
}

.block {
  margin-bottom: 1rem;
}
</style>
