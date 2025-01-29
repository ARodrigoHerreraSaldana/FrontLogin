import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import builtins from 'rollup-plugin-node-builtins';
import globals from 'rollup-plugin-node-globals';

export default defineConfig({
  build: {
    rollupOptions: {
      external: ['react'], // Add other third-party packages here
    },
  },
  plugins: [
    react(),
    builtins(),
    globals(),
  ],
  resolve: {
    alias: {
      'crypto-js': 'crypto-js',
    },
    define: {
      _global: ({})
  },
  optimizeDeps: {
    include: ['@emotion/styled'],
  },
  },
});