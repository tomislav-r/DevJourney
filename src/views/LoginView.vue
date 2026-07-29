<template>
  <main class="flex min-h-screen items-center justify-center bg-gray-100">
    <div class="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
      <h1 class="mb-6 text-center text-3xl font-bold">Prijava</h1>

      <form class="space-y-4">
        <div>
          <label for="email" class="mb-1 block font-medium"> Email </label>

          <input
            id="email"
            type="email"
            placeholder="Unesite email"
            class="w-full rounded border border-gray-300 p-2"
          />
        </div>

        <div>
          <label for="password" class="mb-1 block font-medium"> Lozinka </label>

          <input
            id="password"
            type="password"
            placeholder="Unesite lozinku"
            class="w-full rounded border border-gray-300 p-2"
          />
        </div>

        <button
          type="submit"
          class="w-full rounded bg-blue-600 p-2 font-medium text-white hover:bg-blue-700"
        >
          Prijavi se
        </button>
      </form>

      <p class="mt-4 text-center">
        Nemaš račun?

        <RouterLink to="/register" class="text-blue-600 hover:underline">
          Registriraj se
        </RouterLink>
      </p>
    </div>
  </main>
</template>

<script setup></script>

<style scoped></style>
