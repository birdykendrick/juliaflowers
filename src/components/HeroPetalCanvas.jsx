// HeroPetalCanvas.jsx — Option C: falling SVG-style petal silhouettes
// Renders on a <canvas> that sits over the hero section.
// Petals are drawn as delicate outline ellipses/teardrops in rose & sage tones.

import { useEffect, useRef } from 'react'

export default function HeroPetalCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId
    let petals = []
    let lastSpawn = 0

    function resize() {
      const hero = canvas.parentElement
      canvas.width  = hero.offsetWidth
      canvas.height = hero.offsetHeight
    }

    function createPetal() {
      const shapes = ['ellipse-tall', 'ellipse-wide', 'teardrop']
      return {
        x:         Math.random() * canvas.width,
        y:         -30,
        size:      Math.random() * 9 + 5,
        speedY:    Math.random() * 0.55 + 0.28,
        speedX:    (Math.random() - 0.5) * 0.35,
        drift:     Math.random() * Math.PI * 2,
        driftSpeed:Math.random() * 0.011 + 0.005,
        opacity:   Math.random() * 0.32 + 0.14,
        rotation:  Math.random() * Math.PI * 2,
        rotSpeed:  (Math.random() - 0.5) * 0.014,
        shape:     shapes[Math.floor(Math.random() * shapes.length)],
        isRose:    Math.random() > 0.65,
      }
    }

    function drawPetal(p) {
      ctx.save()
      ctx.translate(p.x, p.y)
      ctx.rotate(p.rotation)
      ctx.globalAlpha = p.opacity

      if (p.isRose) {
        ctx.strokeStyle = 'rgba(184,92,122,0.9)'
        ctx.fillStyle   = 'rgba(217,160,180,0.22)'
      } else {
        ctx.strokeStyle = 'rgba(130,158,120,0.75)'
        ctx.fillStyle   = 'rgba(168,184,158,0.18)'
      }
      ctx.lineWidth = 0.75

      ctx.beginPath()
      if (p.shape === 'ellipse-tall') {
        ctx.ellipse(0, 0, p.size * 0.42, p.size, 0, 0, Math.PI * 2)
      } else if (p.shape === 'ellipse-wide') {
        ctx.ellipse(0, 0, p.size * 0.68, p.size * 0.48, 0, 0, Math.PI * 2)
      } else {
        // teardrop
        ctx.moveTo(0, -p.size)
        ctx.bezierCurveTo( p.size * 0.55, -p.size * 0.45,  p.size * 0.55,  p.size * 0.5, 0,  p.size * 0.78)
        ctx.bezierCurveTo(-p.size * 0.55,  p.size * 0.5,  -p.size * 0.55, -p.size * 0.45, 0, -p.size)
      }
      ctx.fill()
      ctx.stroke()
      ctx.restore()
    }

    function tick(ts) {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Spawn one new petal roughly every 1.1s
      if (ts - lastSpawn > 1100) {
        petals.push(createPetal())
        lastSpawn = ts
      }
      // Cap at 20 petals
      if (petals.length > 20) petals.shift()

      petals.forEach((p) => {
        p.y        += p.speedY
        p.drift    += p.driftSpeed
        p.x        += Math.sin(p.drift) * 0.65 + p.speedX
        p.rotation += p.rotSpeed
        drawPetal(p)
      })

      petals = petals.filter((p) => p.y < canvas.height + 50)
      animId = requestAnimationFrame(tick)
    }

    resize()
    window.addEventListener('resize', resize)
    animId = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-[1]"
      aria-hidden="true"
    />
  )
}
