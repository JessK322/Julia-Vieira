import { Star } from 'lucide-react'
import { contact, instagram, reviews } from '../../data/site'
import { Button } from '../ui/Button'
import { Reveal } from '../ui/Reveal'

export function SocialProof() {
  return (
    <section className="py-20 sm:py-24 lg:py-28">
      <div className="mx-auto grid w-full max-w-[1280px] gap-5 px-5 sm:px-8 lg:grid-cols-2 lg:px-12">
        <Reveal className="h-full">
          <article className="flex h-full flex-col rounded-[6px] border border-forest/10 bg-paper p-7 sm:p-9">
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-8 bg-gold/70" />
              <span className="eyebrow text-gold-ink">{reviews.eyebrow}</span>
            </div>

            <div className="mt-6 flex items-center gap-1" aria-label="Avaliação em cinco estrelas">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  className="size-[18px] fill-gold text-gold"
                  strokeWidth={1}
                  aria-hidden="true"
                />
              ))}
              <span className="ml-3 text-[10px] font-medium tracking-[0.18em] text-muted uppercase">
                no Google
              </span>
            </div>

            <h3 className="mt-5 font-display text-[1.75rem] leading-[1.15] font-light text-ink">
              {reviews.title}
            </h3>
            <p className="mt-3 max-w-[46ch] text-[13.5px] leading-[1.8] text-muted">
              {reviews.description}
            </p>

            <div className="mt-auto flex flex-wrap gap-3 pt-8">
              <Button href={contact.googleMapsUrl} external variant="primary" size="md">
                {reviews.primaryCta}
              </Button>
              <Button
                href={contact.googleReviewUrl}
                external
                variant="outline"
                size="md"
                icon="up-right"
              >
                {reviews.secondaryCta}
              </Button>
            </div>
          </article>
        </Reveal>

        <Reveal delay={120} className="h-full">
          <article className="relative flex h-full flex-col overflow-hidden rounded-[6px] bg-forest p-7 text-cream sm:p-9">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-20 -right-16 size-64 rounded-full border border-cream/10"
            />

            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-8 bg-gold-soft/70" />
              <span className="eyebrow text-gold-soft">{instagram.eyebrow}</span>
            </div>

            <h3 className="mt-6 max-w-[30ch] font-display text-[1.75rem] leading-[1.15] font-light">
              {instagram.title}
            </h3>
            <p className="mt-3 max-w-[44ch] text-[13.5px] leading-[1.8] text-cream/65">
              {instagram.description}
            </p>

            <div className="mt-auto flex flex-wrap items-center gap-6 pt-8">
              <div className="rounded-[4px] border border-cream/20 bg-cream p-2">
                <img
                  src={instagram.qr}
                  alt="QR Code do Instagram de Dra. Júlia Vieira"
                  width={882}
                  height={972}
                  loading="lazy"
                  className="size-[92px] object-contain"
                />
              </div>

              <div className="space-y-3">
                <p className="font-display text-[1.15rem] text-cream/90">{contact.instagramHandle}</p>
                <Button
                  href={contact.instagramUrl}
                  external
                  variant="light"
                  size="md"
                  icon="up-right"
                >
                  Seguir no Instagram
                </Button>
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  )
}
