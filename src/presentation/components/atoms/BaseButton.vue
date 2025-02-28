<script lang="ts" setup>
import type { BaseButtonProps } from '@/presentation/components/atoms/types/BaseButtonProps';
import { baseButtonClassMap } from '@/presentation/components/atoms/utils/BaseButtonClassMap';

const props = withDefaults(defineProps<BaseButtonProps>(), {
  label: '',
  disabled: false,
  clickHandler: () => {
  },
  variant: 'info',
});
</script>

<template>
  <button
    :class="'disabled:cursor-not-allowed ' + baseButtonClassMap[variant]"
    :disabled="props.disabled"
    @click="props.clickHandler()"
  >
    <slot />
    {{ props.label }}
  </button>
</template>