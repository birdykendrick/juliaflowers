import { BRAND_NAME, HERO_HEADLINE, TAGLINE, WHATSAPP_NUMBER, INSTAGRAM_HANDLE } from '../data/content'

// Decorative SVG petal / blob shapes
const PetalBlob = ({ className }) => (
  <div className={`absolute pointer-events-none select-none ${className}`} aria-hidden="true">
    <div className="blob w-full h-full bg-blush opacity-40 animate-float" />
  </div>
)

export default function Hero() {
  const lines = HERO_HEADLINE.split('\n')

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-cream noise pt-24 pb-16"
      aria-labelledby="hero-heading"
    >
      {/* ── Decorative blobs ── */}
      <PetalBlob className="w-64 h-64 md:w-96 md:h-96 -top-20 -right-16 opacity-30" />
      <PetalBlob className="w-48 h-48 md:w-72 md:h-72 bottom-10 -left-16 opacity-20 animate-float-slow" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blush-light opacity-20 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      {/* ── Floating petal accents ── */}
      {[
        'top-1/4 left-[8%] text-4xl',
        'top-1/3 right-[10%] text-2xl animate-float-slow',
        'bottom-1/4 left-[15%] text-xl',
        'top-[15%] right-[25%] text-3xl animate-float',
      ].map((cls, i) => (
        <span key={i} className={`absolute pointer-events-none select-none opacity-30 ${cls}`} aria-hidden="true">
          {['✿', '❀', '✾', '⚘'][i]}
        </span>
      ))}

      {/* ── Content ── */}
      <div className="relative z-10 max-w-5xl mx-auto px-5 text-center">
        {/* Eyebrow */}
        <p className="font-accent italic text-rose text-lg md:text-xl mb-4 tracking-widest animate-fade-in opacity-0 [animation-delay:0.1s]">
          ✦ {BRAND_NAME} ✦
        </p>

        {/* Headline */}
        <h1
          id="hero-heading"
          className="font-display text-fluid-hero text-bark-dark mb-6 leading-[1.05]"
        >
          {lines.map((line, i) => (
            <span
              key={i}
              className={`block animate-fade-up opacity-0 ${i === 0 ? '[animation-delay:0.2s]' : '[animation-delay:0.35s]'}`}
            >
              {i === 1 ? <em className="not-italic text-gradient">{line}</em> : line}
            </span>
          ))}
        </h1>

        {/* Tagline */}
        <p className="font-accent text-xl md:text-2xl text-bark/70 max-w-xl mx-auto mb-10 leading-relaxed animate-fade-up opacity-0 [animation-delay:0.5s]">
          {TAGLINE}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up opacity-0 [animation-delay:0.65s]">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi!%20I'd%20like%20to%20place%20a%20floral%20order.`}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full sm:w-auto bg-rose text-white font-medium text-base px-8 py-4 rounded-full hover:bg-rose-dark transition-all duration-300 hover:shadow-hover hover:-translate-y-1 flex items-center justify-center gap-2.5 min-h-[52px]"
          >
            <WhatsappIcon />
            Order on WhatsApp
          </a>
          <a
            href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full sm:w-auto border-2 border-rose/40 text-bark font-medium text-base px-8 py-4 rounded-full hover:border-rose hover:bg-blush-light transition-all duration-300 flex items-center justify-center gap-2.5 min-h-[52px]"
          >
            <InstagramIcon />
            @{INSTAGRAM_HANDLE}
          </a>
        </div>

        {/* Scroll hint */}
        <div className="mt-16 flex flex-col items-center gap-2 animate-fade-up opacity-0 [animation-delay:0.9s]" aria-hidden="true">
          <span className="font-accent italic text-bark/40 text-sm tracking-wider">scroll to explore</span>
          <div className="w-px h-10 bg-gradient-to-b from-rose/40 to-transparent rounded-full" />
        </div>
      </div>
    </section>
  )
}

function WhatsappIcon() {
  return (
    <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  )
}
