<script setup>
defineProps({
  education: Array
});

function addEducation() {
  education.push({
    school: "",
    degree: "",
    year: ""
  });
}

function removeEducation(index) {
  education.splice(index, 1);
}
</script>

<template>
  <section>
    <h3>Education</h3>

    <div v-for="(edu, index) in education" :key="index">
      <input v-model="edu.school" placeholder="School" />
      <input v-model="edu.degree" placeholder="Degree" />
      <input v-model="edu.year" placeholder="Year" />

      <button @click="removeEducation(index)">❌</button>
    </div>

    <button @click="addEducation">Add education</button>
  </section>
</template>
