import { Car, Clock, MapPin, Video } from 'lucide-react'
import { clinic, contact } from '../../data/site'
import { Button } from '../ui/Button'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'
import { ClinicCarousel } from './ClinicCarousel'
import { MapCard } from './MapCard'

const icons = { MapPin, Clock, Car, Video } as const

export function Clinic() {
  return (
    <section id="atendimento" className="border-y border-forest/10 bg-paper py-20 sm:py-24 lg:py-32">
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-6">
            <SectionHeading eyebrow="05 — Estrutura" title={clinic.title} />
          </Reveal>
          <Reveal delay={100} className="lg:col-span-5 lg:col-start-8">
            <p className="text-[14.5px] leading-[1.85] text-muted">{clinic.description}</p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-7">
            <ClinicCarousel photos={clinic.photos} />
          </Reveal>

          <Reveal delay={120} className="lg:col-span-5">
            <div className="flex h-full flex-col rounded-[6px] border border-forest/10 bg-cream p-6 sm:p-8">
              <ul className="divide-y divide-forest/10">
                {clinic.features.map((feature) => {
                  const Icon = icons[feature.icon as keyof typeof icons]
                  return (
                    <li key={feature.title} className="flex gap-4 py-5 first:pt-0 last:pb-0">
                      <span className="grid size-10 shrink-0 place-items-center rounded-full border border-gold/30 text-gold">
                        <Icon className="size-4" strokeWidth={1.4} aria-hidden="true" />
                      </span>
                      <div className="min-w-0">
                        <p className="text-[8.5px] font-semibold tracking-[0.24em] text-gold-ink uppercase">
                          {feature.title}
                        </p>
                        <div className="mt-1.5 space-y-0.5">
                          {feature.lines.map((line) => (
                            <p key={line} className="text-[12.5px] leading-relaxed text-ink/85">
                              {line}
                            </p>
                          ))}
                        </div>
                        {feature.action && feature.href ? (
                          <a
                            href={feature.href}
                            {...(feature.href.startsWith('http')
                              ? { target: '_blank', rel: 'noopener noreferrer' }
                              : {})}
                            className="mt-2 inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.16em] text-forest uppercase underline decoration-gold/50 decoration-1 underline-offset-4 transition-colors hover:text-gold-ink"
                          >
                            {feature.action}
                          </a>
                        ) : null}
                      </div>
                    </li>
                  )
                })}
              </ul>

              <div className="mt-auto pt-8">
                <Button href={contact.whatsappUrl} external size="md" className="w-full">
                  Agendar consulta
                </Button>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <MapCard />
        </Reveal>
      </div>
    </section>
  )
}
