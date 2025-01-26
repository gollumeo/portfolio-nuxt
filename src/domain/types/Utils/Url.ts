export type Url = string & { __brand: 'Url' }; // Branded Type pour éviter les strings bruts

const VALID_URL_REGEX: RegExp = /^https:\/\/[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const VALID_TLDS: string[] = ['com', 'org', 'net', 'fr', 'io', 'dev', 'be', 'uk', 'ca', 'co', 'ch'];

export const createUrl = (url: string): Url => {
  if (!url.startsWith('https://')) {
    throw new Error(`Unsecured URL: ${url}`);
  }

  if (!VALID_URL_REGEX.test(url)) {
    throw new Error(`Invalid URL: ${url}`);
  }

  const tld: string | undefined = url.split('.').pop();
  if (!tld || !VALID_TLDS.includes(tld)) {
    throw new Error(`Invalid TLD for URL: ${url}`);
  }

  return url as Url;
};