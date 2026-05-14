import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from 'storybook/test'
import AppPromo from './AppPromo'

const meta = {
  component: AppPromo,
  tags: ['ai-generated'],
  parameters: {
    backgrounds: { default: 'light' },
    layout: 'fullscreen',
  },
} satisfies Meta<typeof AppPromo>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const StoreCardsRendered: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText('Android')).toBeInTheDocument()
    await expect(canvas.getByText('iOS')).toBeInTheDocument()
    await expect(canvas.getByText('Huawei')).toBeInTheDocument()
    await expect(canvas.getByText(/in your pocket/i)).toBeInTheDocument()
  },
}
