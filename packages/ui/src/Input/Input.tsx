import type { InputHTMLAttributes } from 'react'

export type InputState   = 'default' | 'focus' | 'filled' | 'error' | 'disabled'
export type InputVariant = 'default' | 'search'

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?:        string
  placeholder?:  string
  hint?:         string
  errorMessage?: string
  state?:        InputState
  variant?:      InputVariant
}

const borderStyles: Record<InputState, string> = {
  default:  'border-[#D1D5DB] focus-within:border-[#007B85] focus-within:ring-2 focus-within:ring-[#007B85]/20',
  focus:    'border-[#007B85] ring-2 ring-[#007B85]/20',
  filled:   'border-[#D1D5DB]',
  error:    'border-[#EF4444] ring-2 ring-[#EF4444]/15',
  disabled: 'border-[#E5E7EB] bg-[#F9FAFB] opacity-60',
}

export function Input({
  label,
  placeholder,
  hint,
  errorMessage,
  state = 'default',
  variant = 'default',
  disabled,
  ...rest
}: InputProps) {
  const isDisabled = disabled || state === 'disabled'
  const isError    = state === 'error'

  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && (
        <label className="font-poppins text-[13px] font-medium text-[#374151]">
          {label}
        </label>
      )}
      <div
        className={[
          'flex items-center rounded-[10px] border bg-white transition-all duration-150',
          borderStyles[state],
          variant === 'search' ? 'pl-3' : '',
        ].join(' ')}
      >
        {variant === 'search' && (
          <svg className="w-4 h-4 text-[#9CA3AF] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" strokeLinecap="round" />
          </svg>
        )}
        <input
          className="flex-1 px-3 py-[11px] text-[14px] font-poppins text-[#111827] placeholder:text-[#9CA3AF] bg-transparent outline-none"
          placeholder={placeholder}
          disabled={isDisabled}
          {...rest}
        />
      </div>
      {isError && errorMessage && (
        <span className="font-poppins text-[12px] text-[#EF4444]">{errorMessage}</span>
      )}
      {!isError && hint && (
        <span className="font-poppins text-[12px] text-[#6B7280]">{hint}</span>
      )}
    </div>
  )
}
