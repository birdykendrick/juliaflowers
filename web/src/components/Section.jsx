import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Section({ id, children, className = "" }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setInView(true),
      { threshold: 0.18 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const variants = {
    hidden: reduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 },
    show: reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }
  };

  return (
    <section id={id} ref={ref} className={className}>
      <motion.div
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        variants={variants}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </section>
  );
}