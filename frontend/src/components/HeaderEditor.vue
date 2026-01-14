<script setup>
defineProps({
  header: Object
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
