<script setup>
defineProps({
  type: String
});
</script>

<template>
  <div class="h-28 w-full rounded border bg-slate-50 p-2">
    <!-- CLASSIC -->
    <div v-if="type === 'classic'" class="space-y-2">
      <div class="h-3 w-2/3 bg-slate-300 rounded mx-auto"></div>
      <div class="h-2 w-full bg-slate-200 rounded"></div>
      <div class="h-2 w-5/6 bg-slate-200 rounded"></div>
    </div>

    <!-- SIDEBAR -->
    <div v-else-if="type === 'sidebar'" class="flex h-full gap-2">
      <div class="w-1/3 bg-slate-300 rounded"></div>
      <div class="flex-1 space-y-2">
        <div class="h-3 w-3/4 bg-slate-200 rounded"></div>
        <div class="h-2 w-full bg-slate-200 rounded"></div>
      </div>
    </div>

    <!-- MODERN -->
    <div v-else-if="type === 'modern'" class="space-y-2">
      <div class="h-4 w-full bg-slate-300 rounded"></div>
      <div class="grid grid-cols-2 gap-2">
        <div class="h-6 bg-slate-200 rounded"></div>
        <div class="h-6 bg-slate-200 rounded"></div>
      </div>
    </div>

    <!-- MINIMAL -->
    <div v-else class="space-y-2">
      <div class="h-3 w-1/2 bg-slate-300 rounded"></div>
      <div class="h-2 w-full bg-slate-200 rounded"></div>
    </div>
  </div>
</template>
