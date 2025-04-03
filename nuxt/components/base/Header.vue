<script lang="ts" setup>

import {TriangleAlert} from "lucide-vue-next";
import {Alert, AlertDescription, AlertTitle} from "~/nuxt/components/ui/alert";
</script>

<template>
  <header class="md:w-3/4 mx-auto mb-4">
    <Alert class="bg-gollumeo-secondary border-none">
      <TriangleAlert class="text-gollumeo-light stroke-gollumeo-light" />
      <AlertTitle class="text-gollumeo-light">
        WIP — navbar/header inc
      </AlertTitle>
      <AlertDescription class="text-gollumeo-light">
        Version brute. Sans style. L'essence est là.
      </AlertDescription>
    </Alert>
  </header>
</template>
