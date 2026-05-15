import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from 'storybook/test'
import Welcome from './Welcome'

const meta = {
  title: 'CTOS Design System/Welcome Cards',
  component: Welcome,
  tags: ['autodocs'],
  parameters: {
    backgrounds: { default: 'white' },
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Welcome>

export default meta
type Story = StoryObj<typeof meta>

/** Full Welcome section with all 5 segment cards */
export const AllCards: Story = {}

/** Verifies all 5 segment cards are rendered */
export const SegmentsRendered: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText('Consumer')).toBeInTheDocument()
    await expect(canvas.getByText('Commercial')).toBeInTheDocument()
    await expect(canvas.getByText('Corporate')).toBeInTheDocument()
    await expect(canvas.getByText('FI / Banks')).toBeInTheDocument()
    await expect(canvas.getByText('Global')).toBeInTheDocument()
  },
}

// ── Playground: individual segment card with live controls ────────────────────

type CardArgs = {
  name: string
  desc: string
  cta: string
  gradient: string
  imageUrl: string
}

const gradients: Record<string, string> = {
  'Purple/Green':  'linear-gradient(144deg, #e5deff 0%, #d2efe0 100%)',
  'Orange/Peach':  'linear-gradient(144deg, #ffe9d0 0%, #fcd0ab 100%)',
  'Purple/Violet': 'linear-gradient(144deg, #e5deff 0%, #d6ccfa 100%)',
  'Grey/Blue':     'linear-gradient(144deg, #eaecef 0%, #c8d5f8 100%)',
  'Green/Mint':    'linear-gradient(144deg, #d7efe2 0%, #bce3ce 100%)',
}

/**
 * Playground — edit any individual segment card using the Controls panel below.
 * Try changing the name, description, CTA text, background gradient, or image.
 */
export const CardPlayground: StoryObj<CardArgs> = {
  render: (args) => (
    <div className="p-10 bg-white flex justify-center items-start">
      <div style={{ width: 220 }}>
        <div className="group bg-white border border-[#eaecef] rounded-[14px] overflow-hidden flex flex-col hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer">
          {/* Image area */}
          <div className="relative h-[160px] overflow-hidden rounded-t-[14px]">
            <img
              src={args.imageUrl}
              alt={args.name}
              className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
            />
            <div
              className="absolute inset-0 opacity-50 group-hover:opacity-0 transition-opacity duration-300 rounded-t-[14px]"
              style={{ backgroundImage: args.gradient }}
            />
          </div>
          {/* Content */}
          <div className="flex flex-col flex-1 px-5 py-5">
            <h3 className="font-poppins font-bold text-[18px] text-[#102a2e] leading-[28px] tracking-[-0.3px] mb-3">
              {args.name}
            </h3>
            <p className="font-lato font-normal text-[13px] text-[#374151] leading-[20px] flex-1 mb-4">
              {args.desc}
            </p>
            <span className="btn-link text-[13px] inline-flex items-center gap-1">
              {args.cta}
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  ),
  args: {
    name: 'Consumer',
    desc: 'Check your CTOS Score, monitor identity theft, compare matched loans, and dispute errors on your credit record.',
    cta: 'Get free report',
    gradient: gradients['Purple/Green'],
    imageUrl: 'https://picsum.photos/seed/consumer-credit/400/220',
  },
  argTypes: {
    name: {
      control: 'select',
      options: ['Consumer', 'Commercial', 'Corporate', 'FI / Banks', 'Global'],
      description: 'Segment card title',
    },
    desc: {
      control: 'text',
      description: 'Card description text',
    },
    cta: {
      control: 'text',
      description: 'Call-to-action link label',
    },
    gradient: {
      control: 'select',
      options: Object.keys(gradients),
      mapping: gradients,
      description: 'Colour overlay gradient on the card image',
    },
    imageUrl: {
      control: 'text',
      description: 'Card background image URL',
    },
  },
}
