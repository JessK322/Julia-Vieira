import { Menu, Phone, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { brand, contact, navigation } from '../../data/site'
import { useLockBodyScroll, useScrollSpy, useScrolled } from '../../hooks/useUi'
import { cn } from '../../lib/utils'
import { Button } from '../ui/Button'
import { WhatsAppIcon } from '../ui/WhatsAppIcon'

const sectionIds = navigation.map((item) => item.id)

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const scrolled = useScrolled(32)
  const active = useScrollSpy(sectionIds)

  useLockBodyScroll(menuOpen)

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-50 transition-all duration-500 ease-soft',
          scrolled
            ? 'bg-cream/85 shadow-[0_1px_0_rgba(36,72,63,0.10)] backdrop-blur-xl'
            : 'bg-transparent',
        )}
      >
        <div className="mx-auto flex h-[74px] w-full max-w-[1280px] items-center justify-between gap-6 px-5 sm:px-8 lg:h-[88px] lg:px-12">
          <a href="#inicio" className="group flex shrink-0 items-center gap-3" >
            <img
              src={brand.monogram}
              alt=""
              width={46}
              height={46}
              className="size-10 mix-blend-multiply transition-transform duration-700 ease-soft group-hover:scale-[1.04] lg:size-[46px]"
            />
            <span className="flex flex-col">
              <span className="font-display text-[1.3rem] leading-none tracking-[-0.01em] text-ink lg:text-[1.45rem]">
                {brand.name}
              </span>
              <span className="mt-1.5 text-[8.5px] font-medium tracking-[0.3em] text-muted uppercase">
                {brand.specialty}
              </span>
            </span>
          </a>

          <nav aria-label="Navegação principal" className="hidden items-center gap-8 lg:flex xl:gap-10">
            {navigation.map((item) => {
              const isActive = active === item.id
              return (
                <a
                  key={item.id}
                  href={item.href}
                  aria-current={isActive ? 'true' : undefined}
                  className={cn(
                    'relative py-2 text-[10px] font-medium tracking-[0.22em] uppercase transition-colors duration-300',
                    isActive ? 'text-forest' : 'text-muted hover:text-forest',
                  )}
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={cn(
                      'absolute inset-x-0 -bottom-px h-px bg-gold transition-transform duration-500 ease-soft',
                      isActive ? 'scale-x-100' : 'scale-x-0',
                    )}
                  />
                </a>
              )
            })}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href={contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 text-[11px] font-medium tracking-[0.08em] text-muted transition-colors hover:text-forest xl:flex"
            >
              <Phone className="size-3.5" strokeWidth={1.5} aria-hidden="true" />
              {contact.whatsappDisplay}
            </a>

            <div className="hidden sm:block">
              <Button
                href={contact.whatsappUrl}
                external
                size="md"
                ariaLabel="Agendar consulta pelo WhatsApp"
              >
                Agendar consulta
              </Button>
            </div>

            <a
              href={contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Agendar pelo WhatsApp"
              className="grid size-11 place-items-center rounded-full border border-forest/15 text-forest transition-colors hover:bg-forest hover:text-cream sm:hidden"
            >
              <WhatsAppIcon className="size-[18px]" />
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="grid size-11 place-items-center rounded-full border border-forest/15 text-forest transition-colors hover:bg-forest hover:text-cream lg:hidden"
              aria-label="Abrir menu"
              aria-expanded={menuOpen}
              aria-controls="menu-mobile"
            >
              <Menu className="size-5" strokeWidth={1.4} />
            </button>
          </div>
        </div>
      </header>

      {menuOpen ? (
        <div
          id="menu-mobile"
          className="fixed inset-0 z-[70] flex flex-col bg-forest text-cream lg:hidden motion-safe:animate-[menu-in_450ms_var(--ease-soft)]"
        >
          <div className="flex h-[74px] shrink-0 items-center justify-between px-5 sm:px-8">
            <span className="font-display text-[1.35rem]">{brand.name}</span>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="grid size-11 place-items-center rounded-full border border-cream/25 transition-colors hover:bg-cream hover:text-forest"
              aria-label="Fechar menu"
            >
              <X className="size-5" strokeWidth={1.4} />
            </button>
          </div>

          <nav aria-label="Navegação mobile" className="flex flex-1 flex-col justify-center px-5 sm:px-8">
            <ul>
              {navigation.map((item, index) => (
                <li key={item.id} className="border-b border-cream/10">
                  <a
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="group flex items-baseline gap-4 py-5"
                  >
                    <span className="text-[10px] tracking-[0.2em] text-gold-soft/80">
                      0{index + 1}
                    </span>
                    <span className="font-display text-[2.1rem] leading-none font-light transition-colors group-hover:text-gold-soft">
                      {item.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-10 space-y-4">
              <Button href={contact.whatsappUrl} external variant="light" size="lg" className="w-full">
                Agendar consulta
              </Button>
              <a
                href={contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center text-[11px] tracking-[0.2em] text-cream/70 uppercase"
              >
                {contact.instagramHandle}
              </a>
            </div>
          </nav>

          <div className="shrink-0 border-t border-cream/10 px-5 py-5 text-[11px] tracking-[0.08em] text-cream/60 sm:px-8">
            {contact.whatsappDisplay} · João Pessoa — PB
          </div>
        </div>
      ) : null}
    </>
  )
}
