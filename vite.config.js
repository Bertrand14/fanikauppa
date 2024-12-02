import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import {viteStaticCopy} from 'vite-plugin-static-copy';

export default defineConfig({
  base: '/fanikauppa/', 
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'src/assets/images/*', // Indiquer les fichiers à copier
          dest: 'src/assets/images', // Destination dans le build
        }
      ]
    })
  ]
});


