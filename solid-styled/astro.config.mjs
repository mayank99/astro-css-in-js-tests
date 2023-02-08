import { defineConfig } from 'astro/config';
import solidJs from '@astrojs/solid-js';
import solidStyled from 'vite-plugin-solid-styled';

// https://astro.build/config
export default defineConfig({
	vite: {
		plugins: [solidStyled()],
	},
	integrations: [solidJs()],
});
