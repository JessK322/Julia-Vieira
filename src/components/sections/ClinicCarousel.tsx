import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'
import { cn } from '../../lib/utils'

type ClinicCarouselProps = {
  photos: readonly string[]
}

export function ClinicCarousel({ photos }: ClinicCarouselProps) {
  const total = photos.length
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [interaction, setInteraction] = useState(0)

  const go = useCallback(
    (direction: number) => {
      setIndex((current) => (current + direction + total) % total)
      setInteraction((value) => value + 1)
    },
    [total],
  )

  useEffect(() => {
    if (paused) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % total)
    }, 6500)

    return () => window.clearInterval(timer)
  }, [paused, total, interaction])

  return (
    <div
      className="group relative overflow-hidden rounded-[6px] bg-forest-deep"
      role="region"
      aria-roledescription="carrossel"
      aria-label="Fotos do consultório"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === 'ArrowLeft') go(-1)
        if (event.key === 'ArrowRight') go(1)
      }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="relative aspect-[4/3] w-full sm:aspect-square lg:aspect-[4/3]">
        {photos.map((photo, photoIndex) => (
          <img
            key={photo}
            src={photo}
            alt={`Ambiente do consultório — foto ${photoIndex + 1}`}
            loading={photoIndex < 2 ? 'eager' : 'lazy'}
            className={cn(
              'absolute inset-0 h-full w-full object-cover transition-all duration-[1100ms] ease-soft',
              photoIndex === index ? 'scale-100 opacity-100' : 'scale-[1.04] opacity-0',
            )}
            aria-hidden={photoIndex !== index}
          />
        ))}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(23,50,43,0.65),rgba(23,50,43,0)_45%)]"
        />
      </div>

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-6 p-5 sm:p-6">
        <div className="text-cream">
          <p className="font-display text-[1.1rem] leading-none">
            {String(index + 1).padStart(2, '0')}
            <span className="text-cream/50"> / {String(total).padStart(2, '0')}</span>
          </p>
          <div className="mt-3 h-px w-24 overflow-hidden bg-cream/25">
            <div
              className="h-px bg-cream transition-all duration-500 ease-soft"
              style={{ width: `${((index + 1) / total) * 100}%` }}
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => go(-1)}
            className="grid size-11 place-items-center rounded-full border border-cream/25 text-cream transition-colors duration-300 hover:bg-cream hover:text-forest"
            aria-label="Foto anterior"
          >
            <ChevronLeft className="size-4" strokeWidth={1.5} />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            className="grid size-11 place-items-center rounded-full border border-cream/25 text-cream transition-colors duration-300 hover:bg-cream hover:text-forest"
            aria-label="Próxima foto"
          >
            <ChevronRight className="size-4" strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </div>
  )
}
