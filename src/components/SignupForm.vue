<template>
  <form @submit.prevent="handleSubmit">
    <label for="email">Email:</label>
    <input id="email" v-model.trim="email" type="email" required />

    <label for="password">Password:</label>
    <input id="password" v-model="password" type="password" required />

    <label for="confirmPassword">Confirm password:</label>
    <input id="confirmPassword" v-model="confirmPassword" type="password" required />

    <div v-if="passwordError" class="error">
      {{ passwordError }}
    </div>

    <label for="role">Role:</label>
    <select id="role" v-model="role" required>
      <option value="">Select a role</option>
      <option value="programmer">Programmer</option>
      <option value="artist">Artist</option>
      <option value="qa">QA</option>
    </select>

    <div class="submit">
      <button type="submit" :disabled="isLoading">
        {{ isLoading ? 'Creating account...' : 'Create an Account' }}
      </button>
    </div>
  </form>
</template>

<script>
import { registerUser } from '@/services/authService'

export default {
  name: 'SignUpForm',

  data() {
    return {
      email: '',
      password: '',
      confirmPassword: '',
      role: '',
      passwordError: '',
      firebaseError: '',
      isLoading: false,
    }
  },

  methods: {
    async handleSubmit() {
      this.passwordError = ''
      this.firebaseError = ''

      if (this.password.length < 6) {
        this.passwordError = 'Password must be at least 6 characters long.'
        return
      }

      if (this.password !== this.confirmPassword) {
        this.passwordError = 'Passwords do not match.'
        return
      }

      if (!this.role) {
        this.firebaseError = 'Please select a role.'
        return
      }

      this.isLoading = true

      try {
        const user = await registerUser(this.email, this.password, this.role)

        console.log('Registered user:', user.uid)

        this.$router.push('/dashboard')
      } catch (error) {
        console.error(error)

        if (error.code === 'auth/email-already-in-use') {
          this.firebaseError = 'An account with this email already exists.'
        } else if (error.code === 'auth/invalid-email') {
          this.firebaseError = 'The email address is not valid.'
        } else if (error.code === 'auth/weak-password') {
          this.firebaseError = 'The password is not strong enough.'
        } else {
          this.firebaseError = 'Registration failed. Please try again.'
        }
      } finally {
        this.isLoading = false
      }
    },
  },
}
</script>

<style scoped>
form {
  max-width: 420px;
  margin: 30px auto;
  background-color: #f9f9f9;
  padding: 40px;
  border-radius: 10px;
  border: 5px solid #0b0b0b71;
}

label {
  color: #aaa;
  display: inline-block;
  margin-top: 15px;
  font-size: 0.8em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}

input,
select {
  display: block;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}

button {
  background: #0b6dff;
  border: none;
  padding: 10px 20px;
  margin-top: 20px;
  color: white;
  border-radius: 20px;
  cursor: pointer;
}

.error {
  color: red;
  font-size: 0.8em;
  margin-top: 5px;
}
</style>
