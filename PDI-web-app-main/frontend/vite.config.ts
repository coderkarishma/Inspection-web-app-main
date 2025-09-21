import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
    server: {
    proxy: {
      '/api': 'https://pdi-web-app-main-backend.onrender.com/', // your backend port
    },
  }
});
