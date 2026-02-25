import { WHATSAPP_NUMBER, INSTAGRAM_HANDLE, DELIVERY_AREA, DELIVERY_NOTE, orderSteps } from '../data/content'
import { useReveal } from '../hooks/useReveal'

export default function Order() {
  const headRef   = useReveal()
  const stepsRef  = useReveal()
  const ctaRef    = useReveal()

  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi!%20I'd%20like%20to%20place%20a%20floral%20order.`
  const igLink = `https://instagram.com/${INSTAGRAM_HANDLE}`

  return (
    <section
      id="order"
      className="py-section bg-gradient-to-b from-cream to-blush-light/60 relative overflow-hidden"
      aria-labelledby="order-heading"
    >
      {/* Background petal accent */}
      <div className="absolute left-0 bottom-0 w-64 h-64 blob bg-rose/10 -z-0 -translate-x-1/3 translate-y-1/4 animate-float-slow" aria-hidden="true" />

      <div className="max-w-5xl mx-auto px-5 relative z-10">
        {/* Header */}
        <div ref={headRef} className="reveal text-center mb-16">
          <p className="font-accent italic text-rose text-lg mb-2 tracking-wider">Ready to order?</p>
          <h2 id="order-heading" className="font-display text-fluid-h2 text-bark-dark">
            How to Order
          </h2>
          <p className="mt-4 text-bark/65 max-w-md mx-auto leading-relaxed">
            Ordering is simple and personal. No complicated forms — just a message.
          </p>
        </div>

        {/* Steps */}
        <div ref={stepsRef} className="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {orderSteps.map((s, i) => (
            <div key={s.step} className={`reveal reveal-delay-${i + 1} relative`}>
              {/* Connector line (hidden on mobile) */}
              {i < orderSteps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(100%-0px)] w-full h-px bg-gradient-to-r from-rose/30 to-transparent z-0" aria-hidden="true" />
              )}
              <div className="bg-cream rounded-card p-6 shadow-soft hover:shadow-card transition-shadow duration-300 h-full relative z-10">
                <span className="font-display text-5xl font-bold text-rose/20 leading-none block mb-3" aria-hidden="true">
                  {s.step}
                </span>
                <h3 className="font-display font-semibold text-bark-dark text-base mb-2">{s.title}</h3>
                <p className="text-bark/65 text-sm leading-relaxed">{s.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA block */}
        <div ref={ctaRef} className="reveal">
          <div className="bg-rose rounded-[2rem] p-8 md:p-12 text-center shadow-hover overflow-hidden relative">
            {/* Subtle pattern */}
            <div className="absolute inset-0 opacity-10" style={{backgroundImage:"radial-gradient(circle, white 1px, transparent 1px)", backgroundSize:"24px 24px"}} aria-hidden="true" />

            <h3 className="font-display text-fluid-h3 text-white mb-3 relative z-10">Let's create something beautiful.</h3>
            <p className="text-white/80 font-accent text-lg italic mb-8 relative z-10">
              DM or message us — we reply fast and love hearing your story.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full sm:w-auto bg-white text-rose font-semibold px-8 py-4 rounded-full hover:bg-cream transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex items-center justify-center gap-2.5 min-h-[52px] text-base"
              >
                <WhatsappIcon />
                WhatsApp Us
              </a>
              <a
                href={igLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full sm:w-auto border-2 border-white/50 text-white font-medium px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2.5 min-h-[52px] text-base"
              >
                <InstagramIcon />
                @{INSTAGRAM_HANDLE}
              </a>
            </div>
          </div>
        </div>

        {/* Delivery info */}
        {DELIVERY_NOTE && (
          <p className="mt-8 text-center text-bark/55 text-sm font-accent italic max-w-lg mx-auto">
            🚚 {DELIVERY_NOTE}
          </p>
        )}
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
