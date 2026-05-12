import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

export type ButtonVariant = 'primary' | 'hero' | 'header' | 'link'
export type ButtonSize = 'sm' | 'md' | 'lg'

// Variant styles are defined in index.css @layer components to guarantee CSS generation
const variants: Record<ButtonVariant, string> = {
  primary: 'btn-primary',
  hero: 'btn-hero',
  header: 'btn-header',
  link: 'btn-link',
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
  className?: string
  children?: ReactNode
} & Omit<ComponentPropsWithoutRef<T>, 'as'>

export function Button<T extends ElementType = 'button'>({
  as,
  variant = 'primary',
  size = 'md',
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

  return (
    <Tag className={cls} {...rest}>
      {children}
    </Tag>
  )
}
