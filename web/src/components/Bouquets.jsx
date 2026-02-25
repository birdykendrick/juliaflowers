import { useRef } from 'react'
import { products } from '../data/content'
import { useReveal } from '../hooks/useReveal'

function ProductCard({ product, index }) {
  const ref = useReveal()

  return (
    <article
      ref={ref}
      className={`reveal reveal-delay-${(index % 6) + 1} group bg-cream-light rounded-card overflow-hidden shadow-soft hover:shadow-hover transition-all duration-500 hover:-translate-y-2 flex flex-col`}
      aria-label={product.name}
    >
      {/* Image / swatch */}
      <div className="relative aspect-[4/3] overflow-hidden bg-blush-light">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            width={400}
            height={300}
            className="img-placeholder transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div
            className="w-full h-full transition-transform duration-700 group-hover:scale-105 flex items-end p-4"
            style={{ background: `linear-gradient(135deg, ${product.swatchColor}80 0%, ${product.swatchColor} 100%)` }}
          >
            <span className="text-4xl select-none" aria-hidden="true">✿</span>
          </div>
        )}
        {/* Tags */}
        {product.tags?.[0] && (
          <span className="absolute top-3 left-3 bg-cream/90 backdrop-blur-sm text-rose text-xs font-medium px-3 py-1 rounded-full capitalize">
            {product.tags[0]}
          </span>
        )}
      </div>

      {/* Info */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-display text-lg text-bark-dark font-semibold mb-1.5">{product.name}</h3>
        <p className="text-bark/70 text-sm leading-relaxed flex-1">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="font-display text-xl text-rose font-semibold">{product.price}</span>
          <a
            href={`https://wa.me/6591234567?text=Hi!%20I'd%20like%20to%20order%20the%20${encodeURIComponent(product.name)}%20bouquet.`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-rose border border-rose/30 px-4 py-2 rounded-full hover:bg-rose hover:text-white transition-all duration-300 min-h-[40px] flex items-center"
          >
            Order →
          </a>
        </div>
      </div>
    </article>
  )
}

export default function Bouquets() {
  const headRef = useReveal()

  return (
    <section id="bouquets" className="py-section bg-cream-dark/30" aria-labelledby="bouquets-heading">
      <div className="max-w-6xl mx-auto px-5">
        {/* Section header */}
        <div ref={headRef} className="reveal text-center mb-14">
          <p className="font-accent italic text-rose text-lg mb-2 tracking-wider">Our Collection</p>
          <h2 id="bouquets-heading" className="font-display text-fluid-h2 text-bark-dark">
            Featured Bouquets
          </h2>
          <p className="mt-4 text-bark/65 max-w-md mx-auto leading-relaxed">
            Each arrangement is crafted fresh to order. Prices are a guide — we personalise every bouquet to your budget.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
