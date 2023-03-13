import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';
import { defineConfig } from '@midwayjs/hooks-kit';

export default defineConfig({
  source: './src/server',

  vite: {
    plugins: [react(), legacy()],

    // 仅适用于 dev
    server: {
      host: '0.0.0.0',
      port: 3500,
    },
  },
});
