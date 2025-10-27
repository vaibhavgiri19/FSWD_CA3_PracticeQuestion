/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,       // allows using describe/it/expect without import
    environment: 'jsdom', // simulate browser for React components
    setupFiles: './src/setupTests.js',
  },
});
