import { ArrowRight } from 'lucide-react'
import { about, brand } from '../../data/site'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

type AboutProps = {
  onOpenTrajectory: () => void
}

export function About({ onOpenTrajectory }: AboutProps) {
  return (
    <section id="sobre" className="relative py-20 sm:py-24 lg:py-32">
      <div className="mx-auto grid w-full max-w-[1280px] gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16 lg:px-12">
        <Reveal className="lg:col-span-5">
          <div className="relative">
            <figure className="relative m-0">
              <div className="relative overflow-hidden rounded-[6px] bg-forest-deep shadow-[0_40px_90px_-55px_rgba(36,72,63,0.65)]">
                <img
                  src={about.image}
                  alt={about.imageAlt}
                  width={699}
                  height={1080}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover object-[50%_18%] transition-transform duration-[1200ms] ease-soft hover:scale-[1.03]"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-3 rounded-[3px] border border-cream/20"
                />
              </div>

              <figcaption className="mt-5 flex items-center justify-between gap-4 border-b border-forest/10 pb-4">
                <span className="font-display text-[1.05rem] text-ink">{about.caption}</span>
                <span className="text-[9px] tracking-[0.2em] text-muted/80 uppercase">
                  {brand.role}
                </span>
              </figcaption>
            </figure>
          </div>
        </Reveal>

        <div className="lg:col-span-6 lg:col-start-7">
          <Reveal>
            <SectionHeading eyebrow="01 — Sobre" title={about.title} />
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-7 space-y-5">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 24)} className="text-[15px] leading-[1.85] text-muted">
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={180}>
            <ul className="mt-8 grid gap-x-8 gap-y-3 border-t border-forest/10 pt-7 sm:grid-cols-2">
              {about.credentials.map((credential) => (
                <li key={credential} className="flex items-start gap-3 text-[13px] leading-relaxed text-ink/90">
                  <span
                    aria-hidden="true"
                    className="mt-[6px] size-[5px] shrink-0 rotate-45 bg-gold"
                  />
                  {credential}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={240}>
            <button
              type="button"
              onClick={onOpenTrajectory}
              className="group mt-9 inline-flex items-center gap-3 text-[10px] font-semibold tracking-[0.22em] text-forest uppercase transition-colors hover:text-gold-ink"
            >
              {about.cta}
              <span className="grid size-10 place-items-center rounded-full border border-forest/20 transition-all duration-500 group-hover:border-gold group-hover:bg-gold group-hover:text-cream">
                <ArrowRight className="size-3.5 transition-transform duration-500 group-hover:translate-x-0.5" strokeWidth={1.6} />
              </span>
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
