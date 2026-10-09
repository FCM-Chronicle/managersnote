import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // 상대 경로로 빌드하여 어떤 정적 서버나 로컬 파일로도 열 수 있도록 지원
  server: {
    port: 5173,
    host: true,
  }
})
