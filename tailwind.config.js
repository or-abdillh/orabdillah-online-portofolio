/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
    content: [],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Open Sans", defaultTheme.fontFamily.sans],
                display: ["Poppins"],
            },
        },
    },
    plugins: [require("tailwindcss-primeui")],
};
