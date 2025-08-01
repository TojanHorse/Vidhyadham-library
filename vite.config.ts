import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  preview: {
    port: 5000,
    host: '0.0.0.0'
  },
  server: {
    port: 5000,
    host: '0.0.0.0'
  }
});
