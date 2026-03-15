// HowItWorks.jsx — 4-step order flow used on Home and Delivery pages
const STEPS = [
  { num: '1', title: 'Browse or Build',  desc: 'Browse our gallery or use the bouquet builder to create something uniquely yours.' },
  { num: '2', title: 'Send Inquiry',     desc: "Message us on Messenger with your order details and preferred delivery date." },
  { num: '3', title: 'Confirm & Pay',    desc: "We'll confirm your order, finalise details, and arrange payment securely." },
  { num: '4', title: 'Delivered',        desc: 'Your gorgeous blooms arrive fresh, beautifully wrapped, and right on time.' },
]

export default function HowItWorks() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
      {STEPS.map((step, i) => (
        <div
          key={step.num}
          className={`text-center p-6 glass-panel hover:-translate-y-1 transition-transform duration-200 reveal reveal-delay-${i + 1}`}
        >
          <div className="w-11 h-11 rounded-full bg-[rgba(184,92,122,0.12)] flex items-center justify-center mx-auto mb-4 font-serif text-xl font-semibold text-deep-rose">
            {step.num}
          </div>
          <h4 className="font-medium text-sm text-text-dark mb-2">{step.title}</h4>
          <p className="text-xs text-text-light leading-relaxed font-light opacity-85">{step.desc}</p>
        </div>
      ))}
    </div>
  )
}
