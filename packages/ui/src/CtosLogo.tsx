import type { SVGProps } from 'react'

export interface CtosLogoProps extends SVGProps<SVGSVGElement> {
  /** Primary letter colour. Defaults to brand teal. Use "white" on dark backgrounds. */
  color?: string
  /** "Digital" wordmark colour. Defaults to #374151 on light bg, matches color on dark bg. */
  wordmarkColor?: string
  /** Height in px. Width scales proportionally (aspect ratio ~3.3:1). */
  height?: number
}

/**
 * CTOS Digital logo — inline SVG so it scales without network requests and
 * recolours cleanly for both light (teal) and dark/teal backgrounds (white).
 *
 * @example
 * // On light background
 * <CtosLogo height={40} />
 *
 * // On dark/teal background (footer)
 * <CtosLogo height={40} color="white" />
 */
export function CtosLogo({
  color = '#007B85',
  wordmarkColor,
  height = 40,
  ...rest
}: CtosLogoProps) {
  // Wordmark defaults to charcoal on light bg, matches letter colour on dark bg
  const wc = wordmarkColor ?? (color === '#007B85' ? '#374151' : color)

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 130 40"
      height={height}
      style={{ display: 'block' }}
      aria-label="CTOS Digital"
      role="img"
      {...rest}
    >
      {/* c */}
      <path
        d="M14 13C10.134 13 7 16.134 7 20C7 23.866 10.134 27 14 27H20V24H14C11.791 24 10 22.209 10 20C10 17.791 11.791 16 14 16H20V13H14Z"
        fill={color}
      />
      {/* t */}
      <path
        d="M28 10H25V13H22V16H25V27H28V16H31V13H28V10Z"
        fill={color}
      />
      {/* o */}
      <path
        d="M40 13C36.134 13 33 16.134 33 20C33 23.866 36.134 27 40 27C43.866 27 47 23.866 47 20C47 16.134 43.866 13 40 13ZM40 24C37.791 24 36 22.209 36 20C36 17.791 37.791 16 40 16C42.209 16 44 17.791 44 20C44 22.209 42.209 24 40 24Z"
        fill={color}
      />
      {/* s */}
      <path
        d="M57 13H50V16H57C57.552 16 58 16.448 58 17C58 17.552 57.552 18 57 18H53C50.791 18 49 19.791 49 22V23C49 25.209 50.791 27 53 27H60V24H53C52.448 24 52 23.552 52 23V22C52 21.448 52.448 21 53 21H57C59.209 21 61 19.209 61 17C61 14.791 59.209 13 57 13Z"
        fill={color}
      />
      {/* Digital wordmark */}
      <text
        x="68"
        y="24"
        fontFamily="'Poppins', 'Inter', sans-serif"
        fontSize="11"
        fontWeight="500"
        fill={wc}
        letterSpacing="0.5"
      >
        Digital
      </text>
    </svg>
  )
}
