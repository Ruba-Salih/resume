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
  <div class="space-y-8">

    <!-- Header -->
    <section class="rounded-xl border bg-white p-5 shadow-sm">
      <h3 class="mb-4 text-lg font-semibold text-slate-800">
        Personal Information
      </h3>
      <HeaderEditor :header="resume.header" />
    </section>

    <!-- Skills -->
    <section class="rounded-xl border bg-white p-5 shadow-sm">
      <h3 class="mb-4 text-lg font-semibold text-slate-800">
        Skills
      </h3>
      <SkillsEditor :skills="resume.skills" />
    </section>

    <!-- Experience -->
    <section class="rounded-xl border bg-white p-5 shadow-sm">
      <h3 class="mb-4 text-lg font-semibold text-slate-800">
        Experience
      </h3>
      <ExperienceEditor :experience="resume.experience" />
    </section>

    <!-- Education -->
    <section class="rounded-xl border bg-white p-5 shadow-sm">
      <h3 class="mb-4 text-lg font-semibold text-slate-800">
        Education
      </h3>
      <EducationEditor :education="resume.education" />
    </section>

  </div>
</template>
