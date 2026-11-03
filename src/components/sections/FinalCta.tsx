import { ArrowRight } from 'lucide-react'
import { contact, finalCta } from '../../data/site'
import { whatsappLink } from '../../lib/utils'
import { Reveal } from '../ui/Reveal'
import { WhatsAppIcon } from '../ui/WhatsAppIcon'

export function FinalCta() {
  return (
    <section id="contato" className="relative overflow-hidden bg-forest py-20 text-cream sm:py-24 lg:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 -bottom-64 size-[520px] -translate-x-1/2 rounded-full border border-cream/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 -bottom-80 size-[520px] -translate-x-1/2 rounded-full border border-cream/[0.06]"
      />

      <div className="relative mx-auto max-w-[820px] px-5 text-center sm:px-8">
        <Reveal>
          <div className="flex items-center justify-center gap-3">
            <span aria-hidden="true" className="h-px w-8 bg-gold-soft/70" />
            <span className="eyebrow text-gold-soft">{finalCta.eyebrow}</span>
            <span aria-hidden="true" className="h-px w-8 bg-gold-soft/70" />
          </div>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="mt-6 font-display text-[clamp(2.3rem,5vw,3.6rem)] leading-[1.02] font-light tracking-[-0.01em]">
            {finalCta.title}
          </h2>
        </Reveal>

        <Reveal delay={160}>
          <p className="mx-auto mt-5 max-w-[48ch] text-[14.5px] leading-[1.85] text-cream/70">
            {finalCta.description}
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-9 flex flex-col items-center gap-4">
            <a
              href={whatsappLink('Olá, Dra. Júlia! Vim pelo site e gostaria de agendar uma consulta.')}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex h-[3.5rem] items-center justify-center gap-3 rounded-full bg-cream px-8 text-[10.5px] font-semibold tracking-[0.2em] text-forest uppercase transition-all duration-500 ease-soft hover:bg-white hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.45)]"
            >
              <WhatsAppIcon className="size-[17px]" />
              {finalCta.cta}
              <ArrowRight
                className="size-[0.95em] transition-transform duration-500 group-hover:translate-x-1"
                strokeWidth={1.6}
                aria-hidden="true"
              />
            </a>

            <a
              href={`tel:+${contact.whatsapp}`}
              className="text-[11.5px] tracking-[0.12em] text-cream/70 underline decoration-cream/25 decoration-1 underline-offset-4 transition-colors hover:text-cream"
            >
              {contact.whatsappDisplay}
            </a>
          </div>
        </Reveal>

        <Reveal delay={320}>
          <p className="mt-8 text-[9.5px] tracking-[0.24em] text-cream/45 uppercase">
            {finalCta.footnote}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
