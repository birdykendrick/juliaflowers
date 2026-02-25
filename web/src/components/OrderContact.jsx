import Section from "./Section";
import { brand, faqs } from "./data";

export default function OrderContact() {
  const waLink = `https://wa.me/${brand.whatsapp}`;
  const igLink = `https://instagram.com/${brand.instagram}`;

  return (
    <Section id="order" className="border-t border-line bg-cream/40">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl font-semibold tracking-tight">Order & contact</h2>
        <p className="mt-2 text-muted">
          Fastest: WhatsApp or Instagram DM. Include bouquet name, date, delivery/pickup, and budget if custom.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <a
            className="rounded-xl3 border border-line bg-card p-6 shadow-soft hover:bg-cream transition"
            href={waLink}
            target="_blank"
            rel="noreferrer"
          >
            <p className="font-semibold">WhatsApp</p>
            <p className="mt-2 text-sm text-muted">Tap to message</p>
            <p className="mt-4 text-sm font-medium underline underline-offset-4">{waLink}</p>
          </a>

          <a
            className="rounded-xl3 border border-line bg-card p-6 shadow-soft hover:bg-cream transition"
            href={igLink}
            target="_blank"
            rel="noreferrer"
          >
            <p className="font-semibold">Instagram</p>
            <p className="mt-2 text-sm text-muted">Gallery + DMs</p>
            <p className="mt-4 text-sm font-medium underline underline-offset-4">@{brand.instagram}</p>
          </a>

          <div className="rounded-xl3 border border-line bg-card p-6 shadow-soft">
            <p className="font-semibold">Details</p>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li>📍 {brand.location}</li>
              <li>🚚 {brand.delivery}</li>
              <li>💳 {brand.payment}</li>
              <li>⏱ Reply time: 1–3 hours</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 rounded-xl3 border border-line bg-card p-6 shadow-soft">
          <p className="font-semibold">How to order</p>
          <ol className="mt-3 list-decimal pl-5 text-sm text-muted space-y-2">
            <li>Pick a bouquet from Gallery (or describe your custom request).</li>
            <li>Send bouquet name + date + delivery/pickup details.</li>
            <li>We confirm availability and payment, then you’re set.</li>
          </ol>
        </div>

        <div className="mt-10 grid gap-3">
          {faqs.map((f) => (
            <details key={f.q} className="rounded-xl2 border border-line bg-card p-4">
              <summary className="cursor-pointer font-medium">{f.q}</summary>
              <p className="mt-2 text-sm text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}