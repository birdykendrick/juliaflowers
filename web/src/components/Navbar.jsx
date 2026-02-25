import { useEffect, useState } from "react";
import { brand } from "./data";

const links = [
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "Order", href: "#order" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onEsc = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#" className="flex items-center gap-2">
          <span className="h-9 w-9 rounded-xl bg-blush shadow-soft" aria-hidden />
          <span className="font-semibold tracking-tight">{brand.name}</span>
        </a>

        <nav className="hidden items-center gap-7 text-sm md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-muted hover:text-ink">
              {l.label}
            </a>
          ))}
          <a
            href="#order"
            className="rounded-xl bg-ink px-4 py-2 text-sm font-medium text-white hover:opacity-90"
          >
            Order
          </a>
        </nav>

        <button
          className="md:hidden rounded-xl border border-line px-3 py-2 text-sm hover:bg-cream"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          Menu
        </button>
      </div>

      {open ? (
        <div id="mobile-menu" className="md:hidden border-t border-line bg-bg">
          <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-xl px-3 py-3 text-sm text-muted hover:bg-cream hover:text-ink"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#order"
              className="mt-1 rounded-xl bg-ink px-3 py-3 text-center text-sm font-medium text-white hover:opacity-90"
              onClick={() => setOpen(false)}
            >
              Order via WhatsApp
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}