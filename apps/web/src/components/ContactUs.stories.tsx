import type { Meta, StoryObj } from '@storybook/react'
import { expect, within, userEvent } from 'storybook/test'
import ContactUs from './ContactUs'

const meta = {
  component: ContactUs,
  tags: ['ai-generated'],
  parameters: {
    backgrounds: { default: 'light' },
    layout: 'fullscreen',
  },
  args: {
    onClose: () => {},
  },
} satisfies Meta<typeof ContactUs>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const FAQPanelOpen: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const faqBtn = canvas.getByText(/Browse our FAQs/i)
    await userEvent.click(faqBtn)
    // FAQ panel should slide in and show the heading
    const panelHeading = canvas.getByText('Credit report FAQs')
    await expect(panelHeading).toBeInTheDocument()
  },
}

export const CloseButton: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const closeBtn = canvas.getByRole('button', { name: /Close contact us/i })
    await expect(closeBtn).toBeInTheDocument()
  },
}
