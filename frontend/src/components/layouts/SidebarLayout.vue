<script setup>
defineProps({
  resume: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <!-- LAYOUT WRAPPER -->
  <div class="flex gap-6">
    <!-- SIDEBAR -->
    <aside class="w-1/3 bg-slate-100 p-6 rounded-lg">
      <!-- Header -->
      <h1 class="text-xl font-bold">
        {{ resume.header.name || "Your Name" }}
      </h1>
      <p class="text-sm text-slate-600">
        {{ resume.header.email }}
      </p>
      <p class="text-sm text-slate-600">
        {{ resume.header.phone }}
      </p>

      <!-- Skills -->
      <section v-if="resume.skills.length" class="mt-6">
        <h2 class="text-sm font-semibold uppercase mb-2">
          Skills
        </h2>
        <ul class="space-y-1 text-sm">
          <li
            v-for="(s, i) in resume.skills"
            :key="i"
          >
            • {{ s }}
          </li>
        </ul>
      </section>

      <!-- Education -->
      <section v-if="resume.education.length" class="mt-6">
        <h2 class="text-sm font-semibold uppercase mb-2">
          Education
        </h2>

        <div
          v-for="(edu, i) in resume.education"
          :key="i"
          class="text-sm mb-2"
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

    <!-- MAIN CONTENT -->
    <main class="flex-1 p-6">
      <!-- Experience -->
      <section v-if="resume.experience.length">
        <h2 class="text-sm font-semibold uppercase mb-3">
          Experience
        </h2>

        <div
          v-for="(exp, i) in resume.experience"
          :key="i"
          class="mb-4 text-sm"
        >
          <div class="flex justify-between font-medium">
            <span>{{ exp.role }} · {{ exp.company }}</span>
            <span class="text-slate-500">{{ exp.years }}</span>
          </div>
          <p class="mt-1">
            {{ exp.description }}
          </p>
        </div>
      </section>
    </main>
  </div>
</template>
