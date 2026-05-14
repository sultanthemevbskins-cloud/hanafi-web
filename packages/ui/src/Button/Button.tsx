import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

export type ButtonVariant = 'primary' | 'cta' | 'hero' | 'header' | 'link'
export type ButtonSize = 'sm' | 'md' | 'lg'
export type ButtonState = 'default' | 'hover' | 'active' | 'focus' | 'disabled'

// Variant styles are defined in index.css @layer components to guarantee CSS generation
// 'cta' is an alias for 'primary' (matches Figma DS naming)
const variants: Record<ButtonVariant, string> = {
  primary: 'btn-primary',
  cta:     'btn-primary',
  hero:    'btn-hero',
  header:  'btn-header',
  link:    'btn-link',
}

const sizes: Record<ButtonSize, string> = {
  sm: 'btn-sm',
  md: 'btn-md',
  lg: 'btn-lg',
}

type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  variant?: ButtonVariant
  size?: ButtonSize
  /** Force a visual state for documentation / Storybook */
  state?: ButtonState
  /** Text label — rendered as children when no children are provided */
  label?: string
  className?: string
  children?: ReactNode
} & Omit<ComponentPropsWithoutRef<T>, 'as' | 'label'>

export function Button<T extends ElementType = 'button'>({
  as,
  variant = 'primary',
  size = 'md',
  state,
  label,
  className = '',
  children,
  ...rest
}: ButtonProps<T>) {
  const Tag = (as ?? 'button') as ElementType
  const sizeClass = variant === 'link' ? '' : sizes[size]
  const cls = [
    'inline-flex items-center justify-center gap-2',
    variants[variant],
    sizeClass,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const isDisabled = state === 'disabled'

  return (
    <Tag
      className={cls}
      data-state={state && state !== 'default' ? state : undefined}
      disabled={isDisabled || (rest as { disabled?: boolean }).disabled}
      {...rest}
    >
      {children ?? label}
    </Tag>
  )
}
