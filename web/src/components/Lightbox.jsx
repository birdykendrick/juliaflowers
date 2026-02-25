import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

export default function Lightbox({ open, onClose, item }) {
  const reduceMotion = useReducedMotion();

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[60] grid place-items-center bg-black/50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={onClose}
          aria-modal="true"
          role="dialog"
        >
          <motion.div
            className="w-full max-w-3xl overflow-hidden rounded-xl3 bg-card shadow-soft"
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 12, scale: 0.98 }}
            animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onMouseDown={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-line px-5 py-4">
              <div>
                <p className="text-sm text-muted">Bouquet</p>
                <p className="font-semibold">{item?.name}</p>
              </div>
              <button
                className="rounded-xl border border-line px-3 py-2 text-sm hover:bg-cream"
                onClick={onClose}
              >
                Close
              </button>
            </div>
            <div className="grid gap-0 md:grid-cols-2">
              <div className="aspect-[4/3] bg-cream grid place-items-center text-muted">
                {/* Swap this with <img src={item.image} ... /> when you have images */}
                Photo preview
              </div>
              <div className="p-6">
                <p className="text-lg font-semibold">{item?.name}</p>
                <p className="mt-2 text-muted">{item?.note}</p>
                <p className="mt-4 text-xl font-semibold">{item?.price}</p>
                {item?.tag ? (
                  <span className="mt-4 inline-flex rounded-full bg-ink px-3 py-1 text-xs text-white">
                    {item.tag}
                  </span>
                ) : null}
                <p className="mt-6 text-sm text-muted">
                  Tip: message us the bouquet name + preferred date to order.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}