import vue from '@vitejs/plugin-vue';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

console.log('Testing vite-tsconfig-paths:', tsconfigPaths); // Debug

export default defineConfig({
  plugins: [tsconfigPaths(), vue()],
  resolve: {
    extensions: ['.vue', '.ts', '.js'],
  },
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['tests/**/*.spec.ts'],
  },
});
