/* global process */

import js from "@eslint/js";
import pluginVue from "eslint-plugin-vue";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import globals from "globals";

const isProduction = process.env.NODE_ENV === "production";

export default [
  {
    ignores: [
      "node_modules/**/*",
      "dev-dist/**/*",
      "dist/**/*",
      "**/*/*_internal.js",
    ],
  },
  js.configs.recommended,
  ...pluginVue.configs["flat/recommended"],
  eslintPluginPrettierRecommended,

  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
    files: ["**/*.vue", "**/*.js", "**/*.mjs", "**/*.cjs"],
    rules: {
      "block-scoped-var": "error",
      "consistent-return": "error",
      curly: ["error", "multi-line"],
      "default-case": "error",
      "default-param-last": "error",
      "dot-notation": "error",
      eqeqeq: "error",
      // "new-cap": "error",
      "no-alert": "error",
      "no-await-in-loop": "error",
      "no-console": isProduction ? "error" : "warn",
      "no-constructor-return": "error",
      "no-duplicate-imports": "error",
      "no-else-return": "error",
      "no-new-native-nonconstructor": "error",
      "no-promise-executor-return": "error",
      "no-return-await": "error",
      "no-self-compare": "error",
      "no-shadow": "error",
      "no-unused-private-class-members": "error",
      "no-unused-vars": [
        "error",
        { caughtErrors: "all", caughtErrorsIgnorePattern: "^_" },
      ],
      "no-use-before-define": "error",
      "no-var": "error",
      "prefer-const": "error",
      "prefer-destructuring": "error",
      "prefer-template": "error",
      "require-await": "error",
      yoda: "error",
    },
  },
];
