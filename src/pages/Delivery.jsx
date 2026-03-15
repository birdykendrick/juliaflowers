import { DELIVERY_INFO, LINKS } from '../data/mockData'
import SectionHeader   from '../components/SectionHeader'
import HowItWorks      from '../components/HowItWorks'
import Footer          from '../components/Footer'
import useScrollReveal from '../hooks/useScrollReveal'

export default function Delivery() {
  useScrollReveal([])

  return (
    <>
      <section className="max-w-5xl mx-auto px-6 pt-28 pb-4">
        <div className="reveal">
          <SectionHeader
            eyebrow="Ordering & Delivery"
            title="Everything You Need <em class='text-deep-rose italic'>To Know</em>"
            subtitle="We've made ordering as effortless and enjoyable as receiving beautiful flowers."
          />
        </div>
      </section>

      {/* Info cards */}
      {/* ✏️  Edit delivery details in src/data/mockData.js → DELIVERY_INFO */}
      <section className="max-w-5xl mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {DELIVERY_INFO.map((item, i) => (
            <div
              key={item.title}
              className={`glass-panel p-5 hover:-translate-y-1 transition-transform duration-200 reveal reveal-delay-${Math.min(i + 1, 5)}`}
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <h4 className="font-medium text-sm text-text-dark mb-1">{item.title}</h4>
              <p className="text-xs text-text-light leading-relaxed font-light opacity-85">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <div
          className="rounded-3xl p-8 md:p-12 reveal"
          style={{ background: 'linear-gradient(135deg, rgba(232,197,210,0.45), rgba(240,221,208,0.45))' }}
        >
          <p className="eyebrow mb-3">Step by Step</p>
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-text-dark mb-2">
            Your Simple <em className="text-deep-rose italic">4-Step</em> Order Flow
          </h2>
          <div className="w-14 h-px bg-rose/60 mb-2" />
          <HowItWorks />
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <div className="reveal">
          <h3 className="font-serif text-2xl font-medium text-text-dark mb-6">
            Frequently Asked <em className="text-deep-rose italic">Questions</em>
          </h3>
        </div>
        <div className="space-y-4">
          {[
            {
              q: 'How far in advance should I order?',
              // ✏️  Edit FAQ answers here
              a: 'For ready-made bouquets, same-day orders are accepted before 10:00 AM. For custom arrangements, please give us at least 24–48 hours. For weddings and events, we recommend reaching out at least 1–2 weeks ahead.',
            },
            {
              q: 'Can I include a personalized message?',
              a: "Absolutely! You can add a personalized handwritten note to any order. Use the bouquet builder to compose your message, or let us know when you message via Messenger.",
            },
            {
              q: 'What if I need delivery at a specific time?',
              a: "Just let us know your preferred delivery window when you send your order inquiry. We'll do our best to accommodate. For time-sensitive deliveries, we recommend ordering the evening before.",
            },
            {
              q: 'Do you offer subscriptions or recurring orders?',
              a: 'We can arrange recurring weekly or monthly bouquet deliveries for offices, homes, or gifting. Reach out via Messenger to discuss a custom plan.',
            },
          ].map(({ q, a }, i) => (
            <div key={q} className={`glass-panel p-5 reveal reveal-delay-${Math.min(i + 1, 5)}`}>
              <h4 className="font-medium text-sm text-text-dark mb-2">{q}</h4>
              <p className="text-xs text-text-light font-light leading-relaxed opacity-85">{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Messenger CTA */}
      <section className="max-w-5xl mx-auto px-6 pb-24 text-center reveal">
        <p className="text-text-mid text-sm mb-4 font-light opacity-80">Ready to order? Reach out now!</p>
        {/* ✏️  Update LINKS.messenger in mockData.js */}
        <a
          href={LINKS.messenger}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-messenger max-w-xs mx-auto rounded-full"
        >
          💬 Chat with Us on Messenger
        </a>
      </section>

      <Footer />
    </>
  )
}
