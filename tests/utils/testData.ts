import type { urlTestCase } from 'tests/utils/testTypes';

export const urlsTestData: urlTestCase = {
  validUrls: [
    'https://www.google.com',
    'https://example.com',
    'https://sub.example.net',
    'https://example.io',
    'https://example.dev',
  ],
  invalidUrls: [
    { url: 'http://example.com', expectedError: 'Unsecured URL' },
    { url: 'https://example', expectedError: 'Invalid URL' },
    { url: 'https://example.abc', expectedError: 'Invalid TLD' },
    { url: 'ftp://example.com', expectedError: 'Unsecured URL' },
  ],
};