import path from 'path';
import fs from 'fs';
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker';
import tsconfigPaths from 'vite-tsconfig-paths';
import publicManifest from './public/manifest.json';

export const buildDir = 'build';
export const tmpDir = '.tmp';
export const envPrefix = 'DOMO_';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  let manifest = publicManifest;
  const tmpManifestPath = path.join(process.cwd(), tmpDir, 'manifest.json');
  try {
    manifest = JSON.parse(fs.readFileSync(tmpManifestPath).toString());
  } catch (e) {}

  return {
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
      {
        name: 'build-index',
        async writeBundle() {
          try {
            if (command === 'build') {
              const buildManifestPath = path.join(
                process.cwd(),
                buildDir,
                'manifest.json',
              );
              fs.renameSync(tmpManifestPath, buildManifestPath);
            }
          } catch (e) {
            console.log('Could not replace "manifest.json" in build folder');
            console.error(e);
          }
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
      sourcemap: false,
      minify: true,
      rollupOptions: {
        output: {
          sourcemap: false,
          manualChunks: {},
        },
      },
    },
    clearScreen: false,
  };
});
