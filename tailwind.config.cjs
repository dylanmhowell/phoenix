module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	daisyui: ["cupcake", "dark", "synthwave"],
	theme: {
		extend: {},
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('daisyui'),
	],
};
