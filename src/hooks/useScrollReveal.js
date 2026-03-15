// hooks/useScrollReveal.js
// Attaches an IntersectionObserver that adds .visible to .reveal elements
// as they enter the viewport. Call inside each page component.

import { useEffect } from 'react'

export default function useScrollReveal(deps = []) {
  useEffect(() => {
    // Small delay so DOM has settled after navigation
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll(
        '.reveal:not(.visible), .reveal-left:not(.visible), .reveal-right:not(.visible)'
      )
      if (!elements.length) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible')
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.1 }
      )

      elements.forEach((el) => observer.observe(el))

      return () => observer.disconnect()
    }, 80)

    return () => clearTimeout(timer)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}
