import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    base: '/forms/', // Para que funcione en github pages. /js-vite-blackjack/ es el nombre del repo.
    root: 'src',
    build: {
        outDir: './docs', // Se modifica de ./dist a ./docs para que funcione en github pages. 
        rollupOptions: {
            input: {
                // Docs: https://vitejs.dev/guide/build.html#multi-page-app.
                main: resolve(__dirname, './src/index.html'),
                content1: resolve(__dirname, './src/forms/components/content1.html'),
                content2: resolve(__dirname, './src/forms/components/content2.html'),
            }
        }
    },
    server: {
        port: 3030,
        hot: true
    }
});