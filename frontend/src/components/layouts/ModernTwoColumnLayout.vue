<script setup>
defineProps({
  resume: Object
});
</script>

<template>
  <!-- Header -->
  <header class="mb-6 border-b pb-4">
    <h1 class="text-3xl font-bold">
      {{ resume.header.name }}
    </h1>
    <p class="text-sm text-slate-600">
      {{ resume.header.email }} · {{ resume.header.phone }}
    </p>
  </header>

  <div class="grid grid-cols-3 gap-6">
    <!-- LEFT -->
    <aside class="col-span-1 space-y-6">
      <!-- Skills -->
      <section v-if="resume.skills.length">
        <h2 class="text-sm font-semibold uppercase mb-2">
          Skills
        </h2>
        <ul class="text-sm space-y-1">
          <li v-for="(s, i) in resume.skills" :key="i">
            • {{ s }}
          </li>
        </ul>
      </section>

      <!-- Education -->
      <section v-if="resume.education.length">
        <h2 class="text-sm font-semibold uppercase mb-2">
          Education
        </h2>
        <div
          v-for="(edu, i) in resume.education"
          :key="i"
          class="text-sm"
        >
          <div class="font-medium">
            {{ edu.degree }}
          </div>
          <div class="text-slate-500">
            {{ edu.school }} · {{ edu.year }}
          </div>
        </div>
      </section>
    </aside>

    <!-- RIGHT -->
    <main class="col-span-2">
      <!-- Experience -->
      <section v-if="resume.experience.length">
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
    </main>
  </div>
</template>
