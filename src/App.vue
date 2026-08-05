<script>
import { RouterView } from 'vue-router'

export default {
  name: 'App',

  components: {
    RouterView,
  },
}
</script>

<template>
  <RouterView />
</template>

<style>
body {
  background-color: #f2f2f2;
}

#app {
  min-height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #555;
}
</style>
