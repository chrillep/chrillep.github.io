const path = require('node:path')

const configBase = path.join(__dirname, 'packages/eslint-config-custom')
const requireFromConfig = (id) =>
    require(require.resolve(id, { paths: [configBase] }))

const nextCoreWebVitals = requireFromConfig('eslint-config-next/core-web-vitals')
const tsRecommended =
    requireFromConfig('@typescript-eslint/eslint-plugin').configs['flat/recommended']
const reactRecommended = requireFromConfig('eslint-plugin-react').configs.flat.recommended
const prettierConfig = requireFromConfig('eslint-config-prettier')

module.exports = [
    {
        ignores: [
            '**/node_modules/**',
            '**/.next/**',
            '**/_next/**',
            '**/dist/**',
            '**/storybook-static/**',
            '**/coverage/**',
            '.github/**',
        ],
    },
    ...tsRecommended,
    {
        files: ['**/*.{js,jsx,ts,tsx}'],
        ...reactRecommended,
        settings: {
            react: {
                version: 'detect',
            },
            next: {
                rootDir: ['apps/*/'],
            },
        },
    },
    ...nextCoreWebVitals,
    {
        files: ['**/*.{js,jsx,ts,tsx}'],
        rules: prettierConfig.rules,
    },
]
