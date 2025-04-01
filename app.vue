<template>
  <div>
    <UContainer class="px-2 py-4">
      <UAlert
        color="neutral"
        description="Version brute. Sans style. L'essence est là."
        icon="lucide:triangle-alert"
        title="WIP"
      />

      <section class="mt-6">
        <h1 class="text-3xl">Pierre "Golluméo" Mauriello – Backend & FinTech Specialist</h1>
        <p class="text-muted mt-2">Je construis des outils solides pour des FinTechs qui veulent éviter la dette
          technique avant même le premier commit.</p>
      </section>

      <section>
        <h2 class="text-xl font-bold mb-4">Projets en cours</h2>
        <article class="grid grid-cols-2 gap-4">
          <UCard>
            <template #header>
              FinTrack
            </template>
            <p>App d'analyse intelligente. Automatisation + IA + Open Banking.</p>
            <template #footer>
              <UContainer class="flex gap-2">
                <UBadge>
                  Laravel
                </UBadge>
                <UBadge>
                  Nuxt
                </UBadge>
                <UBadge>
                  TailwindCSS
                </UBadge>
              </UContainer>
            </template>
          </UCard>
          <UCard>
            <template #header>
              Laravel Open Banking SDK
            </template>
            <p>SDK pour connecter les API bancaires type Tink / Plaid à Laravel avec Clean Archi, sécurité & scalabilité native.</p>
            <UButton class="mt-2" target="_blank" to="https://github.com/gollumeo/laravel-open-banking">
              Voir sur GitHub
            </UButton>
            <template #footer>
              Badges à venir.
            </template>
          </UCard>
        </article>
      </section>
      <section class="mt-10">
        <h2 class="text-xl font-bold mb-2">Tu veux échanger ?</h2>
        <UButton target="_blank" to="https://taap.it/hVYOJx">Réserve un créneau</UButton>
      </section>
    </UContainer>
  </div>
</template>