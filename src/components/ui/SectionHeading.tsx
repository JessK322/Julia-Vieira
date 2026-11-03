import type { ReactNode } from 'react'
import { cn } from '../../lib/utils'

type SectionHeadingProps = {
  eyebrow: string
  title: ReactNode
  description?: ReactNode
  tone?: 'light' | 'dark'
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = 'light',
  align = 'left',
  className,
}: SectionHeadingProps) {
  const isDark = tone === 'dark'

  return (
    <div className={cn(align === 'center' && 'mx-auto max-w-2xl text-center', className)}>
      <div className={cn('flex items-center gap-3', align === 'center' && 'justify-center')}>
        <span aria-hidden="true" className={cn('h-px w-8', isDark ? 'bg-gold-soft/70' : 'bg-gold/70')} />
        <span className={cn('eyebrow', isDark ? 'text-gold-soft' : 'text-gold-ink')}>{eyebrow}</span>
      </div>

      <h2
        className={cn(
          'mt-5 font-display text-[clamp(2rem,4vw,3.25rem)] leading-[1.04] font-light tracking-[-0.01em]',
          isDark ? 'text-cream' : 'text-ink',
        )}
      >
        {title}
      </h2>

      {description ? (
        <p
          className={cn(
            'mt-5 text-[15px] leading-[1.85]',
            isDark ? 'text-cream/70' : 'text-muted',
            align === 'center' ? 'mx-auto max-w-xl' : 'max-w-xl',
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}
