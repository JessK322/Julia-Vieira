import { CalendarCheck, ClipboardList, MapPin, MessageCircle } from 'lucide-react'
import { journey } from '../../data/site'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

const icons = { MessageCircle, CalendarCheck, ClipboardList, MapPin } as const

export function Journey() {
  return (
    <section className="py-20 sm:py-24 lg:py-32">
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="04 — Jornada"
            title="Do primeiro contato ao atendimento."
            description="Quatro passos simples para começar o seu cuidado — sem burocracia e com orientação em cada etapa."
          />
        </Reveal>

        <div className="relative mt-14">
          <div
            aria-hidden="true"
            className="absolute top-0 bottom-0 left-[25px] w-px bg-forest/12 md:hidden"
          />
          <div
            aria-hidden="true"
            className="absolute top-[26px] right-[12.5%] left-[12.5%] hidden h-px bg-forest/12 md:block"
          />

          <ol className="grid gap-10 md:grid-cols-4 md:gap-8">
            {journey.map((step, index) => {
              const Icon = icons[step.icon as keyof typeof icons]
              return (
                <li key={step.number}>
                  <Reveal delay={index * 90}>
                    <div className="flex gap-5 md:block">
                      <div className="relative z-10 grid size-[52px] shrink-0 place-items-center rounded-full border border-gold/60 bg-cream font-display text-[1.05rem] text-gold-ink md:mx-auto">
                        {step.number}
                      </div>

                      <div className="md:mt-6 md:text-center">
                        <Icon
                          className="size-4 text-forest/40 md:mx-auto"
                          strokeWidth={1.4}
                          aria-hidden="true"
                        />
                        <h3 className="mt-3 font-display text-[1.22rem] leading-tight font-normal text-ink">
                          {step.title}
                        </h3>
                        <p className="mt-2 max-w-[30ch] text-[12.5px] leading-[1.75] text-muted md:mx-auto">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
