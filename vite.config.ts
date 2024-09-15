import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import * as dotenv from 'dotenv';
import { defineConfig } from 'vite';

import { port } from './src/app.config';

import { configDefaults } from 'vitest/config';

// Load environment variables
dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteTsconfigPaths()],
  server: {
    open: true,
    port,
  },
  preview: {
    open: true,
    port,
  },
  test: {
    ...configDefaults,
    globals: true,
    environment: 'jsdom',
    setupFiles: 'src/tests/setupTests.ts',
    exclude: ['**/node_modules/**', 'src/tests/playwright/**/*.spec.{ts,tsx}'],
    coverage: {
      include: ['src/**/*.{js,jsx,ts,tsx}'],
      exclude: ['src/types', 'src/**/types.ts', 'src/**/*.types.ts'],
    },
  },
});
