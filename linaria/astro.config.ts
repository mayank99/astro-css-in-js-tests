import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import linaria from '@linaria/rollup';

// https://astro.build/config
export default defineConfig({
	vite: {
		plugins: [linaria()],
		legacy: { buildSsrCjsExternalHeuristics: true },
		ssr: { noExternal: ['@linaria/*'] },
	},
	integrations: [react()],
});
