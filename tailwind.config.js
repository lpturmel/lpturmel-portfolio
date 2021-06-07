module.exports = {
    purge: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                "bg-gray": "#C3C5CB",
                "icon-color": "#858995",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
