import { defineConfig } from 'vite';

export default defineConfig({
    //base: '/menu/', // Para que funcione en github pages. /js-vite-blackjack/ es el nombre del repo.
    root: 'src',
    build: {
        outDir: './docs' // Se modifica de ./dist a ./docs para que funcione en github pages. 
    },
    server: {
        port: 3030,
        hot: true
    }
});