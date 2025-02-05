import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt({
  rules: {
    'vue/multiword-component-names': 'off',
    'import/extensions': [
      'error',
      'always',
      {
        'js': 'never',
        'ts': 'never',
        'vue': 'always',
        'json': 'never',
      },
    ],
  },
});
