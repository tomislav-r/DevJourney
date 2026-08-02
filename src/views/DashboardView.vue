<template>
  <main>
    <h1>Moji projekti</h1>

    <button type="button">Dodaj projekt</button>

    <section>
      <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
    </section>
  </main>
</template>

<script setup>
import ProjectCard from '@/components/ProjectCard.vue'

const projects = [
  {
    id: 1,
    title: 'Pixel RPG',
    description: 'Razvoj moje prve 2D RPG igre.',
  },
  {
    id: 2,
    title: 'Space Explorer',
    description: 'Svemirska igra istraživanja i preživljavanja.',
  },
]
</script>
