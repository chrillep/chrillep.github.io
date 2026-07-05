import { useEffect } from 'react'
import { Preview } from '@storybook/react-vite'
import '../styles/globals.css'
import 'ui-tailwind/styles.css'

const DEFAULT_THEME = 'light'

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },

        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },

        docs: {
            codePanel: true
        }
    },
    globalTypes: {
        theme: {
            name: 'Theme',
            description: 'Global theme for components',
            defaultValue: DEFAULT_THEME,
            toolbar: {
                icon: 'paintbrush',
                items: [
                    { value: 'light', title: 'Light', left: '🌞' },
                    { value: 'dark', title: 'Dark', left: '🌛' },
                ],
                dynamicTitle: true,
            },
        },
    },
    decorators: [
        (Story, context) => {
            const { theme } = context.globals
            useEffect(() => {
                const htmlTag = document.documentElement
                htmlTag.setAttribute('data-mode', theme || DEFAULT_THEME)
            }, [theme])

            return <Story />
        },
    ],
}

export default preview
