import viteFastify from '@fastify/vite/plugin';

import { defineConfig } from 'vite';

export default defineConfig({
  root: 'client',
  build: { outDir: '../out/dist', assetsDir: '', emptyOutDir: true },
  plugins: [viteFastify()],
});
