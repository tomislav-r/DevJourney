<template>
  <form>
    <label for="email">Email:</label>
    <input type="email" required v-model="email" />

    <label for="password">Password:</label>
    <input type="password" required v-model="password" />

    <button type="submit">Register</button>
    <p></p>

    <label for="role">Role:</label>
    <select id="role" v-model="Role">
      <option value="">Select a role</option>
      <option value="programmer">Programmer</option>
      <option value="artist">Artist</option>
      <option value="qa">QA</option>
    </select>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      role: '',
    }
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
</style>
