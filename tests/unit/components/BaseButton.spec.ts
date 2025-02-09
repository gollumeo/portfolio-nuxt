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

  it('should have a "disabled" prop', () => {

  });
});