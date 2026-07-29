<template>
  <main class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
      <h1 class="mb-6 text-center text-3xl font-bold">Registracija</h1>

      <form class="space-y-4">
        <div>
          <label for="name" class="mb-1 block"> Ime </label>

          <input id="name" type="text" class="w-full rounded border p-2" />
        </div>

        <div>
          <label for="email" class="mb-1 block"> Email </label>

          <input id="email" type="email" class="w-full rounded border p-2" />
        </div>

        <div>
          <label for="password" class="mb-1 block"> Lozinka </label>

          <input id="password" type="password" class="w-full rounded border p-2" />
        </div>

        <button type="submit" class="w-full rounded bg-blue-600 p-2 text-white hover:bg-blue-700">
          Registriraj se
        </button>
      </form>

      <p class="mt-4 text-center">
        Već imaš račun?

        <RouterLink to="/login" class="text-blue-600 hover:underline"> Prijavi se </RouterLink>
      </p>
    </div>
  </main>
</template>
