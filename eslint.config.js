import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt({
  rules: {
    'vue/multiword-component-names': 'off',
  },
  // ---- Résolution des imports ----
  settings: {
    'import/resolver': {
      // 1) Le resolver TypeScript
      typescript: {
        // Remplace par le chemin vers ton tsconfig si besoin
        project: './tsconfig.json',
      },
      // 2) Le resolver Node (utile si tu as des .vue, .json, etc.)
      node: {
        extensions: ['.js', '.ts', '.d.ts', '.vue', '.json'],
      },
    },
  },
});
