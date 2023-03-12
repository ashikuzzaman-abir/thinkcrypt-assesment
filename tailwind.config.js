/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				midGray: "#6D6D6D",
				lightGray: "#131313",
				hotpink: "#EF419B",
				shalowGray: "#F5F5F5",
			},
		},
	},
	plugins: [],
};
