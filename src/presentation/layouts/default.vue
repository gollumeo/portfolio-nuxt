<template>
  <div class="min-h-screen flex flex-col text-slate-100">
    <header class="p-4 bg-slate-700">
      Pierre "Golluméo" Mauriello - Bienvenue dans ma Communauté 🫡
    </header>
    <main class="flex-grow">
        <slot />
    </main>
    <footer class="p-4 bg-slate-800">
      <p>&copy; {{ new Date().getFullYear() }} Pierre "Golluméo" Mauriello</p>
    </footer>
  </div>
</template>

<style scoped>

</style>