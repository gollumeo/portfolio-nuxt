import type { BaseButtonSize } from '@/presentation/components/atoms/types/BaseButtonSize';
import type { BaseButtonVariant } from '@/presentation/components/atoms/types/BaseButtonVariant';

export interface BaseButtonProps {
  label?: string,
  disabled?: boolean,
  variant?: BaseButtonVariant,
  size?: BaseButtonSize
  clickHandler?: () => void,
}