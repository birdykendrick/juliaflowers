import { useNavigate } from 'react-router-dom'
import { BOUQUETS } from '../data/mockData'
import BouquetCard from '../components/BouquetCard'
import SectionHeader from '../components/SectionHeader'
import Footer from '../components/Footer'
import useScrollReveal from '../hooks/useScrollReveal'


export default function Home() {
  const navigate = useNavigate()
  useScrollReveal([])

  const STATS = [
    { num: '500+', label: 'Happy Customers', icon: '🌸' },
    { num: '100%', label: 'Handcrafted',     icon: '🤍' },
    { num: 'Same', label: 'Day Delivery',    icon: '🚚' },
    { num: '3yr+', label: 'Experience',      icon: '✨' },
  ]

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
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
            z-index: 2;
          }

          .hero-btn-main {
            background: linear-gradient(135deg, #a84d67, #bf7088);
            color: #fff; border: none;
            padding: clamp(11px,2vw,13px) clamp(24px,4vw,32px);
            border-radius: 999px;
            font-family: 'Jost', sans-serif;
            font-size: clamp(9px,1.8vw,10.5px);
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
            font-size: clamp(9px,1.8vw,10.5px);
            font-weight: 300; letter-spacing: .22em; text-transform: uppercase;
            cursor: pointer; transition: all .3s ease;
            backdrop-filter: blur(6px);
          }
          .hero-btn-ghost:hover { background: rgba(168,77,103,.07); transform: translateY(-2px); }


        `}</style>

        {/* Glows */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(circle at 50% 40%, rgba(255,255,255,0.82) 0%, rgba(255,255,255,0.4) 30%, transparent 65%)',
          zIndex: 0,
        }} />
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(circle at 18% 75%, rgba(226,184,197,0.28), transparent 30%), radial-gradient(circle at 84% 25%, rgba(215,190,170,0.22), transparent 26%)',
          zIndex: 0,
        }} />

        {/* Flowers */}
        <img
          src="/images/hero-orchid-left.png"
          alt=""
          draggable={false}
          onDragStart={e => e.preventDefault()}
          className="hero-flower
    w-[170px] sm:w-[280px] md:w-[250px] lg:w-[300px]
    top-[50px] sm:top-[-10px] md:top-[5px] lg:top-[-10px]
    left-[25px] sm:left-[0px] md:left-[30px] lg:left-[48px]"
          style={{ transform: 'rotate(13deg)', transformOrigin: 'top left' }}
        />
        <img
          src="/images/hero-bouquet-left.png"
          alt=""
          draggable={false}
          onDragStart={e => e.preventDefault()}
          className="hero-flower
    w-[180px] sm:w-[210px] md:w-[260px] lg:w-[330px]
    left-[-75px] sm:left-[-90px] md:left-[-100px] lg:left-[-30px]
    bottom-[-30px] sm:bottom-[-20px] md:bottom-[-35px] lg:bottom-[-40px]"
          style={{ transform: 'rotate(25deg)', transformOrigin: 'bottom left' }}
        />
        <img
          src="/images/mini-bouquet-right.png"
          alt=""
          draggable={false}
          onDragStart={e => e.preventDefault()}
          className="hero-flower
    w-[180px] sm:w-[205px] md:w-[250px] lg:w-[310px]
    top-[128px] sm:top-[-300px] md:top-[115px] lg:top-[128px]
    right-[195px] sm:right-[50px] md:right-[280px] lg:right-[335px]"
          style={{ transform: 'scaleX(-1) rotate(40deg)', transformOrigin: 'top right' }}
        />
        <img
          src="/images/hero-bloom-right.png"
          alt=""
          draggable={false}
          onDragStart={e => e.preventDefault()}
          className="hero-flower
    w-[240px] sm:w-[290px] md:w-[300px] lg:w-[415px]
    right-[-110px] sm:right-[-130px] md:right-[-120px] lg:right-[-70px]
    bottom-[50px] sm:bottom-[50px] md:bottom-[70px] lg:bottom-[110px]"
          style={{ transform: 'rotate(-38deg)', transformOrigin: 'bottom right' }}
        />

        {/* Hero content */}
        <div className="absolute inset-0 z-10 flex items-center justify-center px-6 py-10">
          <div className="w-full max-w-3xl mx-auto text-center flex flex-col items-center justify-center">

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

            <div className="hero-anim-fade" style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              gap: '10px', marginBottom: '16px', animationDelay: '0.4s',
            }}>
              <span style={{ width: '34px', height: '1px', background: 'rgba(148,80,100,.28)', display: 'block' }} />
              <span style={{ color: 'rgba(148,80,100,.45)', fontSize: '11px' }}>✦</span>
              <span style={{ width: '34px', height: '1px', background: 'rgba(148,80,100,.28)', display: 'block' }} />
            </div>

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

      {/* ── STATS STRIP ──────────────────────────────────────── */}
      <section
        style={{ background: 'linear-gradient(90deg, #f2e4dc 0%, #faf0ea 50%, #f2e4dc 100%)' }}
        className="border-y border-rose-200/40"
      >
        <div className="max-w-4xl mx-auto px-6 py-5 grid grid-cols-4 gap-2">
          {STATS.map(({ num, label, icon }, i) => (
            <div
              key={label}
              className={`flex flex-col items-center text-center reveal reveal-delay-${i + 1}`}
            >
              <span className="text-xl mb-1">{icon}</span>
              <span className="font-serif text-lg font-semibold text-deep-rose leading-none">{num}</span>
              <span className="text-[0.6rem] uppercase tracking-[0.08em] text-text-light mt-0.5 opacity-75 leading-tight">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── BEST SELLERS ─────────────────────────────────────── */}
      <section className="pt-10 pb-8 md:pt-16 md:pb-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="reveal">
            <SectionHeader
              eyebrow="Our Favourites"
              title="Our <em class='text-deep-rose italic font-serif'>Best Sellers</em>"
              subtitle="Each bouquet is lovingly assembled by hand using the freshest seasonal blooms."
            />
          </div>
        </div>

        {/* Mobile + Desktop: 2 cols on mobile, 4 on desktop */}
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
          {BOUQUETS.slice(0, 4).map((b, i) => (
            <div key={b.id} className={`reveal reveal-delay-${i + 1}`}>
              <BouquetCard bouquet={b} />
            </div>
          ))}
        </div>

        <div className="text-center mt-7 reveal px-6">
          <button className="btn-primary" onClick={() => navigate('/gallery')}>
            View Full Gallery
          </button>
        </div>
      </section>

      {/* ── CUSTOM BOUQUET CTA ───────────────────────────────── */}
      <section className="px-6 pb-10 md:pb-16">
        <style>{`
          @keyframes petalDrift1 {
            0%, 100% { transform: translate(0,0) rotate(0deg); opacity: 0.7; }
            50%       { transform: translate(6px,-10px) rotate(12deg); opacity: 1; }
          }
          @keyframes petalDrift2 {
            0%, 100% { transform: translate(0,0) rotate(0deg); opacity: 0.5; }
            50%       { transform: translate(-8px,-6px) rotate(-10deg); opacity: 0.85; }
          }
          @keyframes petalDrift3 {
            0%, 100% { transform: translate(0,0) rotate(0deg); opacity: 0.6; }
            50%       { transform: translate(4px,8px) rotate(8deg); opacity: 0.9; }
          }
          .drift-1 { animation: petalDrift1 6s ease-in-out infinite; }
          .drift-2 { animation: petalDrift2 7s ease-in-out infinite 1s; }
          .drift-3 { animation: petalDrift3 5.5s ease-in-out infinite 2s; }

          .cta-card {
            background: #2e1a24;
            border-radius: 28px;
            position: relative;
            overflow: hidden;
          }
          .cta-shine {
            position: absolute;
            inset: 0;
            background:
              radial-gradient(ellipse at 20% 50%, rgba(184,92,122,0.22) 0%, transparent 55%),
              radial-gradient(ellipse at 80% 20%, rgba(217,160,180,0.14) 0%, transparent 45%),
              radial-gradient(ellipse at 60% 90%, rgba(240,200,170,0.1) 0%, transparent 40%);
            pointer-events: none;
          }
        `}</style>

        <div className="cta-card max-w-5xl mx-auto p-8 md:p-12 reveal">
          <div className="cta-shine" />

          {/* Floating petal SVGs */}
          <svg className="drift-1 absolute top-6 right-16 w-8 h-8 opacity-40 pointer-events-none" viewBox="0 0 40 40">
            <ellipse cx="20" cy="20" rx="7" ry="16" fill="none" stroke="#d9a0b4" strokeWidth="1.2" transform="rotate(25 20 20)" />
          </svg>
          <svg className="drift-2 absolute top-12 right-8 w-5 h-5 opacity-30 pointer-events-none" viewBox="0 0 40 40">
            <ellipse cx="20" cy="20" rx="10" ry="6" fill="none" stroke="#e8c5d2" strokeWidth="1.2" transform="rotate(-15 20 20)" />
          </svg>
          <svg className="drift-3 absolute bottom-8 right-24 w-6 h-6 opacity-25 pointer-events-none" viewBox="0 0 40 40">
            <path d="M20 4 C26 10 26 28 20 34 C14 28 14 10 20 4Z" fill="none" stroke="#d9a0b4" strokeWidth="1.2" />
          </svg>
          <svg className="drift-1 absolute bottom-6 left-10 w-7 h-7 opacity-20 pointer-events-none" viewBox="0 0 40 40">
            <ellipse cx="20" cy="20" rx="8" ry="14" fill="none" stroke="#c8a0b0" strokeWidth="1" transform="rotate(40 20 20)" />
          </svg>

          <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-8 md:gap-12">

            {/* Left: text */}
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

            {/* Right: CTA */}
            <div className="flex-shrink-0 flex flex-col items-start md:items-center gap-3">
              <button
                onClick={() => navigate('/builder')}
                style={{
                  background: 'linear-gradient(135deg, #b85c7a, #c87090)',
                  color: '#fff', border: 'none',
                  padding: '14px 32px', borderRadius: '999px',
                  fontFamily: "'Jost', sans-serif",
                  fontSize: '0.8rem', letterSpacing: '0.15em',
                  textTransform: 'uppercase', fontWeight: 400,
                  cursor: 'pointer', transition: 'all 0.25s',
                  boxShadow: '0 8px 28px rgba(184,92,122,0.4)',
                  whiteSpace: 'nowrap',
                }}
                onMouseOver={e => e.currentTarget.style.transform = 'translateY(-2px)'}
                onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}
              >
                Start Building
              </button>
              <p style={{
                fontSize: '0.68rem', color: 'rgba(217,160,180,0.6)',
                fontFamily: "'Jost', sans-serif", letterSpacing: '0.06em',
                textAlign: 'center',
              }}>
                Free to design • No commitment
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
