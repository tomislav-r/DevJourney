<template>
  <article>
    <h2>{{ project.title }}</h2>
    <p>{{ project.description }}</p>

    <button type="button">Otvori projekt</button>
  </article>
</template>

<script setup>
defineProps({
  project: {
    type: Object,
    required: true,
  },
})
</script>
