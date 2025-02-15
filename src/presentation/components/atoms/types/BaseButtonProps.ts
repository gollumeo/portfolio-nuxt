import type { BaseButtonVariant } from '@/presentation/components/atoms/types/BaseButtonVariant';

export interface BaseButtonProps {
  label?: string,
  disabled?: boolean,
  variant?: BaseButtonVariant,
  clickHandler?: () => void,
}