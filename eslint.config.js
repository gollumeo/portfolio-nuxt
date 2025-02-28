import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt({
  rules: {
    'vue/multiword-component-names': 'off',
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: './tsconfig.json',
      },
      node: {
        extensions: ['.js', '.ts', '.d.ts', '.vue', '.json'],
      },
    },
  },
});
