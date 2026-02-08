/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'navy': '#1a3a52',
                'mint': '#4ECDC4',
                'lime': '#9DF29C',
            },
            fontFamily: {
                'opensans': ['Open Sans', 'sans-serif'],
                'inter': ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
