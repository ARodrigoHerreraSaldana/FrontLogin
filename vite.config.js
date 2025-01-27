import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import builtins from 'rollup-plugin-node-builtins';
import globals from 'rollup-plugin-node-globals';

export default defineConfig({
  plugins: [
    react(),
    builtins(),
    globals(),
  ],
  resolve: {
    alias: {
      'crypto-js': 'crypto-js',
    },
  },
});