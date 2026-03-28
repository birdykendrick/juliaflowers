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
        className="relative overflow-hidden flex items-center justify-center"
        style={{
          background: 'linear-gradient(150deg, #f9f0ea 0%, #fdf5f0 35%, #f7efe8 60%, #f0ead5 100%)',
          minHeight: '560px',
          height: '78vh',
        }}
      >
        <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Jost:wght@200;300;400&display=swap');

    @keyframes heroFadeUp {
      from { opacity: 0; transform: translateY(16px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes heroFadeIn {
      from { opacity: 0; }
      to   { opacity: 1; }
    }
    .hero-anim      { opacity: 0; animation: heroFadeUp 0.8s ease forwards; }
    .hero-anim-fade { opacity: 0; animation: heroFadeIn 0.8s ease forwards; }

    .hero-flower {
      position: absolute;
      pointer-events: none;
      user-select: none;
      -webkit-user-drag: none;
      draggable: false;
      z-index: 2;
    }

    .hero-btn-main {
      background: linear-gradient(135deg, #a84d67, #bf7088);
      color: #fff; border: none;
      padding: clamp(11px,2vw,13px) clamp(24px,4vw,32px);
      border-radius: 999px;
      font-family: 'Jost', sans-serif;
      font-size: clamp(8px,1.8vw,10.5px);
      font-weight: 300; letter-spacing: .22em; text-transform: uppercase;
      cursor: pointer; transition: all .3s ease;
      box-shadow: 0 10px 30px rgba(168,77,103,.2);
    }
    .hero-btn-main:hover { transform: translateY(-2px); filter: brightness(1.07); }

    .hero-btn-ghost {
      background: rgba(255,255,255,.3);
      color: #7a4a56; border: 1px solid rgba(168,77,103,.22);
      padding: clamp(11px,2vw,13px) clamp(24px,4vw,32px);
      border-radius: 999px;
      font-family: 'Jost', sans-serif;
      font-size: clamp(8px,1.8vw,10.5px);
      font-weight: 300; letter-spacing: .22em; text-transform: uppercase;
      cursor: pointer; transition: all .3s ease;
      backdrop-filter: blur(6px);
    }
    .hero-btn-ghost:hover { background: rgba(168,77,103,.07); transform: translateY(-2px); }
  `}</style>

        {/* Soft glow center */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(circle at 50% 40%, rgba(255,255,255,0.82) 0%, rgba(255,255,255,0.4) 30%, transparent 65%)',
          zIndex: 0,
        }} />

        {/* Corner glow accents */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background:
            'radial-gradient(circle at 18% 75%, rgba(226,184,197,0.28), transparent 30%), radial-gradient(circle at 84% 25%, rgba(215,190,170,0.22), transparent 26%)',
          zIndex: 0,
        }} />

        {/* ── Flower: Top-left orchid ── */}
        <img
          src="/images/hero-orchid-left.png"
          alt=""
          draggable={false}
          onDragStart={e => e.preventDefault()}
          className="hero-flower
    w-[170px] sm:w-[280px] md:w-[250px] lg:w-[300px]
    top-[50px] sm:top-[-10px] md:top-[5px] lg:top-[-10px]
    left-[25px] sm:left-[0px] md:left-[30px] lg:left-[48px]"
          style={{
            transform: 'rotate(13deg)',
            transformOrigin: 'top left',
          }}
        />

        {/* ── Flower: Bottom-left bouquet ── */}
        <img
          src="/images/hero-bouquet-left.png"
          alt=""
          draggable={false}
          onDragStart={e => e.preventDefault()}
          className="hero-flower
    w-[180px] sm:w-[210px] md:w-[260px] lg:w-[330px]
    left-[-75px] sm:left-[-90px] md:left-[-100px] lg:left-[-30px]
    bottom-[-30px] sm:bottom-[-20px] md:bottom-[-35px] lg:bottom-[-40px]"
          style={{
            transform: 'rotate(25deg)',
            transformOrigin: 'bottom left',
          }}
        />

        {/* ── Flower: Top-right mini bouquet ── */}
        <img
          src="/images/mini-bouquet-right.png"
          alt=""
          draggable={false}
          onDragStart={e => e.preventDefault()}
          className="hero-flower
    w-[180px] sm:w-[205px] md:w-[250px] lg:w-[310px]
    top-[128px] sm:top-[-300px] md:top-[115px] lg:top-[128px]
    right-[195px] sm:right-[50px] md:right-[280px] lg:right-[335px]"
          style={{
            transform: 'scaleX(-1) rotate(40deg)',
            transformOrigin: 'top right',
          }}
        />

        {/* ── Flower: Bottom-right roses ── */}
        <img
          src="/images/hero-bloom-right.png"
          alt=""
          draggable={false}
          onDragStart={e => e.preventDefault()}
          className="hero-flower
    w-[240px] sm:w-[290px] md:w-[300px] lg:w-[415px]
    right-[-110px] sm:right-[-130px] md:right-[-120px] lg:right-[-70px]
    bottom-[50px] sm:bottom-[50px] md:bottom-[70px] lg:bottom-[110px]"
          style={{
            transform: 'rotate(-38deg)',
            transformOrigin: 'bottom right',
          }}
        />

        {/* ── Centered hero content ── */}
        <div className="absolute inset-0 z-10 flex items-center justify-center px-6 py-10">
          <div className="w-full max-w-3xl mx-auto text-center flex flex-col items-center justify-center">

            {/* Eyebrow */}
            <div className="hero-anim-fade" style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              gap: '12px', marginBottom: '22px', animationDelay: '0.1s', width: '100%',
            }}>
              <span style={{ display: 'block', width: '44px', height: '1px', background: 'rgba(148,80,100,.35)', flexShrink: 0 }} />
              <p style={{ margin: 0, fontSize: '10px', fontWeight: 300, letterSpacing: '0.24em', textTransform: 'uppercase', color: '#9a6070' }}>
                Fresh flowers, made with care
              </p>
              <span style={{ display: 'block', width: '44px', height: '1px', background: 'rgba(148,80,100,.35)', flexShrink: 0 }} />
            </div>

            {/* Headline */}
            <h1 className="hero-anim" style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontWeight: 300, fontStyle: 'italic',
              fontSize: 'clamp(3rem, 7vw, 5.2rem)',
              lineHeight: 1.03, color: '#4a2a32',
              margin: '0 0 16px', textAlign: 'center',
              animationDelay: '0.25s', maxWidth: '900px',
            }}>
              Fresh Blooms<br />
              For <em style={{ color: '#a84d67' }}>Every</em> Occasion
            </h1>

            {/* Ornament divider */}
            <div className="hero-anim-fade" style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              gap: '10px', marginBottom: '16px', animationDelay: '0.4s',
            }}>
              <span style={{ width: '34px', height: '1px', background: 'rgba(148,80,100,.28)', display: 'block' }} />
              <span style={{ color: 'rgba(148,80,100,.45)', fontSize: '11px' }}>✦</span>
              <span style={{ width: '34px', height: '1px', background: 'rgba(148,80,100,.28)', display: 'block' }} />
            </div>

            {/* Subtitle */}
            <p className="hero-anim" style={{
              fontSize: 'clamp(0.82rem, 1.6vw, 0.96rem)',
              fontFamily: "'Jost', sans-serif",
              fontWeight: 300, lineHeight: 1.8, color: '#7a5560',
              margin: '0 auto 36px', maxWidth: '400px', textAlign: 'center',
              animationDelay: '0.5s',
            }}>
              Thoughtful blooms.{' '}
              <span style={{ color: '#4a2a32', fontWeight: 400 }}>Fresh flowers arranged with care</span>{' '}
              for life's little moments.
            </p>

            {/* CTA Buttons */}
            <div className="hero-anim" style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              gap: '12px', flexWrap: 'wrap', animationDelay: '0.65s',
            }}>
              <button className="hero-btn-main" onClick={() => navigate('/gallery')}>Shop Bouquets</button>
              <button className="hero-btn-ghost" onClick={() => navigate('/builder')}>Build Your Bouquet</button>
            </div>

          </div>
        </div>
      </section>

      {/* ── BESTSELLERS ───────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="reveal">
          <SectionHeader
            eyebrow="Our Favourites"
            title="Our <em class='text-deep-rose italic font-serif'>Best Sellers</em>"
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
