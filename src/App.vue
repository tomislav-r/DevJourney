<template>
  <div>
    <h1>{{ title }}</h1>

    <TaskCard />

    <RouterView />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import TaskCard from './components/TaskCard.vue'

const title = 'Hello Vue!'
</script>

<style scoped></style>
