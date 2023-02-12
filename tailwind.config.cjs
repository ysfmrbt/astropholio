/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			'jb' : ['JetBrains Mono', 'Helvetica'],
		},
		backgroundImage: {
			'about-pattern': "url('/about.svg')"
		},
		extend: {},
	},
	plugins: [],
}
