import { Info } from 'lucide-react'
import { about, contact } from '../../data/site'
import { Button } from '../ui/Button'
import { Modal } from '../ui/Modal'

type TrajectoryModalProps = {
  open: boolean
  onClose: () => void
}

export function TrajectoryModal({ open, onClose }: TrajectoryModalProps) {
  return (
    <Modal open={open} onClose={onClose} eyebrow="Trajetória" title="Conheça minha trajetória" size="md">
      <p className="text-[14px] leading-[1.85] text-muted">
        Formação, especializações e atualização contínua — os caminhos que sustentam o cuidado
        oferecido no consultório.
      </p>

      <ol className="relative mt-7 space-y-7 border-l border-forest/15 pl-6">
        {about.timeline.map((item) => (
          <li key={item.title} className="relative">
            <span
              aria-hidden="true"
              className="absolute top-[9px] -left-[29px] size-2 rotate-45 bg-gold"
            />
            <h4 className="font-display text-[1.2rem] leading-tight font-normal text-ink">
              {item.title}
            </h4>
            <p className="mt-1 text-[9px] font-semibold tracking-[0.2em] text-gold-ink uppercase">
              {item.place}
            </p>
            <p className="mt-2 text-[12.5px] leading-relaxed text-muted">{item.description}</p>
          </li>
        ))}
      </ol>

      <p className="mt-7 flex items-start gap-2.5 border-t border-forest/10 pt-5 text-[11px] leading-relaxed text-muted/85">
        <Info className="mt-0.5 size-3.5 shrink-0 text-gold" strokeWidth={1.5} aria-hidden="true" />
        Conteúdo demonstrativo do protótipo. Formação e titulações devem ser confirmadas com a
        profissional antes da publicação.
      </p>

      <div className="mt-6">
        <Button href={contact.whatsappUrl} external>
          Agendar uma conversa
        </Button>
      </div>
    </Modal>
  )
}
