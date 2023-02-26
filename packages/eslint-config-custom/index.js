module.exports = {
    extends: [
        'eslint:recommended',
        'next',
        'next/core-web-vitals',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'turbo',
    ],
    rules: {
        '@next/next/no-html-link-for-pages': 'off',
    },
}
