import Section from "./Section";
import { brand } from "./data";

export default function About() {
  return (
    <Section id="about" className="border-t border-line bg-cream/40">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="rounded-xl3 border border-line bg-card p-6 shadow-soft">
            <div className="aspect-[4/3] rounded-xl2 bg-blush2 grid place-items-center text-muted">
              Add “studio” photo
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold tracking-tight">About {brand.name}</h2>
            <p className="mt-3 text-muted">
              Write a short story here: why she started, her style (pastel romantic / modern minimal),
              and what customers can expect.
            </p>

            <div className="mt-6 grid gap-3">
              {[
                ["Made with care", "Fresh flowers, clean finishing, thoughtful details."],
                ["Custom-friendly", "Colours, budgets, and themes welcome."],
                ["Fast replies", "Message us and we’ll confirm availability quickly."]
              ].map(([t, d]) => (
                <div key={t} className="rounded-xl2 border border-line bg-card p-4">
                  <p className="font-medium">{t}</p>
                  <p className="mt-1 text-sm text-muted">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}