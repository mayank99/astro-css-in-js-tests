import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import linaria from '@linaria/vite';

// https://astro.build/config
export default defineConfig({
	build: {
		format: 'file',
	},
	vite: {
		plugins: [
			linaria({
				displayName: true,
				classNameSlug: (hash, title, args) => `${args.dir}_${title}_${hash}`,
				babelOptions: {
					presets: ['react'],
				},
			}),
		],
		css: {
			modules: false,
		},
	},
	integrations: [react()],
});
