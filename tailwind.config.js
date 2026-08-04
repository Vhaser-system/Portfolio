/** Mirrors the inline tailwind.config that previously lived in index.html.
 *  Used only to generate styles.css via the Tailwind CLI:
 *    npx tailwindcss@3 -i input.css -o styles.css --minify
 *  Re-run that command whenever you add or change classes in index.html.
 */
module.exports = {
  darkMode: "class",
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          // 300/400/800 added 2026-08-04. index.html uses dark:text-brand-400,
          // dark:hover:text-brand-400, dark:hover:text-brand-300 and hover:text-brand-800
          // roughly 50 times, but the original inline config never defined these shades —
          // so those rules generated no CSS and silently did nothing, both on the old
          // Play CDN build and in the first CLI build. Defining them makes the markup's
          // existing intent actually render.
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0284c7",
          600: "#0369a1",
          700: "#0c4a6e",
          800: "#0a3d5c",
          900: "#082f49",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
    },
  },
  plugins: [],
};
