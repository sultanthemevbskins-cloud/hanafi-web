import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from 'storybook/test'
import CommercialProducts from './CommercialProducts'

const meta = {
  component: CommercialProducts,
  tags: ['ai-generated'],
  parameters: {
    backgrounds: { default: 'white' },
    layout: 'fullscreen',
  },
} satisfies Meta<typeof CommercialProducts>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const ProductCardsRendered: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // Commercial section should have credit-related product headings
    const heading = canvas.getByText(/For Business/i)
    await expect(heading).toBeInTheDocument()
  },
}
