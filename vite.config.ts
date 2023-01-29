import { join } from 'path'

import typed from '@typed/vite-plugin'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    typed({
      sourceDirectory: join(__dirname, 'src'),
      tsConfig: '../tsconfig.json',
      serverFilePath: 'server.ts',
      clientOutputDirectory: '../dist/client',
      serverOutputDirectory: '../dist/server',
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
