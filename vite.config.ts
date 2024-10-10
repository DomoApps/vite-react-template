import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    checker({
      eslint: {
        lintCommand: 'eslint .',
        useFlatConfig: true,
        dev: {
          logLevel: ['error'],
        },
      },
    }),
    tsconfigPaths(),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern',
      },
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
  },
  build: {
    outDir: 'build',
    emptyOutDir: true,
  },
});
