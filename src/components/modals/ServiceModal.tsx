import { Check, Info } from 'lucide-react'
import type { Service } from '../../data/site'
import { Button } from '../ui/Button'
import { Modal } from '../ui/Modal'
import { whatsappLink } from '../../lib/utils'

type ServiceModalProps = {
  service: Service | null
  onClose: () => void
}

export function ServiceModal({ service, onClose }: ServiceModalProps) {
  if (!service) return null

  return (
    <Modal
      open
      onClose={onClose}
      eyebrow={`Especialidade ${service.number}`}
      title={service.title}
      size="md"
    >
      <div className="overflow-hidden rounded-[4px] bg-[#f0f3ee]">
        <img
          src={service.image}
          alt={service.imageAlt}
          className="mx-auto h-44 w-full max-w-sm object-contain p-4 mix-blend-multiply"
        />
      </div>

      <p className="mt-6 text-[14px] leading-[1.85] text-muted">{service.details.intro}</p>

      <ul className="mt-6 space-y-3">
        {service.details.bullets.map((bullet) => (
          <li key={bullet} className="flex items-start gap-3 text-[13px] leading-relaxed text-ink/85">
            <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full border border-gold/40 text-gold">
              <Check className="size-2.5" strokeWidth={2.2} aria-hidden="true" />
            </span>
            {bullet}
          </li>
        ))}
      </ul>

      <p className="mt-6 flex items-start gap-2.5 rounded-[4px] border border-forest/10 bg-sage-light/60 p-4 text-[11.5px] leading-relaxed text-muted">
        <Info className="mt-0.5 size-3.5 shrink-0 text-gold" strokeWidth={1.5} aria-hidden="true" />
        {service.details.note}
      </p>

      <div className="mt-7 flex flex-wrap items-center gap-3">
        <Button href={whatsappLink(service.message)} external>
          Falar sobre este cuidado
        </Button>
        <button
          type="button"
          onClick={onClose}
          className="text-[10px] font-semibold tracking-[0.18em] text-muted uppercase transition-colors hover:text-forest"
        >
          Voltar
        </button>
      </div>
    </Modal>
  )
}
