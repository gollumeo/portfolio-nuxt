<script lang="ts" setup>
import type { BaseButtonProps } from '@/presentation/components/atoms/types/BaseButtonProps';

const props = withDefaults(defineProps<BaseButtonProps>(), {
  label: '',
});

</script>

<template>
  <button>
    {{ props.label }}
  </button>
</template>