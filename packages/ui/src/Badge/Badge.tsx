import type { ReactNode } from 'react'

export type BadgeVariant = 'primary' | 'accent' | 'neutral' | 'success' | 'warning' | 'error' | 'dark'
export type BadgeSize = 'sm' | 'md'

const variantStyles: Record<BadgeVariant, string> = {
  primary: 'bg-[#E6F4F5] text-[#007B85] border border-[#007B85]/20',
  accent:  'bg-[#E0F8FA] text-[#0BB1BE] border border-[#0BB1BE]/20',
  neutral: 'bg-[#F3F4F6] text-[#6B7280] border border-[#E5E7EB]',
  success: 'bg-[#DCFCE7] text-[#16A34A] border border-[#16A34A]/20',
  warning: 'bg-[#FEF9C3] text-[#CA8A04] border border-[#CA8A04]/20',
  error:   'bg-[#FEE2E2] text-[#DC2626] border border-[#DC2626]/20',
  dark:    'bg-[#102A2E] text-white border border-transparent',
}

const sizeStyles: Record<BadgeSize, string> = {
  sm: 'px-2 py-0.5 text-[10px] gap-1',
  md: 'px-3 py-1   text-[11px] gap-1.5',
}

export interface BadgeProps {
  label:    string
  variant?: BadgeVariant
  size?:    BadgeSize
  dot?:     boolean
  children?: ReactNode
}

export function Badge({ label, variant = 'primary', size = 'md', dot = false, children }: BadgeProps) {
  return (
    <span
      className={[
        'inline-flex items-center font-poppins font-semibold uppercase tracking-[0.8px] rounded-full',
        variantStyles[variant],
        sizeStyles[size],
      ].join(' ')}
    >
      {dot && (
        <span className="w-1.5 h-1.5 rounded-full bg-current opacity-80 flex-shrink-0" />
      )}
      {children ?? label}
    </span>
  )
}
