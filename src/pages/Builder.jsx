import { useState, useCallback } from 'react'
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
      className={`relative rounded-2xl p-3 text-center cursor-pointer border-[1.5px] transition-all duration-200 select-none
        ${isSelected
          ? 'border-deep-rose bg-[rgba(184,92,122,0.08)]'
          : 'border-transparent bg-[rgba(240,230,225,0.6)] hover:border-rose hover:bg-[rgba(250,242,238,0.9)]'}`}
    >
      <span className="text-4xl block mb-1">{flower.emoji}</span>
      <div className="text-xs font-medium text-text-dark">{flower.name}</div>
      <div className="text-[0.67rem] text-text-light opacity-80">₱{flower.price}/{flower.unit}</div>
      <div className="flex items-center justify-center gap-2 mt-2">
        <button
          onClick={(e) => { e.stopPropagation(); onChangeQty(flower.id, -1) }}
          className="w-6 h-6 rounded-full border border-rose text-deep-rose flex items-center justify-center text-lg leading-none hover:bg-blush/50 transition-colors"
        >−</button>
        <span className="text-sm font-medium text-text-dark w-4 text-center">{qty}</span>
        <button
          onClick={(e) => { e.stopPropagation(); onChangeQty(flower.id, 1) }}
          className="w-6 h-6 rounded-full border border-rose text-deep-rose flex items-center justify-center text-lg leading-none hover:bg-blush/50 transition-colors"
        >+</button>
      </div>
    </div>
  )
}

function OptionCard({ item, isSelected, onSelect }) {
  return (
    <div
      onClick={() => onSelect(item.id)}
      className={`rounded-2xl p-4 cursor-pointer border-[1.5px] transition-all duration-200
        ${isSelected
          ? 'border-deep-rose bg-[rgba(184,92,122,0.08)]'
          : 'border-rose/35 bg-[rgba(250,242,238,0.5)] hover:border-rose'}`}
    >
      <div className="text-sm font-medium text-text-dark">{item.name}</div>
      <div className="text-xs text-text-light opacity-80 mt-0.5">
        {item.price ? `+₱${item.price}` : 'Included'}
      </div>
    </div>
  )
}

function AddonItem({ addon, isSelected, onToggle }) {
  return (
    <div
      onClick={() => onToggle(addon.id)}
      className={`flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-pointer border-[1.5px] transition-all duration-200
        ${isSelected
          ? 'border-deep-rose bg-[rgba(184,92,122,0.08)]'
          : 'border-rose/35 bg-[rgba(250,242,238,0.5)] hover:border-rose'}`}
    >
      <div className={`w-4 h-4 rounded flex items-center justify-center flex-shrink-0 border-[1.5px] transition-all
        ${isSelected ? 'bg-deep-rose border-deep-rose text-white' : 'border-rose'}`}>
        {isSelected && <span className="text-[0.58rem] leading-none">✓</span>}
      </div>
      <span className="text-base">{addon.emoji}</span>
      <span className="text-xs text-text-dark flex-1 font-light">{addon.name}</span>
      <span className="text-xs text-text-light opacity-75 ml-auto">+₱{addon.price}</span>
    </div>
  )
}

function StepLabel({ num, label }) {
  return (
    <div className="flex items-center gap-2 mb-4">
      <div className="w-6 h-6 rounded-full bg-[rgba(184,92,122,0.12)] flex items-center justify-center text-[0.68rem] font-medium text-deep-rose flex-shrink-0">
        {num}
      </div>
      <span className="font-serif text-lg font-semibold text-text-dark">{label}</span>
    </div>
  )
}

// ── Pricing logic ──────────────────────────────────────────────
// All prices come from mockData.js — edit them there.
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
    // ✏️  Replace LINKS.messenger in mockData.js with your Facebook Messenger URL
    const url = `${LINKS.messenger}?text=${encodeURIComponent(summary)}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <>
      <section className="max-w-6xl mx-auto px-6 pt-28 pb-6">
        <div className="reveal">
          <SectionHeader
            eyebrow="Custom Order"
            title="Build Your <em class='text-deep-rose italic'>Dream</em> Bouquet"
            subtitle="Choose your blooms, wrapper, style, and extras. We'll bring your vision to life."
          />
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_330px] gap-6">

          {/* ── Builder panels ─────────────────────────────── */}
          <div className="space-y-5">

            {/* Step 1 — Flowers */}
            <div className="glass-panel p-6 reveal">
              <StepLabel num="1" label="Choose Your Flowers" />
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                {FLOWERS.map((f) => (
                  <FlowerCard
                    key={f.id}
                    flower={f}
                    qty={flowers[f.id] || 0}
                    onChangeQty={handleFlowerQty}
                  />
                ))}
              </div>
            </div>

            {/* Step 2 — Wrapper */}
            <div className="glass-panel p-6 reveal reveal-delay-1">
              <StepLabel num="2" label="Select Wrapper" />
              <div className="grid grid-cols-2 gap-3">
                {WRAPPERS.map((w) => (
                  <OptionCard key={w.id} item={w} isSelected={wrapper === w.id} onSelect={setWrapper} />
                ))}
              </div>
            </div>

            {/* Step 3 — Style */}
            <div className="glass-panel p-6 reveal reveal-delay-2">
              <StepLabel num="3" label="Bouquet Style" />
              <div className="grid grid-cols-2 gap-3">
                {BOUQUET_STYLES.map((s) => (
                  <OptionCard key={s.id} item={s} isSelected={style === s.id} onSelect={setStyle} />
                ))}
              </div>
            </div>

            {/* Step 4 — Add-ons */}
            <div className="glass-panel p-6 reveal reveal-delay-3">
              <StepLabel num="4" label="Add-Ons" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
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

            {/* Step 5 — Note */}
            <div className="glass-panel p-6 reveal reveal-delay-4">
              <StepLabel num="5" label="Personalized Note" />
              <p className="text-xs text-text-light mb-3 font-light opacity-80">
                Add a heartfelt handwritten message card to your bouquet (+₱{NOTE_PRICE}).
              </p>
              <label className="flex items-center gap-2 cursor-pointer mb-4">
                <input
                  type="checkbox"
                  checked={includeNote}
                  onChange={(e) => setIncludeNote(e.target.checked)}
                  className="accent-deep-rose w-4 h-4"
                />
                <span className="text-sm text-text-dark">
                  Include personalized note (₱{NOTE_PRICE})
                </span>
              </label>
              {includeNote && (
                <textarea
                  value={noteText}
                  onChange={(e) => setNoteText(e.target.value)}
                  rows={3}
                  placeholder="Write your heartfelt message here..."
                  className="w-full border border-rose/40 rounded-xl px-4 py-3 text-sm font-light text-text-dark outline-none focus:border-deep-rose resize-none transition-colors bg-[rgba(250,242,238,0.8)]"
                />
              )}
            </div>
          </div>

          {/* ── Live Summary panel ──────────────────────────── */}
          <div className="lg:sticky lg:top-20 self-start">
            <div className="glass-panel p-6">
              <h3 className="font-serif text-xl font-semibold text-text-dark pb-4 border-b border-rose/20 mb-4">
                🌸 Bouquet Summary
              </h3>

              {!hasContent && (
                <p className="text-center text-text-light text-sm py-6 italic font-light opacity-70">
                  Start selecting to build your bouquet...
                </p>
              )}

              {hasContent && (
                <div className="mb-4 space-y-0.5">
                  {/* Flowers */}
                  {flowerEntries.length > 0 && (
                    <div className="mb-3">
                      <p className="text-[0.65rem] uppercase tracking-[0.1em] text-text-light mb-1 opacity-75">
                        Flowers
                      </p>
                      {flowerEntries.map(([id, qty]) => {
                        const f = FLOWERS.find((x) => x.id === id)
                        return (
                          <div key={id} className="flex justify-between text-sm py-0.5">
                            <span className="text-text-mid opacity-85">
                              {f.emoji} {f.name} ×{qty}
                            </span>
                            <span className="text-text-dark font-medium">
                              ₱{(f.price * qty).toLocaleString()}
                            </span>
                          </div>
                        )
                      })}
                    </div>
                  )}

                  {/* Wrapper */}
                  {wrapper && (() => {
                    const w = WRAPPERS.find((x) => x.id === wrapper)
                    return (
                      <div className="flex justify-between text-sm py-0.5 mb-2">
                        <span className="text-text-mid opacity-85">Wrapper: {w.name}</span>
                        <span className="text-text-dark font-medium">₱{w.price}</span>
                      </div>
                    )
                  })()}

                  {/* Style */}
                  {style && (() => {
                    const s = BOUQUET_STYLES.find((x) => x.id === style)
                    return s.price > 0 ? (
                      <div className="flex justify-between text-sm py-0.5 mb-2">
                        <span className="text-text-mid opacity-85">Style: {s.name}</span>
                        <span className="text-text-dark font-medium">+₱{s.price}</span>
                      </div>
                    ) : null
                  })()}

                  {/* Add-ons */}
                  {addons.size > 0 && (
                    <div className="mt-2">
                      <p className="text-[0.65rem] uppercase tracking-[0.1em] text-text-light mb-1 opacity-75">
                        Add-Ons
                      </p>
                      {[...addons].map((id) => {
                        const a = ADDONS.find((x) => x.id === id)
                        return (
                          <div key={id} className="flex justify-between text-sm py-0.5">
                            <span className="text-text-mid opacity-85">{a.emoji} {a.name}</span>
                            <span className="text-text-dark font-medium">₱{a.price}</span>
                          </div>
                        )
                      })}
                    </div>
                  )}

                  {/* Note */}
                  {includeNote && (
                    <div className="flex justify-between text-sm py-0.5">
                      <span className="text-text-mid opacity-85">✉️ Personalized Note</span>
                      <span className="text-text-dark font-medium">₱{NOTE_PRICE}</span>
                    </div>
                  )}

                  {/* Total */}
                  <div className="flex justify-between items-center pt-3 mt-2 border-t border-rose/20">
                    <span className="text-sm font-medium text-text-dark">Estimated Total</span>
                    <span className="font-serif text-2xl font-semibold text-deep-rose">
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
              <p className="text-[0.68rem] text-text-light text-center mt-3 leading-relaxed opacity-70">
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
