import { useState } from 'react'
import { BOUQUETS, GALLERY_FILTERS, LINKS } from '../data/mockData'
import BouquetCard     from '../components/BouquetCard'
import Footer          from '../components/Footer'
import useScrollReveal from '../hooks/useScrollReveal'

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all')
  useScrollReveal([activeFilter])

  const filtered =
    activeFilter === 'all' ? BOUQUETS : BOUQUETS.filter((b) => b.category === activeFilter)

  const isComingSoon = GALLERY_FILTERS.find((f) => f.id === activeFilter)?.comingSoon

  return (
    <>
      {/* ── HEADER ───────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 pt-24 pb-4">
        <div className="reveal">
          <p className="eyebrow mb-3">Our Work</p>
          <h1
            className="font-serif font-medium text-text-dark leading-tight"
            style={{ fontSize: 'clamp(1.9rem, 3.5vw, 2.7rem)' }}
          >
            Bouquet <em className="text-deep-rose italic">Gallery</em>
          </h1>
          <div className="w-14 h-px bg-rose/60 my-4" />
          <p className="text-text-mid text-[0.92rem] font-light leading-relaxed max-w-xl opacity-80">
            A curated collection of our most beloved arrangements. Every piece made to order, every petal chosen with care.
          </p>
        </div>

        {/* ── Filter pills ─────────────────────────────────── */}
        <div className="flex gap-2 flex-wrap mt-6 reveal">
          {GALLERY_FILTERS.map(({ id, label, comingSoon }) => (
            <button
              key={id}
              onClick={() => !comingSoon && setActiveFilter(id)}
              disabled={comingSoon}
              className={[
                'relative text-xs tracking-[0.06em] px-4 py-1.5 rounded-full border transition-all duration-200',
                comingSoon
                  ? 'bg-transparent text-text-light border-rose/20 opacity-60 cursor-not-allowed'
                  : activeFilter === id
                  ? 'bg-deep-rose text-white border-deep-rose'
                  : 'bg-transparent text-text-mid border-rose/45 hover:border-deep-rose hover:text-deep-rose',
              ].join(' ')}
            >
              {label}
              {comingSoon && (
                <span className="ml-2 text-[9px] tracking-[0.08em] uppercase bg-rose/15 text-deep-rose px-1.5 py-0.5 rounded-full font-medium">
                  Soon
                </span>
              )}
            </button>
          ))}
        </div>
      </section>

      {/* ── GRID ─────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 pt-5 pb-8">
        {isComingSoon ? (
          <div
            className="rounded-3xl py-14 px-8 text-center reveal"
            style={{ background: 'linear-gradient(135deg, rgba(232,197,210,0.35), rgba(240,221,208,0.35))' }}
          >
            <div className="text-5xl mb-4">🌸</div>
            <h3 className="font-serif text-xl font-medium text-text-dark mb-2">
              Coming <em className="text-deep-rose italic">Soon</em>
            </h3>
            <p className="text-text-mid text-sm font-light leading-relaxed max-w-sm mx-auto opacity-80 mb-5">
              We're working on this collection! Message us — we may be able to arrange something special.
            </p>
            <a
              href={LINKS.messenger}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-messenger max-w-xs mx-auto rounded-full"
            >
              💬 Ask Us on Messenger
            </a>
          </div>
        ) : filtered.length > 0 ? (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
            {filtered.map((b, i) => (
              <div key={b.id} className={`reveal reveal-delay-${Math.min(i % 4 + 1, 5)}`}>
                <BouquetCard bouquet={b} />
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-text-light py-16 font-light italic opacity-70">
            No bouquets in this category yet.
          </p>
        )}
      </section>

      {/* ── CTA STRIP ────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 pb-14 reveal">
        <style>{`
          @keyframes petalDrift1 {
            0%, 100% { transform: translate(0,0) rotate(0deg); opacity: 0.7; }
            50%       { transform: translate(6px,-10px) rotate(12deg); opacity: 1; }
          }
          @keyframes petalDrift2 {
            0%, 100% { transform: translate(0,0) rotate(0deg); opacity: 0.5; }
            50%       { transform: translate(-8px,-6px) rotate(-10deg); opacity: 0.85; }
          }
          .drift-1 { animation: petalDrift1 6s ease-in-out infinite; }
          .drift-2 { animation: petalDrift2 7s ease-in-out infinite 1s; }
        `}</style>
        <div
          className="rounded-3xl p-8 md:p-12 relative overflow-hidden"
          style={{ background: '#2e1a24' }}
        >
          {/* Inner glow */}
          <div className="absolute inset-0 pointer-events-none" style={{
            background: 'radial-gradient(ellipse at 20% 50%, rgba(184,92,122,0.22) 0%, transparent 55%), radial-gradient(ellipse at 80% 20%, rgba(217,160,180,0.14) 0%, transparent 45%)',
          }} />

          {/* Drifting petal SVGs */}
          <svg className="drift-1 absolute top-6 right-16 w-8 h-8 opacity-40 pointer-events-none" viewBox="0 0 40 40">
            <ellipse cx="20" cy="20" rx="7" ry="16" fill="none" stroke="#d9a0b4" strokeWidth="1.2" transform="rotate(25 20 20)" />
          </svg>
          <svg className="drift-2 absolute bottom-8 right-24 w-6 h-6 opacity-25 pointer-events-none" viewBox="0 0 40 40">
            <path d="M20 4 C26 10 26 28 20 34 C14 28 14 10 20 4Z" fill="none" stroke="#d9a0b4" strokeWidth="1.2" />
          </svg>
          <svg className="drift-1 absolute bottom-6 left-10 w-7 h-7 opacity-20 pointer-events-none" viewBox="0 0 40 40">
            <ellipse cx="20" cy="20" rx="8" ry="14" fill="none" stroke="#c8a0b0" strokeWidth="1" transform="rotate(40 20 20)" />
          </svg>

          <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
            <div className="flex-1">
              <h2 style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
                fontWeight: 300, lineHeight: 1.1,
                color: '#fdf5f0', margin: '0 0 12px',
              }}>
                Can't find the one?<br />
                <em style={{ color: '#d9a0b4', fontStyle: 'italic' }}>Design your own.</em>
              </h2>
              <p style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: '0.87rem', fontWeight: 300,
                color: 'rgba(253,245,240,0.6)', lineHeight: 1.75,
                maxWidth: '360px',
              }}>
                Pick your blooms, choose your wrap, add a sweet note.
                We'll put it together with love and bring it right to your door.
              </p>
            </div>

            <div className="flex-shrink-0 flex flex-col items-start md:items-center gap-3">
              <a
                href="/builder"
                style={{
                  background: 'linear-gradient(135deg, #b85c7a, #c87090)',
                  color: '#fff', border: 'none',
                  padding: '14px 32px', borderRadius: '999px',
                  fontFamily: "'Jost', sans-serif",
                  fontSize: '0.8rem', letterSpacing: '0.15em',
                  textTransform: 'uppercase', fontWeight: 400,
                  cursor: 'pointer', transition: 'all 0.25s',
                  boxShadow: '0 8px 28px rgba(184,92,122,0.4)',
                  whiteSpace: 'nowrap', textDecoration: 'none',
                  display: 'inline-block',
                }}
              >
                Start Building
              </a>
              <p style={{
                fontSize: '0.68rem', color: 'rgba(217,160,180,0.6)',
                fontFamily: "'Jost', sans-serif", letterSpacing: '0.06em',
                textAlign: 'center', margin: 0,
              }}>
                Free to design · No commitment
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
