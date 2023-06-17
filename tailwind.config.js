/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
	  "./src/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			screens: {
				'x-300': {'min': '300px'},
				'x-400': {'min': '400px'},
				'x-500': {'min': '500px'},
				'x-600': {'min': '600px'},
				'x-700': {'min': '700px'},
				'x-800': {'min': '800px'},
				'x-900': {'min': '900px'},
				'x-1000': {'min': '1000px'},
				'x-1100': {'min': '1100px'},
				'x-1200': {'min': '1200px'},
				'x-1300': {'min': '1300px'},
				'x-1400': {'min': '1400px'},
				'x-1500': {'min': '1500px'},
			},
			fontFamily: {
				pacifico: 'var(--font-pacifico)',
			},
			colors: {
				theme: {
					primary: 'var(--primary)',
					light: 'var(--light)',
					dark: 'var(--dark)',
				}
			},
			animation: {
				'mySpin': 'mySpin 50s linear infinite',
			},
			clipPath: {
				'hide': 'polygon(0 0, 100% 0, 100% 0, 0 0)',
				'reveal': 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
			},
		},
	},
	plugins: [],
}

