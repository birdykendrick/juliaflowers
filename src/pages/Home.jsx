import { useNavigate } from 'react-router-dom'
import { BOUQUETS, TESTIMONIALS } from '../data/mockData'
import BouquetCard from '../components/BouquetCard'
import TestimonialCard from '../components/TestimonialCard'
import SectionHeader from '../components/SectionHeader'
import HowItWorks from '../components/HowItWorks'
import Footer from '../components/Footer'
import useScrollReveal from '../hooks/useScrollReveal'

export default function Home() {
  const navigate = useNavigate()
  useScrollReveal([])

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────── */}
<section
  className="relative overflow-hidden"
  style={{ height: '72vh', minHeight: 500, maxHeight: 700 }}
>
  <style>{`
    @keyframes heroFadeUp {
      from { opacity: 0; transform: translateY(20px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes heroFadeIn {
      from { opacity: 0; }
      to   { opacity: 1; }
    }
    .hero-anim {
      opacity: 0;
      animation: heroFadeUp 0.75s ease forwards;
    }
    .hero-anim-fade {
      opacity: 0;
      animation: heroFadeIn 0.75s ease forwards;
    }
    .hero-glass-btn:hover {
      background: rgba(255,255,255,0.14) !important;
    }
  `}</style>

  <img
    src="/images/hero-banner.jpg"
    alt="MysticBloom fresh flowers"
    className="absolute inset-0 w-full h-full object-cover object-center"
  />

  <div
    className="absolute inset-0 z-[2]"
    style={{ background: 'rgba(18,6,12,0.40)' }}
  />

  <div
    className="absolute inset-0 z-[3] pointer-events-none"
    style={{
      background:
        'radial-gradient(ellipse at center, transparent 38%, rgba(8,2,6,0.34) 100%)',
    }}
  />

  <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6">

    {/* Eyebrow — fully centered with equal lines */}
    <div
      className="hero-anim"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '12px',
        marginBottom: '20px',
        animationDelay: '0.1s',
        width: '100%',
      }}
    >
      <span
        style={{
          display: 'block',
          width: '32px',
          flexShrink: 0,
          height: '1px',
          background: 'rgba(255, 228, 235, 0.6)',
        }}
      />
      <p
        style={{
          color: 'rgba(255,245,248,0.95)',
          fontSize: '11px',
          fontWeight: 300,
          letterSpacing: '0.2em',
          textShadow: '0 1px 10px rgba(0,0,0,0.14)',
          textTransform: 'uppercase',
          margin: 0,
          whiteSpace: 'nowrap',
        }}
      >
        Fresh flowers, made with care
      </p>
      <span
        style={{
          display: 'block',
          width: '32px',
          flexShrink: 0,
          height: '1px',
          background: 'rgba(255, 228, 235, 0.6)',
        }}
      />
    </div>

    <h1
      className="font-serif font-light text-white leading-[1.05] mb-5 hero-anim"
      style={{
        fontSize: 'clamp(2.8rem, 7vw, 5.8rem)',
        fontStyle: 'italic',
        textShadow: '0 2px 32px rgba(0,0,0,0.22)',
        animationDelay: '0.25s',
      }}
    >
      Fresh Blooms
      <br />
      For <em style={{ color: '#ffc0d0' }}>Every</em> Occasion
    </h1>

    <div
      className="flex items-center gap-4 mb-5 hero-anim-fade"
      style={{ animationDelay: '0.4s' }}
    >
      <span
        className="block w-10 h-px"
        style={{ background: 'rgba(255, 255, 255, 0.6)' }}
      />
      <span style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: 12 }}>✦</span>
      <span
        className="block w-10 h-px"
        style={{ background: 'rgba(255, 255, 255, 0.6)' }}
      />
    </div>

    <p
  className="text-sm leading-relaxed mb-9 max-w-sm font-light hero-anim"
  style={{ color: 'rgba(255, 255, 255, 0.85)', animationDelay: '0.5s' }}
>
  Thoughtful blooms.{' '}
  <span style={{ color: '#fff', fontWeight: 400 }}>
    Fresh flowers arranged with care
  </span>{' '}
  for life's little moments.
</p>

    {/* CTA buttons — original pill style */}
    <div
      className="flex items-center gap-4 flex-wrap justify-center hero-anim"
      style={{ animationDelay: '0.65s' }}
    >
      <button
        className="inline-flex items-center gap-2 text-[10.5px] tracking-[0.18em] uppercase text-white px-8 py-3.5 rounded-full transition-all duration-300 ease-out hover:-translate-y-[2px] hover:scale-[1.02] hover:brightness-105 active:scale-[0.99]"
        style={{
          background: 'linear-gradient(135deg, #b05570 0%, #c06a84 100%)',
          boxShadow: '0 10px 30px rgba(176,85,112,0.20)',
        }}
        onClick={() => navigate('/gallery')}
      >
        Shop Bouquets
      </button>

      <button
        className="hero-glass-btn inline-flex items-center gap-2 text-[10.5px] tracking-[0.18em] uppercase px-8 py-3.5 rounded-full transition-all duration-300 ease-out hover:-translate-y-[2px] hover:scale-[1.02] active:scale-[0.99]"
        style={{
          color: 'rgba(255,255,255,0.92)',
          border: '1px solid rgba(255,255,255,0.38)',
          backdropFilter: 'blur(8px)',
          background: 'rgba(255,255,255,0.08)',
          boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
        }}
        onClick={() => navigate('/builder')}
      >
        Build Your Bouquet
      </button>
    </div>
  </div>

  
</section>

      {/* ── BESTSELLERS ───────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="reveal">
          <SectionHeader
            eyebrow="Our Favourites"
            title="Bestselling <em class='text-deep-rose italic font-serif'>Bouquets</em>"
            subtitle="Each bouquet is lovingly assembled by hand using the freshest seasonal blooms."
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {BOUQUETS.slice(0, 4).map((b, i) => (
            <div key={b.id} className={`reveal reveal-delay-${i + 1}`}>
              <BouquetCard bouquet={b} />
            </div>
          ))}
        </div>
        <div className="text-center mt-10 reveal">
          <button className="btn-primary" onClick={() => navigate('/gallery')}>
            View Full Gallery
          </button>
        </div>
      </section>

      {/* ── ABOUT ─────────────────────────────────────────────── */}
      <section
        className="py-24"
        style={{ background: 'linear-gradient(135deg, #e8d5cd 0%, #edddd5 60%, #e2d5c8 100%)' }}
      >
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div
            className="h-80 rounded-3xl flex items-center justify-center text-8xl border border-rose/20 reveal-left"
            style={{ background: 'linear-gradient(145deg, #e8c5d2 0%, #f0ddd0 50%, #d8e0d0 100%)' }}
          >
            🌹
          </div>

          <div className="reveal-right">
            <SectionHeader
              eyebrow="Our Story"
              title="Blooms with <em class='text-deep-rose italic'>Soul</em>"
            />
            <p className="text-text-mid font-light leading-relaxed text-[0.93rem] mb-4 opacity-85">
              MysticBloom was born from a deep love of flowers and a belief that every bouquet
              should feel like a gift from the heart. We source only the finest stems from
              trusted local growers.
            </p>
            <p className="text-text-mid font-light leading-relaxed text-[0.93rem] mb-8 opacity-85">
              Whether you're celebrating love, friendship, or simply want to brighten
              someone's day — we pour care and creativity into every arrangement we create.
            </p>

            <div className="grid grid-cols-2 gap-3">
              {[
                { num: '500+', label: 'Happy Customers' },
                { num: '3 yr', label: 'Est. Experience' },
                { num: '100%', label: 'Handcrafted' },
                { num: 'Same', label: 'Day Delivery' },
              ].map(({ num, label }, i) => (
                <div
                  key={label}
                  className={`rounded-2xl p-4 border border-rose/20 reveal reveal-delay-${i + 1}`}
                  style={{ background: 'rgba(247,237,232,0.6)' }}
                >
                  <div className="font-serif text-3xl font-semibold text-deep-rose">{num}</div>
                  <div className="text-xs text-text-light uppercase tracking-[0.08em] mt-0.5 opacity-80">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ──────────────────────────────────────── */}
      <section
        className="py-24"
        style={{ background: 'linear-gradient(160deg, #e8d0d8 0%, #edddd5 50%, #e2d8d0 100%)' }}
      >
        <div className="max-w-5xl mx-auto px-6">
          <div className="reveal">
            <SectionHeader
              eyebrow="Kind Words"
              title="What Our Customers <em class='text-deep-rose italic'>Say</em>"
              centered
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {TESTIMONIALS.slice(0, 3).map((t, i) => (
              <div key={i} className={`reveal reveal-delay-${i + 1}`}>
                <TestimonialCard testimonial={t} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <div className="reveal">
          <SectionHeader
            eyebrow="Easy as Can Be"
            title="How It <em class='text-deep-rose italic'>Works</em>"
            subtitle="Ordering your dream bouquet is simple. Here's how we do it."
          />
        </div>
        <HowItWorks />
        <div className="text-center mt-10 reveal">
          <button className="btn-outline" onClick={() => navigate('/delivery')}>
            Full Delivery Info
          </button>
        </div>
      </section>

      <Footer />
    </>
  )
}