import { useNavigate } from 'react-router-dom'
import { BOUQUETS } from '../data/mockData'
import BouquetCard from '../components/BouquetCard'
import SectionHeader from '../components/SectionHeader'
import Footer from '../components/Footer'
import useScrollReveal from '../hooks/useScrollReveal'


export default function Home() {
  const navigate = useNavigate()
  useScrollReveal([])

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden flex items-center justify-center"
        style={{
          backgroundImage: 'url(/images/mainhero.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center bottom',
          backgroundRepeat: 'no-repeat',
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
            background: rgba(255,255,255,.55);
            color: #4a1a2a; border: 1.5px solid rgba(168,77,103,.5);
            padding: clamp(11px,2vw,13px) clamp(24px,4vw,32px);
            border-radius: 999px;
            font-family: 'Jost', sans-serif;
            font-size: clamp(9px,1.8vw,10.5px);
            font-weight: 400; letter-spacing: .22em; text-transform: uppercase;
            cursor: pointer; transition: all .3s ease;
            backdrop-filter: blur(10px);
          }
          .hero-btn-ghost:hover { background: rgba(255,255,255,.75); transform: translateY(-2px); }


        `}</style>

        {/* Glows */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(ellipse 60% 70% at 50% 42%, rgba(255,248,244,0.75) 0%, rgba(255,244,240,0.5) 35%, rgba(255,240,235,0.2) 60%, transparent 75%)',
          zIndex: 0,
        }} />
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(circle at 18% 75%, rgba(226,184,197,0.12), transparent 30%), radial-gradient(circle at 84% 25%, rgba(215,190,170,0.1), transparent 26%)',
          zIndex: 0,
        }} />

        {/* Flowers — commented out, background photo handles decoration
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
        */}

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
              fontWeight: 400, fontStyle: 'italic',
              fontSize: 'clamp(3rem, 7vw, 5.2rem)',
              lineHeight: 1.03, color: '#2e1218',
              margin: '0 0 16px', textAlign: 'center',
              animationDelay: '0.25s', maxWidth: '900px',
              textShadow: '0 1px 12px rgba(255,245,240,0.9), 0 2px 24px rgba(255,240,235,0.7)',
            }}>
              Fresh Blooms<br />
              For <em style={{ color: '#8e3055' }}>Every</em> Occasion
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
              fontWeight: 400, lineHeight: 1.8, color: '#3e1a24',
              margin: '0 auto 36px', maxWidth: '400px', textAlign: 'center',
              animationDelay: '0.5s',
              textShadow: '0 1px 8px rgba(255,245,240,0.95), 0 2px 16px rgba(255,240,235,0.8)',
            }}>
              Thoughtful blooms.{' '}
              <span style={{ color: '#2e1218', fontWeight: 400 }}>Fresh flowers arranged with care</span>{' '}
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
        <div className="max-w-3xl mx-auto px-6 py-3 grid grid-cols-3 gap-4">
          {[
            {
              num: '100+', label: 'Happy Customers',
              icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#b85c7a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
            },
            {
              num: '100%', label: 'Handcrafted',
              icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#b85c7a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>,
            },
            {
              num: 'Same', label: 'Day Delivery',
              icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#b85c7a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8h4l3 5v3h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>,
            },
          ].map(({ num, label, icon }, i) => (
            <div key={label} className={`flex items-center gap-2.5 justify-center reveal reveal-delay-${i + 1}`}>
              <div className="flex-shrink-0">{icon}</div>
              <div className="text-left">
                <span className="font-serif text-base font-semibold text-deep-rose leading-none block">{num}</span>
                <span className="text-[0.65rem] uppercase tracking-[0.08em] text-text-light opacity-70 leading-tight block">{label}</span>
              </div>
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
