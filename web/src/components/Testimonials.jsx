import { testimonials } from '../data/content'
import { useReveal } from '../hooks/useReveal'

function QuoteCard({ t, index }) {
  const ref = useReveal()
  return (
    <blockquote
      ref={ref}
      className={`reveal reveal-delay-${index + 1} bg-cream rounded-card p-7 shadow-soft hover:shadow-card transition-all duration-400 hover:-translate-y-1 flex flex-col`}
    >
      {/* Large decorative quote mark */}
      <span className="font-display text-7xl text-rose/20 leading-none mb-2 select-none" aria-hidden="true">"</span>
      <p className="font-accent text-lg italic text-bark/80 leading-relaxed flex-1">
        {t.quote}
      </p>
      <footer className="mt-6 flex items-center gap-3">
        {/* Avatar placeholder */}
        <div
          className="w-10 h-10 rounded-full bg-blush flex items-center justify-center shrink-0 text-rose font-display font-bold text-sm"
          aria-hidden="true"
        >
          {t.author[0]}
        </div>
        <div>
          <p className="font-semibold text-bark-dark text-sm">{t.author}</p>
          <p className="text-bark/50 text-xs">{t.role}</p>
        </div>
        {/* 5-star rating */}
        <span className="ml-auto text-rose text-xs tracking-tight" aria-label="5 out of 5 stars">★★★★★</span>
      </footer>
    </blockquote>
  )
}

export default function Testimonials() {
  const headRef = useReveal()

  return (
    <section
      className="py-section bg-cream-dark/20 relative overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      {/* Background decorative shape */}
      <div
        className="absolute right-0 top-0 w-72 h-72 blob bg-blush opacity-20 -z-0 translate-x-1/2 -translate-y-1/3"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-5 relative z-10">
        <div ref={headRef} className="reveal text-center mb-14">
          <p className="font-accent italic text-rose text-lg mb-2 tracking-wider">Kind Words</p>
          <h2 id="testimonials-heading" className="font-display text-fluid-h2 text-bark-dark">
            What people say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <QuoteCard key={t.id} t={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
