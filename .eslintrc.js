module.exports = {
    "extends": [
        "eslint:recommended",
        "next",
        "next/core-web-vitals",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "prettier"
    ],
    "plugins": ["@typescript-eslint"],
    parser: '@typescript-eslint/parser',
    "parserOptions": {
        "project": true,
        "tsconfigRootDir": __dirname,
    },
    root: true,
}
