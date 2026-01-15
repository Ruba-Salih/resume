<script setup>
import HeaderEditor from "./HeaderEditor.vue";
import SkillsEditor from "./SkillsEditor.vue";
import ExperienceEditor from "./ExperienceEditor.vue";
import EducationEditor from "./EducationEditor.vue";

defineProps({
  resume: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <!-- ✅ GUARD -->
  <div v-if="resume" class="space-y-8">

    <HeaderEditor :header="resume.header" />

    <SkillsEditor :skills="resume.skills"  @update="resume.skills = $event"/>

    <ExperienceEditor :experience="resume.experience" />

    <EducationEditor :education="resume.education" />

  </div>
</template>
