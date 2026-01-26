import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: '/Orbitar---Web-de-validaci-n/',
    publicDir: 'public', // Ensure public directory is served
})
