module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				"bg-color": "#141726",
				"extra-orange": "#ef582f",
			},
			fontFamily: {
				front: ['"Abril Fatface"', '"cursive"'],
			},
			backgroundImage: {
				hero: "url('/src/assets/noise.svg')",
			},
			screens: {
				500: "500px",
				280: "280px",
			},
			animation: {
				circle: "circle 10s linear infinite",
			},
			keyframes: {
				circle: {
					"100%": { transform: "rotate(360deg)" },
				},
			},
		},
	},
	plugins: [],
};
