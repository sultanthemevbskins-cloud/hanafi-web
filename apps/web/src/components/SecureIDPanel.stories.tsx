import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import SecureIDPanel from './SecureIDPanel'

const meta = {
  title: 'CTOS Design System/SecureID Checkout',
  component: SecureIDPanel,
  parameters: {
    layout: 'fullscreen',
    backgrounds: { default: 'light' },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SecureIDPanel>

export default meta
type Story = StoryObj<typeof meta>

// Wrapper that holds open state
const PanelDemo = ({ initialPlan }: { initialPlan?: 'monthly' | 'yearly' }) => {
  const [open, setOpen] = useState(true)
  return (
    <div style={{ height: '100vh', background: '#f3f4f6' }}>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="m-6 px-4 py-2 bg-[#007b85] text-white font-poppins font-semibold rounded-[8px]"
        >
          Open SecureID Checkout
        </button>
      )}
      <SecureIDPanel open={open} onClose={() => setOpen(false)} initialPlan={initialPlan} />
    </div>
  )
}

export const MonthlyPlan: Story = {
  render: () => <PanelDemo initialPlan="monthly" />,
}

export const YearlyPlan: Story = {
  render: () => <PanelDemo initialPlan="yearly" />,
}
