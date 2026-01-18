<script setup>
const props = defineProps({
  experience: {
    type: Array,
    required: true
  }
});

function addExperience() {
  props.experience.push({
    company: "",
    role: "",
    years: "",
    description: ""
  });
}

function removeExperience(index) {
  props.experience.splice(index, 1);
}
</script>

<template>
  <section class="space-y-6">

    <!-- Header -->
    <div class="flex items-center justify-between">
      <h3 class="text-sm font-semibold text-slate-800 uppercase">
        Experience
      </h3>

      <button
        @click="addExperience"
        class="rounded-lg border border-slate-300 px-3 py-1.5
               text-sm font-medium text-slate-700
               hover:bg-slate-100 transition"
      >
        + Add
      </button>
    </div>

    <!-- Experience items -->
    <div
      v-for="(exp, index) in experience"
      :key="index"
      class="rounded-xl border bg-slate-50 p-4 space-y-4
             hover:shadow-sm transition"
    >
      <!-- Top row -->
      <div class="grid gap-3 sm:grid-cols-2">
        <input
          v-model="exp.company"
          placeholder="Company"
          class="rounded-lg border px-3 py-2 text-sm
                 focus:border-slate-900 focus:outline-none"
        />

        <input
          v-model="exp.role"
          placeholder="Role"
          class="rounded-lg border px-3 py-2 text-sm
                 focus:border-slate-900 focus:outline-none"
        />
      </div>

      <!-- Second row -->
      <input
        v-model="exp.years"
        placeholder="Years (e.g. 2021 – Present)"
        class="w-full rounded-lg border px-3 py-2 text-sm
               focus:border-slate-900 focus:outline-none"
      />

      <!-- Description -->
      <textarea
        v-model="exp.description"
        rows="3"
        placeholder="Describe your responsibilities and achievements"
        class="w-full rounded-lg border px-3 py-2 text-sm
               focus:border-slate-900 focus:outline-none resize-none"
      ></textarea>

      <!-- Actions -->
      <div class="flex justify-end">
        <button
          @click="removeExperience(index)"
          class="text-xs font-medium text-red-600
                 hover:underline"
        >
          Remove
        </button>
      </div>
    </div>

    <!-- Empty state -->
    <p
      v-if="!experience.length"
      class="text-sm text-slate-500 italic"
    >
      No experience added yet.
    </p>

  </section>
</template>

