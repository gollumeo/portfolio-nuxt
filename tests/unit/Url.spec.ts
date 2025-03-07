import { createUrl, type Url } from '@/domain/types/Utils/Url';
import { urlsTestData } from '@/tests/utils/testData';
import { describe, expect, it } from 'vitest';

describe.each(urlsTestData.validUrls)('Valid URLs', (validUrl: string): void => {
  it(`should accept ${validUrl}`, (): void => {
    expect(createUrl(validUrl)).toBe(validUrl);
  });
});

describe.each(urlsTestData.invalidUrls)('Invalid URLs', ({ url, expectedError }): void => {
  it(`should throw error for ${url}`, (): void => {
    expect((): Url => createUrl(url)).toThrowError(expectedError);
  });
});