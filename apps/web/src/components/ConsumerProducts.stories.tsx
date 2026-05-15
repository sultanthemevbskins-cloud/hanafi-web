import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from 'storybook/test'
import ConsumerProducts from './ConsumerProducts'
import SecureIDPanel from './SecureIDPanel'
import CreditReportPanel from './CreditReportPanel'

const meta = {
  component: ConsumerProducts,
  tags: ['autodocs'],
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

// Full interactive story — clicking "Get it now" opens Credit Report checkout,
// clicking "Subscribe now" opens SecureID checkout
const ConsumerWithCheckout = () => {
  const [secureidOpen, setSecureidOpen] = useState(false)
  const [secureidPlan, setSecureidPlan] = useState<'monthly' | 'yearly'>('monthly')
  const [creditOpen, setCreditOpen] = useState(false)

  return (
    <>
      <ConsumerProducts
        onSubscribe={(plan) => { setSecureidPlan(plan); setSecureidOpen(true) }}
        onGetCreditReport={() => setCreditOpen(true)}
      />
      <SecureIDPanel
        open={secureidOpen}
        onClose={() => setSecureidOpen(false)}
        initialPlan={secureidPlan}
      />
      <CreditReportPanel
        open={creditOpen}
        onClose={() => setCreditOpen(false)}
      />
    </>
  )
}

export const WithCheckout: Story = {
  render: () => <ConsumerWithCheckout />,
}
