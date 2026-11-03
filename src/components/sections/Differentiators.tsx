import { Armchair, Ear, HeartHandshake, MessageSquareText } from 'lucide-react'
import { differentiators } from '../../data/site'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

const icons = { HeartHandshake, Ear, MessageSquareText, Armchair } as const

export function Differentiators() {
  return (
    <section className="relative overflow-hidden bg-forest py-20 text-cream sm:py-24 lg:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-44 -right-40 size-[460px] rounded-full border border-cream/[0.08]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 -bottom-40 size-[300px] rounded-full bg-[radial-gradient(circle_at_center,rgba(182,155,112,0.16),rgba(182,155,112,0)_70%)]"
      />

      <div className="relative mx-auto grid w-full max-w-[1280px] gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16 lg:px-12">
        <div className="lg:col-span-5">
          <Reveal>
            <SectionHeading
              tone="dark"
              eyebrow="03 — Diferenciais"
              title="Cuidado que se percebe nos detalhes."
            />
          </Reveal>

          <Reveal delay={120}>
            <p className="mt-6 max-w-[42ch] text-[14.5px] leading-[1.85] text-cream/65">
              Um atendimento construído sobre três pilares: tempo, clareza e acolhimento. É assim que
              cada consulta se organiza — do primeiro contato ao acompanhamento.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <blockquote className="mt-10 border-l border-gold/50 pl-6">
              <p className="font-display text-[1.5rem] leading-[1.35] font-light text-cream/90 italic">
                “A escuta é o primeiro cuidado.”
              </p>
            </blockquote>
          </Reveal>
        </div>

        <div className="grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:col-span-6 lg:col-start-7">
          {differentiators.map((item, index) => {
            const Icon = icons[item.icon as keyof typeof icons]
            return (
              <Reveal key={item.title} delay={index * 100}>
                <div className="border-t border-cream/15 pt-6">
                  <div className="flex items-center justify-between">
                    <Icon className="size-5 text-gold-soft" strokeWidth={1.3} aria-hidden="true" />
                    <span className="font-display text-[0.95rem] text-cream/35">0{index + 1}</span>
                  </div>
                  <h3 className="mt-5 font-display text-[1.32rem] leading-tight font-normal text-cream">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-[12.5px] leading-[1.75] text-cream/60">{item.description}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
