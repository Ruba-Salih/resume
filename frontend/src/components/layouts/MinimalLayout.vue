<script setup>
defineProps({
  resume: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <div class="space-y-6">
    <!-- Header -->
    <header>
      <h1 class="text-xl font-semibold">
        {{ resume.header.name || "Your Name" }}
      </h1>
      <p class="text-sm text-slate-600">
        {{ resume.header.email }} · {{ resume.header.phone }}
      </p>
    </header>

    <!-- Skills -->
    <section v-if="resume.skills.length">
      <h2 class="text-xs font-semibold uppercase mb-1">
        Skills
      </h2>
      <p class="text-sm">
        {{ resume.skills.join(", ") }}
      </p>
    </section>

    <!-- Experience -->
    <section v-if="resume.experience.length">
      <h2 class="text-xs font-semibold uppercase mb-2">
        Experience
      </h2>

      <div
        v-for="(exp, i) in resume.experience"
        :key="i"
        class="text-sm mb-2"
      >
        <div class="font-medium">
          {{ exp.role }} · {{ exp.company }}
        </div>
        <div class="text-slate-500">
          {{ exp.years }}
        </div>
        <p class="mt-1">
          {{ exp.description }}
        </p>
      </div>
    </section>

    <!-- Education -->
    <section v-if="resume.education.length">
      <h2 class="text-xs font-semibold uppercase mb-2">
        Education
      </h2>

      <div
        v-for="(edu, i) in resume.education"
        :key="i"
        class="text-sm"
      >
        <span class="font-medium">
          {{ edu.degree }}
        </span>
        — {{ edu.school }} ({{ edu.year }})
      </div>
    </section>
  </div>
</template>
