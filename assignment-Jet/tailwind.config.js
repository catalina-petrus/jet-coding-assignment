import animate from "tailwindcss-animate"

/** @type {import("tailwindcss").Config} */
export default {
  darkMode: ["class"],
  safelist: ["dark"],
  prefix: "",

  content: [
    "./pages/**/*.{ts,tsx,vue}",
    "./components/**/*.{ts,tsx,vue}",
    "./app/**/*.{ts,tsx,vue}",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
    "./node_modules/@shadcn/ui/**/*.{js,ts,jsx,tsx,vue}",
    "./src/assets/index.css",
  ]
}
