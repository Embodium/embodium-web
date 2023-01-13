import { defineConfig } from 'vite';
import { qwikVite } from '@builder.io/qwik/optimizer';

export default defineConfig(() => {
  return {
    build: {
      target: 'es2020',
      lib: {
        entry: './src/index.ts',
        formats: ['es', 'cjs'],
        fileName: (format) => `index.${format === 'es' ? 'mjs' : 'cjs'}`,
      },
    },
      plugins: [qwikVite({
	  srcDir: "qwik-app",
	  client: {
	      devInput: "qwik-app/entry.dev.tsx"
	  },
	  ssr: {
	      input: "qwik-app/entry.ssr.tsx"   
	  }
      })],
  };
});
