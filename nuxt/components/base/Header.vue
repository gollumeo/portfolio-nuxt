<script lang="ts" setup>

import {TriangleAlert} from "lucide-vue-next";
import {Alert, AlertDescription, AlertTitle} from "~/nuxt/components/ui/alert";
</script>

<template>
  <header class="w-3/4 m-auto">
    <Alert class="bg-gollumeo-secondary">
      <TriangleAlert class="text-gollumeo-light" />
      <AlertTitle class="text-gollumeo-light">
        WIP
      </AlertTitle>
      <AlertDescription class="text-gollumeo-light">
        Version brute. Sans style. L'essence est là.
      </AlertDescription>
    </Alert>
  </header>
</template>
