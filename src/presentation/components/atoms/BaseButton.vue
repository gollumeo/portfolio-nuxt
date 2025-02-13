<script lang="ts" setup>
import type { BaseButtonProps } from '@/presentation/components/atoms/types/BaseButtonProps';

const props = withDefaults(defineProps<BaseButtonProps>(), {
  label: '',
  disabled: false,
  clickHandler: () => {
  },
});

</script>

<template>
  <button
    :disabled="props.disabled"
    class="disabled:cursor-not-allowed"
    @click="props.clickHandler()">
    {{ props.label }}
  </button>
</template>