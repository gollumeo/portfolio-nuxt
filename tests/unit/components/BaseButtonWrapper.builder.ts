import BaseButton from '@/presentation/components/atoms/BaseButton.vue';
import type { BaseButtonProps } from '@/presentation/components/atoms/types/BaseButtonProps';
import type { BaseButtonSize } from '@/presentation/components/atoms/types/BaseButtonSize';
import type { BaseButtonVariant } from '@/presentation/components/atoms/types/BaseButtonVariant';
import { mount, type VueWrapper } from '@vue/test-utils';

type BuilderState = Partial<BaseButtonProps>;

interface BaseButtonBuilder {
  withVariant: (variant: BaseButtonVariant) => BaseButtonBuilder;
  withSize: (size: BaseButtonSize) => BaseButtonBuilder;
  withLabel: (label: string) => BaseButtonBuilder;
  withDisabled: () => BaseButtonBuilder;
  build: () => VueWrapper;
}

type BaseButtonWrapperBuilderType = (state?: BuilderState) => BaseButtonBuilder;

export const BaseButtonWrapperBuilder: BaseButtonWrapperBuilderType = (state = {}): BaseButtonBuilder => ({
  withVariant: (variant: BaseButtonVariant): BaseButtonBuilder => BaseButtonWrapperBuilder({ ...state, variant }),
  withSize: (size: BaseButtonSize): BaseButtonBuilder => BaseButtonWrapperBuilder({ ...state, size }),
  withLabel: (label: string): BaseButtonBuilder => BaseButtonWrapperBuilder({ ...state, label }),
  withDisabled: (): BaseButtonBuilder => BaseButtonWrapperBuilder({ ...state, disabled: true }),
  build: (): VueWrapper => mount(BaseButton, { props: state }),
});
