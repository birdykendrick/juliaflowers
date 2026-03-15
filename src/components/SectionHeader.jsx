// SectionHeader — reusable eyebrow + title + optional subtitle
export default function SectionHeader({ eyebrow, title, subtitle, centered = false }) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <p className={`eyebrow mb-3 ${centered ? 'justify-center' : ''}`}>
        {eyebrow}
      </p>
      <h2
        className="font-serif font-medium text-text-dark leading-tight"
        style={{ fontSize: 'clamp(1.9rem, 3.5vw, 2.7rem)' }}
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <div className={`w-14 h-px bg-rose/60 my-3 ${centered ? 'mx-auto' : ''}`} />
      {subtitle && (
        <p className={`text-text-mid text-[0.92rem] font-light leading-relaxed max-w-xl opacity-80 ${centered ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
