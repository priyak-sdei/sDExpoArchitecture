import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser } },

  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      eqeqeq: 2, //Enforces strict equality checks (=== and !==).
      "no-loop-func": 2, // Disallows function declarations within loops
      "no-console": "warn",
      "@typescript-eslint/no-require-imports": "off", // Disable the rule here
      "no-undef": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-call": "off",
      "@typescript-eslint/no-unsafe-return": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-unsafe-argument": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "react/react-in-jsx-scope": "off",
      "react/no-unescaped-entities": "off",
    },
  },
];
