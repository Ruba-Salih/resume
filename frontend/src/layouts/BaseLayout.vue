<script setup>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
</script>

<template>
  <div class="min-h-screen flex flex-col bg-slate-50">
    <AppHeader />

    <main class="flex-1">
      <slot />
    </main>

    <AppFooter />
  </div>
</template>
