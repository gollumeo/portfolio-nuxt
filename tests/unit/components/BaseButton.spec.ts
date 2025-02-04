import BaseButton from '@/presentation/components/atoms/BaseButton';
import type { VueWrapper } from '@vue/test-utils';
import { mount } from '@vue/test-utils';
import { describe, expect, it, vi } from 'vitest';


describe('BaseButton', () => {
  it('should have a "label" prop', () => {
    const wrapper: VueWrapper = mount(BaseButton, {
      props: { label: '' },
    });

    expect(wrapper.props()).toHaveProperty('label');
  });

  it('should return a default value', () => {
    const wrapper = mount(BaseButton, {});

    expect(wrapper.props().label).toBe('');
  });

  it('should fail if "label" is not a string', () => {
    const consoleWarnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {
    });

    mount(BaseButton, {
      // @ts-expect-error - We do test, on purpose, a wrong value
      props: { label: 123 },
    });
    expect(consoleWarnSpy).toHaveBeenCalled();
  });
});