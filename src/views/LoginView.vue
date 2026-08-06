<script>
import LoginForm from '@/components/LoginForm.vue'

export default {
  name: 'LoginView',

  components: {
    LoginForm,
  },
}
</script>

<template>
  <main>
    <h1>Login</h1>
    <LoginForm />
    <div class="register-link">
      <p>Nemate račun? Registrirajte se</p>
      <RouterLink to="/register">Registracija</RouterLink>
    </div>
  </main>
</template>

<style>
.register-link {
  text-align: center;
  margin-top: 20px;
}

.register-link p {
  margin-bottom: 10px;
}

.register-link a {
  color: #0b6dff;
  text-decoration: underline;
}
</style>
