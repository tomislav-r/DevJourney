<template>
  <RouterView />
  <SignupForm />
</template>

<script>
import { RouterView } from 'vue-router'
import SignupForm from './components/SignupForm.vue'

export default {
  name: 'App',
  components: { SignupForm, RouterView },
}
</script>

<style></style>
