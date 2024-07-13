import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://timbu-get-all-products.reavdev.workers.dev/?organization_id=46b2bf6020ce4846b949b835ec3a3cbc&reverse_sort=false&page=1&size=10&Appid=YJVY7X37QX87NX9&Apikey=ff86cad057d343bb8b84fa268c80cb4a20240712141759507777',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
