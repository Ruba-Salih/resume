<script setup>
defineProps({
  skills: Array
});

function addSkill() {
  skills.push("");
}

function removeSkill(index) {
  skills.splice(index, 1);
}
</script>

<template>
  <div>
    <h3>Skills</h3>

    <div v-for="(skill, index) in skills" :key="index">
      <input v-model="skills[index]" />
      <button @click="removeSkill(index)">❌</button>
    </div>

    <button @click="addSkill">Add Skill</button>
  </div>
</template>
