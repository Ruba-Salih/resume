<template>
  <footer class="border-t bg-slate-50">
    <div
      class="mx-auto max-w-7xl px-6 py-6
             flex flex-col items-center gap-3 text-center"
    >
      <p class="text-sm text-slate-600">
        © {{ new Date().getFullYear() }} ResumeBuilder. All rights reserved.
      </p>

      <div class="flex gap-4 text-sm text-slate-600">
        <span class="cursor-pointer hover:text-slate-900">Privacy</span>
        <span class="cursor-pointer hover:text-slate-900">Terms</span>
        <span class="cursor-pointer hover:text-slate-900">Contact</span>
      </div>
    </div>
  </footer>
</template>
