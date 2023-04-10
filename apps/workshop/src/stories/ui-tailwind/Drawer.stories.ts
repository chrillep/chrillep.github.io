import type { Meta, StoryObj } from '@storybook/react'

import { Drawer } from 'ui-tailwind'

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
    title: 'ui/tailwind/Drawer',
    component: Drawer,
    tags: ['autodocs'],
} satisfies Meta<typeof Drawer>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
    args: {
        open: true,
    },
}
