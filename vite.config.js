import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        home: resolve(import.meta.dirname, 'index.html'),
        research: resolve(import.meta.dirname, 'research.html'),
        project: resolve(import.meta.dirname, 'project.html'),
        contacts: resolve(import.meta.dirname, 'contacts.html')
      }
    }
  }
});
