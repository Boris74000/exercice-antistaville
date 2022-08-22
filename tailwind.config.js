/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './public/**/*.html',
        './src/js/main.js'
    ],
    theme: {
        extend: {
            screens: {
                'max-sm': {'max': '639px'},
                'max-lg': {'max': '1023px'},
                '2xl': '1536px',
            },
            translate: {
                '70px': '70px',
                '230px': '230px',
            },
            colors: ({ colors }) => ({
                'antistaville-green-mint-500': '#3F9544',
                'antistaville-green-mint-500-transparent': 'rgba(63,149,68,0.05)',
                'antistaville-green-anise-500': '#C8E671',
                'antistaville-gray-50': '#F3F1EE',
                'antistaville-gray-200': '#E8E6E3',
                'antistaville-gray-300': '#D9D7D4',
                'antistaville-gray-700': '#7D7D7D',
                'antistaville-gray-900': '#1C1C1C',
            }),
            fontSize: {
                '17px': '1.063rem',
                '21px': '1.313rem',
                '23px': '1.438rem',
                'h1': ['3rem', {
                    lineHeight: '54px',
                    letterSpacing: '-1.5px'
                }],
            },
            maxWidth: ({theme, breakpoints}) => ({
                '800': '800px',
            }),
            content: {
                'arrow-accordion': 'url("./img/arrow-bottom-16-px.png")',
                'arrow-breadcrumb': 'url("./img/arrow-right-12px.png")'
            },
            lineHeight: {
                'leading-26': '1.625rem',
                'leading-54': '3.375rem',
            },
            fontFamily: {
                'lexend': ['Lexend', 'sans-serif'],
                'inter': ['Inter', 'sans-serif']
            },
            letterSpacing: {
                '-tightest-0.1': '-0.1px',
                '-tightest-0.3': '-0.3px',
                // 'tightest-1.5': '-.094em',
                'tightest-0.8': '0.8px',
            },
        },
    },
    plugins: [],
}
