<script>
import SignUpForm from '@/components/SignUpForm.vue'

export default {
  name: 'RegisterView',

  components: {
    SignUpForm,
  },
}
</script>

<template>
  <main>
    <h1>Kreiranje korisničkog računa</h1>
    <SignUpForm />
  </main>
</template>
