<template>
  <div class="min-h-screen flex flex-col text-slate-100">
    <header class="p-4 bg-primary text-light">
      {{ $t('me') }}
    </header>
    <main class="flex-grow">
      <slot />
    </main>
    <footer class="p-4 bg-primary text-light">
      <p>&copy; {{ new Date().getFullYear() }} {{ $t('me') }}</p>
    </footer>
  </div>
</template>
