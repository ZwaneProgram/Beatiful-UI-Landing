import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
//import tailwind at start of project
import tailwindcss from '@tailwindcss/vite'
//vite libary เรียก path ทำให้ใช้ @/... ได้
import path from "path"

export default defineConfig({
  //paste tailwind to use it (vite)
  plugins: [react(), tailwindcss()],
  //เรียกใช้ path
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  }
})