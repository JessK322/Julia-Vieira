import { Instagram, MapPin, Phone } from 'lucide-react'
import { address, brand, contact, legal, navigation } from '../../data/site'
import { WhatsAppIcon } from '../ui/WhatsAppIcon'

type FooterProps = {
  onOpenPrivacy: () => void
}

export function Footer({ onOpenPrivacy }: FooterProps) {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#eee6da] text-[#5b4b35]">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-16 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <a href="#inicio" aria-label={`${brand.name} — início`} className="inline-flex w-[220px] max-w-full items-center">
              <img
                src="/img/logo-dourada-header.png?v=2"
                alt={`${brand.name} — ${brand.specialty}`}
                width={1022}
                height={540}
                className="h-auto w-full object-contain"
              />
            </a>

            <p className="mt-6 max-w-[38ch] text-[12.5px] leading-[1.85] text-muted">
              Odontologia com escuta, clareza e cuidado individualizado — no coração de João Pessoa.
            </p>

            <div className="mt-7 flex items-center gap-3">
              <a
                href={contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da Dra. Júlia Vieira"
                className="grid size-10 place-items-center rounded-full border border-gold/40 text-gold-ink transition-colors duration-300 hover:border-gold hover:bg-gold hover:text-white"
              >
                <Instagram className="size-4" strokeWidth={1.4} />
              </a>
              <a
                href={contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp da Dra. Júlia Vieira"
                className="grid size-10 place-items-center rounded-full border border-gold/40 text-gold-ink transition-colors duration-300 hover:border-gold hover:bg-gold hover:text-white"
              >
                <WhatsAppIcon className="size-4" />
              </a>
            </div>
          </div>

          <nav className="lg:col-span-2" aria-label="Navegação do rodapé">
            <h2 className="text-[9px] font-semibold tracking-[0.26em] text-gold-ink uppercase">
              Navegação
            </h2>
            <ul className="mt-5 space-y-3">
              {navigation.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className="text-[12.5px] text-muted transition-colors duration-300 hover:text-ink"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <h2 className="text-[9px] font-semibold tracking-[0.26em] text-gold-ink uppercase">
              Contato
            </h2>
            <ul className="mt-5 space-y-4 text-[12.5px] leading-relaxed text-muted">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-3.5 shrink-0 text-gold-ink" strokeWidth={1.5} aria-hidden="true" />
                <span>
                  {address.label}
                  <br />
                  {address.street}
                  <br />
                  {address.district} · {address.city} — {address.state}
                  <br />
                  CEP {address.zip}
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 size-3.5 shrink-0 text-gold-ink" strokeWidth={1.5} aria-hidden="true" />
                <a
                  href={`tel:+${contact.whatsapp}`}
                  className="transition-colors hover:text-cream"
                >
                  {contact.whatsappDisplay}
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h2 className="text-[9px] font-semibold tracking-[0.26em] text-gold-ink uppercase">
              Informações
            </h2>
            <ul className="mt-5 space-y-3 text-[11.5px] text-muted">
              <li>{brand.cro}</li>
              <li>
                <button
                  type="button"
                  onClick={onOpenPrivacy}
                  className="text-left transition-colors hover:text-cream"
                >
                  Política de privacidade
                </button>
              </li>
              <li className="leading-relaxed text-muted">
                Dados tratados conforme a LGPD (Lei nº 13.709/2018).
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-gold/30 pt-6">
          <div className="flex flex-col gap-3 text-[9.5px] tracking-[0.06em] text-muted lg:flex-row lg:items-center lg:justify-between">
            <p>
              © {year} {brand.fullName} · Todos os direitos reservados
            </p>
            <p>{legal.credit}</p>
          </div>
          <p className="mt-3 text-[9px] leading-relaxed text-muted">{legal.demoNote}</p>
        </div>
      </div>
    </footer>
  )
}
