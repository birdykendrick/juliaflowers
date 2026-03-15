import { useState } from 'react'
import { LINKS, BUSINESS, TESTIMONIALS } from '../data/mockData'
import SectionHeader   from '../components/SectionHeader'
import TestimonialCard from '../components/TestimonialCard'
import Footer          from '../components/Footer'
import useScrollReveal from '../hooks/useScrollReveal'

export default function Contact() {
  const [form, setForm]           = useState({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  useScrollReveal([submitted])

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    // ✏️  Wire up a real form backend here (e.g. Formspree, EmailJS, Netlify Forms).
    // For now it just shows a success state.
    setSubmitted(true)
  }

  return (
    <>
      {/* Header */}
      <section className="max-w-5xl mx-auto px-6 pt-28 pb-4">
        <div className="reveal">
          <SectionHeader
            eyebrow="Get In Touch"
            title="We'd Love to <em class='text-deep-rose italic'>Hear</em> From You"
            subtitle="Whether it's a question, a special request, or your first order — we're here for you."
          />
        </div>
      </section>

      {/* Contact layout */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* ── Form ─────────────────────────────────────── */}
          <div className="reveal">
            {submitted ? (
              <div
                className="rounded-3xl p-10 text-center"
                style={{ background: 'linear-gradient(135deg, rgba(232,197,210,0.5), rgba(240,221,208,0.5))' }}
              >
                <div className="text-5xl mb-4">🌸</div>
                <h3 className="font-serif text-2xl font-medium text-text-dark mb-2">
                  Thank you, {form.name || 'lovely'}!
                </h3>
                <p className="text-text-mid text-sm font-light leading-relaxed opacity-85">
                  Your message has been received. We'll get back to you within a few hours.
                  For faster replies, feel free to message us on Messenger!
                </p>
                <button className="btn-primary mt-6" onClick={() => setSubmitted(false)}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {[
                  { name: 'name',    label: 'Your Name',       type: 'text',  placeholder: 'e.g. Maria Santos'    },
                  { name: 'email',   label: 'Email Address',   type: 'email', placeholder: 'your@email.com'        },
                  { name: 'phone',   label: 'Phone / WhatsApp',type: 'tel',   placeholder: '+63 912 345 6789'      },
                ].map(({ name, label, type, placeholder }) => (
                  <div key={name}>
                    <label className="block text-[0.7rem] uppercase tracking-[0.1em] text-text-mid mb-1.5 opacity-80">
                      {label}
                    </label>
                    <input
                      name={name}
                      type={type}
                      required={name !== 'phone'}
                      value={form[name]}
                      onChange={handleChange}
                      placeholder={placeholder}
                      className="form-input"
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-[0.7rem] uppercase tracking-[0.1em] text-text-mid mb-1.5 opacity-80">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your order or inquiry..."
                    className="form-input resize-y"
                  />
                </div>
                <button type="submit" className="btn-primary w-full rounded-2xl">
                  Send Message
                </button>
                {/* ✏️  Update LINKS.messenger in mockData.js */}
                <a
                  href={LINKS.messenger}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-messenger rounded-2xl"
                >
                  💬 Chat with Us on Messenger
                </a>
              </form>
            )}
          </div>

          {/* ── Contact Info ─────────────────────────────── */}
          <div className="space-y-4 reveal reveal-delay-2">
            {/* Info card */}
            <div
              className="rounded-3xl p-6"
              style={{ background: 'linear-gradient(135deg, rgba(232,197,210,0.55), rgba(240,221,208,0.55))' }}
            >
              <h3 className="font-serif text-2xl font-medium text-text-dark mb-0.5">
                {BUSINESS.name} 🌸
              </h3>
              <p className="text-xs text-text-mid font-light mb-4 opacity-80">
                Premium Floral Boutique
              </p>

              {/* ✏️  Update contact details in src/data/mockData.js → LINKS & BUSINESS */}
              {[
                { icon: '💬', label: 'Facebook Messenger', value: '@MysticBloomPH',   sub: 'Fastest response — usually within 1 hr', href: LINKS.messenger },
                { icon: '📸', label: 'Instagram',          value: '@mysticbloom.ph',  sub: null,                                      href: LINKS.instagram },
                { icon: '📱', label: 'WhatsApp',           value: LINKS.phone,        sub: null,                                      href: LINKS.whatsapp  },
                { icon: '🕐', label: 'Operating Hours',    value: BUSINESS.hours,     sub: BUSINESS.hoursSunday,                      href: null            },
              ].map(({ icon, label, value, sub, href }) => (
                <div
                  key={label}
                  className="flex items-start gap-3 py-3 border-b border-rose/20 last:border-0"
                >
                  <span className="text-xl mt-0.5">{icon}</span>
                  <div>
                    <p className="text-[0.68rem] uppercase tracking-[0.1em] text-text-light mb-0.5 opacity-75">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-text-dark hover:text-deep-rose transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm text-text-dark">{value}</p>
                    )}
                    {sub && <p className="text-xs text-text-light mt-0.5 opacity-75">{sub}</p>}
                  </div>
                </div>
              ))}
            </div>

            {/* Quote card */}
            <div className="glass-panel p-5">
              <p className="font-serif italic text-[1rem] text-text-dark leading-relaxed mb-3 opacity-85">
                "We're a small business that truly cares. Every inquiry gets our personal attention."
              </p>
              <p className="text-xs text-text-light opacity-70">— The {BUSINESS.name} Team</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews section */}
      <section
        className="py-20"
        style={{ background: 'linear-gradient(160deg, #e8d0d8 0%, #edddd5 50%, #e2d8d0 100%)' }}
      >
        <div className="max-w-5xl mx-auto px-6">
          <div className="reveal">
            <SectionHeader
              eyebrow="Kind Words"
              title="Reviews from Our <em class='text-deep-rose italic'>Customers</em>"
              centered
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {TESTIMONIALS.slice(3, 6).map((t, i) => (
              <div key={i} className={`reveal reveal-delay-${i + 1}`}>
                <TestimonialCard testimonial={t} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
