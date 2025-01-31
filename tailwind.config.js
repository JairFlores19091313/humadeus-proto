/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./index.html',
		'./src/**/*.{vue,js,ts,jsx,tsx}',
	],
	theme: {
		fontFamily: {
			montse: ['Montserrat'],
			sans: ['Helvetica', 'Arial', 'sans-serif'],
			serif: ['Georgia', 'sans-serif'],
			mono: ['ui-monospace', 'SFMono-Regular'],
            times: ['Times New Roman', 'sans-serif'],
            baskerville: ['Baskerville', 'serif'],
		},
		screens: {
			'sm': '640px',
			'md': '768px',
			'lg': '1024px',
			'gx': '1200px',
			'xl': '1280px',
			'2xl': '1536px',
		},
		extend: {
			colors: {
				'hgold': '#CAAB55',
				'hwine': '#881912',
				'hgray': '#797979',
				'hgreen': '#424B35',
                'hcream': '#E9CAB0',
                'hfondogreen': '#e1e2e0'
            },
            typography: {
                DEFAULT: {
                    css: {
                        h1: {
                            fontFamily: 'Georgia, sans-serif',
                            fontSize: '2.5rem',
                            fontWeight: '700',
                            color: '#424B35', // Color personalizado
                            lineHeight: '1.2',
                            '@screen sm': {
                                fontSize: '2.25rem',
                            },
                            '@screen md': {
                                fontSize: '3rem',
                            },
                            '@screen lg': {
                                fontSize: '4rem',
                            },
                        },
                        h2: {
                            fontFamily: 'Georgia, sans-serif',
                            fontSize: '2rem',
                            fontWeight: '600',
                            color: '#424B35', // Color personalizado
                            lineHeight: '1.3',
                            '@screen sm': {
                                fontSize: '1.75rem',
                            },
                            '@screen md': {
                                fontSize: '2.5rem',
                            },
                            '@screen lg': {
                                fontSize: '3.5rem',
                            },
                        },
                        h3: {
                            fontFamily: 'Georgia, serif',
                            fontSize: '1.75rem',
                            fontWeight: '500',
                            color: '#424B35', // Color personalizado
                            lineHeight: '1.4',
                            '@screen sm': {
                                fontSize: '1.5rem',
                            },
                            '@screen md': {
                                fontSize: '2rem',
                            },
                            '@screen lg': {
                                fontSize: '2.5rem',
                            },
                        },
                    }
                }
            },
			form: {
				DEFAULT: {
					input: {
						'@apply focus:ring-0': {}, // Deshabilita globalmente el ring en los inputs
					},
				},
			},
		},
		
	},
	//plugins: [require('@tailwindcss/forms')],
}

