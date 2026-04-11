import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { BOUQUETS, FLOWERS, WRAPPERS, BOUQUET_STYLES, ADDONS, LINKS } from '../data/mockData'
import Footer from '../components/Footer'
import useScrollReveal from '../hooks/useScrollReveal'

export default function ProductPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const bouquet = BOUQUETS.find((b) => b.id === parseInt(id))

  useScrollReveal([])

  // ── Customisation state ──────────────────────────────────────
  const [selectedWrapper, setSelectedWrapper] = useState(WRAPPERS[0].id)
  const [selectedStyle,   setSelectedStyle]   = useState(BOUQUET_STYLES[0].id)
  const [flowerQtys,      setFlowerQtys]       = useState({})
  const [selectedAddons,  setSelectedAddons]   = useState([])
  const [note,            setNote]             = useState('')

  useEffect(() => { window.scrollTo(0, 0) }, [])

  if (!bouquet) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-5xl mb-4">🌸</p>
          <h2 className="font-serif text-2xl text-text-dark mb-2">Bouquet not found</h2>
          <button className="btn-primary mt-4" onClick={() => navigate('/gallery')}>Back to Gallery</button>
        </div>
      </div>
    )
  }

  // ── Price calculation ────────────────────────────────────────
  const wrapperPrice = WRAPPERS.find((w) => w.id === selectedWrapper)?.price ?? 0
  const stylePrice   = BOUQUET_STYLES.find((s) => s.id === selectedStyle)?.price ?? 0
  const flowersTotal = FLOWERS.reduce((sum, f) => sum + (flowerQtys[f.id] || 0) * f.price, 0)
  const addonsTotal  = ADDONS.filter((a) => selectedAddons.includes(a.id)).reduce((s, a) => s + a.price, 0)
  const notePrice    = note.trim() ? 50 : 0
  const total        = bouquet.price + wrapperPrice + stylePrice + flowersTotal + addonsTotal + notePrice

  const toggleAddon = (id) =>
    setSelectedAddons((prev) => prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id])

  const changeFlower = (id, delta) =>
    setFlowerQtys((prev) => ({ ...prev, [id]: Math.max(0, (prev[id] || 0) + delta) }))

  // ── Messenger message builder ────────────────────────────────
  const buildMessage = () => {
    const wrapper = WRAPPERS.find((w) => w.id === selectedWrapper)?.name
    const style   = BOUQUET_STYLES.find((s) => s.id === selectedStyle)?.name
    const extras  = FLOWERS.filter((f) => flowerQtys[f.id] > 0)
      .map((f) => `${f.name} x${flowerQtys[f.id]}`)
    const addons  = ADDONS.filter((a) => selectedAddons.includes(a.id)).map((a) => a.name)

    let msg = `Hi MysticBloom! I'd like to order:\n\n`
    msg += `🌺 Bouquet: ${bouquet.name} (₱${bouquet.price})\n`
    msg += `🎀 Wrapper: ${wrapper}\n`
    msg += `💐 Style: ${style}\n`
    if (extras.length)  msg += `➕ Extra stems: ${extras.join(', ')}\n`
    if (addons.length)  msg += `🎁 Add-ons: ${addons.join(', ')}\n`
    if (note.trim())    msg += `✉️ Note: "${note}"\n`
    msg += `\n💰 Total: ₱${total.toLocaleString()}\n\nPlease confirm availability. Thank you!`
    return encodeURIComponent(msg)
  }

  const handleInquire = () => {
    const url = `${LINKS.messenger}?text=${buildMessage()}`
    window.open(url, '_blank')
  }

  const wrapperObj = WRAPPERS.find((w) => w.id === selectedWrapper)
  const styleObj   = BOUQUET_STYLES.find((s) => s.id === selectedStyle)

  return (
    <>
      <div className="max-w-6xl mx-auto px-6 pt-28 pb-20">

        {/* Back button */}
        <button
          onClick={() => navigate('/gallery')}
          className="flex items-center gap-2 text-xs tracking-[0.1em] uppercase text-text-mid opacity-70 hover:opacity-100 hover:text-deep-rose transition-all mb-10"
        >
          ← Back to Gallery
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* ── LEFT: Image + base info ─────────────────────── */}
          <div className="reveal">
            {/* Image card */}
            <div
              className={`rounded-3xl h-96 flex items-center justify-center bg-gradient-to-br ${bouquet.bg} relative overflow-visible mb-6`}
            >
              {bouquet.image ? (
                <img
                  src={bouquet.image}
                  alt={bouquet.name}
                  className="w-full h-full object-contain scale-110"
                />
              ) : (
                <span className="text-9xl">{bouquet.emoji}</span>
              )}
              {bouquet.badge && (
                <span className="absolute top-4 right-4 text-xs bg-white/85 text-deep-rose px-3 py-1 rounded-full font-medium tracking-wide shadow-sm">
                  {bouquet.badge}
                </span>
              )}
            </div>

            {/* Base info */}
            <h1 className="font-serif text-3xl font-medium text-text-dark mb-2">{bouquet.name}</h1>
            <p className="text-text-mid font-light leading-relaxed text-sm mb-4 opacity-85">{bouquet.desc}</p>

            {/* What's included */}
            {bouquet.flowers && bouquet.flowers.length > 0 && (
              <div className="mb-5">
                <p className="text-[0.68rem] uppercase tracking-[0.12em] text-text-light opacity-75 mb-2">
                  Flowers Included
                </p>
                <div className="flex flex-wrap gap-2">
                  {bouquet.flowers.map((f) => (
                    <span
                      key={f}
                      className="text-xs bg-white/70 border border-rose/20 text-text-mid px-3 py-1.5 rounded-full"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Price summary card */}
            <div
              className="rounded-2xl p-5"
              style={{ background: 'linear-gradient(135deg, rgba(232,197,210,0.4), rgba(240,221,208,0.4))' }}
            >
              <p className="text-[0.68rem] uppercase tracking-[0.12em] text-text-light mb-3 opacity-75">Price Breakdown</p>
              <div className="space-y-1.5 text-sm">
                <div className="flex justify-between text-text-mid">
                  <span>Base bouquet</span>
                  <span>₱{bouquet.price.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-text-mid">
                  <span>Wrapper — {wrapperObj?.name}</span>
                  <span>₱{wrapperPrice}</span>
                </div>
                {styleObj?.price > 0 && (
                  <div className="flex justify-between text-text-mid">
                    <span>Style — {styleObj?.name}</span>
                    <span>₱{stylePrice}</span>
                  </div>
                )}
                {FLOWERS.filter((f) => flowerQtys[f.id] > 0).map((f) => (
                  <div key={f.id} className="flex justify-between text-text-mid">
                    <span>Extra {f.name} x{flowerQtys[f.id]}</span>
                    <span>₱{(flowerQtys[f.id] * f.price).toLocaleString()}</span>
                  </div>
                ))}
                {ADDONS.filter((a) => selectedAddons.includes(a.id)).map((a) => (
                  <div key={a.id} className="flex justify-between text-text-mid">
                    <span>{a.emoji} {a.name}</span>
                    <span>₱{a.price}</span>
                  </div>
                ))}
                {note.trim() && (
                  <div className="flex justify-between text-text-mid">
                    <span>✉️ Personalized note</span>
                    <span>₱50</span>
                  </div>
                )}
                <div className="border-t border-rose/25 pt-2 mt-2 flex justify-between font-semibold text-deep-rose font-serif text-lg">
                  <span>Total</span>
                  <span>₱{total.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Customiser ───────────────────────────── */}
          <div className="space-y-6 reveal reveal-delay-2">

            {/* Wrapper */}
            <div className="glass-panel p-5">
              <p className="text-[0.68rem] uppercase tracking-[0.12em] text-text-light mb-3 opacity-75">Choose Wrapper</p>
              <div className="grid grid-cols-2 gap-2">
                {WRAPPERS.map((w) => (
                  <button
                    key={w.id}
                    onClick={() => setSelectedWrapper(w.id)}
                    className={[
                      'text-left px-4 py-3 rounded-2xl border text-sm transition-all duration-200',
                      selectedWrapper === w.id
                        ? 'border-deep-rose bg-deep-rose/8 text-deep-rose'
                        : 'border-rose/25 text-text-mid hover:border-deep-rose/50',
                    ].join(' ')}
                  >
                    <div className="font-medium text-xs">{w.name}</div>
                    <div className="text-xs opacity-60 mt-0.5">+₱{w.price}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Style */}
            <div className="glass-panel p-5">
              <p className="text-[0.68rem] uppercase tracking-[0.12em] text-text-light mb-3 opacity-75">Bouquet Style</p>
              <div className="grid grid-cols-2 gap-2">
                {BOUQUET_STYLES.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setSelectedStyle(s.id)}
                    className={[
                      'text-left px-4 py-3 rounded-2xl border text-sm transition-all duration-200',
                      selectedStyle === s.id
                        ? 'border-deep-rose bg-deep-rose/8 text-deep-rose'
                        : 'border-rose/25 text-text-mid hover:border-deep-rose/50',
                    ].join(' ')}
                  >
                    <div className="font-medium text-xs">{s.name}</div>
                    <div className="text-xs opacity-60 mt-0.5">{s.price === 0 ? 'Included' : `+₱${s.price}`}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Extra stems */}
            <div className="glass-panel p-5">
              <p className="text-[0.68rem] uppercase tracking-[0.12em] text-text-light mb-1 opacity-75">Add Extra Stems</p>
              <p className="text-xs text-text-light opacity-60 mb-3">Want more? Add individual stems on top of your bouquet.</p>
              <div className="space-y-2">
                {FLOWERS.map((f) => (
                  <div key={f.id} className="flex items-center justify-between py-2 border-b border-rose/10 last:border-0">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{f.emoji}</span>
                      <div>
                        <div className="text-sm text-text-dark">{f.name}</div>
                        <div className="text-xs text-text-light opacity-70">₱{f.price}/stem</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => changeFlower(f.id, -1)}
                        className="w-7 h-7 rounded-full border border-rose/35 text-text-mid hover:border-deep-rose hover:text-deep-rose transition-all text-sm flex items-center justify-center"
                      >−</button>
                      <span className="text-sm font-medium text-text-dark w-4 text-center">
                        {flowerQtys[f.id] || 0}
                      </span>
                      <button
                        onClick={() => changeFlower(f.id, 1)}
                        className="w-7 h-7 rounded-full border border-rose/35 text-text-mid hover:border-deep-rose hover:text-deep-rose transition-all text-sm flex items-center justify-center"
                      >+</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Add-ons */}
            <div className="glass-panel p-5">
              <p className="text-[0.68rem] uppercase tracking-[0.12em] text-text-light mb-3 opacity-75">Add-ons & Extras</p>
              <div className="grid grid-cols-2 gap-2">
                {ADDONS.map((a) => (
                  <button
                    key={a.id}
                    onClick={() => toggleAddon(a.id)}
                    className={[
                      'text-left px-3 py-3 rounded-2xl border transition-all duration-200',
                      selectedAddons.includes(a.id)
                        ? 'border-deep-rose bg-deep-rose/8'
                        : 'border-rose/25 hover:border-deep-rose/50',
                    ].join(' ')}
                  >
                    <div className="text-lg mb-0.5">{a.emoji}</div>
                    <div className="text-xs font-medium text-text-dark leading-tight">{a.name}</div>
                    <div className="text-xs text-text-light opacity-60 mt-0.5">+₱{a.price}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Personalized note */}
            <div className="glass-panel p-5">
              <p className="text-[0.68rem] uppercase tracking-[0.12em] text-text-light mb-1 opacity-75">
                Personalized Note <span className="normal-case tracking-normal opacity-50">(+₱50)</span>
              </p>
              <p className="text-xs text-text-light opacity-60 mb-3">We'll handwrite this on a card for you</p>
              <textarea
                rows={3}
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="e.g. Happy Birthday! Wishing you all the love in the world..."
                className="form-input resize-none"
              />
            </div>

            {/* Total + CTA */}
            <div
              className="rounded-3xl p-6 text-center"
              style={{ background: 'linear-gradient(135deg, rgba(184,92,122,0.12), rgba(217,160,180,0.15))' }}
            >
              <p className="text-xs tracking-[0.1em] uppercase text-text-light opacity-70 mb-1">Your Total</p>
              <p className="font-serif text-4xl font-semibold text-deep-rose mb-4">
                ₱{total.toLocaleString()}
              </p>
              <button
                onClick={handleInquire}
                className="btn-messenger rounded-2xl mb-3"
              >
                💬 Inquire on Messenger
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
