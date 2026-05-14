import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from 'storybook/test'
import Welcome from './Welcome'

const meta = {
  component: Welcome,
  tags: ['ai-generated'],
  parameters: {
    backgrounds: { default: 'white' },
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Welcome>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  parameters: {
    test: { timeout: 30000 },
  },
}

export const SegmentsRendered: Story = {
  parameters: {
    test: { timeout: 30000 },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // All five segment cards should be rendered
    await expect(canvas.getByText('Consumer')).toBeInTheDocument()
    await expect(canvas.getByText('Commercial')).toBeInTheDocument()
    await expect(canvas.getByText('Corporate')).toBeInTheDocument()
    await expect(canvas.getByText('FI / Banks')).toBeInTheDocument()
    await expect(canvas.getByText('Global')).toBeInTheDocument()
  },
}
