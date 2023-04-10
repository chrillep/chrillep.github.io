// tailwind config is required for editor support

const sharedConfig = require('tailwind-config/tailwind.config.js')

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    presets: [sharedConfig],
}
