import { contact } from '../../data/site'
import { WhatsAppIcon } from '../ui/WhatsAppIcon'

export function WhatsAppFab() {
  return (
    <a
      href={contact.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar consulta pelo WhatsApp"
      className="group fixed right-4 bottom-4 z-40 flex items-center gap-0 overflow-hidden rounded-full bg-forest text-cream shadow-[0_18px_40px_-16px_rgba(23,50,43,0.7)] transition-all duration-500 ease-soft hover:gap-3 hover:bg-forest-deep hover:pr-5 sm:right-6 sm:bottom-6"
    >
      <span className="grid size-14 place-items-center">
        <WhatsAppIcon className="size-6" />
      </span>
      <span className="max-w-0 whitespace-nowrap text-[10px] font-semibold tracking-[0.18em] uppercase opacity-0 transition-all duration-500 group-hover:max-w-[140px] group-hover:opacity-100">
        Agendar
      </span>
    </a>
  )
}
