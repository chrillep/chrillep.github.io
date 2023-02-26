module.exports = {
  extends: [
    "eslint:recommended",
    "next",
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "prettier"
  ],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
  },
};
