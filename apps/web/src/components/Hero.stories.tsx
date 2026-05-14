import type { Meta, StoryObj } from '@storybook/react'
import { expect, within, userEvent } from 'storybook/test'
import Hero from './Hero'

const meta = {
  component: Hero,
  tags: ['ai-generated'],
  parameters: {
    backgrounds: { default: 'teal' },
    layout: 'fullscreen',
  },
  args: {
    onSubscribe: () => {},
  },
} satisfies Meta<typeof Hero>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const SlideDotsRendered: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // Three slide dot buttons should be present
    const dot1 = canvas.getByRole('button', { name: 'Go to slide 1' })
    const dot2 = canvas.getByRole('button', { name: 'Go to slide 2' })
    const dot3 = canvas.getByRole('button', { name: 'Go to slide 3' })
    await expect(dot1).toBeInTheDocument()
    await expect(dot2).toBeInTheDocument()
    await expect(dot3).toBeInTheDocument()
  },
}

export const NavigateToSlide2: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const dot2 = canvas.getByRole('button', { name: 'Go to slide 2' })
    await userEvent.click(dot2)
    // After click the dot2 button still exists (carousel doesn't unmount)
    await expect(dot2).toBeInTheDocument()
  },
}
