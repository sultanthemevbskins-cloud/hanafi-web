import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from 'storybook/test'
import { Button } from './Button'

const meta = {
  component: Button,
  tags: ['ai-generated'],
  parameters: {
    backgrounds: { default: 'white' },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Get Free Report',
  },
}

export const Hero: Story = {
  args: {
    variant: 'hero',
    size: 'md',
    children: 'Subscribe Now',
  },
  parameters: { backgrounds: { default: 'teal' } },
}

export const Header: Story = {
  args: {
    variant: 'header',
    size: 'md',
    children: 'Sign in',
  },
  parameters: { backgrounds: { default: 'dark' } },
}

export const Link: Story = {
  args: {
    variant: 'link',
    children: 'Learn More →',
  },
}

export const Small: Story = {
  args: {
    variant: 'primary',
    size: 'sm',
    children: 'Small button',
  },
}

export const Large: Story = {
  args: {
    variant: 'primary',
    size: 'lg',
    children: 'Large button',
  },
}

export const Disabled: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Disabled',
    disabled: true,
  },
}

export const AsAnchor: Story = {
  args: {
    as: 'a',
    href: '#',
    variant: 'primary',
    size: 'md',
    children: 'Anchor button',
  },
}

/** CssCheck: verifies .btn-primary background resolves to the brand teal */
export const CssCheck: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    children: 'CSS check',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const btn = canvas.getByRole('button', { name: 'CSS check' })
    const bg = window.getComputedStyle(btn).backgroundColor
    // #007b85 → rgb(0, 123, 133)
    await expect(bg).toBe('rgb(0, 123, 133)')
  },
}
