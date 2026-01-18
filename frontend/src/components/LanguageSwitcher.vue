<script setup>
import { useI18n } from "vue-i18n";

const { locale } = useI18n();

function setLang(lang) {
  locale.value = lang;
  localStorage.setItem("lang", lang);
}
</script>

<template>
  <div class="flex items-center gap-2">
    <button
      @click="setLang('en')"
      :class="[
        'rounded-md px-3 py-1 text-sm border',
        locale === 'en' ? 'bg-slate-900 text-white' : 'hover:bg-slate-100'
      ]"
    >
      EN
    </button>

    <button
      @click="setLang('ar')"
      :class="[
        'rounded-md px-3 py-1 text-sm border',
        locale === 'ar' ? 'bg-slate-900 text-white' : 'hover:bg-slate-100'
      ]"
    >
      AR
    </button>
  </div>
</template>
