import { motion, useReducedMotion } from "framer-motion";
import { brand } from "./data";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="mx-auto max-w-6xl px-4 py-14 md:py-20">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-3 py-1 text-xs text-muted">
            <span className="h-2 w-2 rounded-full bg-blush" />
            Handcrafted • Made to order
          </span>

          <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
            Pastel bouquets that feel like a love letter.
          </h1>

          <p className="mt-4 text-lg text-muted">
            {brand.tagline} Custom colours, careful wrapping, and delivery options.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#gallery"
              className="rounded-xl bg-ink px-5 py-3 text-sm font-medium text-white hover:opacity-90"
            >
              View bouquets
            </a>
            <a
              href="#order"
              className="rounded-xl border border-line px-5 py-3 text-sm font-medium hover:bg-cream"
            >
              Order now
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-4 text-sm text-muted">
            <span>✅ Gift wrapping</span>
            <span>✅ Custom note</span>
            <span>✅ Fast replies</span>
          </div>
        </div>

        <motion.div
          className="rounded-xl3 border border-line bg-gradient-to-br from-blush2 to-cream p-6 shadow-soft"
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="aspect-[4/3] w-full rounded-xl2 bg-card shadow-soft grid place-items-center text-muted">
            Replace with hero bouquet photo
          </div>

          <div className="mt-4 grid grid-cols-3 gap-3">
            {["Photo 1", "Photo 2", "Photo 3"].map((t) => (
              <div
                key={t}
                className="aspect-square rounded-xl2 bg-card shadow-soft grid place-items-center text-xs text-muted"
              >
                {t}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}