import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import CreditReportPanel from './CreditReportPanel'

const meta = {
  title: 'Components/CreditReportPanel',
  component: CreditReportPanel,
  parameters: {
    layout: 'fullscreen',
    backgrounds: { default: 'light' },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CreditReportPanel>

export default meta
type Story = StoryObj<typeof meta>

const PanelDemo = () => {
  const [open, setOpen] = useState(true)
  return (
    <div style={{ height: '100vh', background: '#f3f4f6' }}>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="m-6 px-4 py-2 bg-[#007b85] text-white font-poppins font-semibold rounded-[8px]"
        >
          Open Credit Report Checkout
        </button>
      )}
      <CreditReportPanel open={open} onClose={() => setOpen(false)} />
    </div>
  )
}

export const Default: Story = {
  render: () => <PanelDemo />,
}
