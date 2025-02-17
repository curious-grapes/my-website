/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

module.exports = {
 
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
                sanzs: ['Nunito', ...defaultTheme.fontFamily.sans],
                brand: ["Marske", ...defaultTheme.fontFamily.sans],
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


