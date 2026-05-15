import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from 'storybook/react'
import CommercialProducts from './CommercialProducts'

const meta = {
  title: 'Components/CommercialProducts',
  component: CommercialProducts,
  tags: ['autodocs'],
  parameters: {
    backgrounds: { default: 'white' },
    layout: 'fullscreen',
  },
} satisfies Meta<typeof CommercialProducts>

export default meta
type Story = StoryObj<typeof meta>

/** Full Commercial Products section with all 3 product cards */
export const AllCards: Story = {}

/** Verifies the section heading is rendered */
export const ProductCardsRendered: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText(/For Business/i)).toBeInTheDocument()
  },
}

// ── Playground: individual product card with live controls ────────────────────

type ProductCardArgs = {
  title: string
  tagline: string
  price: string
  priceNote: string
  ctaLabel: string
  accentColor: string
  features: string
}

const accentColors: Record<string, string> = {
  'Teal':   '#0bb1be',
  'Orange': '#f15d22',
  'Teal Dark': '#007b85',
  'Gold':   '#f2b530',
  'Indigo': '#6366f1',
  'Green':  '#059669',
}

const CheckIcon = ({ color }: { color: string }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mt-[2px]">
    <circle cx="8" cy="8" r="7" fill={`${color}20`} />
    <path d="M5 8l2 2 4-4" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

/**
 * Playground — edit any individual product card using the Controls panel below.
 * Adjust the title, tagline, pricing, features list (comma-separated), and accent colour.
 */
export const ProductCardPlayground: StoryObj<ProductCardArgs> = {
  render: (args) => {
    const color = accentColors[args.accentColor] ?? args.accentColor
    const featureList = args.features.split(',').map(f => f.trim()).filter(Boolean)

    return (
      <div className="p-10 bg-[#fafbfc] flex justify-center items-start">
        <div style={{ width: 360 }}>
          <div
            className="group relative overflow-hidden bg-white rounded-[10px] flex flex-col items-center pt-8 pb-7 px-7 hover:-translate-y-2 transition-all duration-200"
            style={{ boxShadow: '0px 1px 0px rgba(17,24,39,0.04), 0px 8px 12px rgba(17,24,39,0.06)' }}
          >
            {/* Top accent bar */}
            <div className="absolute top-0 left-0 right-0 h-1" style={{ backgroundColor: color }} />

            {/* Title */}
            <h3 className="font-extrabold text-[22px] leading-[25.3px] text-[#102a2e] text-center font-jakarta mb-2">
              {args.title}
            </h3>
            <p className="text-[#374151] text-[13px] font-manrope text-center mb-5 leading-[20px]">
              {args.tagline}
            </p>

            {/* Features */}
            <div className="w-full px-2 mb-6">
              <ul className="flex flex-col">
                {featureList.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 py-[5px]">
                    <CheckIcon color={color} />
                    <span className="text-[#374151] text-[14px] leading-[21px] font-manrope">{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Price + CTA */}
            <div className="mt-auto w-full flex flex-col items-center gap-2 pt-4 border-t border-[#f0f0f0]">
              <div className="flex items-baseline gap-1">
                <span className="font-extrabold text-[22px] text-[#102a2e] font-jakarta">{args.price}</span>
              </div>
              <p className="text-[12px] text-[#6b7280] font-manrope text-center">{args.priceNote}</p>
              <button
                className="w-full py-3 rounded-[8px] text-white font-semibold text-[14px] font-manrope transition-opacity hover:opacity-90"
                style={{ backgroundColor: color }}
              >
                {args.ctaLabel}
              </button>
              <span className="btn-link text-[13px] pt-1 cursor-pointer">Learn More</span>
            </div>
          </div>
        </div>
      </div>
    )
  },
  args: {
    title: 'Credit Manager',
    tagline: "Malaysia's No.1 credit management solution.",
    price: 'Subscription',
    priceNote: 'Billed monthly or annually',
    ctaLabel: 'Get Started',
    accentColor: 'Teal',
    features: 'Comprehensive client credit reports, Automated monitoring & profile alerts, Advanced business credit scoring, CTOS eTR electronic trade reference',
  },
  argTypes: {
    title: {
      control: 'select',
      options: ['Credit Manager', 'Single Report', 'CTOS BizSecure'],
      description: 'Product card title',
    },
    tagline: {
      control: 'text',
      description: 'One-line product tagline',
    },
    price: {
      control: 'text',
      description: 'Price display text',
    },
    priceNote: {
      control: 'text',
      description: 'Small note below the price',
    },
    ctaLabel: {
      control: 'text',
      description: 'Primary button label',
    },
    accentColor: {
      control: 'select',
      options: Object.keys(accentColors),
      description: 'Top bar and accent colour',
    },
    features: {
      control: 'text',
      description: 'Comma-separated feature list',
    },
  },
}
