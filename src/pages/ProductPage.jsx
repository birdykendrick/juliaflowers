import { useState, useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { BOUQUETS, LINKS, FILLERS, WRAPPER_COLOURS, PRODUCT_ADDONS } from '../data/mockData'
import Footer from '../components/Footer'
import useScrollReveal from '../hooks/useScrollReveal'

// ── SVG Icons (no emojis) ────────────────────────────────────
function IconLetter() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2"/>
      <path d="M2 7l10 7 10-7"/>
    </svg>
  )
}
function IconChoc() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="18" rx="3"/>
      <path d="M2 9h20M8 9v12M16 9v12"/>
    </svg>
  )
}
function IconChevronLeft() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 18l-6-6 6-6"/>
    </svg>
  )
}
function IconChevronRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18l6-6-6-6"/>
    </svg>
  )
}
function IconCheck() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6L9 17l-5-5"/>
    </svg>
  )
}

// ── Filler carousel ──────────────────────────────────────────
function FillerCarousel({ selected, onToggle }) {
  const trackRef = useRef(null)

  const scroll = (dir) => {
    const track = trackRef.current
    if (!track) return
    track.scrollBy({ left: dir * 200, behavior: 'smooth' })
  }

  return (
    <div className="relative">
      {/* Left arrow */}
      <button
        onClick={() => scroll(-1)}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full flex items-center justify-center transition-all"
        style={{ background: 'rgba(250,242,236,0.95)', border: '1px solid rgba(217,160,180,0.3)', color: '#b85c7a', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}
      >
        <IconChevronLeft />
      </button>

      {/* Track */}
      <div
        ref={trackRef}
        className="flex gap-2 overflow-x-auto px-10"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
      >
        <style>{`div::-webkit-scrollbar{display:none}`}</style>
        {FILLERS.map((f) => {
          const active = selected.includes(f.id)
          return (
            <button
              key={f.id}
              onClick={() => onToggle(f.id)}
              className="flex-shrink-0 flex flex-col items-center gap-1.5 transition-all duration-200"
              style={{ minWidth: '88px' }}
            >
              {/* Placeholder card — replace bg with image later */}
              <div
                className="w-20 h-20 rounded-2xl relative flex items-center justify-center transition-all duration-200"
                style={{
                  background: active
                    ? 'linear-gradient(135deg, rgba(184,92,122,0.15), rgba(217,160,180,0.2))'
                    : 'rgba(250,242,236,0.8)',
                  border: active ? '1.5px solid #b85c7a' : '1.5px solid rgba(217,160,180,0.3)',
                }}
              >
                {/* Image goes here — placeholder flower icon for now */}
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={active ? '#b85c7a' : '#d9a0b4'} strokeWidth="1.2">
                  <circle cx="12" cy="12" r="3"/>
                  <path d="M12 2a3 3 0 000 6 3 3 0 000-6zM12 16a3 3 0 000 6 3 3 0 000-6zM2 12a3 3 0 006 0 3 3 0 00-6 0zM16 12a3 3 0 006 0 3 3 0 00-6 0z"/>
                </svg>
                {active && (
                  <div className="absolute top-1.5 right-1.5 w-4 h-4 rounded-full flex items-center justify-center" style={{ background: '#b85c7a' }}>
                    <IconCheck />
                  </div>
                )}
              </div>
              <span className="text-[0.65rem] text-center leading-tight font-light"
                style={{ color: active ? '#b85c7a' : '#7a5560', maxWidth: '80px' }}>
                {f.name}
              </span>
              <span className="text-[0.6rem]" style={{ color: 'rgba(122,85,96,0.55)' }}>+₱{f.price}</span>
            </button>
          )
        })}
      </div>

      {/* Right arrow */}
      <button
        onClick={() => scroll(1)}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full flex items-center justify-center transition-all"
        style={{ background: 'rgba(250,242,236,0.95)', border: '1px solid rgba(217,160,180,0.3)', color: '#b85c7a', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}
      >
        <IconChevronRight />
      </button>
    </div>
  )
}

// ── Main page ────────────────────────────────────────────────
export default function ProductPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const bouquet = BOUQUETS.find((b) => b.id === parseInt(id))

  useScrollReveal([])

  const [selectedWrapper,  setSelectedWrapper]  = useState(WRAPPER_COLOURS[0].id)
  const [selectedFillers,  setSelectedFillers]  = useState([])
  const [selectedAddons,   setSelectedAddons]   = useState([])
  const [letterText,       setLetterText]       = useState('')
  const [wrapperOpen,      setWrapperOpen]      = useState(false)

  if (!bouquet) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-serif text-2xl text-text-dark mb-2">Bouquet not found</h2>
          <button className="btn-primary mt-4" onClick={() => navigate('/gallery')}>Back to Gallery</button>
        </div>
      </div>
    )
  }

  // ── Pricing ────────────────────────────────────────────────
  const fillersTotal = FILLERS.filter(f => selectedFillers.includes(f.id)).reduce((s, f) => s + f.price, 0)
  const addonsTotal  = selectedAddons.includes('letter') ? 50 : 0
  const chocsTotal   = selectedAddons.includes('chocolates') ? 250 : 0
  const total        = bouquet.price + fillersTotal + addonsTotal + chocsTotal

  const toggleFiller = (id) =>
    setSelectedFillers(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id])

  const toggleAddon = (id) =>
    setSelectedAddons(prev => {
      const next = prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
      if (!next.includes('letter')) setLetterText('')
      return next
    })

  const selectedWrapperObj = WRAPPER_COLOURS.find(w => w.id === selectedWrapper)

  // ── Messenger message ──────────────────────────────────────
  const buildMessage = () => {
    const fillerNames = FILLERS.filter(f => selectedFillers.includes(f.id)).map(f => f.name)
    const addonNames  = PRODUCT_ADDONS.filter(a => selectedAddons.includes(a.id)).map(a => a.name)

    let msg = `Hi MysticBloom! I'd like to order:\n\n`
    msg += `Bouquet: ${bouquet.name} (₱${bouquet.price})\n`
    msg += `Wrapper colour: ${selectedWrapperObj?.name}\n`
    if (fillerNames.length) msg += `Extra fillers: ${fillerNames.join(', ')}\n`
    if (addonNames.length)  msg += `Add-ons: ${addonNames.join(', ')}\n`
    if (selectedAddons.includes('letter') && letterText.trim())
      msg += `Letter message: "${letterText}"\n`
    msg += `\nTotal: ₱${total.toLocaleString()}\n\nPlease confirm availability. Thank you!`
    return encodeURIComponent(msg)
  }

  const handleInquire = () => window.open(`${LINKS.messenger}?text=${buildMessage()}`, '_blank')

  return (
    <>
      <div className="max-w-6xl mx-auto px-6 pt-24 pb-20">

        {/* Back */}
        <button
          onClick={() => navigate('/gallery')}
          className="flex items-center gap-2 text-xs tracking-[0.1em] uppercase text-text-mid opacity-70 hover:opacity-100 hover:text-deep-rose transition-all mb-8"
        >
          ← Back to Gallery
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* ── LEFT ──────────────────────────────────────────── */}
          <div className="reveal">
            {/* Image */}
            <div className={`rounded-3xl h-80 md:h-96 flex items-center justify-center bg-gradient-to-br ${bouquet.bg} relative overflow-hidden mb-5`}>
              {bouquet.image
                ? <img src={bouquet.image} alt={bouquet.name} className="w-full h-full object-contain scale-110" />
                : <span className="text-9xl">{bouquet.emoji}</span>
              }
              {bouquet.badge && (
                <span className="absolute top-4 right-4 text-xs bg-white/85 text-deep-rose px-3 py-1 rounded-full font-medium tracking-wide shadow-sm">
                  {bouquet.badge}
                </span>
              )}
            </div>

            {/* Info */}
            <h1 className="font-serif text-3xl font-medium text-text-dark mb-2">{bouquet.name}</h1>
            <p className="text-text-mid font-light leading-relaxed text-sm mb-4 opacity-85">{bouquet.desc}</p>

            {/* Flowers included */}
            {bouquet.flowers?.length > 0 && (
              <div className="mb-5">
                <p className="text-[0.68rem] uppercase tracking-[0.12em] text-text-light opacity-75 mb-2">
                  Flowers Included
                </p>
                <div className="flex flex-wrap gap-2">
                  {bouquet.flowers.map(f => (
                    <span key={f} className="text-xs bg-white/70 border border-rose/20 text-text-mid px-3 py-1.5 rounded-full">
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Price breakdown */}
            <div className="rounded-2xl p-5" style={{ background: 'linear-gradient(135deg, rgba(232,197,210,0.4), rgba(240,221,208,0.4))' }}>
              <p className="text-[0.68rem] uppercase tracking-[0.12em] text-text-light mb-3 opacity-75">Price Breakdown</p>
              <div className="space-y-1.5 text-sm">
                <div className="flex justify-between text-text-mid">
                  <span>Base bouquet</span>
                  <span>₱{bouquet.price.toLocaleString()}</span>
                </div>
                {selectedWrapperObj && (
                  <div className="flex justify-between text-text-mid">
                    <span>Wrapper — {selectedWrapperObj.name}</span>
                    <span>Included</span>
                  </div>
                )}
                {FILLERS.filter(f => selectedFillers.includes(f.id)).map(f => (
                  <div key={f.id} className="flex justify-between text-text-mid">
                    <span>{f.name}</span>
                    <span>+₱{f.price}</span>
                  </div>
                ))}
                {selectedAddons.includes('letter') && (
                  <div className="flex justify-between text-text-mid">
                    <span>Personalised Letter</span>
                    <span>+₱50</span>
                  </div>
                )}
                {selectedAddons.includes('chocolates') && (
                  <div className="flex justify-between text-text-mid">
                    <span>Chocolates</span>
                    <span>+₱250</span>
                  </div>
                )}
                <div className="border-t border-rose/25 pt-2 mt-2 flex justify-between font-semibold text-deep-rose font-serif text-lg">
                  <span>Total</span>
                  <span>₱{total.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT ─────────────────────────────────────────── */}
          <div className="space-y-5 reveal reveal-delay-2">

            {/* ── Wrapper colour dropdown ──────────────────────── */}
            <div className="glass-panel p-5" style={{ overflow: 'visible', isolation: 'auto', backdropFilter: 'none' }}>
              <p className="text-[0.68rem] uppercase tracking-[0.12em] text-text-light mb-3 opacity-75">
                Choose Wrapper Colour
              </p>
              <div className="relative" style={{ zIndex: 30 }}>
                <button
                  onClick={() => setWrapperOpen(o => !o)}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-2xl border transition-all duration-200 text-sm"
                  style={{ border: '1px solid rgba(217,160,180,0.45)', background: 'rgba(250,242,236,0.8)' }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full flex-shrink-0"
                      style={{ background: selectedWrapperObj?.hex, border: `1.5px solid ${selectedWrapperObj?.border}` }} />
                    <span className="text-text-dark text-sm">{selectedWrapperObj?.name}</span>
                  </div>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#b85c7a" strokeWidth="2"
                    style={{ transform: wrapperOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>
                    <path d="M6 9l6 6 6-6"/>
                  </svg>
                </button>

                {wrapperOpen && (
                  <>
                    {/* Invisible backdrop to close on outside click */}
                    <div className="fixed inset-0 z-20" onClick={() => setWrapperOpen(false)} />
                    <div
                      className="absolute top-full left-0 right-0 mt-1 rounded-2xl z-30 overflow-y-auto"
                      style={{
                        background: 'rgba(250,242,236,0.99)',
                        border: '1px solid rgba(217,160,180,0.3)',
                        boxShadow: '0 8px 32px rgba(184,92,122,0.15)',
                        maxHeight: '260px',
                      }}
                    >
                      {WRAPPER_COLOURS.map(w => (
                        <button
                          key={w.id}
                          onClick={() => { setSelectedWrapper(w.id); setWrapperOpen(false) }}
                          className="w-full flex items-center gap-3 px-4 py-2.5 transition-all text-sm text-left"
                          style={{ background: selectedWrapper === w.id ? 'rgba(184,92,122,0.08)' : 'transparent' }}
                        >
                          <div className="w-5 h-5 rounded-full flex-shrink-0"
                            style={{ background: w.hex, border: `1.5px solid ${w.border}` }} />
                          <span style={{ color: selectedWrapper === w.id ? '#b85c7a' : '#2e1a24' }}>{w.name}</span>
                          {selectedWrapper === w.id && <IconCheck />}
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* ── Extra fillers carousel ───────────────────────── */}
            <div className="glass-panel p-5">
              <p className="text-[0.68rem] uppercase tracking-[0.12em] text-text-light mb-1 opacity-75">
                Extra Fillers
              </p>
              <p className="text-xs text-text-light opacity-60 mb-4 font-light">
                Swipe to browse — tap to add filler stems to your bouquet.
              </p>
              <FillerCarousel selected={selectedFillers} onToggle={toggleFiller} />
              {selectedFillers.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-rose/10">
                  {FILLERS.filter(f => selectedFillers.includes(f.id)).map(f => (
                    <span key={f.id} className="text-[0.65rem] px-2.5 py-1 rounded-full"
                      style={{ background: 'rgba(184,92,122,0.1)', color: '#b85c7a', border: '1px solid rgba(184,92,122,0.2)' }}>
                      {f.name}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* ── Add-ons ──────────────────────────────────────── */}
            <div className="glass-panel p-5">
              <p className="text-[0.68rem] uppercase tracking-[0.12em] text-text-light mb-3 opacity-75">
                Add-ons
              </p>
              <div className="space-y-2">
                {PRODUCT_ADDONS.map(a => {
                  const active = selectedAddons.includes(a.id)
                  return (
                    <div key={a.id}>
                      <button
                        onClick={() => toggleAddon(a.id)}
                        className="w-full flex items-center justify-between px-4 py-3 rounded-2xl border transition-all duration-200"
                        style={{
                          border: active ? '1.5px solid #b85c7a' : '1px solid rgba(217,160,180,0.35)',
                          background: active ? 'rgba(184,92,122,0.06)' : 'transparent',
                        }}
                      >
                        <div className="flex items-center gap-3">
                          <span style={{ color: active ? '#b85c7a' : '#d9a0b4' }}>
                            {a.icon === 'letter' ? <IconLetter /> : <IconChoc />}
                          </span>
                          <div className="text-left">
                            <div className="text-sm font-medium" style={{ color: active ? '#b85c7a' : '#2e1a24' }}>
                              {a.name}
                            </div>
                            <div className="text-xs opacity-60" style={{ color: '#7a5560' }}>+₱{a.price}</div>
                          </div>
                        </div>
                        <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ background: active ? '#b85c7a' : 'transparent', border: active ? 'none' : '1.5px solid rgba(184,92,122,0.3)' }}>
                          {active && <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>}
                        </div>
                      </button>

                      {/* Letter text field — expands when selected */}
                      {a.id === 'letter' && active && (
                        <div className="mt-2 px-1">
                          <textarea
                            rows={3}
                            maxLength={500}
                            value={letterText}
                            onChange={e => setLetterText(e.target.value)}
                            placeholder="Write your message here... (max 500 characters)"
                            className="form-input resize-none text-sm"
                            style={{ borderRadius: '14px' }}
                          />
                          <p className="text-right text-[0.65rem] mt-1 opacity-50" style={{ color: '#7a5560' }}>
                            {letterText.length}/500
                          </p>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>

            {/* ── Total + CTA ───────────────────────────────────── */}
            <div className="rounded-3xl p-6 text-center"
              style={{ background: 'linear-gradient(135deg, rgba(184,92,122,0.12), rgba(217,160,180,0.15))' }}>
              <p className="text-xs tracking-[0.1em] uppercase text-text-light opacity-70 mb-1">Your Total</p>
              <p className="font-serif text-4xl font-semibold text-deep-rose mb-4">
                ₱{total.toLocaleString()}
              </p>
              <button onClick={handleInquire} className="btn-messenger rounded-2xl mb-3 w-full">
                Chat with us on Messenger
              </button>
              <p className="text-xs text-text-light opacity-60 leading-relaxed">
                Your order summary will be pre-filled in the message. We'll confirm availability and arrange payment.
              </p>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
