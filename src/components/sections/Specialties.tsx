import { ArrowUpRight, Info } from 'lucide-react'
import { services, type Service } from '../../data/site'
import { cn } from '../../lib/utils'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

type SpecialtiesProps = {
  onOpenService: (service: Service) => void
}

export function Specialties({ onOpenService }: SpecialtiesProps) {
  return (
    <section id="especialidades" className="border-y border-forest/10 bg-paper py-20 sm:py-24 lg:py-32">
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <SectionHeading
              eyebrow="02 — Especialidades"
              title="Cuidados que se encontram no seu sorriso."
            />
          </Reveal>

          <Reveal delay={100} className="lg:col-span-4 lg:col-start-9">
            <p className="text-[14.5px] leading-[1.85] text-muted">
              Cada tratamento parte de uma avaliação individual. Conheça as áreas de atuação e entenda
              como o cuidado pode ser planejado para o seu caso.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={index * 90}>
              <article
                className={cn(
                  'group relative flex h-full w-full flex-col overflow-hidden rounded-[6px] border border-forest/10 bg-cream text-left',
                  'transition-all duration-500 ease-soft hover:-translate-y-1.5 hover:border-gold/50',
                  'hover:shadow-[0_34px_70px_-46px_rgba(36,72,63,0.55)]',
                )}
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#eef0e8]">
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    loading="lazy"
                    className="h-full w-full scale-[0.86] object-contain mix-blend-multiply saturate-[0.72] transition-transform duration-[900ms] ease-soft group-hover:scale-[0.94]"
                  />
                  <span className="absolute top-4 left-4 grid size-8 place-items-center rounded-full border border-forest/15 bg-cream/80 font-display text-[0.8rem] text-forest backdrop-blur-sm">
                    {service.number}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-[1.32rem] leading-tight font-normal text-ink">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-[12.5px] leading-[1.75] text-muted">{service.short}</p>

                  <span className="mt-auto flex items-center justify-between border-t border-forest/10 pt-4 text-[9.5px] font-semibold tracking-[0.2em] text-forest uppercase">
                    Saber mais
                    <span className="grid size-8 place-items-center rounded-full border border-forest/15 transition-all duration-500 group-hover:border-gold group-hover:bg-gold group-hover:text-cream">
                      <ArrowUpRight className="size-3.5 transition-transform duration-500 group-hover:rotate-45" strokeWidth={1.6} />
                    </span>
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => onOpenService(service)}
                  className="absolute inset-0 z-10 rounded-[6px]"
                  aria-label={`Saber mais sobre ${service.title}`}
                />
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <p className="mt-9 flex items-start gap-2.5 text-[11.5px] leading-relaxed text-muted/90">
            <Info className="mt-0.5 size-3.5 shrink-0 text-gold" strokeWidth={1.5} aria-hidden="true" />
            A indicação de cada tratamento é definida após avaliação clínica individual. Este site tem
            caráter informativo e não substitui uma consulta.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
