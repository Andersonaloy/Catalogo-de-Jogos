import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Catalogo-de-Jogos/',
  test: {
    globals: true,
    environment: 'jsdom',
  },
});