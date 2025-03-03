import BaseButton from '@/presentation/components/atoms/BaseButton.vue';
import type { BaseButtonProps } from '@/presentation/components/atoms/types/BaseButtonProps';
import type { BaseButtonVariant } from '@/presentation/components/atoms/types/BaseButtonVariant';
import { type BaseButtonBuilder, BaseButtonWrapperBuilder } from '@/tests/unit/components/BaseButtonWrapper.builder';
import { config, mount, type VueWrapper } from '@vue/test-utils';
import { describe, expect, it, type Mock, vi } from 'vitest';

config.global.config.warnHandler = (msg: string): never => {
  throw new Error(msg);
};

const builder: BaseButtonBuilder = BaseButtonWrapperBuilder();

describe('BaseButton', (): void => {
  it('should have a "label" prop', (): void => {
    const wrapper: VueWrapper = builder
      .withLabel('')
      .build();

    expect(wrapper.props()).toHaveProperty('label');
  });

  it('"label" should return a default value', (): void => {
    const wrapper: VueWrapper = builder.build();

    const props: { label?: string } = wrapper.props();
    expect(props.label).toBe('');
  });

  it('should fail if "label" is not a string', (): void => {
    expect((): void => {
      mount(BaseButton, {
        props: { label: 123 },
      });
    }).toThrow();
  });

  it('should render the label', (): void => {
    const label = 'Click me';
    const wrapper: VueWrapper = mount(BaseButton, {
      props: { label },
    });

    expect(wrapper.text()).toBe(label);
  });

  it('should be an html button', (): void => {
    const wrapper: VueWrapper = mount(BaseButton);
    expect(wrapper.element.tagName).toBe('BUTTON');
  });

  it('should call a click handler method when clicked', async (): Promise<void> => {
    const onClick: Mock = vi.fn();
    const props: BaseButtonProps = {
      clickHandler: onClick,
    };
    const wrapper: VueWrapper<BaseButtonProps> = mount(BaseButton, {
      props: props,
    });

    await wrapper.trigger('click');
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('should have a "disabled" prop', () => {
    const wrapper = mount(BaseButton, {
      props: { disabled: '' },
    });

    expect(wrapper.props()).toHaveProperty('disabled');
  });

  it('should have a "disabled" attribute when "disabled" prop is true', (): void => {
    const wrapper: VueWrapper = mount(BaseButton, {
      props: { disabled: true },
    });

    expect(wrapper.attributes()).toHaveProperty('disabled');
  });

  it('should not have a "disabled" attribute when "disabled" prop is false', (): void => {
    const wrapper: VueWrapper = mount(BaseButton, {
      props: { disabled: false },
    });

    expect(wrapper.attributes()).not.toHaveProperty('disabled');
  });

  it('should throw a warn if "disabled" is not a boolean', (): void => {

    expect((): void => {
      mount(BaseButton, {
        props: { disabled: 'true' },
      });
    }).toThrow();
  });

  it('should be deactivated when "disabled" prop is true', (): void => {
    const wrapper: VueWrapper = mount(BaseButton, {
      props: { disabled: true },
    });

    wrapper.trigger('click');

    expect(wrapper.emitted('click')).toBeUndefined();
  });

  it('should render an empty slot by default', (): void => {
    const wrapper: VueWrapper = mount(BaseButton);

    expect(wrapper.html()).not.toContain('<div>');
    expect(wrapper.html()).not.toContain('a string');
    expect(wrapper.text()).toBe('');
  });

  it('should render a given slot', (): void => {
    const slot: string = '<img src="" alt="sample">';
    const wrapper: VueWrapper = mount(BaseButton, {
      slots: {
        default: slot,
      },
    });

    expect(wrapper.html()).toContain(slot);
  });

  it('should have a "variant" prop', (): void => {
    const wrapper: VueWrapper = mount(BaseButton, {
      props: { variant: 'test' },
    });

    expect(wrapper.props()).toHaveProperty('variant');
  });

  it('should fail if an invalid "variant" is given', (): void => {
    const props: BaseButtonProps = {
      //@ts-expect-error - asserting an error if the variant value is invalid
      variant: 123,
    };
    expect((): void => {
      mount(BaseButton, {
        props: props,
      });
    }).toThrow();
  });

  it('should have a default "variant" value', (): void => {
    const wrapper: VueWrapper = mount(BaseButton);
    const props: { variant?: BaseButtonVariant } = wrapper.props();

    expect(props.variant).toContain('info');
  });

  it('should have a default set of classes when there is no "variant" specified', (): void => {
    const wrapper: VueWrapper = mount(BaseButton);
    const props: { variant?: BaseButtonVariant } = wrapper.props();

    expect(props.variant).toContain('info');
    expect(wrapper.classes()).toContain('btn');
  });

  it('should have a set of classes for a "variant" set to "info"', (): void => {
    const wrapper: VueWrapper = mount(BaseButton, {
      props: {
        variant: 'info',
      },
    });

    expect(wrapper.classes()).toContain('btn');
  });

  it('should have a set of classes for a "variant" set to "validate"', (): void => {
    const wrapper: VueWrapper = mount(BaseButton, {
      props: {
        variant: 'validate',
      },
    });

    expect(wrapper.classes()).toContain('btn');
    expect(wrapper.classes()).toContain('validate');
  });

  it('should have a set of classes for a "variant" set to "danger"', (): void => {
    const wrapper: VueWrapper = mount(BaseButton, {
      props: {
        variant: 'danger',
      },
    });

    expect(wrapper.classes()).toContain('btn');
    expect(wrapper.classes()).toContain('danger');
  });

  it('should have a set of classes for a "variant" set to "warning"', (): void => {
    const wrapper: VueWrapper = mount(BaseButton, {
      props: {
        variant: 'warning',
      },
    });

    expect(wrapper.classes()).toContain('btn');
    expect(wrapper.classes()).toContain('warning');
  });

  it('should have a set of classes for a "variant" set to "sm"', (): void => {
    const wrapper: VueWrapper = mount(BaseButton, {
      props: {
        variant: 'sm',
      },
    });

    expect(wrapper.classes()).toContain('btn');
    expect(wrapper.classes()).toContain('sm');
  });

  it('should have a set of classes for a "variant" set to "info"', (): void => {
    const wrapper: VueWrapper = mount(BaseButton, {
      props: {
        variant: 'info',
      },
    });

    expect(wrapper.classes()).toContain('btn');
  });

  it('should have a "size" modifier', (): void => {
  });
});