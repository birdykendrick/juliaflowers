import { useState, useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { BOUQUETS, LINKS, FILLERS, WRAPPER_COLOURS, RIBBON_COLOURS, PRODUCT_ADDONS } from '../data/mockData'
import Footer from '../components/Footer'
import useScrollReveal from '../hooks/useScrollReveal'

// ── SVG Icons ────────────────────────────────────────────────
function IconLetter() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M2 7l10 7 10-7" />
    </svg>
  )
}

// Chocolate icon — provided SVG
function IconChoc() {
  return (
    <svg width="20" height="20" viewBox="0 0 122.27 122.88" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M92.81,45.88l28.44,28.44c0.68,0.68,1.02,1.57,1.02,2.46c0,0.89-0.34,1.78-1.02,2.46l-42.63,42.63 c-0.06,0.06-0.13,0.12-0.2,0.18c-0.65,0.56-1.45,0.84-2.26,0.84c-0.89,0-1.78-0.34-2.46-1.02L45.34,93.49l-0.63,1.73 c-0.42,1.16-1.71,1.77-2.87,1.34c-0.32-0.12-0.6-0.3-0.82-0.52l0,0L28.02,83.06c-0.88-0.88-0.88-2.3,0-3.18l51.86-51.86 c0.88-0.88,2.3-0.88,3.18,0l13.2,13.2c0.88,0.88,0.88,2.3,0,3.18c-0.28,0.28-0.62,0.47-0.98,0.57L92.81,45.88L92.81,45.88z M47.03,88.83l29.13,29.13l41.18-41.18l-29.2-29.2l-11.16,4.08l-5.17,18.43c-0.22,0.77-0.81,1.33-1.52,1.54l0,0l-19.07,5.69 L47.03,88.83L47.03,88.83z M0.66,44.67L44.67,0.66c0.88-0.88,2.3-0.88,3.18,0l31.28,31.28c0.88,0.88,0.88,2.3,0,3.18L35.12,79.14 c-0.88,0.88-2.3,0.88-3.18,0L0.66,47.85C-0.22,46.98-0.22,45.55,0.66,44.67L0.66,44.67z M46.26,5.43L5.43,46.26l28.1,28.1 l40.84-40.84L46.26,5.43L46.26,5.43z M32.78,16.51c-0.88-0.88-0.88-2.3,0-3.18c0.88-0.88,2.3-0.88,3.18,0l30.5,30.5 c0.88,0.88,0.88,2.3,0,3.18c-0.88,0.88-2.3,0.88-3.18,0L32.78,16.51L32.78,16.51z M16,60.01c-0.88,0.88-2.3,0.88-3.18,0 c-0.88-0.88-0.88-2.3,0-3.18l44.02-44.02c0.88-0.88,2.3-0.88,3.18,0c0.88,0.88,0.88,2.3,0,3.18L16,60.01L16,60.01z M23.28,26.46 c-0.88-0.88-0.88-2.3,0-3.18c0.88-0.88,2.3-0.88,3.18,0l30.61,30.61c0.88,0.88,0.88,2.3,0,3.18c-0.88,0.88-2.3,0.88-3.18,0 L23.28,26.46L23.28,26.46z M28,70.16c-0.88,0.88-2.3,0.88-3.18,0c-0.88-0.88-0.88-2.3,0-3.18l42.24-42.24 c0.88-0.88,2.3-0.88,3.18,0c0.88,0.88,0.88,2.3,0,3.18L28,70.16L28,70.16z M13.25,35.87c-0.88-0.88-0.88-2.3,0-3.18 c0.88-0.88,2.3-0.88,3.18,0l30.85,30.85c0.88,0.88,0.88,2.3,0,3.18c-0.88,0.88-2.3,0.88-3.18,0L13.25,35.87L13.25,35.87z" />
    </svg>
  )
}

function IconChevronLeft() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 18l-6-6 6-6" />
    </svg>
  )
}
function IconChevronRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18l6-6-6-6" />
    </svg>
  )
}
function IconCheck() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  )
}

// ── Note: filler images and ribbon colours are defined in mockData.js ──
// ── To add/remove options, edit FILLERS or RIBBON_COLOURS there.      ──

// ── Filler Carousel ──────────────────────────────────────────
function FillerCarousel({ selected, onToggle }) {
  const trackRef = useRef(null)

  const scroll = (dir) => {
    if (!trackRef.current) return
    trackRef.current.scrollBy({ left: dir * 180, behavior: 'smooth' })
  }

  return (
    <div className="relative">
      <button
        onClick={() => scroll(-1)}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full flex items-center justify-center"
        style={{ background: 'rgba(250,242,236,0.95)', border: '1px solid rgba(217,160,180,0.3)', color: '#b85c7a', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}
      >
        <IconChevronLeft />
      </button>

      <div
        ref={trackRef}
        className="flex gap-3 overflow-x-auto px-10"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
      >
        <style>{`div::-webkit-scrollbar{display:none}`}</style>
        {FILLERS.map((f) => {
          const active = selected.includes(f.id)
          const imgSrc = f.image
          return (
            <button
              key={f.id}
              onClick={() => onToggle(f.id)}
              className="flex-shrink-0 flex flex-col items-center gap-2 transition-all duration-200"
              style={{ minWidth: '88px' }}
            >
              <div
                className="w-20 h-20 rounded-2xl relative overflow-hidden transition-all duration-200"
                style={{
                  border: active ? '2px solid #b85c7a' : '1.5px solid rgba(217,160,180,0.3)',
                  boxShadow: active ? '0 0 0 3px rgba(184,92,122,0.15)' : 'none',
                }}
              >
                {imgSrc ? (
                  <img
                    src={imgSrc}
                    alt={f.name}
                    className="w-full h-full object-cover"
                    style={{ filter: active ? 'none' : 'saturate(0.85)' }}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center"
                    style={{ background: active ? 'rgba(184,92,122,0.12)' : 'rgba(250,242,236,0.8)' }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={active ? '#b85c7a' : '#d9a0b4'} strokeWidth="1.2">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 2a3 3 0 000 6 3 3 0 000-6zM12 16a3 3 0 000 6 3 3 0 000-6zM2 12a3 3 0 006 0 3 3 0 00-6 0zM16 12a3 3 0 006 0 3 3 0 00-6 0z" />
                    </svg>
                  </div>
                )}
                {active && (
                  <div className="absolute top-1.5 right-1.5 w-5 h-5 rounded-full flex items-center justify-center" style={{ background: '#b85c7a' }}>
                    <IconCheck />
                  </div>
                )}
              </div>
              {/* Larger, darker text */}
              <span
                className="text-xs text-center leading-tight font-medium"
                style={{ color: active ? '#b85c7a' : '#4a2a36', maxWidth: '80px' }}
              >
                {f.name}
              </span>
              <span className="text-xs font-medium" style={{ color: active ? '#b85c7a' : 'rgba(74,42,54,0.7)' }}>
                +₱{f.price}
              </span>
            </button>
          )
        })}
      </div>

      <button
        onClick={() => scroll(1)}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full flex items-center justify-center"
        style={{ background: 'rgba(250,242,236,0.95)', border: '1px solid rgba(217,160,180,0.3)', color: '#b85c7a', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}
      >
        <IconChevronRight />
      </button>
    </div>
  )
}

// ── Wrapper Colour Dropdown ──────────────────────────────────
function WrapperDropdown({ label, value, onChange, open, setOpen, zIndex = 30, customText, onCustomChange }) {
  const selected = WRAPPER_COLOURS.find(w => w.id === value)
  return (
    <div style={{ zIndex, position: 'relative' }}>
      <p className="text-xs font-medium text-text-dark mb-1.5">{label}</p>
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between px-4 py-3 rounded-2xl border transition-all duration-200 text-sm"
        style={{ border: '1px solid rgba(217,160,180,0.45)', background: 'rgba(250,242,236,0.8)' }}
      >
        <div className="flex items-center gap-3">
          {selected?.custom ? (
            <span className="text-text-dark text-sm italic opacity-70">
              {customText || 'Custom colour…'}
            </span>
          ) : (
            <>
              <div className="w-5 h-5 rounded-full flex-shrink-0"
                style={{ background: selected?.hex, border: `1.5px solid ${selected?.border}` }} />
              <span className="text-text-dark text-sm">{selected?.name}</span>
            </>
          )}
        </div>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#b85c7a" strokeWidth="2"
          style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-20" onClick={() => setOpen(false)} />
          <div
            className="absolute top-full left-0 right-0 mt-1 rounded-2xl z-30 overflow-y-auto"
            style={{
              background: 'rgba(250,242,236,0.99)',
              border: '1px solid rgba(217,160,180,0.3)',
              boxShadow: '0 8px 32px rgba(184,92,122,0.15)',
              maxHeight: '240px',
            }}
          >
            {WRAPPER_COLOURS.map(w => (
              <button
                key={w.id}
                onClick={() => { onChange(w.id); setOpen(false) }}
                className="w-full flex items-center gap-3 px-4 py-2.5 transition-all text-sm text-left"
                style={{ background: value === w.id ? 'rgba(184,92,122,0.08)' : 'transparent' }}
              >
                {w.custom ? (
                  <span style={{ color: value === w.id ? '#b85c7a' : '#2e1a24' }}>{w.name}</span>
                ) : (
                  <>
                    <div className="w-5 h-5 rounded-full flex-shrink-0"
                      style={{ background: w.hex, border: `1.5px solid ${w.border}` }} />
                    <span style={{ color: value === w.id ? '#b85c7a' : '#2e1a24' }}>{w.name}</span>
                  </>
                )}
                {value === w.id && <IconCheck />}
              </button>
            ))}
          </div>
        </>
      )}

      {/* Custom colour text input — shown below dropdown when custom is selected */}
      {selected?.custom && (
        <div className="mt-2">
          <input
            type="text"
            value={customText}
            onChange={e => onCustomChange(e.target.value)}
            placeholder="e.g. Dusty mauve, Forest green…"
            className="form-input text-sm"
            style={{ borderRadius: '14px' }}
            maxLength={60}
          />
          <p className="text-[0.65rem] mt-1 font-light" style={{ color: 'rgba(74,42,54,0.5)' }}>
            Describe your colour and we'll do our best to match it!
          </p>
        </div>
      )}
    </div>
  )
}

// ── Main Page ────────────────────────────────────────────────
export default function ProductPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const bouquet = BOUQUETS.find((b) => b.id === parseInt(id))

  useScrollReveal([])

  // Wrapper state
  const [innerWrapper, setInnerWrapper] = useState(WRAPPER_COLOURS[0].id)
  const [outerWrapper, setOuterWrapper] = useState(WRAPPER_COLOURS[0].id)
  const [innerCustom, setInnerCustom] = useState('')
  const [outerCustom, setOuterCustom] = useState('')
  const [hasDoubleWrapper, setHasDoubleWrapper] = useState(false)
  const [innerOpen, setInnerOpen] = useState(false)
  const [outerOpen, setOuterOpen] = useState(false)

  // Ribbon state
  const [ribbonColour, setRibbonColour] = useState('pink')
  const [ribbonCustom, setRibbonCustom] = useState('')
  const [ribbonOpen, setRibbonOpen] = useState(false)
  const [includeRibbon, setIncludeRibbon] = useState(true)

  // Fillers & add-ons
  const [selectedFillers, setSelectedFillers] = useState([])
  const [selectedAddons, setSelectedAddons] = useState([])
  const [letterText, setLetterText] = useState('')

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
  const addonsTotal = selectedAddons.includes('letter') ? 50 : 0
  const chocsTotal = selectedAddons.includes('chocolates') ? 250 : 0
  const total = bouquet.price + fillersTotal + addonsTotal + chocsTotal

  const toggleFiller = (id) =>
    setSelectedFillers(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id])

  const toggleAddon = (id) =>
    setSelectedAddons(prev => {
      const next = prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
      if (!next.includes('letter')) setLetterText('')
      return next
    })

  const innerWrapperObj = WRAPPER_COLOURS.find(w => w.id === innerWrapper)
  const outerWrapperObj = WRAPPER_COLOURS.find(w => w.id === outerWrapper)
  const ribbonObj = RIBBON_COLOURS.find(r => r.id === ribbonColour)

  // ── Messenger message ──────────────────────────────────────
  const buildMessage = () => {
    const fillerNames = FILLERS.filter(f => selectedFillers.includes(f.id)).map(f => f.name)
    const addonNames = PRODUCT_ADDONS.filter(a => selectedAddons.includes(a.id)).map(a => a.name)

    let msg = `Hi MysticBloom! I'd like to order:\n\n`
    msg += `Bouquet: ${bouquet.name} (₱${bouquet.price})\n`

    const innerName = innerWrapperObj?.custom ? (innerCustom || 'Custom colour') : innerWrapperObj?.name
    const outerName = outerWrapperObj?.custom ? (outerCustom || 'Custom colour') : outerWrapperObj?.name

    if (hasDoubleWrapper) {
      msg += `Inner wrapper: ${innerName}\n`
      msg += `Outer wrapper: ${outerName}\n`
    } else {
      msg += `Wrapper: ${innerName}\n`
    }

    if (includeRibbon) {
      const rName = ribbonObj?.custom ? (ribbonCustom || 'Custom colour') : ribbonObj?.name
      msg += `Ribbon: ${rName}\n`
    } else {
      msg += `Ribbon: None\n`
    }

    if (fillerNames.length) msg += `Extra fillers: ${fillerNames.join(', ')}\n`
    if (addonNames.length) msg += `Add-ons: ${addonNames.join(', ')}\n`
    if (selectedAddons.includes('letter') && letterText.trim())
      msg += `Letter message: "${letterText}"\n`
    msg += `\nTotal: ₱${total.toLocaleString()}\n\nPlease confirm availability. Thank you!`
    return encodeURIComponent(msg)
  }

  const handleInquire = () => window.open(`${LINKS.messenger}?text=${buildMessage()}`, '_blank')

  return (
    <>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-20 pb-16">

        {/* Back */}
        <button
          onClick={() => navigate('/gallery')}
          className="flex items-center gap-2 text-xs tracking-[0.1em] uppercase text-text-mid opacity-70 hover:opacity-100 hover:text-deep-rose transition-all mb-6"
        >
          ← Back to Gallery
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

          {/* ── LEFT: Image + Info ────────────────────────────── */}
          <div className="reveal">
            {/* Bouquet image */}
            <div className={`rounded-3xl h-72 sm:h-80 flex items-center justify-center bg-gradient-to-br ${bouquet.bg} relative overflow-hidden mb-4`}>
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

            {/* Name + desc */}
            <h1 className="font-serif text-2xl sm:text-3xl font-medium text-text-dark mb-1.5">{bouquet.name}</h1>
            <p className="text-text-mid font-light leading-relaxed text-sm mb-4 opacity-85">{bouquet.desc}</p>

            {/* Flowers included */}
            {bouquet.flowers?.length > 0 && (
              <div className="mb-4">
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

            {/* Price breakdown — hidden on mobile, shown on desktop */}
            <div className="hidden lg:block rounded-2xl p-5" style={{ background: 'linear-gradient(135deg, rgba(232,197,210,0.4), rgba(240,221,208,0.4))' }}>
              <p className="text-[0.68rem] uppercase tracking-[0.12em] text-text-light mb-3 opacity-75">Price Breakdown</p>
              <div className="space-y-1.5 text-sm">
                <div className="flex justify-between text-text-mid">
                  <span>Base bouquet</span>
                  <span>₱{bouquet.price.toLocaleString()}</span>
                </div>
                {/* Wrapper lines */}
                <div className="flex justify-between text-text-mid">
                  <span>{hasDoubleWrapper ? 'Inner wrapper' : 'Wrapper'} — {innerWrapperObj?.custom ? (innerCustom || 'Custom') : innerWrapperObj?.name}</span>
                  <span className="opacity-50">Included</span>
                </div>
                {hasDoubleWrapper && (
                  <div className="flex justify-between text-text-mid">
                    <span>Outer wrapper — {outerWrapperObj?.custom ? (outerCustom || 'Custom') : outerWrapperObj?.name}</span>
                    <span className="opacity-50">Included</span>
                  </div>
                )}
                {/* Ribbon line */}
                {includeRibbon && (
                  <div className="flex justify-between text-text-mid">
                    <span>Ribbon — {ribbonObj?.custom ? (ribbonCustom || 'Custom') : ribbonObj?.name}</span>
                    <span className="opacity-50">Included</span>
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

          {/* ── RIGHT: Options ────────────────────────────────── */}
          <div className="space-y-4 reveal reveal-delay-2">

            {/* ── Wrapper section ──────────────────────────────── */}
            <div className="glass-panel p-5" style={{ overflow: 'visible', isolation: 'auto', backdropFilter: 'none' }}>
              <p className="text-[0.68rem] uppercase tracking-[0.12em] text-text-light mb-3 opacity-75">
                Wrapper
              </p>

              {/* Single wrapper dropdown */}
              <WrapperDropdown
                label={hasDoubleWrapper ? 'Inner Wrapper' : 'Wrapper Colour'}
                value={innerWrapper}
                onChange={setInnerWrapper}
                open={innerOpen}
                setOpen={setInnerOpen}
                zIndex={hasDoubleWrapper ? 32 : 30}
                customText={innerCustom}
                onCustomChange={setInnerCustom}
              />

              {/* Double wrapper toggle */}
              <button
                onClick={() => setHasDoubleWrapper(v => !v)}
                className="mt-3 flex items-center gap-2 text-xs font-medium transition-colors"
                style={{ color: hasDoubleWrapper ? '#b85c7a' : 'rgba(74,42,54,0.55)' }}
              >
                <div
                  className="w-4 h-4 rounded flex items-center justify-center flex-shrink-0 transition-all"
                  style={{
                    background: hasDoubleWrapper ? '#b85c7a' : 'transparent',
                    border: hasDoubleWrapper ? 'none' : '1.5px solid rgba(184,92,122,0.4)',
                  }}
                >
                  {hasDoubleWrapper && (
                    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><path d="M20 6L9 17l-5-5" /></svg>
                  )}
                </div>
                Add a second (outer) wrapper
              </button>

              {/* Outer wrapper — only shown when toggled */}
              {hasDoubleWrapper && (
                <div className="mt-3 pt-3 border-t border-rose/15">
                  <WrapperDropdown
                    label="Outer Wrapper"
                    value={outerWrapper}
                    onChange={setOuterWrapper}
                    open={outerOpen}
                    setOpen={setOuterOpen}
                    zIndex={30}
                    customText={outerCustom}
                    onCustomChange={setOuterCustom}
                  />
                  <p className="text-[0.68rem] mt-2 font-light" style={{ color: 'rgba(74,42,54,0.5)' }}>
                    The inner wrap sits closest to the flowers; outer wrap adds a second layer of colour.
                  </p>
                </div>
              )}
            </div>

            {/* ── Ribbon section ───────────────────────────────── */}
            <div className="glass-panel p-5" style={{ overflow: 'visible', isolation: 'auto', backdropFilter: 'none' }}>
              <div className="flex items-center justify-between mb-3">
                <p className="text-[0.68rem] uppercase tracking-[0.12em] text-text-light opacity-75">
                  Ribbon
                </p>
                
              </div>

              {includeRibbon && (
                <>
                  {/* Ribbon colour picker */}
                  <div className="relative" style={{ zIndex: 28 }}>
                    <p className="text-xs font-medium text-text-dark mb-1.5">Ribbon Colour</p>
                    <button
                      onClick={() => setRibbonOpen(o => !o)}
                      className="w-full flex items-center justify-between px-4 py-3 rounded-2xl border transition-all duration-200 text-sm"
                      style={{ border: '1px solid rgba(217,160,180,0.45)', background: 'rgba(250,242,236,0.8)' }}
                    >
                      <div className="flex items-center gap-3">
                        {!ribbonObj?.custom && (
                          <div className="w-5 h-5 rounded-full flex-shrink-0"
                            style={{ background: ribbonObj?.hex, border: `1.5px solid ${ribbonObj?.border}` }} />
                        )}
                        <span className="text-text-dark text-sm">
                          {ribbonObj?.custom ? (ribbonCustom || 'Custom colour…') : ribbonObj?.name}
                        </span>
                      </div>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#b85c7a" strokeWidth="2"
                        style={{ transform: ribbonOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </button>

                    {ribbonOpen && (
                      <>
                        <div className="fixed inset-0 z-20" onClick={() => setRibbonOpen(false)} />
                        <div
                          className="absolute top-full left-0 right-0 mt-1 rounded-2xl z-30 overflow-hidden"
                          style={{
                            background: 'rgba(250,242,236,0.99)',
                            border: '1px solid rgba(217,160,180,0.3)',
                            boxShadow: '0 8px 32px rgba(184,92,122,0.15)',
                          }}
                        >
                          {RIBBON_COLOURS.map(r => (
                            <button
                              key={r.id}
                              onClick={() => { setRibbonColour(r.id); setRibbonOpen(false) }}
                              className="w-full flex items-center gap-3 px-4 py-2.5 transition-all text-sm text-left"
                              style={{ background: ribbonColour === r.id ? 'rgba(184,92,122,0.08)' : 'transparent' }}
                            >
                              {!r.custom && r.hex && (
                                <div className="w-5 h-5 rounded-full flex-shrink-0"
                                  style={{ background: r.hex, border: `1.5px solid ${r.border}` }} />
                              )}
                              <span style={{ color: ribbonColour === r.id ? '#b85c7a' : '#2e1a24' }}>{r.name}</span>
                              {ribbonColour === r.id && <IconCheck />}
                            </button>
                          ))}
                        </div>
                      </>
                    )}
                  </div>

                  {/* Custom colour text input — shown when the selected ribbon has custom: true */}
                  {ribbonObj?.custom && (
                    <div className="mt-3">
                      <input
                        type="text"
                        value={ribbonCustom}
                        onChange={e => setRibbonCustom(e.target.value)}
                        placeholder="e.g. Dusty mauve, Navy blue…"
                        className="form-input text-sm"
                        style={{ borderRadius: '14px' }}
                        maxLength={60}
                      />
                      <p className="text-[0.65rem] mt-1.5 font-light" style={{ color: 'rgba(74,42,54,0.5)' }}>
                        Describe your colour and we'll do our best to match it!
                      </p>
                    </div>
                  )}
                </>
              )}
            </div>

            {/* ── Extra Fillers carousel ───────────────────────── */}
            <div className="glass-panel p-5">
              <p className="text-[0.68rem] uppercase tracking-[0.12em] text-text-light mb-1 opacity-75">
                Extra Fillers{' '}
                <span className="normal-case tracking-normal text-[0.7rem] opacity-100">
                  (If you want a filler you don't see here, just let us know in your message!)
                </span>
              </p>
              <p className="text-sm font-medium text-text-dark mb-4">
                Swipe to browse — tap to add filler stems to your bouquet.
              </p>
              <FillerCarousel selected={selectedFillers} onToggle={toggleFiller} />
              {selectedFillers.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-rose/10">
                  {FILLERS.filter(f => selectedFillers.includes(f.id)).map(f => (
                    <span key={f.id} className="text-xs px-2.5 py-1 rounded-full"
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
                          {active && <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><path d="M20 6L9 17l-5-5" /></svg>}
                        </div>
                      </button>

                      {a.id === 'letter' && active && (
                        <div className="mt-2 px-1">
                          <textarea
                            rows={3}
                            maxLength={500}
                            value={letterText}
                            onChange={e => setLetterText(e.target.value)}
                            placeholder="Write your message here… (max 500 characters)"
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

            {/* ── Mobile price breakdown ───────────────────────── */}
            <div className="lg:hidden rounded-2xl p-4" style={{ background: 'linear-gradient(135deg, rgba(232,197,210,0.4), rgba(240,221,208,0.4))' }}>
              <p className="text-[0.68rem] uppercase tracking-[0.12em] text-text-light mb-2 opacity-75">Price Breakdown</p>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between text-text-mid">
                  <span>Base bouquet</span>
                  <span>₱{bouquet.price.toLocaleString()}</span>
                </div>
                {/* Wrapper lines */}
                <div className="flex justify-between text-text-mid">
                  <span>{hasDoubleWrapper ? 'Inner wrapper' : 'Wrapper'} — {innerWrapperObj?.custom ? (innerCustom || 'Custom') : innerWrapperObj?.name}</span>
                  <span className="opacity-50">Included</span>
                </div>
                {hasDoubleWrapper && (
                  <div className="flex justify-between text-text-mid">
                    <span>Outer wrapper — {outerWrapperObj?.custom ? (outerCustom || 'Custom') : outerWrapperObj?.name}</span>
                    <span className="opacity-50">Included</span>
                  </div>
                )}
                {/* Ribbon line */}
                {includeRibbon && (
                  <div className="flex justify-between text-text-mid">
                    <span>Ribbon — {ribbonObj?.custom ? (ribbonCustom || 'Custom') : ribbonObj?.name}</span>
                    <span className="opacity-50">Included</span>
                  </div>
                )}
                {FILLERS.filter(f => selectedFillers.includes(f.id)).map(f => (
                  <div key={f.id} className="flex justify-between text-text-mid">
                    <span>{f.name}</span><span>+₱{f.price}</span>
                  </div>
                ))}
                {selectedAddons.includes('letter') && (
                  <div className="flex justify-between text-text-mid"><span>Personalised Letter</span><span>+₱50</span></div>
                )}
                {selectedAddons.includes('chocolates') && (
                  <div className="flex justify-between text-text-mid"><span>Chocolates</span><span>+₱250</span></div>
                )}
                <div className="border-t border-rose/25 pt-2 mt-1 flex justify-between font-semibold text-deep-rose font-serif text-lg">
                  <span>Total</span><span>₱{total.toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* ── Total + CTA ───────────────────────────────────── */}
            <div className="rounded-3xl p-5 text-center"
              style={{ background: 'linear-gradient(135deg, rgba(184,92,122,0.12), rgba(217,160,180,0.15))' }}>
              <p className="text-xs tracking-[0.1em] uppercase text-text-light opacity-70 mb-1">Your Total</p>
              <p className="font-serif text-4xl font-semibold text-deep-rose mb-4">
                ₱{total.toLocaleString()}
              </p>
              <button onClick={handleInquire} className="btn-messenger rounded-2xl mb-3 w-full">
                💬 Chat with us on Messenger
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
