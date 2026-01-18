<script setup>
const props = defineProps({
  education: {
    type: Array,
    required: true
  }
});

function addEducation() {
  props.education.push({
    school: "",
    degree: "",
    year: ""
  });
}

function removeEducation(index) {
  props.education.splice(index, 1);
}
</script>

<template>
  <section class="space-y-6">

    <!-- Header -->
    <div class="flex items-center justify-between">
      <h3 class="text-sm font-semibold uppercase text-slate-800">
        Education
      </h3>

      <button
        @click="addEducation"
        class="rounded-lg border border-slate-300 px-3 py-1.5
               text-sm font-medium text-slate-700
               hover:bg-slate-100 transition"
      >
        + Add
      </button>
    </div>

    <!-- Education list -->
    <div
      v-for="(edu, index) in education"
      :key="index"
      class="relative rounded-xl border bg-slate-50 p-4 shadow-sm
             hover:shadow-md transition"
    >
      <!-- Remove -->
      <button
        @click="removeEducation(index)"
        class="absolute right-3 top-3 text-slate-400
               hover:text-red-600 transition"
        title="Remove education"
      >
        ✕
      </button>

      <div class="grid gap-3 sm:grid-cols-2">
        <!-- School -->
        <input
          v-model="edu.school"
          placeholder="School / University"
          class="w-full rounded-lg border px-3 py-2 text-sm
                 focus:border-slate-900 focus:outline-none"
        />

        <!-- Degree -->
        <input
          v-model="edu.degree"
          placeholder="Degree"
          class="w-full rounded-lg border px-3 py-2 text-sm
                 focus:border-slate-900 focus:outline-none"
        />

        <!-- Year -->
        <input
          v-model="edu.year"
          placeholder="Year (e.g. 2022)"
          class="w-full rounded-lg border px-3 py-2 text-sm
                 focus:border-slate-900 focus:outline-none"
        />
      </div>
    </div>

    <!-- Empty state -->
    <p
      v-if="!education.length"
      class="text-sm italic text-slate-500"
    >
      No education added yet.
    </p>

  </section>
</template>
