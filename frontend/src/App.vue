<script setup>
import { RouterView } from "vue-router";
import { useI18n } from "vue-i18n";
import { watch } from "vue";

const { locale } = useI18n();

watch(locale, (lang) => {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
});
</script>

<template>
  <RouterView />
</template>

<style scoped>
/* optional global layout styles */
</style>
