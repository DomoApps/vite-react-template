import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker';
import tsconfigPaths from 'vite-tsconfig-paths';
import manifest from './public/manifest.json';

export const buildDir = 'build';
export const envPrefix = 'DOMO_';

// https://vitejs.dev/config/
export default defineConfig(({}) => ({
  plugins: [
    react(),
    checker({
      eslint: {
        lintCommand: 'eslint',
        useFlatConfig: true,
        dev: {
          logLevel: ['error'],
        },
      },
    }),
    tsconfigPaths(),
    {
      name: 'html-transform',
      transformIndexHtml(html) {
        return html.replace(
          /<title>(.*?)<\/title>/,
          `<title>${manifest.name}@${manifest.version}</title>`,
        );
      },
    },
  ],
  envDir: './.environment',
  envPrefix,
  define: {
    DOMO_APP_NAME: JSON.stringify(manifest.name),
    DOMO_APP_VERSION: JSON.stringify(manifest.version),
  },
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
    outDir: buildDir,
    emptyOutDir: true,
  },
}));
