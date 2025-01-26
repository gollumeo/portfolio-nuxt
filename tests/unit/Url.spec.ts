import { createUrl } from '@/domain/types/Utils/Url';
import { urlsTestData } from '@/tests/utils/testData';
import { describe, expect, it } from 'vitest';

describe.each(urlsTestData.validUrls)('Valid URLs', (validUrl: string) => {
  it(`should accept ${validUrl}`, () => {
    expect(createUrl(validUrl)).toBe(validUrl);
  });
});

describe.each(urlsTestData.invalidUrls)('Invalid URLs', ({ url, expectedError }) => {
  it(`should throw error for ${url}`, () => {
    expect(() => createUrl(url)).toThrowError(expectedError);
  });
});