import { aboutText, values } from '../data/content'
import { useReveal } from '../hooks/useReveal'

export default function About() {
  const textRef = useReveal()
  const imgRef  = useReveal()

  return (
    <section id="about" className="py-section bg-blush-light/40 overflow-hidden" aria-labelledby="about-heading">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Image side */}
          <div ref={imgRef} className="reveal order-last lg:order-first">
            <div className="relative">
              {/* Main image placeholder */}
              <div className="aspect-[4/5] rounded-card overflow-hidden bg-blush shadow-card">
                {/* Replace with: <img src="/about-photo.jpg" alt="Florist at work" … /> */}
                <div
                  className="w-full h-full flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #F4C2C2 0%, #E8939A 100%)' }}
                >
                  <span className="text-8xl opacity-30 animate-float" aria-hidden="true">✿</span>
                </div>
              </div>
              {/* Floating accent card */}
              <div className="absolute -bottom-6 -right-4 bg-cream rounded-card p-5 shadow-card max-w-[180px]">
                <p className="font-display text-4xl text-rose font-bold">500+</p>
                <p className="text-bark/70 text-sm mt-1 leading-tight">happy customers & counting</p>
              </div>
              {/* Decorative blob */}
              <div
                className="absolute -top-8 -left-8 w-32 h-32 blob bg-sage opacity-30 -z-10 animate-float-slow"
                aria-hidden="true"
              />
            </div>
          </div>

          {/* Text side */}
          <div ref={textRef} className="reveal">
            <p className="font-accent italic text-rose text-lg mb-3 tracking-wider">Our Story</p>
            <h2 id="about-heading" className="font-display text-fluid-h2 text-bark-dark mb-6">
              Made with intention,<br />
              <em className="not-italic text-gradient">grown with love.</em>
            </h2>
            <p className="text-bark/75 leading-relaxed text-base mb-10 font-accent text-lg">
              {aboutText}
            </p>

            {/* Values */}
            <div className="flex flex-col gap-5">
              {values.map((v, i) => (
                <div
                  key={v.id}
                  className={`reveal reveal-delay-${i + 1} flex items-start gap-4 p-5 bg-cream rounded-2xl shadow-soft hover:shadow-card transition-shadow duration-300`}
                >
                  <span className="text-2xl mt-0.5 shrink-0" role="img" aria-label={v.title}>{v.icon}</span>
                  <div>
                    <h3 className="font-display font-semibold text-bark-dark text-base mb-1">{v.title}</h3>
                    <p className="text-bark/65 text-sm leading-relaxed">{v.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
