import type { Config } from "tailwindcss";

import baseConfig from "tailwind-config-custom";

export default {
  content: ["./src/**/*.tsx"],
  presets: [baseConfig],
} satisfies Config;
