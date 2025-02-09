<script lang="ts" setup>
import type { BaseButtonProps } from '@/presentation/components/atoms/types/BaseButtonProps';

const props = withDefaults(defineProps<BaseButtonProps>(), {
  label: '',
  disabled: false,
  handleClick: () => {
  },
});

</script>

<template>
  <button
    :disabled="props.disabled"
    class="disabled:cursor-not-allowed"
    @click="props.handleClick">
    {{ props.label }}
  </button>
</template>