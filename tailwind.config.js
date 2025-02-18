/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

module.exports = {
    darkMode: 'class',
    content: ['./src/**/*.{html,js,jsx,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                brand: {
                    light: '#4A5568',
                    dark: '#1A202C',
                },
            },
            fontFamily: {
                roboto: ["Roboto", "sans-serif"]
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/typography')
    ],
}


