import { defineConfig } from 'vite'
import eslintPlugin from '@nabla/vite-plugin-eslint'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  base: "react-smart-search-examples",
  plugins: [
    react(),
    eslintPlugin(),
  ],
})
