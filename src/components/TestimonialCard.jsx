export default function TestimonialCard({ testimonial }) {
  const { name, initial, role, stars, text } = testimonial

  return (
    <div className="testi-card h-full flex flex-col">
      {/* Stars */}
      <div className="text-gold tracking-widest text-sm mb-3 opacity-90">
        {'★'.repeat(stars)}{'☆'.repeat(5 - stars)}
      </div>

      {/* Quote */}
      <p className="font-serif italic text-[1rem] text-text-dark leading-relaxed mb-5 flex-1 opacity-85">
        "{text}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-[rgba(184,92,122,0.15)] flex items-center justify-center text-xs font-medium text-deep-rose flex-shrink-0">
          {initial}
        </div>
        <div>
          <div className="text-sm font-medium text-text-dark">{name}</div>
          <div className="text-xs text-text-light opacity-75">{role}</div>
        </div>
      </div>
    </div>
  )
}
