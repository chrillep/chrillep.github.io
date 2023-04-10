import type { Meta, StoryObj } from '@storybook/react'

import { Card } from 'ui-tailwind'

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
    title: 'ui/tailwind/Card',
    component: Card,
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <div className="mt-12 grid place-content-evenly">
                <Story />
            </div>
        ),
    ],
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
    args: {
        title: 'Card Title',
        cta: 'Learn More',
        href: 'https://www.google.com',
    },
}
