import { useEffect, useRef } from 'react'

/**
 * Attaches an IntersectionObserver to the returned ref.
 * When the element enters the viewport, `.revealed` is added → CSS fade-up.
 */
export function useReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Respect prefers-reduced-motion at JS level too
    const motionOK = window.matchMedia('(prefers-reduced-motion: no-preference)').matches
    if (!motionOK) {
      el.classList.add('revealed')
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed')
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px', ...options },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return ref
}
