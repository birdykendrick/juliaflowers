import { useState } from "react";
import Section from "./Section";
import { products } from "./data";
import Lightbox from "./Lightbox";

export default function Gallery() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);

  return (
    <Section id="gallery" className="border-t border-line bg-bg">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">Gallery</h2>
          <p className="mt-2 text-muted">Tap any bouquet to view details.</p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <button
              key={p.name}
              className="group text-left rounded-xl3 border border-line bg-card p-5 shadow-soft hover:-translate-y-0.5 hover:shadow-lg transition"
              onClick={() => {
                setActive(p);
                setOpen(true);
              }}
            >
              <div className="aspect-[4/3] rounded-xl2 bg-cream grid place-items-center text-muted">
                Photo
              </div>
              <div className="mt-4 flex items-start justify-between gap-3">
                <div>
                  <p className="font-medium group-hover:opacity-90">{p.name}</p>
                  <p className="mt-1 text-sm text-muted">{p.note}</p>
                </div>
                <p className="font-semibold">{p.price}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      <Lightbox open={open} onClose={() => setOpen(false)} item={active} />
    </Section>
  );
}