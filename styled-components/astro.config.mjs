import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
	integrations: [react()],
	vite: {
		legacy: { buildSsrCjsExternalHeuristics: true },
		ssr: { noExternal: ['styled-components'] },
	},
});
