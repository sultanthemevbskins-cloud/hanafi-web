import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from 'storybook/test'
import BackToTop from './BackToTop'

const meta = {
  component: BackToTop,
  tags: ['ai-generated'],
  parameters: {
    backgrounds: { default: 'light' },
    layout: 'centered',
  },
} satisfies Meta<typeof BackToTop>

export default meta
type Story = StoryObj<typeof meta>

/** Default render — button is initially invisible (opacity-0) until scroll threshold */
export const Default: Story = {}

/** Force-visible: inject inline style so the button is always shown in Storybook */
export const Visible: Story = {
  decorators: [
    (Story) => (
      <div style={{ position: 'relative', height: '160px', width: '160px' }}>
        <style>{`
          [aria-label="Back to top"] {
            opacity: 1 !important;
            transform: translateY(0) !important;
            pointer-events: auto !important;
            position: relative !important;
            bottom: auto !important;
            right: auto !important;
          }
        `}</style>
        <Story />
      </div>
    ),
  ],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const btn = canvas.getByRole('button', { name: 'Back to top' })
    await expect(btn).toBeInTheDocument()
  },
}
