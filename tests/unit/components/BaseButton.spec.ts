import BaseButton from '@/presentation/components/atoms/BaseButton';
import type { VueWrapper } from '@vue/test-utils';
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

describe('BaseButton', () => {
  it('should have a "label" prop', () => {
    const wrapper: VueWrapper = mount(BaseButton, {
      props: { label: '' },
    });

    expect(wrapper).toHaveProperty('label');
  });
});