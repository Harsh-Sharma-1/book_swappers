import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            textColor: {
                primary: "#FF6C36",
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
                "gradient-bookCard":
                    "linear-gradient(to right, rgba(255,124,74,1) 0%, rgba(255,124,74,1) 70%, white 70%, white 100%)",
                "gradient-bookPage":
                    "linear-gradient(to right, white 0%, white 30%, rgba(255, 124, 75, 1) 30%, rgba(255, 124, 75, 1) 100%)",
                "gradient-bookPage-mobile":
                    "linear-gradient(to bottom, white 0%, white 30%, rgba(255, 124, 75, 1) 30%, rgba(255, 124, 75, 1) 100%)",
            },
            boxShadow: {
                card: "4px 4px 24px 2px rgba(0, 0, 0, 0.15)",
                cardLight: "4px 4px 24px 2px rgba(0, 0, 0, 0.05)",
            },
            backgroundColor: {
                "primary-light": "#FF6C36",
                "secondary-light": "#F8F8F8",
            },
        },
    },
    plugins: [],
};
export default config;
