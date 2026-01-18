<script setup>
const props = defineProps({
  skills: {
    type: Array,
    required: true
  }
});

const emit = defineEmits(["update"]);

function addSkill() {
  emit("update", [...props.skills, ""]);
}

function removeSkill(index) {
  const updated = [...props.skills];
  updated.splice(index, 1);
  emit("update", updated);
}

function updateSkill(index, value) {
  const updated = [...props.skills];
  updated[index] = value;
  emit("update", updated);
}
</script>

<template>
  <section class="space-y-4">

    <!-- Header -->
    <div class="flex items-center justify-between">
      <h3 class="text-sm font-semibold text-slate-800 uppercase">
        Skills
      </h3>

      <button
        @click="addSkill"
        class="rounded-lg border border-slate-300 px-3 py-1.5
               text-sm font-medium text-slate-700
               hover:bg-slate-100 transition"
      >
        + Add
      </button>
    </div>

    <!-- Skills list -->
    <div class="flex flex-wrap gap-2">
      <div
        v-for="(skill, index) in skills"
        :key="index"
        class="group flex items-center gap-2
               rounded-full border bg-white px-3 py-1.5
               text-sm shadow-sm
               hover:border-slate-400 transition"
      >
        <input
          :value="skill"
          @input="updateSkill(index, $event.target.value)"
          placeholder="Skill"
          class="w-24 bg-transparent focus:outline-none"
        />

        <button
          @click="removeSkill(index)"
          class="text-slate-400 hover:text-red-600 transition"
          title="Remove skill"
        >
          ✕
        </button>
      </div>
    </div>

    <!-- Empty state -->
    <p
      v-if="!skills.length"
      class="text-sm text-slate-500 italic"
    >
      No skills added yet.
    </p>

  </section>
</template>
