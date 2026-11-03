import { ArrowRight, ArrowUpRight } from 'lucide-react'
import type { ReactNode } from 'react'
import { cn } from '../../lib/utils'

type Variant = 'primary' | 'outline' | 'light' | 'ghost'
type Size = 'md' | 'lg'
type IconKind = 'arrow' | 'up-right' | 'none'

type ButtonProps = {
  href: string
  children: ReactNode
  variant?: Variant
  size?: Size
  icon?: IconKind
  external?: boolean
  className?: string
  ariaLabel?: string
}

const variants: Record<Variant, string> = {
  primary:
    'bg-forest text-cream shadow-[0_18px_40px_-26px_rgba(36,72,63,0.95)] hover:bg-forest-deep hover:shadow-[0_24px_50px_-24px_rgba(36,72,63,0.8)]',
  outline: 'border border-forest/25 text-forest hover:border-forest/60 hover:bg-forest/[0.04]',
  light: 'bg-cream text-forest hover:bg-white',
  ghost: 'px-0 text-forest hover:text-gold-ink',
}

const sizes: Record<Size, string> = {
  md: 'h-12 px-6 text-[10px] tracking-[0.2em]',
  lg: 'h-[3.5rem] px-8 text-[10.5px] tracking-[0.2em]',
}

const icons: Record<Exclude<IconKind, 'none'>, typeof ArrowRight> = {
  arrow: ArrowRight,
  'up-right': ArrowUpRight,
}

export function Button({
  href,
  children,
  variant = 'primary',
  size = 'md',
  icon = 'arrow',
  external = false,
  className,
  ariaLabel,
}: ButtonProps) {
  const Icon = icon === 'none' ? null : icons[icon]

  return (
    <a
      href={href}
      aria-label={ariaLabel}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={cn(
        'group inline-flex items-center justify-center gap-2.5 rounded-full font-semibold uppercase transition-all duration-500 ease-soft',
        variants[variant],
        variant !== 'ghost' && sizes[size],
        className,
      )}
    >
      <span className="relative top-px">{children}</span>
      {Icon ? (
        <Icon
          aria-hidden="true"
          strokeWidth={1.6}
          className="size-[0.95em] transition-transform duration-500 ease-soft group-hover:translate-x-1"
        />
      ) : null}
    </a>
  )
}
