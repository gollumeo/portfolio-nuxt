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

  it('should render an empty slot by default', () => {
    const wrapper = mount(BaseButton);

    expect(wrapper.html()).not.toContain('<div>');
    expect(wrapper.html()).not.toContain('a string');
    expect(wrapper.text()).toBe('');
  });

  it('should render a given slot', () => {
    const slot: string = '<img src="" alt="sample">';
    const wrapper = mount(BaseButton, {
      slots: {
        default: slot,
      },
    });

    expect(wrapper.html()).toContain(slot);
  });

  it('should have a "variant" prop', () => {
    const wrapper = mount(BaseButton, {
      props: { variant: 'test' },
    });

    expect(wrapper.props()).toHaveProperty('variant');
  });

  it('should fail if an invalid "variant" is given', () => {
    const consoleWarnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {
    });

    mount(BaseButton, {
      props: { variant: 'invalid' },
    });

    expect(consoleWarnSpy).toHaveBeenCalled();
  });
});