import { MapPin } from 'lucide-react'
import { useState } from 'react'
import { address, clinic, contact } from '../../data/site'

export function MapCard() {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className="mt-8 overflow-hidden rounded-[6px] border border-forest/10 bg-cream">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-forest/10 px-6 py-4">
        <div className="flex items-center gap-3">
          <MapPin className="size-4 shrink-0 text-gold" strokeWidth={1.5} aria-hidden="true" />
          <p className="text-[12px] text-ink/85">
            {address.label} · {address.district}, {address.city} — {address.state}
          </p>
        </div>
        <a
          href={contact.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[10px] font-semibold tracking-[0.18em] text-forest uppercase underline decoration-gold/50 decoration-1 underline-offset-4 transition-colors hover:text-gold-ink"
        >
          Abrir no Google Maps
        </a>
      </div>

      {loaded ? (
        <iframe
          title={`Mapa — ${address.label}, ${address.city}`}
          src={clinic.mapEmbed}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-[320px] w-full border-0 sm:h-[380px]"
        />
      ) : (
        <div className="relative h-[360px] w-full overflow-hidden bg-[#e7eee8] sm:h-[380px]">
          <svg
            aria-hidden="true"
            viewBox="0 0 900 420"
            preserveAspectRatio="xMidYMid slice"
            className="absolute inset-0 h-full w-full"
          >
            <rect width="900" height="420" fill="#e7eee8" />
            <rect x="40" y="30" width="210" height="110" rx="6" fill="#dbe7de" />
            <rect x="330" y="240" width="150" height="130" rx="6" fill="#dbe7de" />
            <rect x="700" y="60" width="180" height="120" rx="6" fill="#dbe7de" />
            <g stroke="#f7f7f3" strokeWidth="18" strokeLinecap="square">
              <path d="M-20 180H920" />
              <path d="M-20 330H920" />
              <path d="M180 0V440" />
              <path d="M520 0V440" />
              <path d="M760 0V440" />
            </g>
            <g stroke="#f2f5f1" strokeWidth="10">
              <path d="M-20 60H920" />
              <path d="M340 0V440" />
              <path d="M660 0V440" />
            </g>
            <path d="M-40 440L940 20" stroke="#fbfbf8" strokeWidth="22" />
            <path d="M-40 440L940 20" stroke="#dce8e1" strokeWidth="2" strokeDasharray="8 10" />
            <path
              d="M520 330H640V180H700"
              fill="none"
              stroke="#b69b70"
              strokeWidth="3"
              strokeDasharray="6 8"
              opacity="0.75"
            />
            <circle cx="700" cy="180" r="46" fill="#b69b70" opacity="0.1" />
          </svg>

          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
            <span className="grid size-12 place-items-center rounded-full border border-gold/50 bg-cream text-gold shadow-[0_10px_30px_-14px_rgba(36,72,63,0.45)]">
              <MapPin className="size-5" strokeWidth={1.4} aria-hidden="true" />
            </span>
            <p className="mt-4 font-display text-[1.35rem] leading-tight text-ink">{address.label}</p>
            <p className="mt-1.5 text-[9.5px] font-medium tracking-[0.22em] text-muted uppercase">
              {address.district} · {address.city} — {address.state}
            </p>

            <button
              type="button"
              onClick={() => setLoaded(true)}
              className="mt-5 inline-flex h-11 items-center gap-2 rounded-full border border-forest/25 bg-cream px-6 text-[9.5px] font-semibold tracking-[0.18em] text-forest uppercase transition-colors duration-300 hover:border-forest hover:bg-forest hover:text-cream"
            >
              Carregar mapa interativo
            </button>

            <p className="mt-3 text-[9.5px] text-muted/70">
              O mapa é carregado sob demanda para proteger a sua privacidade.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
