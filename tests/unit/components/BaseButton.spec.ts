import BaseButton from '@/presentation/components/atoms/BaseButton.vue';
import { mount } from '@vue/test-utils';
import { describe, expect, it, vi } from 'vitest';

describe('BaseButton', () => {
  it('should have a "label" prop', () => {
    const wrapper = mount(BaseButton, {
      props: { label: '' },
    });

    expect(wrapper.props()).toHaveProperty('label');
  });

  it('"label" should return a default value', () => {
    const wrapper = mount(BaseButton);

    const props = wrapper.props() as { label?: string };
    expect(props.label).toBe('');
  });

  it('should fail if "label" is not a string', () => {
    const consoleWarnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {
    });

    mount(BaseButton, {
      props: { label: 123 },
    });
    expect(consoleWarnSpy).toHaveBeenCalled();
  });

  it('should render the label', () => {
    const label = 'Click me';
    const wrapper = mount(BaseButton, {
      props: { label },
    });

    expect(wrapper.text()).toBe(label);
  });

  it('should be an html button', () => {
    const wrapper = mount(BaseButton);
    expect(wrapper.element.tagName).toBe('BUTTON');
  });

  it('should call a click handler method when clicked', async (): Promise<void> => {
    const onClick = vi.fn();
    const wrapper = mount(BaseButton, {
      props: {
        handleClick: onClick,
      },
    });

    await wrapper.trigger('click');
    expect(wrapper.emitted()).toHaveProperty('click');
  });

  it('should have a "disabled" prop', () => {
    const wrapper = mount(BaseButton, {
      props: { disabled: '' },
    });

    expect(wrapper.props()).toHaveProperty('disabled');
  });

  it('should have a "disabled" attribute when "disabled" prop is true', () => {
    const wrapper = mount(BaseButton, {
      props: { disabled: true },
    });

    expect(wrapper.attributes()).toHaveProperty('disabled');
  });

  it('should not have a "disabled" attribute when "disabled" prop is false', () => {
    const wrapper = mount(BaseButton, {
      props: { disabled: false },
    });

    expect(wrapper.attributes()).not.toHaveProperty('disabled');
  });

  it('should throw a warn if "disabled" is not a boolean', () => {
    const consoleWarnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {
    });

    mount(BaseButton, {
      props: { disabled: 'true' },
    });
    expect(consoleWarnSpy).toHaveBeenCalled();
  });

  it('should be deactivated when "disabled" prop is true', () => {
    const wrapper = mount(BaseButton, {
      props: { disabled: true },
    });

    expect(wrapper.classes()).toContain('disabled:cursor-not-allowed');
  });

  it('', () => {
  });
});