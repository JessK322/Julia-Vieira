const items = ['Ortodontia e Estética', 'Atendimento humanizado', 'Invisalign® Provider', 'João Pessoa — PB']

const itemClass =
  'text-[9px] font-medium tracking-[0.18em] text-muted uppercase sm:text-[9.5px] sm:tracking-[0.26em]'

export function TrustBar() {
  return (
    <div className="border-y border-forest/10 bg-sage-light/50">
      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-2 items-center justify-items-center gap-x-4 gap-y-2.5 px-5 py-5 text-center sm:flex sm:flex-wrap sm:justify-center sm:gap-x-8 sm:px-8 lg:justify-between lg:px-12">
        {items.map((item, index) => (
          <div key={item} className="contents sm:contents">
            {index > 0 ? (
              <span aria-hidden="true" className="hidden size-1 rotate-45 bg-gold/40 lg:block" />
            ) : null}
            <p className={itemClass}>{item}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
