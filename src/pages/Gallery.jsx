import { useState } from 'react'
import { BOUQUETS, GALLERY_FILTERS } from '../data/mockData'
import BouquetCard     from '../components/BouquetCard'
import SectionHeader   from '../components/SectionHeader'
import Footer          from '../components/Footer'
import useScrollReveal from '../hooks/useScrollReveal'

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all')
  useScrollReveal([activeFilter])

  const filtered =
    activeFilter === 'all' ? BOUQUETS : BOUQUETS.filter((b) => b.category === activeFilter)

  return (
    <>
      {/* Header */}
      <section className="max-w-6xl mx-auto px-6 pt-28 pb-4">
        <div className="reveal">
          <SectionHeader
            eyebrow="Our Work"
            title="The Bouquet <em class='text-deep-rose italic'>Gallery</em>"
            subtitle="A curated collection of our most beloved arrangements. Every piece made to order, every petal chosen with care."
          />
        </div>

        {/* Filter pills */}
        <div className="flex gap-2 flex-wrap mt-2 reveal">
          {GALLERY_FILTERS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => setActiveFilter(id)}
              className={`text-xs tracking-[0.06em] px-5 py-2 rounded-full border transition-all duration-200 ${
                activeFilter === id
                  ? 'bg-deep-rose text-white border-deep-rose'
                  : 'bg-transparent text-text-mid border-rose/45 hover:border-deep-rose hover:text-deep-rose'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-6xl mx-auto px-6 py-8">
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {filtered.map((b, i) => (
              <div key={b.id} className={`reveal reveal-delay-${Math.min(i % 4 + 1, 5)}`}>
                <BouquetCard bouquet={b} />
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-text-light py-20 font-light italic opacity-70">
            No bouquets in this category yet.
          </p>
        )}
      </section>

      {/* CTA banner */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <div
          className="rounded-3xl p-10 text-center reveal"
          style={{ background: 'linear-gradient(135deg, rgba(232,197,210,0.5), rgba(240,221,208,0.5))' }}
        >
          <p className="eyebrow justify-center mb-3">Can't find what you're after?</p>
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-text-dark mb-4">
            Build Your Own <em className="text-deep-rose italic">Dream Bouquet</em>
          </h2>
          <p className="text-text-mid font-light mb-7 max-w-md mx-auto text-sm leading-relaxed opacity-85">
            Choose your flowers, wrapper, and extras. We'll craft it with love and deliver it fresh.
          </p>
          <a href="/builder" className="btn-primary">
            Start Building
          </a>
        </div>
      </section>

      <Footer />
    </>
  )
}
