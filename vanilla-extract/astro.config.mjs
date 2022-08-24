import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

// https://astro.build/config
export default defineConfig({
	integrations: [react()],
	vite: {
		plugins: [vanillaExtractPlugin()],
	},
});
