<script setup>
defineProps({
  resume: {
    type: Object,
    required: true
  },
  template: Object
});
</script>

<template>
  <!-- Header -->
  <header class="mb-8 text-center">
    <h1 class="text-2xl font-bold">
      {{ resume.header.name || "Your Name" }}
    </h1>
    <p class="text-sm text-slate-600">
      {{ resume.header.email }} · {{ resume.header.phone }}
    </p>
  </header>

  <!-- Skills -->
  <section v-if="resume.skills.length" class="mb-6">
    <h2 class="text-sm font-semibold uppercase mb-2">
      Skills
    </h2>
    <ul class="flex flex-wrap gap-2">
      <li
        v-for="(skill, i) in resume.skills"
        :key="i"
        class="rounded-full px-3 py-1 text-sm bg-slate-900 text-white"
      >
        {{ skill }}
      </li>
    </ul>
  </section>

  <!-- Experience -->
  <section v-if="resume.experience.length" class="mb-6">
    <h2 class="text-sm font-semibold uppercase mb-3">
      Experience
    </h2>

    <div
      v-for="(exp, i) in resume.experience"
      :key="i"
      class="mb-4"
    >
      <div class="flex justify-between text-sm font-medium">
        <span>{{ exp.role }} · {{ exp.company }}</span>
        <span class="text-slate-500">{{ exp.years }}</span>
      </div>
      <p class="mt-1 text-sm">
        {{ exp.description }}
      </p>
    </div>
  </section>

  <!-- Education -->
  <section v-if="resume.education.length">
    <h2 class="text-sm font-semibold uppercase mb-3">
      Education
    </h2>

    <div
      v-for="(edu, i) in resume.education"
      :key="i"
      class="mb-3 text-sm"
    >
      <div class="flex justify-between font-medium">
        <span>{{ edu.degree }} · {{ edu.school }}</span>
        <span class="text-slate-500">{{ edu.year }}</span>
      </div>
    </div>
  </section>
</template>
