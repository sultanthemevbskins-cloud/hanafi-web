import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from 'storybook/test'
import Footer from './Footer'

const meta = {
  component: Footer,
  tags: ['ai-generated'],
  parameters: {
    backgrounds: { default: 'teal-dark' },
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Footer>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithLinksCheck: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // Footer should contain the copyright text
    const copyright = canvas.getByText(/Copyright CTOS Data Systems/i)
    await expect(copyright).toBeInTheDocument()
    // Footer should render privacy policy link
    const privacyLink = canvas.getByText('Privacy Policy')
    await expect(privacyLink).toBeInTheDocument()
  },
}
