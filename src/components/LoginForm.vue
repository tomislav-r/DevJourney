<template>
  <form @submit.prevent="handleSubmit">
    <label for="email">Email:</label>
    <input id="email" v-model.trim="email" type="email" autocomplete="email" required />

    <label for="password">Password:</label>
    <input
      id="password"
      v-model="password"
      type="password"
      autocomplete="current-password"
      required
    />

    <div v-if="loginError" class="error">
      {{ loginError }}
    </div>

    <div class="submit">
      <button type="submit" :disabled="isLoading">
        {{ isLoading ? 'Logging in...' : 'Login' }}
      </button>
    </div>
  </form>
</template>

<script>
import { loginUser } from '@/services/authService'

export default {
  name: 'LoginForm',

  data() {
    return {
      email: '',
      password: '',
      loginError: '',
      isLoading: false,
    }
  },

  methods: {
    async handleSubmit() {
      this.loginError = ''
      this.isLoading = true

      try {
        const user = await loginUser(this.email, this.password)

        console.log('Logged in user:', user)

        this.$router.push('/dashboard')
      } catch (error) {
        console.error('Error logging in:', error)

        if (
          error.code === 'auth/user-not-found' ||
          error.code === 'auth/wrong-password' ||
          error.code === 'auth/invalid-credential'
        ) {
          this.loginError = 'Incorrect email or password.'
        } else if (error.code === 'auth/invalid-email') {
          this.loginError = 'Please enter a valid email address.'
        } else if (error.code === 'auth/too-many-requests') {
          this.loginError = 'Too many unsuccessful attempts. Please try again later.'
        } else {
          this.loginError = 'Login failed. Please try again.'
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

input {
  display: block;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
  background-color: white;
}

input:focus {
  outline: none;
  border-bottom-color: #0b6dff;
}

.submit {
  text-align: center;
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

button:hover {
  background: #095bd4;
}

button:disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

.error {
  color: red;
  font-size: 0.8em;
  margin-top: 10px;
}
</style>
