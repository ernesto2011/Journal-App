import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from '@dotenvx/dotenvx'

dotenv.config();
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
