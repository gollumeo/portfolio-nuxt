import { createUrl } from '@/domain/types/Utils/Url';
import { describe, expect, it } from 'vitest';

describe('createUrl', (): void => {
  const testData = {
    validUrlWww: 'https://www.google.com',
    validShortUrl: 'https://example.com',
    unsecuredUrl: 'http://example.com',
    invalidUrlNoTld: 'https://example',
    invalidTld: 'https://example.abc',
  };

  it('should create a valid URL', (): void => {
    expect(createUrl(testData.validUrlWww)).toBe(testData.validUrlWww);
    expect(createUrl(testData.validShortUrl)).toBe(testData.validShortUrl);
  });

  it('should throw an error for non-https URLs', (): void => {
    expect(() => createUrl(testData.unsecuredUrl)).toThrowError(`Unsecured URL: ${testData.unsecuredUrl}`);
  });

  it('should throw an error for invalid URLs', (): void => {
    expect(() => createUrl(testData.invalidUrlNoTld)).toThrowError(`Invalid URL: ${testData.invalidUrlNoTld}`);
  });

  it('should throw an error for URLs without a valid TLD', (): void => {
    expect(() => createUrl(testData.invalidTld)).toThrowError(`Invalid TLD for URL: ${testData.invalidTld}`);
  });
});