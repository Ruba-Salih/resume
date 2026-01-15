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
  <article
    class="mx-auto max-w-2xl rounded-xl border bg-white p-8 shadow-sm"
    :style="{
      fontFamily: template?.layoutConfig?.font,
      color: template?.layoutConfig?.colors?.text
    }"
  >
    <!-- Header -->
    <header class="mb-8 text-center">
      <h1
        class="text-2xl font-bold"
        :style="{ color: template?.layoutConfig?.colors?.primary }"
      >
        {{ resume.header.name || 'Your Name' }}
      </h1>
      <p class="text-sm text-slate-600">
        {{ resume.header.email }} · {{ resume.header.phone }}
      </p>
    </header>

    <!-- Skills -->
    <section v-if="resume.skills.length" class="mb-6">
      <h2 class="mb-2 text-sm font-semibold uppercase tracking-wider">
        Skills
      </h2>

      <ul class="flex flex-wrap gap-2">
        <li
          v-for="(skill, index) in resume.skills"
          :key="index"
          class="rounded-full px-3 py-1 text-sm"
          :style="{
            backgroundColor: template?.layoutConfig?.colors?.primary,
            color: '#fff'
          }"
        >
          {{ skill }}
        </li>
      </ul>
    </section>

    <!-- Experience -->
    <section v-if="resume.experience.length" class="mb-6">
      <h2 class="mb-3 text-sm font-semibold uppercase tracking-wider">
        Experience
      </h2>

      <div v-for="(exp, index) in resume.experience" :key="index" class="mb-4">
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
      <h2 class="mb-3 text-sm font-semibold uppercase tracking-wider">
        Education
      </h2>

      <div
        v-for="(edu, index) in resume.education"
        :key="index"
        class="mb-3 text-sm"
      >
        <div class="flex justify-between font-medium">
          <span>{{ edu.degree }} · {{ edu.school }}</span>
          <span class="text-slate-500">{{ edu.year }}</span>
        </div>
      </div>
    </section>
  </article>
</template>
