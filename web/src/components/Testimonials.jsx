import Section from "./Section";
import { testimonials } from "./data";

export default function Testimonials() {
  return (
    <Section id="reviews" className="border-t border-line bg-bg">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl font-semibold tracking-tight">Happy customers</h2>
        <p className="mt-2 text-muted">A few lovely words from past orders.</p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-xl3 border border-line bg-card p-6 shadow-soft">
              <p className="text-sm text-muted">“{t.quote}”</p>
              <p className="mt-4 font-medium">— {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}