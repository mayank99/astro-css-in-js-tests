import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
	integrations: [react()],
	vite: ({ mode }) =>
		mode === 'prod' && {
			legacy: { buildSsrCjsExternalHeuristics: import.meta.env.SSR },
			ssr: { noExternal: ['@emotion/*'] },
		},
});
