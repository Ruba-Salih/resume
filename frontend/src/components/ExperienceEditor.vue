<script setup>
defineProps({
  experience: Array
});

function addExperience() {
  experience.push({
    company: "",
    role: "",
    years: "",
    description: ""
  });
}

function removeExperience(index) {
  experience.splice(index, 1);
}
</script>

<template>
  <section>
    <h3>Experience</h3>

    <div
      v-for="(exp, index) in experience"
      :key="index"
      class="block"
    >
      <input v-model="exp.company" placeholder="Company" />
      <input v-model="exp.role" placeholder="Role" />
      <input v-model="exp.years" placeholder="Years" />
      <textarea v-model="exp.description" placeholder="Description"></textarea>

      <button @click="removeExperience(index)">Remove</button>
    </div>

    <button @click="addExperience">Add experience</button>
  </section>
</template>
