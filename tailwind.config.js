import { getIconCollections, iconsPlugin } from '@egoist/tailwindcss-icons';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    iconsPlugin({
      collections: getIconCollections(["mdi", "lucide", "gg"]),
    })
  ],
}

