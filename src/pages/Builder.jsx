import { useState, useCallback, useRef } from 'react'
import { FLOWERS, WRAPPERS, BOUQUET_STYLES, ADDONS, NOTE_PRICE, LINKS } from '../data/mockData'
import SectionHeader   from '../components/SectionHeader'
import Footer          from '../components/Footer'
import useScrollReveal from '../hooks/useScrollReveal'

// ── Sub-components ─────────────────────────────────────────────

function FlowerCard({ flower, qty, onChangeQty }) {
  const isSelected = qty > 0
  return (
    <div
      onClick={() => !isSelected && onChangeQty(flower.id, 1)}
      className={`relative flex-shrink-0 w-[19%] min-w-[110px] rounded-2xl p-3 text-center cursor-pointer border-[1.5px] transition-all duration-200 select-none
        ${isSelected
          ? 'border-deep-rose bg-[rgba(184,92,122,0.08)] shadow-md'
          : 'border-transparent bg-[rgba(240,230,225,0.6)] hover:border-rose hover:bg-[rgba(250,242,238,0.9)] hover:shadow-sm'}`}
    >
      {/* Emoji */}
      <span className="text-6xl block mb-1.5 leading-none">{flower.emoji}</span>

      {/* Name */}
      <div className="text-[0.7rem] font-semibold text-text-dark leading-tight mb-0.5">{flower.name}</div>
      <div className="text-[0.6rem] text-text-light opacity-75 mb-2.5">₱{flower.price}/{flower.unit}</div>

      {/* Qty controls */}
      <div className="flex items-center justify-center gap-1.5">
        <button
          onClick={(e) => { e.stopPropagation(); onChangeQty(flower.id, -1) }}
          className="w-5 h-5 rounded-full border border-rose text-deep-rose flex items-center justify-center leading-none hover:bg-blush/50 transition-colors text-sm"
        >−</button>
        <span className="text-xs font-semibold text-text-dark w-3 text-center">{qty}</span>
        <button
          onClick={(e) => { e.stopPropagation(); onChangeQty(flower.id, 1) }}
          className="w-5 h-5 rounded-full border border-rose text-deep-rose flex items-center justify-center leading-none hover:bg-blush/50 transition-colors text-sm"
        >+</button>
      </div>

      {/* Selected badge */}
      {isSelected && (
        <div className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-deep-rose flex items-center justify-center shadow-sm">
          <span className="text-white text-[0.45rem] leading-none font-bold">✓</span>
        </div>
      )}
    </div>
  )
}

// ── Flower Carousel ────────────────────────────────────────────
function FlowerCarousel({ flowers, flowerQtys, onChangeQty }) {
  const scrollRef = useRef(null)

  const scroll = (dir) => {
    if (!scrollRef.current) return
    scrollRef.current.scrollBy({ left: dir * 130, behavior: 'smooth' })
  }

  return (
    <div className="flex items-center gap-2">
      {/* Left arrow */}
      <button
        onClick={() => scroll(-1)}
        aria-label="Scroll left"
        className="flex-shrink-0 w-8 h-8 rounded-full bg-white border border-rose/40 shadow-sm
          flex items-center justify-center text-deep-rose
          hover:bg-blush/40 hover:border-deep-rose transition-all duration-150"
      >
        <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
          <path d="M9 2L4 7L9 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* Scrollable track */}
      <div
        ref={scrollRef}
        className="flex gap-2.5 overflow-x-auto scroll-smooth py-2 flex-1"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {flowers.map((f) => (
          <FlowerCard
            key={f.id}
            flower={f}
            qty={flowerQtys[f.id] || 0}
            onChangeQty={onChangeQty}
          />
        ))}
      </div>

      {/* Right arrow */}
      <button
        onClick={() => scroll(1)}
        aria-label="Scroll right"
        className="flex-shrink-0 w-8 h-8 rounded-full bg-white border border-rose/40 shadow-sm
          flex items-center justify-center text-deep-rose
          hover:bg-blush/40 hover:border-deep-rose transition-all duration-150"
      >
        <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
          <path d="M5 2L10 7L5 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  )
}

function OptionCard({ item, isSelected, onSelect }) {
  return (
    <div
      onClick={() => onSelect(item.id)}
      className={`rounded-xl p-3 cursor-pointer border-[1.5px] transition-all duration-200
        ${isSelected
          ? 'border-deep-rose bg-[rgba(184,92,122,0.08)]'
          : 'border-rose/35 bg-[rgba(250,242,238,0.5)] hover:border-rose'}`}
    >
      <div className="text-xs font-medium text-text-dark">{item.name}</div>
      <div className="text-[0.65rem] text-text-light opacity-80 mt-0.5">
        {item.price ? `+₱${item.price}` : 'Included'}
      </div>
    </div>
  )
}

function AddonItem({ addon, isSelected, onToggle }) {
  return (
    <div
      onClick={() => onToggle(addon.id)}
      className={`flex items-center gap-2.5 px-3 py-2 rounded-xl cursor-pointer border-[1.5px] transition-all duration-200
        ${isSelected
          ? 'border-deep-rose bg-[rgba(184,92,122,0.08)]'
          : 'border-rose/35 bg-[rgba(250,242,238,0.5)] hover:border-rose'}`}
    >
      <div className={`w-3.5 h-3.5 rounded flex items-center justify-center flex-shrink-0 border-[1.5px] transition-all
        ${isSelected ? 'bg-deep-rose border-deep-rose text-white' : 'border-rose'}`}>
        {isSelected && <span className="text-[0.5rem] leading-none">✓</span>}
      </div>
      <span className="text-sm">{addon.emoji}</span>
      <span className="text-xs text-text-dark flex-1 font-light">{addon.name}</span>
      <span className="text-xs text-text-light opacity-75 ml-auto">+₱{addon.price}</span>
    </div>
  )
}

function StepLabel({ num, label }) {
  return (
    <div className="flex items-center gap-2 mb-3">
      <div className="w-5 h-5 rounded-full bg-[rgba(184,92,122,0.12)] flex items-center justify-center text-[0.6rem] font-semibold text-deep-rose flex-shrink-0">
        {num}
      </div>
      <span className="font-serif text-base font-semibold text-text-dark">{label}</span>
    </div>
  )
}

// ── Pricing logic ──────────────────────────────────────────────
function calcTotal({ flowers, wrapper, style, addons, includeNote }) {
  let total = 0
  Object.entries(flowers).forEach(([id, qty]) => {
    const f = FLOWERS.find((x) => x.id === id)
    if (f && qty > 0) total += f.price * qty
  })
  if (wrapper) { const w = WRAPPERS.find((x) => x.id === wrapper); if (w) total += w.price }
  if (style)   { const s = BOUQUET_STYLES.find((x) => x.id === style); if (s) total += s.price }
  addons.forEach((id) => { const a = ADDONS.find((x) => x.id === id); if (a) total += a.price })
  if (includeNote) total += NOTE_PRICE
  return total
}

// ── Order summary for Messenger ───────────────────────────────
function buildOrderSummary({ flowers, wrapper, style, addons, includeNote, noteText, total }) {
  const flowerLines = Object.entries(flowers)
    .filter(([, q]) => q > 0)
    .map(([id, q]) => {
      const f = FLOWERS.find((x) => x.id === id)
      return `  • ${f.name} ×${q} (₱${f.price * q})`
    }).join('\n') || '  None selected'

  const wrapperName = wrapper ? WRAPPERS.find((w) => w.id === wrapper)?.name : 'None'
  const styleName   = style   ? BOUQUET_STYLES.find((s) => s.id === style)?.name : 'None'
  const addonNames  = addons.size > 0
    ? [...addons].map((id) => ADDONS.find((a) => a.id === id)?.name).join(', ')
    : 'None'
  const noteInfo = includeNote ? `Yes — "${noteText || 'Message to be provided'}"` : 'No'

  return `🌸 MysticBloom Custom Bouquet Order

Flowers:
${flowerLines}

Wrapper: ${wrapperName}
Style: ${styleName}
Add-Ons: ${addonNames}
Personalized Note: ${noteInfo}

Estimated Total: ₱${total.toLocaleString()}

I'd like to place this order!`
}

// ── Main page ──────────────────────────────────────────────────
export default function Builder() {
  const [flowers,     setFlowers]     = useState({})
  const [wrapper,     setWrapper]     = useState(null)
  const [style,       setStyle]       = useState(null)
  const [addons,      setAddons]      = useState(new Set())
  const [includeNote, setIncludeNote] = useState(false)
  const [noteText,    setNoteText]    = useState('')

  useScrollReveal([])

  const handleFlowerQty = useCallback((id, delta) => {
    setFlowers((prev) => ({ ...prev, [id]: Math.max(0, (prev[id] || 0) + delta) }))
  }, [])

  const handleToggleAddon = useCallback((id) => {
    setAddons((prev) => {
      const n = new Set(prev)
      n.has(id) ? n.delete(id) : n.add(id)
      return n
    })
  }, [])

  const total         = calcTotal({ flowers, wrapper, style, addons, includeNote })
  const flowerEntries = Object.entries(flowers).filter(([, q]) => q > 0)
  const hasContent    = flowerEntries.length > 0 || wrapper || style || addons.size > 0 || includeNote

  const handleSendToMessenger = () => {
    const summary = buildOrderSummary({ flowers, wrapper, style, addons, includeNote, noteText, total })
    const url = `${LINKS.messenger}?text=${encodeURIComponent(summary)}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <>
      {/* ── Compact header ───────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-4">
        <div className="reveal">
          <p className="eyebrow mb-2">Custom Order</p>
          <h1 className="font-serif font-medium text-text-dark leading-tight"
            style={{ fontSize: 'clamp(1.7rem, 3vw, 2.3rem)' }}>
            Build Your <em className="text-deep-rose italic">Dream</em> Bouquet
          </h1>
          <p className="text-text-mid text-sm font-light mt-1 opacity-80 max-w-lg">
            Choose your blooms, wrapper, style, and extras. We'll bring your vision to life.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-5">

          {/* ── Builder panels ─────────────────────────────── */}
          <div className="space-y-3">

            {/* Step 1 — Flowers (carousel) */}
            <div className="glass-panel p-4 reveal">
              <StepLabel num="1" label="Choose Your Flowers" />
              <FlowerCarousel
                flowers={FLOWERS}
                flowerQtys={flowers}
                onChangeQty={handleFlowerQty}
              />
            </div>

            {/* Steps 2 + 3 side by side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 reveal reveal-delay-1">

              <div className="glass-panel p-4">
                <StepLabel num="2" label="Select Wrapper" />
                <div className="space-y-2">
                  {WRAPPERS.map((w) => (
                    <OptionCard key={w.id} item={w} isSelected={wrapper === w.id} onSelect={setWrapper} />
                  ))}
                </div>
              </div>

              <div className="glass-panel p-4">
                <StepLabel num="3" label="Bouquet Style" />
                <div className="space-y-2">
                  {BOUQUET_STYLES.map((s) => (
                    <OptionCard key={s.id} item={s} isSelected={style === s.id} onSelect={setStyle} />
                  ))}
                </div>
              </div>
            </div>

            {/* Steps 4 + 5 side by side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 reveal reveal-delay-2">

              <div className="glass-panel p-4">
                <StepLabel num="4" label="Add-Ons" />
                <div className="space-y-2">
                  {ADDONS.map((a) => (
                    <AddonItem
                      key={a.id}
                      addon={a}
                      isSelected={addons.has(a.id)}
                      onToggle={handleToggleAddon}
                    />
                  ))}
                </div>
              </div>

              <div className="glass-panel p-4">
                <StepLabel num="5" label="Personalized Note" />
                <p className="text-[0.68rem] text-text-light mb-3 font-light opacity-75 leading-relaxed">
                  Add a heartfelt handwritten message card to your bouquet (+₱{NOTE_PRICE}).
                </p>
                <label className="flex items-center gap-2 cursor-pointer mb-3">
                  <input
                    type="checkbox"
                    checked={includeNote}
                    onChange={(e) => setIncludeNote(e.target.checked)}
                    className="accent-deep-rose w-4 h-4"
                  />
                  <span className="text-xs text-text-dark">
                    Include personalized note (₱{NOTE_PRICE})
                  </span>
                </label>
                {includeNote && (
                  <textarea
                    value={noteText}
                    onChange={(e) => setNoteText(e.target.value)}
                    rows={3}
                    placeholder="Write your heartfelt message here..."
                    className="w-full border border-rose/40 rounded-xl px-3 py-2.5 text-xs font-light text-text-dark outline-none focus:border-deep-rose resize-none transition-colors bg-[rgba(250,242,238,0.8)]"
                  />
                )}
              </div>
            </div>

          </div>

          {/* ── Live Summary panel ──────────────────────────── */}
          <div className="lg:sticky lg:top-20 self-start">
            <div className="glass-panel p-5">
              <h3 className="font-serif text-lg font-semibold text-text-dark pb-3 border-b border-rose/20 mb-3">
                🌸 Bouquet Summary
              </h3>

              {!hasContent && (
                <p className="text-center text-text-light text-xs py-5 italic font-light opacity-70">
                  Start selecting to build your bouquet...
                </p>
              )}

              {hasContent && (
                <div className="mb-4 space-y-0.5">
                  {flowerEntries.length > 0 && (
                    <div className="mb-2">
                      <p className="text-[0.6rem] uppercase tracking-[0.1em] text-text-light mb-1 opacity-75">Flowers</p>
                      {flowerEntries.map(([id, qty]) => {
                        const f = FLOWERS.find((x) => x.id === id)
                        return (
                          <div key={id} className="flex justify-between text-xs py-0.5">
                            <span className="text-text-mid opacity-85">{f.emoji} {f.name} ×{qty}</span>
                            <span className="text-text-dark font-medium">₱{(f.price * qty).toLocaleString()}</span>
                          </div>
                        )
                      })}
                    </div>
                  )}

                  {wrapper && (() => {
                    const w = WRAPPERS.find((x) => x.id === wrapper)
                    return (
                      <div className="flex justify-between text-xs py-0.5 mb-1">
                        <span className="text-text-mid opacity-85">Wrapper: {w.name}</span>
                        <span className="text-text-dark font-medium">₱{w.price}</span>
                      </div>
                    )
                  })()}

                  {style && (() => {
                    const s = BOUQUET_STYLES.find((x) => x.id === style)
                    return s.price > 0 ? (
                      <div className="flex justify-between text-xs py-0.5 mb-1">
                        <span className="text-text-mid opacity-85">Style: {s.name}</span>
                        <span className="text-text-dark font-medium">+₱{s.price}</span>
                      </div>
                    ) : null
                  })()}

                  {addons.size > 0 && (
                    <div className="mt-1">
                      <p className="text-[0.6rem] uppercase tracking-[0.1em] text-text-light mb-1 opacity-75">Add-Ons</p>
                      {[...addons].map((id) => {
                        const a = ADDONS.find((x) => x.id === id)
                        return (
                          <div key={id} className="flex justify-between text-xs py-0.5">
                            <span className="text-text-mid opacity-85">{a.emoji} {a.name}</span>
                            <span className="text-text-dark font-medium">₱{a.price}</span>
                          </div>
                        )
                      })}
                    </div>
                  )}

                  {includeNote && (
                    <div className="flex justify-between text-xs py-0.5">
                      <span className="text-text-mid opacity-85">✉️ Personalized Note</span>
                      <span className="text-text-dark font-medium">₱{NOTE_PRICE}</span>
                    </div>
                  )}

                  <div className="flex justify-between items-center pt-3 mt-2 border-t border-rose/20">
                    <span className="text-xs font-medium text-text-dark">Estimated Total</span>
                    <span className="font-serif text-xl font-semibold text-deep-rose">
                      ₱{total.toLocaleString()}
                    </span>
                  </div>
                </div>
              )}

              <button
                className="btn-primary w-full rounded-2xl mb-3 disabled:opacity-40 disabled:cursor-not-allowed"
                onClick={handleSendToMessenger}
                disabled={!hasContent}
              >
                Send Order Inquiry
              </button>
              <a
                href={LINKS.messenger}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-messenger rounded-2xl"
                style={{ pointerEvents: hasContent ? 'auto' : 'none', opacity: hasContent ? 1 : 0.4 }}
              >
                💬 Order via Messenger
              </a>
              <p className="text-[0.65rem] text-text-light text-center mt-3 leading-relaxed opacity-70">
                We'll confirm availability and arrange delivery details personally.
              </p>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </>
  )
}
