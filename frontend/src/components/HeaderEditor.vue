<script setup>
const props = defineProps({
  header: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <section>
    <h3>Header</h3>

    <input v-model="header.name" placeholder="Full name" />
    <input v-model="header.email" placeholder="Email" />
    <input v-model="header.phone" placeholder="Phone" />
  </section>
</template>
