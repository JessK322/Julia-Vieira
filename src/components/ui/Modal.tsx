import { X } from 'lucide-react'
import { useEffect, useId, useRef, type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { useLockBodyScroll } from '../../hooks/useUi'
import { cn } from '../../lib/utils'

type ModalProps = {
  open: boolean
  onClose: () => void
  eyebrow?: string
  title: string
  children: ReactNode
  size?: 'md' | 'lg'
}

export function Modal({ open, onClose, eyebrow, title, children, size = 'md' }: ModalProps) {
  const titleId = useId()
  const panelRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const previouslyFocused = useRef<HTMLElement | null>(null)

  useLockBodyScroll(open)

  useEffect(() => {
    if (!open) return

    previouslyFocused.current = document.activeElement as HTMLElement | null
    const timer = window.setTimeout(() => closeRef.current?.focus(), 60)

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        onClose()
        return
      }

      if (event.key !== 'Tab' || !panelRef.current) return

      const focusables = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])',
      )
      if (focusables.length === 0) return

      const first = focusables[0]
      const last = focusables[focusables.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => {
      window.clearTimeout(timer)
      document.removeEventListener('keydown', onKeyDown)
      previouslyFocused.current?.focus()
    }
  }, [open, onClose])

  if (!open) return null

  return createPortal(
    <div
      className="fixed inset-0 z-[80] flex items-end justify-center bg-forest-deep/55 p-0 backdrop-blur-[3px] sm:items-center sm:p-6"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className={cn(
          'relative max-h-[92svh] w-full overflow-y-auto rounded-t-[18px] bg-cream shadow-[0_40px_120px_-40px_rgba(23,50,43,0.6)] sm:rounded-[6px]',
          size === 'lg' ? 'sm:max-w-3xl' : 'sm:max-w-xl',
        )}
      >
        <div className="sticky top-0 z-10 flex items-start justify-between gap-6 border-b border-forest/10 bg-cream/95 px-6 py-5 backdrop-blur-sm sm:px-9">
          <div>
            {eyebrow ? <span className="eyebrow text-gold-ink">{eyebrow}</span> : null}
            <h3
              id={titleId}
              className="mt-2 font-display text-[1.65rem] leading-tight font-light text-ink sm:text-[1.9rem]"
            >
              {title}
            </h3>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="mt-1 grid size-10 shrink-0 place-items-center rounded-full border border-forest/15 text-forest transition-colors duration-300 hover:border-forest/40 hover:bg-forest hover:text-cream"
            aria-label="Fechar"
          >
            <X className="size-4" strokeWidth={1.5} />
          </button>
        </div>

        <div className="px-6 py-7 sm:px-9 sm:py-8">{children}</div>
      </div>
    </div>,
    document.body,
  )
}
