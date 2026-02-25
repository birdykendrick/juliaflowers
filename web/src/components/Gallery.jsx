import { useState, useEffect, useCallback } from 'react'
import { galleryImages } from '../data/content'
import { useReveal } from '../hooks/useReveal'

function GalleryThumb({ item, index, onOpen }) {
  const ref = useReveal()

  return (
    <button
      ref={ref}
      className={`reveal reveal-delay-${(index % 6) + 1} group relative overflow-hidden rounded-card bg-blush-light focus-visible:ring-2 focus-visible:ring-rose aspect-square`}
      onClick={() => onOpen(index)}
      aria-label={`View: ${item.alt}`}
    >
      {item.image ? (
        <img
          src={item.image}
          alt={item.alt}
          loading="lazy"
          width={400}
          height={400}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      ) : (
        <div
          className="w-full h-full transition-transform duration-700 group-hover:scale-110 flex items-center justify-center"
          style={{ backgroundColor: item.color }}
        >
          <span className="text-5xl opacity-40 select-none" aria-hidden="true">✿</span>
        </div>
      )}
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-bark/0 group-hover:bg-bark/20 transition-colors duration-300 flex items-center justify-center">
        <span className="text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true">⊕</span>
      </div>
    </button>
  )
}

export default function Gallery() {
  const headRef = useReveal()
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const close  = useCallback(() => setLightboxIndex(null), [])
  const prev   = useCallback(() => setLightboxIndex(i => (i - 1 + galleryImages.length) % galleryImages.length), [])
  const next   = useCallback(() => setLightboxIndex(i => (i + 1) % galleryImages.length), [])

  useEffect(() => {
    const handler = (e) => {
      if (lightboxIndex === null) return
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [lightboxIndex, close, prev, next])

  // Prevent body scroll when lightbox open
  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [lightboxIndex])

  const current = lightboxIndex !== null ? galleryImages[lightboxIndex] : null

  return (
    <section id="gallery" className="py-section bg-cream" aria-labelledby="gallery-heading">
      <div className="max-w-6xl mx-auto px-5">
        {/* Header */}
        <div ref={headRef} className="reveal text-center mb-14">
          <p className="font-accent italic text-rose text-lg mb-2 tracking-wider">Inspiration</p>
          <h2 id="gallery-heading" className="font-display text-fluid-h2 text-bark-dark">
            Gallery
          </h2>
        </div>

        {/* Grid — intentional asymmetric feel */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {galleryImages.map((item, i) => (
            <GalleryThumb key={item.id} item={item} index={i} onOpen={setLightboxIndex} />
          ))}
        </div>
      </div>

      {/* ── Lightbox ── */}
      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Viewing: ${current.alt}`}
          className="fixed inset-0 z-50 flex items-center justify-center bg-bark-dark/85 backdrop-blur-md p-4"
          onClick={close}
        >
          {/* Content */}
          <div
            className="relative max-w-3xl w-full rounded-card overflow-hidden shadow-hover"
            onClick={e => e.stopPropagation()}
          >
            {current.image ? (
              <img src={current.image} alt={current.alt} className="w-full max-h-[80vh] object-contain bg-cream-dark" />
            ) : (
              <div
                className="w-full aspect-square max-h-[80vh] flex items-center justify-center"
                style={{ backgroundColor: current.color }}
              >
                <span className="text-9xl opacity-30" aria-hidden="true">✿</span>
              </div>
            )}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-bark-dark/60 to-transparent p-4">
              <p className="text-cream text-sm font-accent italic">{current.alt}</p>
            </div>
          </div>

          {/* Controls */}
          <button onClick={close}       className="absolute top-4 right-4 w-11 h-11 bg-cream/20 hover:bg-cream/40 text-cream rounded-full flex items-center justify-center transition-colors text-xl" aria-label="Close">✕</button>
          <button onClick={prev}        className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 bg-cream/20 hover:bg-cream/40 text-cream rounded-full flex items-center justify-center transition-colors text-xl" aria-label="Previous">‹</button>
          <button onClick={next}        className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 bg-cream/20 hover:bg-cream/40 text-cream rounded-full flex items-center justify-center transition-colors text-xl" aria-label="Next">›</button>

          {/* Counter */}
          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-cream/70 text-sm font-accent">
            {lightboxIndex + 1} / {galleryImages.length}
          </p>
        </div>
      )}
    </section>
  )
}
