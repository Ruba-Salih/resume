<template>
  <footer class="border-t bg-slate-50">
    <div
      class="mx-auto max-w-7xl px-6 py-6
             flex flex-col items-center gap-3 text-center"
    >
      <p class="text-sm text-slate-600">
        © {{ new Date().getFullYear() }}
        {{ $t("footer.appName") }}.
        {{ $t("footer.rights") }}
      </p>

      <div class="flex gap-4 text-sm text-slate-600">
        <span class="cursor-pointer hover:text-slate-900">
          {{ $t("footer.privacy") }}
        </span>
        <span class="cursor-pointer hover:text-slate-900">
          {{ $t("footer.terms") }}
        </span>
        <span class="cursor-pointer hover:text-slate-900">
          {{ $t("footer.contact") }}
        </span>
      </div>
    </div>
  </footer>
</template>

