/** @type {import('tailwindcss').Config} */

import aspectRatioPlugin from '@tailwindcss/aspect-ratio';
import formsPlugin from '@tailwindcss/forms';
import typographyPlugin from '@tailwindcss/typography';
import daisyui from 'daisyui';

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx,mdx}', './index.html'],
  plugins: [aspectRatioPlugin, formsPlugin, typographyPlugin, daisyui],
}

