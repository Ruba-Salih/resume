<script setup>
import HeaderEditor from "./HeaderEditor.vue";
import SkillsEditor from "./SkillsEditor.vue";
import ExperienceEditor from "./ExperienceEditor.vue";
import EducationEditor from "./EducationEditor.vue";

defineProps({
  resume: Object
});
</script>

<template>
  <HeaderEditor :header="resume.header" />
  <SkillsEditor :skills="resume.skills" />
  <ExperienceEditor :experience="resume.experience" />
  <EducationEditor :education="resume.education" />
</template>
