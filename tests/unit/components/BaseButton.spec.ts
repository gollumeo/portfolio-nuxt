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

  it('should return a default value', () => {
    const wrapper = mount(BaseButton);

    // Explicitly type the props
    const props: { label: string } = wrapper.props();
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
});