<template>
  <div class="min-h-screen flex flex-col text-slate-100">
    <header class="p-4 bg-primary text-light">
      Pierre "Golluméo" Mauriello - Bienvenue dans ma Communauté 🫡
    </header>
    <main class="flex-grow">
      <slot />
    </main>
    <footer class="p-4 bg-primary text-light">
      <p>&copy; {{ new Date().getFullYear() }} Pierre "Golluméo" Mauriello</p>
    </footer>
  </div>
</template>
