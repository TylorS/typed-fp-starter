import { join } from 'path'

import typed from '@typed/vite-plugin'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    typed({
      sourceDirectory: join(__dirname, 'src'),
      tsConfig: join(__dirname, 'tsconfig.json'),
      clientOutputDirectory: join(__dirname, 'dist/client'),
      serverOutputDirectory: join(__dirname, 'dist/server'),
      saveGeneratedModules: true,
    }),
  ],
  build: {
    manifest: true,
    sourcemap: true,
    minify: true,
    emptyOutDir: true,
  },
})
