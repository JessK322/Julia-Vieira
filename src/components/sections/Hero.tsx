import { CalendarCheck, CreditCard, MapPin } from 'lucide-react'
import { brand, hero } from '../../data/site'
import { Reveal } from '../ui/Reveal'
import { Button } from '../ui/Button'

const badgeIcons = { MapPin, CreditCard, CalendarCheck } as const

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-[-10%] h-[620px] w-[620px] rounded-full bg-[radial-gradient(circle_at_center,rgba(220,232,225,0.75),rgba(220,232,225,0)_68%)] blur-[2px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-[-12%] h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle_at_center,rgba(182,155,112,0.10),rgba(182,155,112,0)_70%)]"
      />

      <div className="relative mx-auto grid w-full max-w-[1280px] items-center gap-14 px-5 pt-8 pb-16 sm:px-8 lg:grid-cols-[1.04fr_0.96fr] lg:gap-16 lg:px-12 lg:pt-16 lg:pb-24">
        <div>
          <Reveal>
            <p className="flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-9 bg-gold/70" />
              <span className="eyebrow text-[9px] tracking-[0.22em] text-gold-ink sm:text-[10px] sm:tracking-[0.3em]">
                {hero.eyebrow}
              </span>
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 font-display text-[clamp(2.85rem,5.6vw,4.7rem)] leading-[0.95] font-light tracking-[-0.015em] text-ink">
              <span className="block text-[0.68em] tracking-[0.12em] text-muted uppercase">Dra. Júlia Vieira</span>
              <span className="block">
                <em className="font-normal text-gold-deep italic">{hero.titleEmphasis}</em> no centro.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-7 max-w-[46ch] text-[15.5px] leading-[1.85] text-muted">{hero.subtitle}</p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-9 flex flex-wrap items-center gap-3 sm:gap-4">
              <Button
                href="#sobre"
                variant="outline"
                size="lg"
                icon="none"
                className="w-full justify-center gap-3 sm:w-auto"
              >
                {hero.secondaryCta}
              </Button>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <ul className="mt-11 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-forest/10 pt-6">
              {hero.badges.map((badge) => {
                const Icon = badgeIcons[badge.icon as keyof typeof badgeIcons]
                return (
                  <li
                    key={badge.label}
                    className="flex items-center gap-2 text-[9.5px] font-medium tracking-[0.17em] text-muted uppercase"
                  >
                    <Icon className="size-3.5 text-gold" strokeWidth={1.5} aria-hidden="true" />
                    {badge.label}
                  </li>
                )
              })}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={180} className="relative mx-auto w-full max-w-[470px]">
          <div aria-hidden="true" className="arch absolute inset-x-7 -top-3 bottom-8 bg-[#eee6da]" />
          <div
            aria-hidden="true"
            className="absolute -top-1 -right-1 hidden size-24 rounded-full border border-gold/35 sm:block"
          />

          <div className="arch relative overflow-hidden border border-forest/10 bg-[#fdfdfb] shadow-[0_45px_100px_-55px_rgba(36,72,63,0.65)]">
            <img
              src={hero.image}
              alt={hero.imageAlt}
              width={577}
              height={972}
              fetchPriority="high"
              className="h-[420px] w-full object-cover object-[50%_12%] sm:h-[520px] lg:h-[568px]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(36,72,63,0.10),rgba(36,72,63,0)_38%)]"
            />
          </div>

          <div className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-[5px] border border-gold/30 bg-cream/95 px-4 py-3 shadow-[0_18px_40px_-26px_rgba(36,72,63,0.55)] backdrop-blur-sm sm:left-6">
            <img
              src={brand.monogram}
              alt=""
              width={38}
              height={38}
              className="size-9 mix-blend-multiply"
            />
            <div>
              <p className="text-[8.5px] font-semibold tracking-[0.26em] text-gold-ink uppercase">Consultório</p>
              <p className="font-display text-[1.05rem] leading-tight text-ink">{brand.clinic}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
