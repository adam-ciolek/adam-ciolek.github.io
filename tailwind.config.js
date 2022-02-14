module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				"bg-color": "#141726",
				"extra-orange": "#ef582f",
				"light-blue": "#1BFAF4",
			},
			fontFamily: {
				front: ['"Abril Fatface"', '"cursive"'],
				text: ['"Radley"', '"serif"'],
			},
			backgroundImage: {
				hero: "url('/src/assets/noise.svg')",
			},
			screens: {
				500: "500px",
				280: "280px",
				796: "796px",
			},
			animation: {
				circle: "circle 10s linear infinite",
			},
			keyframes: {
				circle: {
					"100%": { transform: "rotate(360deg)" },
				},
			},
			height: {
				picture: "300px",
			},
		},
	},
	plugins: [],
};
