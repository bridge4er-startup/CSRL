import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
  server: {
    proxy: { '/api': 'http://localhost:3001', '/uploads': 'http://localhost:3001' }
  },
  build: {
    rollupOptions: {
      input: {
        home: resolve(import.meta.dirname, 'index.html'),
        research: resolve(import.meta.dirname, 'research.html'),
        project: resolve(import.meta.dirname, 'project.html'),
        contacts: resolve(import.meta.dirname, 'contacts.html'),
        news: resolve(import.meta.dirname, 'news.html'),
        admin: resolve(import.meta.dirname, 'admin.html')
      }
    }
  }
});
