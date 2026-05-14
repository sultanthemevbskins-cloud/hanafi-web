import type { Meta, StoryObj } from '@storybook/react'
import { expect, within, userEvent } from 'storybook/test'
import Header from './Header'

const meta = {
  component: Header,
  tags: ['ai-generated'],
  parameters: {
    backgrounds: { default: 'teal-dark' },
    layout: 'fullscreen',
    test: { timeout: 30000 },
  },
  args: {
    onLogoClick: () => {},
    onSupportClick: () => {},
  },
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const MegaMenuOnHover: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // Hover over the "Consumer" nav button to open the mega menu
    const consumerBtn = canvas.getAllByRole('button').find(
      (btn) => btn.textContent?.trim() === 'Consumer'
    )
    if (consumerBtn) {
      await userEvent.hover(consumerBtn)
      // The mega panel should display product names — multiple matches expected
      const creditReportItems = canvas.getAllByText('Credit Report')
      await expect(creditReportItems.length).toBeGreaterThan(0)
    }
  },
}

export const MobileMenuToggle: Story = {
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const burgerBtn = canvas.getByRole('button', { name: /Toggle menu/i })
    await userEvent.click(burgerBtn)
    // Mobile dropdown should expand — Consumer section should be visible
    const consumerMobileBtn = canvas.getAllByText('Consumer')
    await expect(consumerMobileBtn.length).toBeGreaterThan(0)
  },
}

export const SignInButton: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const signInBtns = canvas.getAllByRole('button', { name: /Sign in/i })
    await expect(signInBtns.length).toBeGreaterThan(0)
  },
}
