import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
    plugins: [react()],
    base: mode === 'production' ? '/Orbitar---Web-de-validaci-n/' : '/',
    publicDir: 'public',
}))
