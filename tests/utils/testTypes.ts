export type urlTestCase = {
  validUrls: Array<string>,
  invalidUrls: Array<InvalidUrlTestCase>
}

type InvalidUrlTestCase = {
  url: string,
  expectedError: string
}