import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: ['babel-plugin-macros', 'styled-components'],
      },
    }),
  ],
  optimizeDeps: {
    exclude: ['twin.macro'],
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.jsx'),
      name: 'TDesignSystem',
      fileName: (format) => `t-design-system.${format}.js`,
    },
    rollupOptions: {
      // Ensure to externalize deps that shouldn't be bundled
      // into your library
      external: ['react', 'react-dom', 'styled-components', 'twin.macro'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'styled-components': 'styled',
        },
      },
    },
  },
  test: {
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.js'],
    globals: true,
  },
});
