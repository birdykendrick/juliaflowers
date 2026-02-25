import Section from "./Section";
import { products } from "./data";

export default function Featured() {
  return (
    <Section className="border-t border-line bg-cream/40">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Featured bouquets</h2>
            <p className="mt-2 text-muted">Popular picks — pastel, airy, premium wrap.</p>
          </div>
          <a className="hidden text-sm font-medium underline underline-offset-4 md:block" href="#order">
            Want custom colours?
          </a>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.slice(0, 6).map((p) => (
            <div key={p.name} className="rounded-xl3 border border-line bg-card p-5 shadow-soft">
              <div className="aspect-[4/3] rounded-xl2 bg-blush2/70 grid place-items-center text-muted">
                Add photo
              </div>
              <div className="mt-4 flex items-start justify-between gap-3">
                <div>
                  <p className="font-medium">{p.name}</p>
                  <p className="mt-1 text-sm text-muted">{p.note}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold">{p.price}</p>
                  {p.tag ? (
                    <span className="mt-2 inline-flex rounded-full bg-ink px-2.5 py-1 text-xs text-white">
                      {p.tag}
                    </span>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}