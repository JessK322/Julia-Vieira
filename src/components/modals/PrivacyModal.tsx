import { legal } from '../../data/site'
import { Modal } from '../ui/Modal'

type PrivacyModalProps = {
  open: boolean
  onClose: () => void
}

export function PrivacyModal({ open, onClose }: PrivacyModalProps) {
  return (
    <Modal open={open} onClose={onClose} eyebrow="LGPD" title={legal.privacyTitle} size="lg">
      <p className="text-[13.5px] leading-[1.85] text-muted">{legal.privacyIntro}</p>

      <div className="mt-7 space-y-6">
        {legal.privacySections.map((section) => (
          <section key={section.title}>
            <h4 className="font-display text-[1.15rem] font-normal text-ink">{section.title}</h4>
            <p className="mt-1.5 text-[12.5px] leading-[1.8] text-muted">{section.body}</p>
          </section>
        ))}
      </div>

      <p className="mt-8 border-t border-forest/10 pt-5 text-[10.5px] leading-relaxed text-muted/80">
        Texto demonstrativo, elaborado para o protótipo. A versão final deve ser revisada com base no
        fluxo real de atendimento e nos serviços efetivamente utilizados pelo consultório.
      </p>
    </Modal>
  )
}
