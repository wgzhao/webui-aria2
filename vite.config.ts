import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  plugins: [
    // handle .vue files
    vue()
  ],
  // Your Vite configuration goes here
  resolve: {
    alias: {
      // '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    port: 3000,
  },
});
