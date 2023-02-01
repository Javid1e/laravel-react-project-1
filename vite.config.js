import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/js/assets/scss/style.scss',
                'resources/js/index.jsx',
            ],
            refresh: true,
        }),
        react(),
    ],
});
