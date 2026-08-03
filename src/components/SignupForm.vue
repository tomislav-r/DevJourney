<template>
  <form @submit.prevent="handleSubmit">
    <label for="email">Email:</label>
    <input type="email" required v-model="email" />

    <label for="password">Password:</label>
    <input type="password" required v-model="password" />
    <div v-if="passwordError" class="error">{{ passwordError }}</div>

    <label for="role">Role:</label>
    <select id="role" v-model="role">
      <option value="">Select a role</option>
      <option value="programmer">Programmer</option>
      <option value="artist">Artist</option>
      <option value="qa">QA</option>
    </select>

    <div class="submit">
      <button>Create an Account</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      role: '',
      passwordError: '',
    }
  },

  methods: {
    handleSubmit() {
      this.passwordError =
        this.password.length > 5 ? '' : 'Password must be at least 5 characters long.'

      if (!this.passwordError) {
        console.log('Form submitted:', {
          email: this.email,
          password: this.password,
          role: this.role,
        })
      }
    },
  },
}
</script>

<style>
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
  margin: 0px;
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
  border-bottom: 1 px solid #ddd;
  color: #555;
}

button {
  background: #0b6dff;
  border: none;
  padding: 10px 20px;
  margin-top: 20px;
  color: white;
  border-radius: 20px;
}

.error {
  color: red;
  font-size: 0.8em;
  margin-top: 5px;
}
</style>
