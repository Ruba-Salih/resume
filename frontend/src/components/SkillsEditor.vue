<script setup>
const props = defineProps({
  skills: {
    type: Array,
    required: true
  }
});

const emit = defineEmits(["update"]);

function addSkill() {
  emit("update", [...props.skills, ""]);
}

function removeSkill(index) {
  const updated = [...props.skills];
  updated.splice(index, 1);
  emit("update", updated);
}

function updateSkill(index, value) {
  const updated = [...props.skills];
  updated[index] = value;
  emit("update", updated);
}
</script>

<template>
  <section>
    <h3>Skills</h3>

    <div v-for="(skill, index) in skills" :key="index">
      <input
        :value="skill"
        @input="updateSkill(index, $event.target.value)"
        placeholder="Skill"
      />
      <button @click="removeSkill(index)">❌</button>
    </div>

    <button @click="addSkill">Add Skill</button>
  </section>
</template>
