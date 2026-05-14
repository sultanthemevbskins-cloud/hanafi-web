import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from 'storybook/test'
import ConsumerProducts from './ConsumerProducts'

const meta = {
  component: ConsumerProducts,
  tags: ['ai-generated'],
  parameters: {
    backgrounds: { default: 'light' },
    layout: 'fullscreen',
  },
  args: {
    onSubscribe: () => {},
    onGetCreditReport: () => {},
  },
} satisfies Meta<typeof ConsumerProducts>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const YearlyToggle: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // The toggle is a button inside a flex row that also contains "Monthly" and "Yearly" text
    const monthlyLabel = canvas.getByText('Monthly')
    await expect(monthlyLabel).toBeInTheDocument()
    const yearlyLabel = canvas.getByText('Yearly')
    await expect(yearlyLabel).toBeInTheDocument()
  },
}

export const PricingCardsRendered: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText('Credit Report')).toBeInTheDocument()
    await expect(canvas.getByText('SecureID')).toBeInTheDocument()
  },
}
